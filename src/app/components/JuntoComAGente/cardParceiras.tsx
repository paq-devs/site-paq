import acate from './img/parceiras/acate.png';
import ambar from './img/parceiras/ambar.png';
import bewiki from './img/parceiras/bewiki.png';
import impacthub from './img/parceiras/impacthub.png';
import txm from './img/parceiras/txm.png';
import rdstation from './img/parceiras/rdstation.png';
import atre from './img/parceiras/atre.png';
import inaitec from './img/parceiras/inaitec.png';

import Image from 'next/image'

const imagesTop = [
    { src: acate, width: 191, height: 95 },
    { src: inaitec, width:124, height:119},
    { src: ambar, width: 117, height: 117 },
    { src: bewiki, width: 156, height: 36 }, 
    { src: impacthub, width: 102, height: 102 },
    { src: txm, width: 123, height: 60 },
    { src: rdstation, width: 188, height: 34 },
    { src: atre, width: 103, height: 94 },
  ];
  
export default function CardParceira(){
    return(
    <div className="bg-fundocinza rounded-[20px] py-4 ">
    <h2 className="titulocard">PARCEIRAS</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 items-center justify-items-center">
      {imagesTop.map((image, index) => (
        <div key={index} className="w-full">
          <Image
            src={image.src}
            alt={`Imagem ${index + 1}`}
            width={image.width}
            height={image.height}
          />
        </div>
      ))}
    </div>
    </div>
    )
}