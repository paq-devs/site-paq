import Image from "next/image"
import ButtonCard from './ButtonCard'

import './ComoFazerParte.css'

export default function ComoFazerParte(){
    return(
        <section className="flex flex-col items-center gap-7">
            <Image
            src="images/perguntas-frequentes.svg"
            width={100}
            height={300}
            alt="Ícone de verificação"
            />
            <h2 className="titulo"> como posso <br/><span className="font-bold">fazer parte?</span></h2>
            <p className="texto">Faça parte da nossa comunidade e ajude <br/>a construir um futuro melhor para todos.<br/>Descubra como você pode contribuir. </p>
            <ButtonCard />
        </section>
    )
}