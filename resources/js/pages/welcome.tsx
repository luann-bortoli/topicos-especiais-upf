import Header from "@/components/_components/header/Header";
import s from './welcome.module.css'
import { MoveUpRight, TrendingUp } from "lucide-react";
import Footer from "@/components/_components/footer/Footer";

export default function Welcome() {

    const featuredCardData = 
    [
        {
            title: "Produto",
            img: "",
        },
        {
            title: "Place",
            img: "",
        },
        {
            title: "Holder",
            img: "",
        },
    ]

    return (
        <>
            <Header />
            <div className={s.mainContainer}>
                <p className={s.featuredTitle}>Os mais escolhidos da semana</p>
                <div className={s.featuredGrid}>

                    {featuredCardData.map((card) => {
                        return(
                            <div className={s.featuredCard}>
                                <p className={s.title}>{card.title}</p>
                                <hr />
                                <div className={s.imgContainer}></div>
                                <hr />
                            <button>Ver produto <TrendingUp /></button>
                    </div>
                        )
                    })}

                </div>

                <hr />

                <p className={s.featuredTitle}>Categorias mais populares</p>
                <div className={s.featuredGrid}>

                    {featuredCardData.map((card) => {
                        return(
                            <div className={s.featuredCard}>
                                <p className={s.title}>{card.title}</p>
                                <hr />
                                <div className={s.imgContainer}></div>
                                <hr />
                            <button>Ver categoria<TrendingUp /></button>
                    </div>
                        )
                    })}

                </div>
            </div>
            <Footer />
        </>
    );
}
