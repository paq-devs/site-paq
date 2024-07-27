import Image from "next/image";

import betahub from './img/apoiadoras/betahub.png'
import mercadoLivre from  './img/apoiadoras/mercadolivre.png'
import cd2 from './img/apoiadoras/cd2.png'
import silvaSchutz from './img/apoiadoras/silvaschutz.png'
import h from './img/apoiadoras/h.png'
import aqtech from './img/apoiadoras/aqtech.png'
import weduka from  './img/apoiadoras/weduka.png'

import './JuntoComAGente.css'



export default function CardApoiadora(){
    const imagesTop  = [
        { src: betahub, width: 194, height: 63 },
        { src: mercadoLivre, width: 170, height: 43 },
        { src: cd2, width: 100, height:  49 }, // Dimensões personalizadas para cd2
        { src: silvaSchutz, width: 120, height: 88 },
      ];

      const imagesBottom = [
        { src: h, width: 90, height: 90 },
        { src: aqtech, width:  164, height:  60 },
        { src: weduka, width: 161, height: 32 },
      ];

      return (
    <div className="bg-fundocinza rounded-[20px] py-4 my-6">
      <h2 className="titulocard">APOIADORES</h2>
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
      <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-4 p-4 items-center justify-items-center">
        {imagesBottom.map((image, index) => (
          <div key={index} className="w-full md:w-auto">
            <Image
              src={image.src}
              alt={`Imagem ${index + 5}`}
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </div>
    </div>
    )
}