import { Head, Link, useForm } from '@inertiajs/react';
import styles from './create.module.css';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        post('/categories');
    }

    return (
        <>
            <Head title="Nova categoria" />

            <main className={styles.container}>
                <header className={styles.header}>
                    <div>
                        <h1>Nova categoria</h1>
                        <p>Cadastre uma nova categoria no sistema.</p>
                    </div>

                    <Link href="/categories" className={styles.backButton}>
                        Voltar
                    </Link>
                </header>

                <section className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2>Informações da categoria</h2>
                        <p>
                            Preencha os campos abaixo para cadastrar a categoria.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.field}>
                            <label htmlFor="name">Nome da categoria</label>

                            <input
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                                placeholder="Ex.: Doces"
                                maxLength={255}
                                required
                            />

                            {errors.name && (
                                <span className={styles.error}>
                                    {errors.name}
                                </span>
                            )}
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="description">Descrição</label>

                            <textarea
                                id="description"
                                value={data.description}
                                onChange={(e) =>
                                    setData('description', e.target.value)
                                }
                                placeholder="Descreva a finalidade desta categoria"
                                rows={5}
                                maxLength={10000}
                            />

                            {errors.description && (
                                <span className={styles.error}>
                                    {errors.description}
                                </span>
                            )}
                        </div>

                        <footer className={styles.formFooter}>
                            <Link
                                href="/categories"
                                className={styles.cancelButton}
                            >
                                Cancelar
                            </Link>

                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={processing}
                            >
                                {processing
                                    ? 'Cadastrando...'
                                    : 'Cadastrar categoria'}
                            </button>
                        </footer>
                    </form>
                </section>
            </main>
        </>
    );
}