import { CodeXml, LogOut, Store, User } from 'lucide-react'
import s from './Footer.module.css'
import { useState } from 'react'
import axios from 'axios'

export default function Footer(){

    const navItems = 
    [
        {
            label: "Dashboard",
            href: "/dashboard"
        },
        {
            label: "Produtos",
            href: "/products"
        },
        {
            label: "Categorias",
            href: "/categories"
        },
        {
            label: "Place",
            href: "#"
        },
        {
            label: "Holder",
            href: "#"
        }
    ]

    const [showUserDetails, setShowUserDetails] = useState<boolean>(false)

    const logout = () => {
        axios.post("http://localhost:8000/logout")
    }

    return(
        <>
            <div className={s.contentContainer}>
                <div className={s.contentWrapper}>
                    <div className={s.brandWrapper}>
                        <Store /> 
                    </div>

                    <nav className={s.navWrapper}>
                        <ul className={s.navList}>
                            {navItems.map((item) => {
                                return (
                                    <a 
                                        key={item.href}
                                        href={item.href}
                                        className={s.navItem}
                                        >
                                        <li >{item.label}</li>
                                    </a>
                                )
                            })}
                        </ul>
                    </nav>

                    <div className={s.actionsWrapper}>
                        <CodeXml />
                    </div>
                </div>
            </div>
        </>
    )
}