import Image from "next/image"
import bookSvg from "./imgs/book.svg"
import CardBase from "./CardBase/CardBase";


import cardImgOne from "./imgs/img_1.png"
import cardImgTwo from "./imgs/img_2.png"
import cardImgThree from "./imgs/img_3.jpeg"
import cardImgFour from "./imgs/img_4.png"

import styles from "./ProgramasEspacos.module.css";
import ProgramasEspacosImersao from "./ProgramasEspacosImersao";

export default function ProgramasEspacos() {
  return (
    <section id="programas-e-espacos" className={styles.programSpaces}>
      <div className={styles.programHeader}>
        <Image src={bookSvg} alt="Livro com óculos" id="bookIcon" />
        <h2>PROGRAMAS</h2>
        <h3>E ESPAÇOS</h3>
        <p>
          Nossa metodologia é a parte mais importante e é com ela que
          conseguimos colocar no mundo o impacto que acreditamos.
        </p>
      </div>

      <div className={styles.programCards}>
        <CardBase
          title="IMERSÃO"
          content="Primeiros passos para explorar as carreiras cultura do ecossistema de tecnologia,
          desenvolver habilidades e competências básicas - Porta de entrada para quem quer
          iniciar no PAQ!"
          imageSrc={cardImgOne}
          alt="Jovens no PAQ"
        >
          <ProgramasEspacosImersao />
        </CardBase>

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
