
import { CodeXml, Store } from 'lucide-react'
import { Link } from '@inertiajs/react'
import s from './Footer.module.css'

interface NavItem {
    label: string
    href: string
}

export default function Footer() {
    const navItems: NavItem[] = [
        {
            label: 'Dashboard',
            href: '/dashboard',
        },
        {
            label: 'Produtos',
            href: '/products',
        },
        {
            label: 'Categorias',
            href: '/categories',
        },
        {
            label: 'Place',
            href: '#',
        },
        {
            label: 'Holder',
            href: '#',
        },
    ]

    return (
        <footer className={s.contentContainer}>
            <div className={s.contentWrapper}>
                <Link href="/" className={s.brandWrapper}>
                    <Store />
                </Link>

                <nav className={s.navWrapper}>
                    <ul className={s.navList}>
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className={s.navItem}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={s.actionsWrapper}>
                    <CodeXml />
                </div>
            </div>
        </footer>
    )
}
