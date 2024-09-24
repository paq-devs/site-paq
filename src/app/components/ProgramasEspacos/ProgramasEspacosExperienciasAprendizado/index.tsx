"use client";
import styles from "./ProgramasEspacosExperienciasAprendizado.module.css";
import Image from "next/image";
import galeria01 from "./img/galeria-01.png";
import galeria02 from "./img/galeria-02.png";
import galeria03 from "./img/galeria-03.png";
import galeria04 from "./img/galeria-04.png";

export default function ProgramasEspacosExperienciasAprendizado() {
  return (
    <div className={styles.container}>
      <h2>experiências de aprendizagem</h2>
      <header>
        <div>
          <p>
            Acreditamos que <strong>o aprendizado vai muito além</strong> de ter
            acesso a “cursos e professores”, aprendemos pelas{" "}
            <strong>
              trocas com pessoas, espaços que passamos e culturas que
              conhecemos.
            </strong>{" "}
            Por isso, proporcionamos diferentes tipos de experiências de
            aprendizagem que ampliam a visão dos jovens em relação ao mundo tech
            e à vida real.
          </p>
        </div>
        <div>
          <p>
            O PAQ é uma <strong>comunidade de aprendizagem,</strong> então, para
            Para fortalecer o senso de pertencimento, engajamento e conexões
            dentro da comunidade, temos nossos{" "}
            <strong>rituais que marcam e trazem significado</strong>
            para cada etapa dos membros dentro da jornada de experiência.
          </p>
        </div>
      </header>

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
      <hr />

      <div className={styles.softSkills}>
        <div>
          <h3>
            Eventos de <u>Tecnologia</u>
          </h3>
          <p>
            Estamos{" "}
            <strong>ativamente presentes no ecossistema de tecnologia</strong>{" "}
            da Grande Florianópolis, marcando presença em grandes eventos como
            Startup Summit, Concarh, FIN, e outros.
          </p>
        </div>
        <div>
          <h3>
            Competições <u>empreendedoras</u>
          </h3>
          <p>
            Participamos de <strong>competições empreendedoras</strong> (Startup
            Weekend e Hackaton do Bem) e também organizamos o{" "}
            <strong>PAQATHON, nossa própria competição</strong> em parceria com
            a TXM.
          </p>
        </div>
        <div>
          <h3>
            Visitas em <u>empresas tech</u>
          </h3>
          <p>
            <strong>Promovemos visitas</strong> a empresas{" "}
            <strong>referência em tecnologia</strong>, como Softplan e Zoho,
            apresentando cultura, carreiras e despertando o desejo de se
            trabalhar nas gigantes da tech.
          </p>
        </div>
        <div>
          <h3>
            Rodas de <u>conversa/oficina</u>
          </h3>
          <p>
            Conectamos os jovens com{" "}
            <strong>pessoas abertas a compartilhar</strong> seus conhecimentos e
            nas mais <strong>diversas áreas</strong> (Carreira, Mercado,
            Diversidade e Inclusão e Desenvolvimento socioemocional)
          </p>
        </div>
      </div>

      <hr />
    </div>
  );
}
