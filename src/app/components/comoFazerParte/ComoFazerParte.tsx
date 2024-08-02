import Image from "next/image"
import CardVenhaFazerParte from './CardVenhaFazerParte'

import './ComoFazerParte.css'

export default function ComoFazerParte(){
    return(
        <section className="flex flex-col items-center gap-7 md:bg-[#D9D9D9] lg:bg-branco py-14 mt-48">
            <h2 className="titulo mt-32"> OUTRAS FORMAS <br/><span className="font-bold">DE FAZER PARTE</span></h2>
            <CardVenhaFazerParte />
            <div className="mt-14 w-64 md:w-[454px]">
                <p className="font-poppins text-[16px] text-[#00171F] leading-5" >O PAQ é construído diariamente por um time incrível  <strong>totalmente dedicado para a missão:</strong> O PAQ é construído diariamente por um time incrível  <strong>totalmente dedicado para a missão:</strong> O PAQ é construído diariamente por um time incrível  <strong>totalmente dedicado para a missão:</strong>.</p>
            </div>
        </section>
    )
}