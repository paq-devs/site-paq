import Image from "next/image"
import CardVenhaFazerParte from './CardVenhaFazerParte'

import './ComoFazerParte.css'

export default function ComoFazerParte(){
    return(
        <section className="flex flex-col items-center gap-7 md:bg-[#D9D9D9] lg:bg-branco py-14 mt-48">
            <h2 className="titulo mt-32"> OUTRAS FORMAS <br/><span className="font-bold">DE FAZER PARTE</span></h2>
            <CardVenhaFazerParte />
        </section>
    )
}