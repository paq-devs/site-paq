import Image from "next/image";
import style from './Cards.module.css'

import cerutti from '../img/cerutti.png'
import thaysa from '../img/thaysa.png'
import welington from '../img/welington.png'
import layse from '../img/layse.png'
import euler from '../img/euler.png'
import nathalia from '../img/bow.png'
import hugo from '../img/hugo.png'
import ariana from '../img/ariana.png'
import waltao from '../img/waltao.png'
import dafne from '../img/dafne.png'
import solange from '../img/solange.png'
import kleber from '../img/kleber.png'
import felipe from '../img/felipe.png'
import mariasilveira from '../img/mariaSilveira.png'
import miguel from '../img/miguel.png'
import sahra from '../img/sahra.png'

const CardsMentoresNomes = [
    { src: cerutti, nome: 'Thiago Cerutti', cargo: 'PROGRAMAÇÃO' },
    { src: thaysa, nome: 'Thaysa Lacerda', cargo: 'PROGRAMAÇÃO' },
    { src: welington, nome: 'Wellington Rodrigues', cargo: 'PROGRAMAÇÃO' },
    { src: layse, nome: 'Layse Gabrielly', cargo: 'PROGRAMAÇÃO' },
    { src: euler, nome: 'Euler Filho', cargo: 'PROGRAMAÇÃO' },
    { src: nathalia, nome: ' Nathália Cechetti ', cargo: 'DESIGN' },
    { src: hugo, nome: 'Hugo Raniere', cargo: 'DESIGN' },
    { src: ariana, nome: 'Ariana Regina', cargo: 'DESIGN' },
    { src: waltao, nome: 'Waltão', cargo: 'DESIGN' },
    { src: dafne, nome: 'Dafne Miranda', cargo: 'DESIGN' },
    { src: solange, nome: 'Solange Gamboa', cargo: 'PROGRAMAÇÃO' },
    { src: kleber, nome: 'Kleber Furtado', cargo: 'PROGRAMAÇÃO' },
    { src: felipe, nome: 'Felipe Flores', cargo: 'PROGRAMAÇÃO' },
    { src: mariasilveira, nome: 'maria silveira', cargo: 'DESIGN' },
    { src: miguel, nome: 'Miguel Matos', cargo: 'DESIGN' },
    { src: sahra, nome: 'Sahra Di Bernardi', cargo: 'PROGRAMAÇÃO' },
];

export default function CardEducacionalMentores(){
    return(
        <div className="hidden lg:block">
            <CardEducacional/>
        </div>
    )
}



const CardEducacional = () => {
    return (
        <div className="flex flex-wrap p-4 items-center justify-center gap-3">
          {CardsMentoresNomes.map((image, index) => (
            <div key={index} className="mx-6 bg-fundocinza rounded-[27px]">
              <Image
                src={image.src}
                alt={`Imagem ${index + 1}`}
                width={298}
                height={229}
                className="aspect-auto rounded-[27px]"
              />
              <h2 className={style.CardsNossoTimeNome}>{image.nome}</h2>
              <p className={style.CardsNossoTimeCargo}>{image.cargo}</p>
            </div>
          ))}
        </div>
    )}

