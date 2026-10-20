import { Head, Link } from '@inertiajs/react';
import styles from './show.module.css';

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
    category: Category | null;
    created_at: string;
    updated_at: string;
}

interface Props {
    product: Product;
}

export default function Show({ product }: Props) {
    const formattedPrice = Number(product.price).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    const formattedDate = new Date(product.created_at).toLocaleDateString(
        'pt-BR',
        {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        },
    );

    return (
        <>
            <Head title={product.name} />

            <main className={styles.container}>
                <header className={styles.header}>
                    <div>
                        <h1>Detalhes do produto</h1>
                        <p>Visualize as informações do produto cadastrado.</p>
                    </div>

                    <Link href="/products" className={styles.backButton}>
                        Voltar
                    </Link>
                </header>

                <section className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div className={styles.titleGroup}>
                            <span className={styles.label}>Produto #{product.id}</span>
                            <h2>{product.name}</h2>
                            <p>{product.category?.name ?? 'Sem categoria'}</p>
                        </div>

                        <Link
                            href={`/products/${product.id}/edit`}
                            className={styles.editButton}
                        >
                            Editar produto
                        </Link>
                    </div>

                    <div className={styles.content}>
                        <section className={styles.descriptionSection}>
                            <h3>Descrição</h3>
                            <p className={styles.description}>
                                {product.description || 'Nenhuma descrição informada.'}
                            </p>
                        </section>

                        <div className={styles.infoGrid}>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Preço</span>
                                <strong className={styles.price}>
                                    {formattedPrice}
                                </strong>
                            </div>

                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Estoque</span>

                                <span
                                    className={
                                        product.stock > 0
                                            ? styles.stock
                                            : styles.outOfStock
                                    }
                                >
                                    {product.stock} unidades
                                </span>
                            </div>

                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Categoria</span>
                                <strong>
                                    {product.category?.name ?? 'Sem categoria'}
                                </strong>
                            </div>

                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Cadastrado em</span>
                                <strong>{formattedDate}</strong>
                            </div>
                        </div>
                    </div>

                    <footer className={styles.footer}>
                        <span>
                            Última atualização:{' '}
                            {new Date(product.updated_at).toLocaleDateString('pt-BR')}
                        </span>

                        <Link href="/products" className={styles.backLink}>
                            Voltar para produtos
                        </Link>
                    </footer>
                </section>
            </main>
        </>
    );
}