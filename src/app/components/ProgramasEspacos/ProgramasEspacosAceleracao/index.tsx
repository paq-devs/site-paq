"use client";
import styles from "./ProgramasEspacosAceleracao.module.css";
import Image from "next/image";
import galeria01 from "./img/galeria-01.png";
import galeria02 from "./img/galeria-02.png";
import galeria03 from "./img/galeria-03.png";
import galeria04 from "./img/galeria-04.png";


export default function ProgramasEspacosAceleracao() {
  return (
    <div className={styles.container}>
      <h2>Aceleração</h2>
      <header>
        <div>
          <p>
            O objetivo deste  programa é qualificar tecnicamente os jovens para entrada no mercado tech. 
          </p>
          <p>
          Desenvolvemos uma metodologia gamificada e baseada em projetos que coloca o educando como protagonista do seu aprendizado, dando acesso à cursos, mentorias e acompanhamento para que desenvolvam suas competências em produtos digitais, com  foco nas áreas de design (UX/UI) e programação (Frontend/backend)! 
          </p>
        </div>
      </header>

      <hr />

      <div className={styles.softSkills}>
        <div>
          <h3>
            Acesso a <br/><u>conteúdos</u>
          </h3>
          <p>
            Fornecemos acesso a plataformas de cursos online e/ou conectamos à oportunidades de formação externas de forma 100% gratuita. 
          </p>
        </div>
        <div>
          <h3>
            Programa de<br/> mentoria <u>mentoria</u>
          </h3>
          <p>
            Todos os jovens da aceleração possuem encontros semanais com profissionais experientes em suas áreas que apoiam suas jornadas de aprendizagem.
          </p>
        </div>
        <div>
          <h3>
            Estudos e<br/> <u>acompanhamento</u>
          </h3>
          <p>
            Planejamento, organização, objetivos e metas são o foco da nossa metodologia de acompanhamento baseada em SCRUM.
          </p>
        </div>
        <div>
          <h3>
            Projetos e <br/><u>insígnias</u>
          </h3>
          <p>
            A validação de conhecimentos é baseada em projetos e reconhecidas através de um sistema de insígnias que são símbolos de reconhecimento interno. 
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
