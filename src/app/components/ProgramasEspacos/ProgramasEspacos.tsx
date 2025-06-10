import Image from "next/image";
import CardBase from "./CardBase/CardBase";
import styles from "./ProgramasEspacos.module.css";
import ProgramasEspacosImersao from "./ProgramasEspacosImersao";
//import CentrosDeAprendizado2 from "./CentrosDeAprendizado";
import ProgramasEspacosAceleracao from "./ProgramasEspacosAceleracao";
//import ProgramasEspacosExperienciasAprendizado from "./ProgramasEspacosExperienciasAprendizado";
import CardBaseMobile from "./CardBaseMobile";

import bookSvg from "./imgs/book.svg";
import cardImg1 from "./imgs/img_1.png";
import cardImg2 from "./imgs/img_2.png";
import cardImg3 from "./imgs/img_3.jpeg";
import cardImg4 from "./imgs/img_4.png";

import aceleracaoMobile from "./imgs/mobile/aceleracao.png";
//import centrosAprendizagemMobile from "./imgs/mobile/centros-aprendizagem.png";
import experienciasAprendizadoMobile from "./imgs/mobile/experiencias-aprendizagem.png";
import imersaoMobile from "./imgs/mobile/imersao.png";
import ProgramasEspacosImersaoMobile from "./ProgramasEspacosImersao/ImersaoMobile";
import ProgramasEspacosAceleracaoMobile from "./ProgramasEspacosAceleracao/AceleracaoMobile";
//import ProgramasEspacosExperienciasAprendizadoMobile from "./ProgramasEspacosExperienciasAprendizado/ExperienciasAprendizadoMobile";
//import ProgramasEspacosCentrosAprendizadoMobile from "./CentrosDeAprendizado/CentrosAprendizadoMobile";

export default function ProgramasEspacos() {
  const conteudo = {
    ["Imersão"]:
      "Primeiros passos para explorar as carreiras cultura do ecossistema de tecnologia, desenvolver habilidades e competências básicas - Porta de entrada para quem quer iniciar no PAQ!",
    ["Aceleração"]:
      "O objetivo é qualificar tecnicamente os jovens para entrada no mercado tech. Desenvolvemos uma metodologia gameficada e baseada em projetos na qual o jovem é o protagonista da jornada.",
    ["Experiências de Aprendizagem"]:
      "Diferentes tipos de experiências de aprendizagem que ampliam a visão dos jovens em relação ao mundo tech e à vida real.",
    ["Centros de Aprendizagem"]:
      "Nosso movimento é de trazer as quebradas pra dentro dos centros de inovação e tecnologia, empoderando e mostrando que esses espaços podem e devem ser ocupados! ",
  };
  return (
    <section id="programas-e-espacos" className={styles.programSpaces}>
      <div className={styles.programHeader}>
        <div className={styles.programHeaderIcon}>
          <Image src={bookSvg} alt="Livro com óculos" id="bookIcon" />
          <div>
            <h2>PROGRAMAS</h2>
            <h3>E Experiências</h3>
          </div>
        </div>
        <p>
          Nossa metodologia é a parte mais importante e é com ela que
          conseguimos colocar no mundo o impacto que acreditamos.
        </p>
      </div>

      <div className={styles.mobileContainer}>
        <CardBaseMobile
          conteudoCurto={conteudo["Imersão"]}
          imagem={imersaoMobile}
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

      <div className={styles.programCards} data-anima="centro">
        <CardBase
          title="IMERSÃO"
          content="Primeiros passos para explorar as carreiras cultura do ecossistema de tecnologia,
          desenvolver habilidades e competências básicas - Porta de entrada para quem quer
          iniciar no PAQ!"
          publico="Jovens de 16 a 21 anos"
          duracao="8 semanas"
          formato="Presencial nas unidades Pedra Branca (Palhoça) e SC-401 (Florianópolis)"
          inscricoes="Trimestralmente (Site e instagram)"
          preRequisitos="Conhecimentos básicos de informática"
          imageSrc={cardImg1}
          alt="Jovens no PAQ"
        >
     
          <ProgramasEspacosImersao />
        </CardBase>

        <CardBase
          title="ACELERAÇÃO"
          content="O objetivo é qualificar tecnicamente os jovens para entrada no mercado tech. Desenvolvemos uma metodologia gameficada e baseada em projetos na qual o jovem é o protagonista da jornada."
          publico="Jovens de 16 a 21 anos"
          duracao="18 meses"
          formato="Híbrido"
          inscricoes="Trimestralmente (internas)"
          preRequisitos="Ter feito o programa de imersão"
          imageSrc={cardImg2}
          alt="Jovens no PAQ"
        >
          <ProgramasEspacosAceleracao />
        </CardBase>

        
      </div>
    </section>
  );
}
