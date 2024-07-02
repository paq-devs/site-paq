import { link } from "fs"
import Image from "next/image"

export default async function PapelPAQ(){
    const response = await fetch('http://localhost:5000/cards')
    const data = await response.json()

    return(
        <section>
            <p>icone</p>
            <h3>Papel do PAQ na missão</h3>
            <p>O PAQ fortalece a jornada de quem tá com a gente através desses pilares:</p>

        
            <ul className="papelpaq-lista">
                {data.map((iten:any) => <li className="papel-lista-cards" key={iten.id}>
                    <Image 
                    src={iten.icone}
                    width={0}
                    height={0}
                    alt=""
                    />
                    <h3>{iten.titulo}</h3>
                    <p>{iten.texto}</p>
                </li>)}
            </ul>
        </section>
    )
}