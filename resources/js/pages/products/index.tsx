import { Head, Link } from '@inertiajs/react';
import styles from './index.module.css';

interface Category {
    id: number;
    name: string;
}

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: Category;
}

interface Props {
    products: Product[];
}

export default function Index({ products }: Props) {
    return (
        <>
            <Head title="Produtos" />

            <main className={styles.container}>
                <header className={styles.header}>
                    <div>
                        <h1>Produtos</h1>
                        <p>Gerencie os produtos cadastrados.</p>
                    </div>

                    <Link
                        href="/products/create"
                        className={styles.createButton}
                    >
                        Novo produto
                    </Link>
                </header>

                <section className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2>Todos os produtos</h2>
                        <span className={styles.count}>
                            {products.length}{' '}
                            {products.length === 1 ? 'produto' : 'produtos'}
                        </span>
                    </div>

                    {products.length > 0 ? (
                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Produto</th>
                                        <th>Categoria</th>
                                        <th>Preço</th>
                                        <th>Estoque</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <td>
                                                <div className={styles.productInfo}>
                                                    <span className={styles.productName}>
                                                        {product.name}
                                                    </span>
                                                    <span className={styles.description}>
                                                        {product.description}
                                                    </span>
                                                </div>
                                            </td>

                                            <td>
                                                {product.category?.name ?? 'Sem categoria'}
                                            </td>

                                            <td className={styles.price}>
                                                {Number(product.price).toLocaleString(
                                                    'pt-BR',
                                                    {
                                                        style: 'currency',
                                                        currency: 'BRL',
                                                    },
                                                )}
                                            </td>

                                            <td>
                                                <span
                                                    className={
                                                        product.stock > 0
                                                            ? styles.stock
                                                            : styles.outOfStock
                                                    }
                                                >
                                                    {product.stock}
                                                </span>
                                            </td>

                                            <td>
                                                <div className={styles.actions}>
                                                    <Link
                                                        href={`/products/${product.id}`}
                                                        className={styles.viewButton}
                                                    >
                                                        Ver
                                                    </Link>

                                                    <Link
                                                        href={`/products/${product.id}/edit`}
                                                        className={styles.editButton}
                                                    >
                                                        Editar
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <h3>Nenhum produto cadastrado</h3>
                            <p>
                                Cadastre seu primeiro produto para começar.
                            </p>

                            <Link
                                href="/products/create"
                                className={styles.createButton}
                            >
                                Cadastrar produto
                            </Link>
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}