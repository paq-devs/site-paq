import Image from "next/image"
import jeff from '../img/Jeff.png'
import tedd from '../img/Tedd.png'
import yohana from '../img/yohana.png'
import cadu from '../img/Cadu.png'
import bow from '../img/BOW.png'

import React from "react";
import Slider from "react-slick";

const cards = [
    { src: jeff, nome: 'JEFF LIMA', funcao: 'LÍDER DE CAPTAÇÃO'},
    { src: tedd,nome: 'JEFF LIMA',  funcao: 'LÍDER DE CAPTAÇÃO'},
    { src: yohana, nome: 'JEFF LIMA',funcao: 'LÍDER DE CAPTAÇÃO'},
    { src: cadu, nome: 'CADU',funcao: 'LÍDER DE APRENDIZAGEM'},
    { src: bow, nome: 'CADU',funcao: 'LÍDER DE APRENDIZAGEM'},
    { src: jeff, nome: 'JEFF LIMA', funcao: 'LÍDER DE CAPTAÇÃO'},
    { src: jeff, nome: 'JEFF LIMA', funcao: 'LÍDER DE CAPTAÇÃO'},
    { src: jeff, nome: 'JEFF LIMA', funcao: 'LÍDER DE CAPTAÇÃO'},
    { src: jeff, nome: 'JEFF LIMA', funcao: 'LÍDER DE CAPTAÇÃO'},
    { src: jeff, nome: 'JEFF LIMA', funcao: 'LÍDER DE CAPTAÇÃO'},
  ];


function CardsTime() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="flex items-center justify-center">
        {cards.map((card, index) => (
          <div key={index} className="mx-4 py-0 bg-fundocinza rounded-[27px]">
            <Image
              src={card.src}
              alt={`Imagem ${index + 1}`}
              width={292}
              height={292}
              className="m-0 rounded-[27px]"
            />
            <h2 className="mt-4">{card.nome}</h2>
            <h3 className="mb-3">{card.funcao}</h3>
          </div>
        ))}
    </div>
      </Slider>
    </div>
  );
}

export default CardsTime;

