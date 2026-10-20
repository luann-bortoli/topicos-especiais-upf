
import { LogOut, Store, User } from 'lucide-react'
import { Link } from '@inertiajs/react'
import { useState } from 'react'
import axios from 'axios'
import s from './Header.module.css'

interface NavItem {
    label: string
    href: string
}

export default function Header() {
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

    const [showUserDetails, setShowUserDetails] = useState<boolean>(false)

    const logout = async () => {
        await axios.post('/logout')
        window.location.href = '/login'
    }

    return (
        <header className={s.contentContainer}>
            <div className={s.contentWrapper}>
                <Link href="/" className={s.brandWrapper}>
                    <Store />
                    <p>Mercadinho</p>
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
                    <div
                        onMouseEnter={() => setShowUserDetails(true)}
                        onMouseLeave={() => setShowUserDetails(false)}
                        className={s.userPicWrapper}
                    >
                        <User />

                        {showUserDetails && (
                            <button
                                type="button"
                                onClick={logout}
                                className={s.logoutButton}
                            >
                                <LogOut />
                                Sair
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}
