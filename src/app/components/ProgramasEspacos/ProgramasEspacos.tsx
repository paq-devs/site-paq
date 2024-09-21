import Image from "next/image"
import bookSvg from "./imgs/book.svg"
import CardBase from "./CardBase/CardBase";


import cardImgOne from "./imgs/img_1.png"
import cardImgTwo from "./imgs/img_2.png"
import cardImgThree from "./imgs/img_3.jpeg"
import cardImgFour from "./imgs/img_4.png"

import "./ProgramasEspacos.css"


export default function ProgramasEspacos() {
  return (
    <section id="programas-e-espacos" className="program-spaces">
      <div className="program-header">
        <Image src={bookSvg} alt="Livro com óculos" id="bookIcon" />
        <h2 className="mt-32" id="programs-title">
          <span className="font-bold">PROGRAMAS</span> <br /> E ESPAÇOS
        </h2>
        <p id="program-header-text">
          Nossa metodologia é a parte mais importante e é com ela que
          conseguimos colocar no mundo o impacto que acreditamos.
        </p>
      </div>

      <div className="program-cards">
        <CardBase
          title="IMERSÃO"
          content="Primeiros passos para explorar as carreiras cultura do ecossistema de tecnologia,
          desenvolver habilidades e competências básicas - Porta de entrada para quem quer
          iniciar no PAQ!"
          imageSrc={cardImgOne}
          alt="Jovens no PAQ"
        />

        <CardBase
          title="ACELERAÇÃO"
          content="Primeiros passos para explorar as carreiras cultura do ecossistema de tecnologia,
          desenvolver habilidades e competências básicas - Porta de entrada para quem quer
          iniciar no PAQ!"
          imageSrc={cardImgTwo}
          alt="Jovens no PAQ"
        />

        <CardBase
          title="EXPERIÊNCIAS DE APRENDIZADO"
          content="Primeiros passos para explorar as carreiras cultura do ecossistema de tecnologia,
          desenvolver habilidades e competências básicas - Porta de entrada para quem quer
          iniciar no PAQ!"
          imageSrc={cardImgThree}
          alt="Jovens no PAQ"
        />

        <CardBase
          title="CENTROS DE APRENDIZADO"
          content="Primeiros passos para explorar as carreiras cultura do ecossistema de tecnologia,
          desenvolver habilidades e competências básicas - Porta de entrada para quem quer
          iniciar no PAQ!"
          imageSrc={cardImgFour}
          alt="Sala com computadores"
        />
      </div>
    </section>
  );
}
