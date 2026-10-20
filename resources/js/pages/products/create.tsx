import { Head, Link, useForm } from '@inertiajs/react';
import styles from './create.module.css';

interface Category {
    id: number;
    name: string;
}

interface Props {
    categories: Category[];
}

export default function Create({ categories }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        category_id: '',
        name: '',
        description: '',
        price: '',
        stock: '',
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        post('/products');
    }

    return (
        <>
            <Head title="Novo produto" />

            <main className={styles.container}>
                <header className={styles.header}>
                    <div>
                        <h1>Novo produto</h1>
                        <p>Cadastre um novo produto no sistema.</p>
                    </div>

                    <Link href="/products" className={styles.backButton}>
                        Voltar
                    </Link>
                </header>

                <section className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2>Informações do produto</h2>
                        <p>Preencha os campos abaixo para cadastrar o produto.</p>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.field}>
                            <label htmlFor="name">Nome do produto</label>

                            <input
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder="Ex.: Brownie de chocolate"
                                maxLength={255}
                                required
                            />

                            {errors.name && (
                                <span className={styles.error}>{errors.name}</span>
                            )}
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="category_id">Categoria</label>

                            <select
                                id="category_id"
                                value={data.category_id}
                                onChange={(e) =>
                                    setData('category_id', e.target.value)
                                }
                                required
                            >
                                <option value="">Selecione uma categoria</option>

                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>

                            {errors.category_id && (
                                <span className={styles.error}>
                                    {errors.category_id}
                                </span>
                            )}

                            {categories.length === 0 && (
                                <span className={styles.hint}>
                                    Nenhuma categoria cadastrada. Cadastre uma
                                    categoria antes de criar um produto.
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
                                placeholder="Descreva as características do produto"
                                rows={5}
                                maxLength={10000}
                                required
                            />

                            {errors.description && (
                                <span className={styles.error}>
                                    {errors.description}
                                </span>
                            )}
                        </div>

                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label htmlFor="price">Preço (R$)</label>

                                <input
                                    id="price"
                                    type="number"
                                    value={data.price}
                                    onChange={(e) =>
                                        setData('price', e.target.value)
                                    }
                                    placeholder="0,00"
                                    min="0"
                                    step="0.01"
                                    required
                                />

                                {errors.price && (
                                    <span className={styles.error}>
                                        {errors.price}
                                    </span>
                                )}
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="stock">Estoque</label>

                                <input
                                    id="stock"
                                    type="number"
                                    value={data.stock}
                                    onChange={(e) =>
                                        setData('stock', e.target.value)
                                    }
                                    placeholder="0"
                                    min="0"
                                    step="1"
                                    required
                                />

                                {errors.stock && (
                                    <span className={styles.error}>
                                        {errors.stock}
                                    </span>
                                )}
                            </div>
                        </div>

                        <footer className={styles.formFooter}>
                            <Link
                                href="/products"
                                className={styles.cancelButton}
                            >
                                Cancelar
                            </Link>

                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={processing || categories.length === 0}
                            >
                                {processing ? 'Cadastrando...' : 'Cadastrar produto'}
                            </button>
                        </footer>
                    </form>
                </section>
            </main>
        </>
    );
}