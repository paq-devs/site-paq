import Image from "next/image"
import ferramenta from './img/Ferramenta.png'

import './NossoTime.css'
import NossoTimeCarrosel from "./NossoTimeCarrosel"

export default function NossoTime(){
    return(
        <div>
            <div className="flex flex-col items-center gap-7">
                <Image src={ferramenta} alt="" width={74} height={73}/>
                <h2 className="NossoTimeTitulo"><span className="font-bold">nosso time:</span><br/> 
                    frentes do PAQ</h2>
                <p>O PAQ é construído diariamente por um time incrível<br/> <span className="font-bold">totalmente dedicado para a missão:</span></p>
            </div>
            <NossoTimeCarrosel/>
        </div>
    )
}