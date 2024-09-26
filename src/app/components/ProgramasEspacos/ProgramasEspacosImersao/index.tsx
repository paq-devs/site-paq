"use client";
import styles from "./ProgramasEspacosImersao.module.css";
import Image from "next/image";
import galeria01 from "./img/galeria-01.png";
import galeria02 from "./img/galeria-02.png";
import galeria03 from "./img/galeria-03.png";
import galeria04 from "./img/galeria-04.png";

export default function ProgramasEspacosImersao() {
  return (
    <div className={styles.container}>
      <h2>Imersão</h2>
      <header>
        <div>
          <p>
            Primeiros passos para explorar as carreiras cultura do ecossistema
            de tecnologia, desenvolver habilidades e competências básicas -
            <strong>Porta de entrada</strong> para quem quer iniciar no PAQ!
          </p>
          <p>
            <strong>Conteúdo:</strong> Expanda a visão sobre mercado tech
            Conheça as principais carreiras para se seguir na tech e troque
            ideia com profissionais incríveis de diversas áreas.
          </p>
        </div>
        <ul>
          <li>
            <strong>Informações Importantes: </strong>
          </li>
          <li>
            <strong>Público:</strong> Jovens de 16 a 21 anos{" "}
          </li>
          <li>
            <strong>Duração:</strong> 8 semanas
          </li>
          <li>
            <strong>Formato:</strong> Presencial nas unidades Pedra Branca
            (Palhoça) e SC-401 (Florianópolis)
          </li>
          <li>
            <strong>Inscrições:</strong> trimestralmente (Site e instagram)
          </li>
          <li>
            <strong>Pré-requisitos:</strong> Conhecimentos básicos de
            informática
          </li>
        </ul>
      </header>

      <hr />

      <div className={styles.softSkills}>
        <div>
          <h3>
            Expanda a visão <u>sobre tecnologia</u>
          </h3>
          <p>
            Conheça as <strong>principais carreiras</strong> para se seguir na
            tech e <strong>troque ideia</strong> com profissionais de diversas
            áreas.
          </p>
        </div>
        <div>
          <h3>
            Entenda suas <u>potências</u>
          </h3>
          <p>
            Para trabalhar na tech não é só conhecimento técnico, é preciso das
            tais “habilidades comportamentais”!{" "}
            <strong>Explore e desenvolva</strong> suas forças e pontos de
            melhoria.
          </p>
        </div>
        <div>
          <h3>
            Aprenda de forma <u>colaborativa</u>
          </h3>
          <p>
            Aprenda as principais ferramentas de{" "}
            <strong>trabalho colaborativo</strong> para se jogar nesse mundão de
            trampos remotos e aprenda a <strong>aprender</strong> em comunidade.
          </p>
        </div>
        <div>
          <h3>
            Seja inovador e <u>impacte o mundo</u>
          </h3>
          <p>
            <strong>Desenvolva um projeto</strong> de empreendedorismo social
            utilizando a tecnologia como ferramenta para{" "}
            <strong>resolver problemas reais</strong> do mundo.
          </p>
        </div>
      </div>

      <hr />

      <div className={styles.galeria}>
        <div>
          <Image src={galeria01} alt="Jovens no PAQ" />
          <Image src={galeria02} alt="Jovens no PAQ" />
        </div>
        <div>
          <Image src={galeria03} alt="Jovens no PAQ" />
          <Image src={galeria04} alt="Jovens no PAQ" />
        </div>
      </div>
    </div>
  );
}
