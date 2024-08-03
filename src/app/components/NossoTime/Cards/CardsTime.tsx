import Image from "next/image";
import style from './Cards.module.css'

import yohana from '../img/yohana.png'
import jeff from '../img/jeff.png'
import ted from '../img/ted.png'
import cadu from '../img/cadu.png'
import fernando from '../img/fernando.png'
import bow from '../img/bow.png'
import marilia from '../img/marilia.png'
import pompeu from '../img/pompeu.png'
import igor from '../img/igor.png'
import evanz from '../img/evanz.png'

const CardsTimeNomes = [
    { src: jeff, nome: 'jeff lima', cargo: 'líder de captação'},
    { src: yohana, nome: 'yohana', cargo: 'líder de comunidade'},
    { src: ted, nome: 'pedro tedaldi', cargo: 'líder de operações'},
    { src: cadu, nome: 'cadu', cargo: 'líder de aprendizagem'},
    { src: fernando, nome: 'Fernando', cargo: 'estrategista de marketing'},
    { src: bow, nome: 'bow', cargo: 'designer e audiovisual'},
    { src: marilia, nome: 'marilia', cargo: 'mediadora de comunidade'},
    { src: pompeu, nome: 'pompeu', cargo: 'mediador de comunidade'},
    { src: igor, nome: 'igor', cargo: 'mediador de comunidade'},
    { src: evanz, nome: 'evanz', cargo: 'voluntário em inovação'},
  ];

export default function CardsTime(){
    return(
        <div className="hidden lg:block">
            <CardEducacional/>
        </div>
    )
}



const CardEducacional = () => {
    return (
        <div className="flex flex-wrap p-4 items-center justify-center gap-3">
          {CardsTimeNomes.map((image, index) => (
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