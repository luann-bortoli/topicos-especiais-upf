
import { Head, Link, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';
import styles from './edit.module.css';
import { confirmDelete } from '@/lib/alerts';

interface Category {
    id: number;
    name: string;
}

interface Product {
    id: number;
    category_id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
}

interface Props {
    product: Product;
    categories: Category[];
}

export default function Edit({ product, categories }: Props) {
    const {
        data,
        setData,
        put,
        delete: destroy,
        processing,
        errors,
    } = useForm({
        category_id: String(product.category_id ?? ''),
        name: product.name,
        description: product.description,
        price: String(product.price),
        stock: String(product.stock),
    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        put(`/products/${product.id}`);
    }

    async function handleDelete() {
    const confirmed = await confirmDelete(
        `o produto "${product.name}"`,
    );

    if (!confirmed) return;

    destroy(`/categories/${product.id}`);
}

    return (
        <>
            <Head title={`Editar ${product.name}`} />

            <main className={styles.container}>
                <header className={styles.header}>
                    <div>
                        <h1>Editar produto</h1>
                        <p>
                            Atualize as informações do produto cadastrado.
                        </p>
                    </div>

                    <Link
                        href={`/products/${product.id}`}
                        className={styles.backButton}
                    >
                        Voltar
                    </Link>
                </header>

                <section className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div>
                            <h2>Informações do produto</h2>
                            <p>
                                Editando o produto #{product.id}: {product.name}
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.field}>
                            <label htmlFor="name">Nome do produto</label>

                            <input
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                                placeholder="Ex.: Brownie de chocolate"
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
                            <label htmlFor="category_id">Categoria</label>

                            <select
                                id="category_id"
                                value={data.category_id}
                                onChange={(e) =>
                                    setData('category_id', e.target.value)
                                }
                                required
                            >
                                <option value="">
                                    Selecione uma categoria
                                </option>

                                {categories.map((category) => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
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
                                    categoria antes de atualizar o produto.
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
                            <button
                                type="button"
                                className={styles.deleteButton}
                                onClick={handleDelete}
                                disabled={processing}
                            >
                                {processing
                                    ? 'Processando...'
                                    : 'Excluir produto'}
                            </button>

                            <div className={styles.formActions}>
                                <Link
                                    href={`/products/${product.id}`}
                                    className={styles.cancelButton}
                                >
                                    Cancelar
                                </Link>

                                <button
                                    type="submit"
                                    className={styles.submitButton}
                                    disabled={
                                        processing || categories.length === 0
                                    }
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
