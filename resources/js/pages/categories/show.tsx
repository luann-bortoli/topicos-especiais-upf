import { Head, Link } from '@inertiajs/react';
import styles from './show.module.css';

interface Category {
    id: number;
    name: string;
    description: string | null;
    created_at: string;
    updated_at: string;
}

interface Props {
    category: Category;
}

export default function Show({ category }: Props) {
    const formattedDate = new Date(category.created_at).toLocaleDateString(
        'pt-BR',
        {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        },
    );

    return (
        <>
            <Head title={category.name} />

            <main className={styles.container}>
                <header className={styles.header}>
                    <div>
                        <h1>Detalhes da categoria</h1>
                        <p>Visualize as informações da categoria cadastrada.</p>
                    </div>

                    <Link href="/categories" className={styles.backButton}>
                        Voltar
                    </Link>
                </header>

                <section className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div className={styles.titleGroup}>
                            <span className={styles.label}>
                                Categoria #{category.id}
                            </span>

                            <h2>{category.name}</h2>

                            <p>Categoria cadastrada no sistema</p>
                        </div>

                        <Link
                            href={`/categories/${category.id}/edit`}
                            className={styles.editButton}
                        >
                            Editar categoria
                        </Link>
                    </div>

                    <div className={styles.content}>
                        <section className={styles.descriptionSection}>
                            <h3>Descrição</h3>

                            <p className={styles.description}>
                                {category.description ||
                                    'Nenhuma descrição informada.'}
                            </p>
                        </section>

                        <div className={styles.infoGrid}>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>
                                    Nome da categoria
                                </span>

                                <strong>{category.name}</strong>
                            </div>

                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>
                                    Cadastrada em
                                </span>

                                <strong>{formattedDate}</strong>
                            </div>
                        </div>
                    </div>

                    <footer className={styles.footer}>
                        <span>
                            Última atualização:{' '}
                            {new Date(category.updated_at).toLocaleDateString(
                                'pt-BR',
                            )}
                        </span>

                        <Link href="/categories" className={styles.backLink}>
                            Voltar para categorias
                        </Link>
                    </footer>
                </section>
            </main>
        </>
    );
}