import Image from "next/image"
import CardVenhaFazerParte from './CardVenhaFazerParte'
import icon from "./img/Vector.svg"

import style from'./ComoFazerParte.module.css';

export default function ComoFazerParte() {
    return (
        <section className={style.comofazerParte}>
                <div className={style.icon}><Image width={91.2} height={83.477} src={icon} alt="" /></div>
                <h2 className={style.title}> OUTRAS FORMAS <br /><span className="font-bold">DE FAZER PARTE</span></h2>
            <CardVenhaFazerParte />
        </section>
    )
}