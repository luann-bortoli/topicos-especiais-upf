
import { Head, Link } from '@inertiajs/react';
import {
    ArrowUpRight,
    Package,
    Tags,
    TrendingUp,
} from 'lucide-react';

import Header from '@/components/_components/header/Header';
import Footer from '@/components/_components/footer/Footer';
import s from './welcome.module.css';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category?: {
        id: number;
        name: string;
    } | null;
}

interface Category {
    id: number;
    name: string;
    description?: string | null;
    products_count?: number;
}

interface Props {
    products?: Product[];
    categories?: Category[];
}

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

export default function Welcome({
    products = [],
    categories = [],
}: Props) {
    const featuredProducts = products.slice(0, 3);
    const popularCategories = categories.slice(0, 3);

    return (
        <>
            <Head title="Início" />

            <Header />

            <main className={s.mainContainer}>
                <section className={s.section}>
                    <div className={s.sectionHeader}>
                        <div>
                            <span className={s.eyebrow}>
                                Nossa seleção
                            </span>

                            <h1 className={s.featuredTitle}>
                                Os mais escolhidos da semana
                            </h1>

                            <p className={s.sectionDescription}>
                                Descubra os produtos disponíveis em nosso catálogo.
                            </p>
                        </div>

                        <Link
                            href="/products"
                            className={s.viewAll}
                        >
                            Ver todos
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>

                    {featuredProducts.length > 0 ? (
                        <div className={s.featuredGrid}>
                            {featuredProducts.map((product) => (
                                <article
                                    key={product.id}
                                    className={s.featuredCard}
                                >
                                    <div className={s.cardTop}>
                                        <span className={s.cardLabel}>
                                            Produto
                                        </span>

                                        <span className={s.cardIcon}>
                                            <Package
                                                size={20}
                                                strokeWidth={1.7}
                                            />
                                        </span>
                                    </div>

                                    <div className={s.imgContainer}>
                                        <Package
                                            className={s.productIllustration}
                                            size={64}
                                            strokeWidth={1}
                                        />

                                        <span className={s.imageCaption}>
                                            Nosso catálogo
                                        </span>
                                    </div>

                                    <div className={s.cardContent}>
                                        {product.category && (
                                            <span className={s.categoryLabel}>
                                                {product.category.name}
                                            </span>
                                        )}

                                        <h2 className={s.title}>
                                            {product.name}
                                        </h2>

                                        <p className={s.cardDescription}>
                                            {product.description}
                                        </p>

                                        <p className={s.price}>
                                            {currencyFormatter.format(
                                                Number(product.price),
                                            )}
                                        </p>
                                    </div>

                                    <div className={s.cardFooter}>
                                        <Link
                                            href={`/products/${product.id}`}
                                            className={s.cardButton}
                                        >
                                            Ver produto
                                            <TrendingUp size={17} />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className={s.emptyState}>
                            <Package size={30} strokeWidth={1.5} />

                            <h2>Nenhum produto disponível</h2>

                            <p>
                                Os produtos cadastrados aparecerão aqui.
                            </p>
                        </div>
                    )}
                </section>

                <hr className={s.divider} />

                <section className={s.section}>
                    <div className={s.sectionHeader}>
                        <div>
                            <span className={s.eyebrow}>
                                Explore
                            </span>

                            <h2 className={s.featuredTitle}>
                                Categorias populares
                            </h2>

                            <p className={s.sectionDescription}>
                                Encontre produtos organizados por categoria.
                            </p>
                        </div>

                        <Link
                            href="/categories"
                            className={s.viewAll}
                        >
                            Ver todas
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>

                    {popularCategories.length > 0 ? (
                        <div className={s.featuredGrid}>
                            {popularCategories.map((category) => (
                                <article
                                    key={category.id}
                                    className={s.featuredCard}
                                >
                                    <div className={s.cardTop}>
                                        <span className={s.cardLabel}>
                                            Categoria
                                        </span>

                                        <span className={s.cardIcon}>
                                            <Tags
                                                size={20}
                                                strokeWidth={1.7}
                                            />
                                        </span>
                                    </div>

                                    <div className={s.imgContainer}>
                                        <Tags
                                            className={s.categoryIllustration}
                                            size={64}
                                            strokeWidth={1}
                                        />

                                        <span className={s.imageCaption}>
                                            Explore a categoria
                                        </span>
                                    </div>

                                    <div className={s.cardContent}>
                                        <h2 className={s.title}>
                                            {category.name}
                                        </h2>

                                        <p className={s.cardDescription}>
                                            {category.description ||
                                                'Explore os produtos disponíveis nesta categoria.'}
                                        </p>

                                        {category.products_count !== undefined && (
                                            <span className={s.productCount}>
                                                {category.products_count}{' '}
                                                {category.products_count === 1
                                                    ? 'produto'
                                                    : 'produtos'}
                                            </span>
                                        )}
                                    </div>

                                    <div className={s.cardFooter}>
                                        <Link
                                            href={`/categories/${category.id}`}
                                            className={s.cardButton}
                                        >
                                            Ver categoria
                                            <TrendingUp size={17} />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className={s.emptyState}>
                            <Tags size={30} strokeWidth={1.5} />

                            <h2>Nenhuma categoria disponível</h2>

                            <p>
                                As categorias cadastradas aparecerão aqui.
                            </p>
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </>
    );
}
