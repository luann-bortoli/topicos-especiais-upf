import { Head, Link, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';
import styles from './edit.module.css';
import { confirmDelete } from '@/lib/alerts';

interface Category {
    id: number;
    name: string;
    description: string;
}

interface Props {
    category: Category;
}

export default function Edit({ category }: Props) {
    const {
        data,
        setData,
        put,
        delete: destroy,
        processing,
        errors,
    } = useForm({
        name: category.name,
        description: category.description ?? '',
    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        put(`/categories/${category.id}`);
    }


async function handleDelete() {
    const confirmed = await confirmDelete(
        `a categoria "${category.name}"`,
    );

    if (!confirmed) return;

    destroy(`/categories/${category.id}`);
}

    return (
        <>
            <Head title={`Editar ${category.name}`} />

            <main className={styles.container}>
                <header className={styles.header}>
                    <div>
                        <h1>Editar categoria</h1>
                        <p>
                            Atualize as informações da categoria cadastrada.
                        </p>
                    </div>

                    <Link
                        href={`/categories/${category.id}`}
                        className={styles.backButton}
                    >
                        Voltar
                    </Link>
                </header>

                <section className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div>
                            <h2>Informações da categoria</h2>
                            <p>
                                Editando a categoria #{category.id}:{' '}
                                {category.name}
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.field}>
                            <label htmlFor="name">
                                Nome da categoria
                            </label>

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
                            <label htmlFor="description">
                                Descrição
                            </label>

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
                            <button
                                type="button"
                                className={styles.deleteButton}
                                onClick={handleDelete}
                                disabled={processing}
                            >
                                {processing
                                    ? 'Processando...'
                                    : 'Excluir categoria'}
                            </button>

                            <div className={styles.formActions}>
                                <Link
                                    href={`/categories/${category.id}`}
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
                                        ? 'Salvando...'
                                        : 'Salvar alterações'}
                                </button>
                            </div>
                        </footer>
                    </form>
                </section>
            </main>
        </>
    );
}