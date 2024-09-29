import Image from "next/image";
import CardBase from "./CardBase/CardBase";
import styles from "./ProgramasEspacos.module.css";
import ProgramasEspacosImersao from "./ProgramasEspacosImersao";
import CentrosDeAprendizado2 from "./CentrosDeAprendizado";
import ProgramasEspacosAceleracao from "./ProgramasEspacosAceleracao";
import ProgramasEspacosExperienciasAprendizado from "./ProgramasEspacosExperienciasAprendizado";
import CardBaseMobile from "./CardBaseMobile";

import bookSvg from "./imgs/book.svg";
import cardImg1 from "./imgs/img_1.png";
import cardImg2 from "./imgs/img_2.png";
import cardImg3 from "./imgs/img_3.jpeg";
import cardImg4 from "./imgs/img_4.png";

import aceleracaoMobile from "./imgs/mobile/aceleracao.png";
import centrosAprendizagemMobile from "./imgs/mobile/centros-aprendizagem.png";
import experienciasAprendizadoMobile from "./imgs/mobile/experiencias-aprendizagem.png";
import imersaoMobile from "./imgs/mobile/imersao.png";
import ProgramasEspacosImersaoMobile from "./ProgramasEspacosImersao/ImersaoMobile";
import ProgramasEspacosAceleracaoMobile from "./ProgramasEspacosAceleracao/AceleracaoMobile";

export default function ProgramasEspacos() {
  const conteudo = {
    ["Imersão"]:
      "Primeiros passos para explorar as carreiras cultura do ecossistema de tecnologia, desenvolver habilidades e competências básicas - Porta de entrada para quem quer iniciar no PAQ!",
    ["Aceleração"]:
      "O objetivo é qualificar tecnicamente os jovens para entrada no mercado tech. Desenvolvemos uma metodologia gameficada e baseada em projetos na qual o jovem é o protagonista da jornada.",
  };
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

      <div className={styles.mobileContainer}>
        <CardBaseMobile
          conteudoCurto={conteudo["Imersão"]}
          imagem={aceleracaoMobile}
          titulo="Imersão"
        >
          <ProgramasEspacosImersaoMobile />
        </CardBaseMobile>

        <CardBaseMobile
          conteudoCurto={conteudo["Aceleração"]}
          imagem={aceleracaoMobile}
          titulo="Aceleração"
        >
          <ProgramasEspacosAceleracaoMobile />
        </CardBaseMobile>
      </div>

      <div className={styles.programCards}>
        <CardBase
          title="IMERSÃO"
          content="Primeiros passos para explorar as carreiras cultura do ecossistema de tecnologia,
          desenvolver habilidades e competências básicas - Porta de entrada para quem quer
          iniciar no PAQ!"
          imageSrc={cardImg1}
          alt="Jovens no PAQ"
        >
          <ProgramasEspacosImersao />
        </CardBase>

        <CardBase
          title="ACELERAÇÃO"
          content="O objetivo é qualificar tecnicamente os jovens para entrada no mercado tech. Desenvolvemos uma metodologia gameficada e baseada em projetos na qual o jovem é o protagonista da jornada."
          imageSrc={cardImg2}
          alt="Jovens no PAQ"
        >
          <ProgramasEspacosAceleracao />
        </CardBase>

        <CardBase
          title="EXPERIÊNCIAS DE APRENDIZAGEM"
          content="Primeiros passos para explorar as carreiras cultura do ecossistema de tecnologia,
          desenvolver habilidades e competências básicas - Porta de entrada para quem quer
          iniciar no PAQ!"
          imageSrc={cardImg3}
          alt="Jovens no PAQ"
        >
          <ProgramasEspacosExperienciasAprendizado />
        </CardBase>

        <CardBase
          title="CENTROS DE APRENDIZAGEM"
          content="Nosso movimento é de trazer as quebradas pra dentro dos centros de inovação e tecnologia, empoderando e mostrando que esses espaços podem e devem ser ocupados!"
          imageSrc={cardImg4}
          alt="Sala com computadores"
        >
          <CentrosDeAprendizado2 />
        </CardBase>
      </div>
    </section>
  );
}
