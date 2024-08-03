import Image from "next/image"
import ferramenta from './img/Ferramenta.svg'
import style from "./NossoTime.module.css"
import NossoTimeCarrosel from "./NossoTimeCarrosel"

export default function NossoTime(){
    return(
        <section className=" hidden lg:flex flex-col items-center" >
            <div className="flex flex-col items-center gap-6">
                <Image src={ferramenta} width={74} height={74} alt=""/>
                <h2 className={style.NossoTimeTitulo}><span className="font-bold">nosso time:</span> linha de frente</h2>
                <p className={style.NossoTimeParagrafo}>O PAQ é construído diariamente por um time incrível  totalmente dedicado para a missão:</p>
            </div>
            <NossoTimeCarrosel/>
        </section>
    )
}