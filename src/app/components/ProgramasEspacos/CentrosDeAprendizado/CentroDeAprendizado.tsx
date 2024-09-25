"use client"
import Image from "next/image";
import img1 from "./img/EspacoPAQ.png"
import img2 from "./img/AquarioPB.png"
import img3 from "./img/CopaPB.png"
import img4 from "./img/Espaco1PAQ401.png"
import img5 from "./img/Espaco2PAQ401.png"
import img6 from "./img/Copa401.png"

import style from "./CentroDeApendizado.module.css"

interface ProgramasEspacosImersaoProps {
    isOpen: boolean;
}


export default function CentrosDeAprendizado({ isOpen }: ProgramasEspacosImersaoProps) {
    if (!isOpen) return null
    return (
        <section className={style.sectionCentroDeApendizado}>
            <article className={style.textsTopo}>
                <div className={style.tituloPrincipal}>
                    <h2></h2>
                </div>
                <div className={style.paragrafofoTopo}>
                    <p>Nosso movimento é de <strong> trazer as quebradas pra dentro dos centros de inovação e tecnologia</strong>, empoderando e mostrando que esses espaços podem e devem ser ocupados!</p>
                    <p>Para que isso aconteça precisamos garantir espaços com toda a estrutura necessária para que os jovens possam se desenvolver com qualidade e imersos nos mesmos ambientes que empresas inovadoras.</p>
                </div>
            </article>
            <div className={style.mobile}>
                <figure className={style.containerImages}>
                    <Image alt="" src={""} quality={100} className={`${style.imgs} ${style.img1}`} />
                    <Image alt="" src={""} className={`${style.imgs} ${style.img2}`} />
                    <Image alt="" src={""} className={`${style.imgs} ${style.img3}`} />
                </figure>
                <div className={style.unidades}>
                    <p className={style.textMobile}>Pedra Branca</p>
                    <p className={style.paragrafos}>Nosso primeiro e maior CEA está localizado no bairro <strong> Pedra Branca, Palhoça</strong></p>
                </div>
            </div>
            <div className={style.mobile}>
                <figure className={style.containerImages}>
                    <Image alt="" src={""} className={`${style.imgs} ${style.img4}`} />
                    <Image alt="" src={""} className={`${style.imgs} ${style.img5}`} />
                    <Image alt="" src={""} className={`${style.imgs} ${style.img6}`} />
                </figure>
                <div className={style.unidades}>
                    <p className={style.textMobile}>SC-401</p>
                    <p className={style.paragrafoFinal}>Também estamos situados em Florianópolis, com um CEA localizado na <strong> Rodovia SC 401,  em Florianópolis</strong>  - próximo ao Passeio Primavera.</p>
                </div>
            </div>
        </section>
    )
}