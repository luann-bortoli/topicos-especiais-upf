
import { Head, Link } from '@inertiajs/react';
import { ArrowRight, Package, Tags } from 'lucide-react';
import { dashboard } from '@/routes';
import styles from './dashboard.module.css';

const sections = [
    {
        title: 'Produtos',
        description:
            'Gerencie seu catálogo, atualize informações, preços e controle o estoque dos produtos.',
        href: '/products',
        action: 'Acessar produtos',
        icon: Package,
        identifier: 'products',
    },
    {
        title: 'Categorias',
        description:
            'Organize seus produtos em categorias para facilitar a classificação e o gerenciamento.',
        href: '/categories',
        action: 'Acessar categorias',
        icon: Tags,
        identifier: 'categories',
    },
];

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />

            <main className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.heading}>
                        <span className={styles.eyebrow}>
                            Painel de controle
                        </span>

                        <h1>Dashboard</h1>

                        <p>
                            Acesse e gerencie os principais recursos do sistema.
                        </p>
                    </div>
                </header>

                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <div>
                            <h2>Gerenciamento</h2>
                            <p>
                                Selecione uma área para continuar.
                            </p>
                        </div>
                    </div>

                    <div className={styles.grid}>
                        {sections.map((section) => {
                            const Icon = section.icon;

                            return (
                                <Link
                                    key={section.identifier}
                                    href={section.href}
                                    className={styles.card}
                                >
                                    <div className={styles.cardHeader}>
                                        <div
                                            className={`${styles.iconWrapper} ${
                                                styles[section.identifier]
                                            }`}
                                        >
                                            <Icon size={24} strokeWidth={1.8} />
                                        </div>

                                        <ArrowRight
                                            className={styles.cardArrow}
                                            size={20}
                                        />
                                    </div>

                                    <div className={styles.cardContent}>
                                        <h3>{section.title}</h3>

                                        <p>{section.description}</p>
                                    </div>

                                    <div className={styles.cardFooter}>
                                        <span>{section.action}</span>

                                        <ArrowRight size={16} />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>

                <section className={styles.welcome}>
                    <div className={styles.welcomeIcon}>
                        <Package size={22} strokeWidth={1.8} />
                    </div>

                    <div>
                        <h2>Centralize seu gerenciamento</h2>
                        <p>
                            Utilize as áreas disponíveis para manter os produtos
                            e as categorias organizados em um único lugar.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
