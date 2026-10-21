import { Head, Link } from '@inertiajs/react';
import styles from './index.module.css';

interface Category {
    id: number;
    name: string;
    description: string | null;
}

interface Props {
    categories: Category[];
}

export default function Index({ categories }: Props) {
    return (
        <>
            <Head title="Categorias" />

            <main className={styles.container}>
                <header className={styles.header}>
                    <div>
                        <h1>Categorias</h1>
                        <p>Gerencie as categorias cadastradas.</p>
                    </div>

                    <Link
                        href="/categories/create"
                        className={styles.createButton}
                    >
                        Nova categoria
                    </Link>
                </header>

                <section className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2>Todas as categorias</h2>

                        <span className={styles.count}>
                            {categories.length}{' '}
                            {categories.length === 1
                                ? 'categoria'
                                : 'categorias'}
                        </span>
                    </div>

                    {categories.length > 0 ? (
                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Categoria</th>
                                        <th>Descrição</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {categories.map((category) => (
                                        <tr key={category.id}>
                                            <td>
                                                <div className={styles.categoryInfo}>
                                                    <span className={styles.categoryName}>
                                                        {category.name}
                                                    </span>
                                                    <span className={styles.categoryId}>
                                                        ID: {category.id}
                                                    </span>
                                                </div>
                                            </td>

                                            <td>
                                                <span className={styles.description}>
                                                    {category.description || 'Sem descrição'}
                                                </span>
                                            </td>

                                            <td>
                                                <div className={styles.actions}>
                                                    <Link
                                                        href={`/categories/${category.id}`}
                                                        className={styles.viewButton}
                                                    >
                                                        Ver
                                                    </Link>

                                                    <Link
                                                        href={`/categories/${category.id}/edit`}
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
                            <h3>Nenhuma categoria cadastrada</h3>

                            <p>
                                Cadastre sua primeira categoria para começar.
                            </p>

                            <Link
                                href="/categories/create"
                                className={styles.createButton}
                            >
                                Cadastrar categoria
                            </Link>
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}