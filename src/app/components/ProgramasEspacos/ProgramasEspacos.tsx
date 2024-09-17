import Image from "next/image"
import bookSvg from "./imgs/book.svg"
import AccordionCard from "./accordionCard/AccordionCard"
import MobileCard from "./MobileCard";

import cardImgOne from "./imgs/img_1.png";
import cardImgTwo from "./imgs/img_2.png";
import cardImgThree from "./imgs/img_3.jpeg";
import cardImgFour from "./imgs/img_4.png";

import styles from "./ProgramasEspacos.module.css";
import CardImersao from "./CardImersao";

export default function ProgramasEspacos() {
  return (
    <section className={styles.programSpaces}>
      <div className={styles.programHeader}>
        <Image src={bookSvg} alt="Livro com óculos" />
        <div className={styles.contanierTituloPagina}>
          <span className={styles.tituloProgramas}>PROGRAMAS</span>
          <span className={styles.tituloEspacos}>E ESPAÇOS</span>
        </div>
        <p>
          Nossa metodologia é a parte mais importante e é com ela que
          conseguimos colocar no mundo o impacto que acreditamos.
        </p>
      </div>
      <div className={styles.mobileVersion}>
        <CardImersao />
      </div>
      <div className={styles.desktopVersion}>
        <div className={styles.programCards}>
          <AccordionCard
            title="IMERSÃO"
            content="Primeiros passos para explorar as carreiras cultura do ecossistema de tecnologia,
          desenvolver habilidades e competências básicas - Porta de entrada para quem quer
          iniciar no PAQ!"
            imageSrc={cardImgOne}
            alt="Jovens no PAQ"
          />

          <AccordionCard
            title="ACELERAÇÃO"
            content="Primeiros passos para explorar as carreiras cultura do ecossistema de tecnologia,
          desenvolver habilidades e competências básicas - Porta de entrada para quem quer
          iniciar no PAQ!"
            imageSrc={cardImgTwo}
            alt="Jovens no PAQ"
          />

          <AccordionCard
            title="EXPERIÊNCIAS DE APRENDIZADO"
            content="Primeiros passos para explorar as carreiras cultura do ecossistema de tecnologia,
          desenvolver habilidades e competências básicas - Porta de entrada para quem quer
          iniciar no PAQ!"
            imageSrc={cardImgThree}
            alt="Jovens no PAQ"
          />

          <AccordionCard
            title="CENTROS DE APRENDIZADO"
            content="Primeiros passos para explorar as carreiras cultura do ecossistema de tecnologia,
          desenvolver habilidades e competências básicas - Porta de entrada para quem quer
          iniciar no PAQ!"
            imageSrc={cardImgFour}
            alt="Sala com computadores"
          />
        </div>
      </div>
    </section>
  );
}
