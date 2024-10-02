import Image from "next/image";
import styles from "./AceleracaoMobile.module.css";
import acessoConteudo from "./img/acesso-conteudo.png";
import estudoAcompanhamento from "./img/estudo-acompanhamento.png";
import programaMentoria from "./img/programa-mentoria.png";
import projetosInsignias from "./img/projetos-insignias.png";

const conteudo = [
  {
    titulo: (
      <span>
        Acesso a <u>conteúdos</u>
      </span>
    ),
    descricao: (
      <span>
        Fornecemos <strong>acesso</strong> a plataformas de cursos online e/ou{" "}
        <strong>conectamos</strong> à oportunidades de formação externas de
        forma 100% gratuita.
      </span>
    ),
    imagem: acessoConteudo,
  },
  {
    titulo: (
      <span>
        programa de <u>mentoria</u>
      </span>
    ),
    descricao: (
      <span>
        Todos os jovens da aceleração possuem{" "}
        <strong>encontros semanais</strong> com
        <strong>profissionais experientes</strong> em suas áreas que apoiam suas
        jornadas de aprendizagem.
      </span>
    ),
    imagem: programaMentoria,
  },
  {
    titulo: (
      <span>
        Estudos e <u>acompanhamento</u>
      </span>
    ),
    descricao: (
      <span>
        <strong>Planejamento, organização, objetivos e metas</strong> são o foco
        da nossa metodologia de acompanhamento baseada em SCRUM.
      </span>
    ),
    imagem: estudoAcompanhamento,
  },
  {
    titulo: (
      <span>
        Projetos e <u>insígnias</u>
      </span>
    ),
    descricao: (
      <span>
        A <strong>validação de conhecimentos</strong> da aceleração é baseada em
        projetos e gamificada através de um{" "}
        <strong>sistema de insígnias</strong>. As insígnias são símbolos de
        reconhecimento e certificações internas do PAQ.
      </span>
    ),
    imagem: projetosInsignias,
  },
];

export default function ProgramasEspacosAceleracaoMobile() {
  return (
    <div className={styles.container}>
      <section>
        <p>
          Desenvolvemos uma metodologia gamificada e baseada em projetos que
          coloca o educando como protagonista do seu aprendizado, dando acesso à
          cursos, mentorias e acompanhamento para que desenvolvam suas
          competências em produtos digitais, com  foco nas áreas de design
          (UX/UI) e programação (Frontend/backend)!
        </p>
        <p>
          Informações Importantes: <br />
          <strong>Público:</strong> Jovens de 16 a 21 anos <br />
          <strong>Duração:</strong> 18 meses <br />
          <strong>Formato:</strong> Híbrido <br />
          <strong>Inscrições:</strong> trimestralmente (internas) <br />
          <strong>Pré-requisitos:</strong> Ter feito o programa de imersão.
        </p>
      </section>
      <section className={styles.itens}>
        {conteudo.map((item, index) => (
          <div key={index} className={styles.detalhamentoItem}>
            <Image src={item.imagem} alt={item.titulo.toString()} />
            <div className={styles.containerTextoCurto}>
              <h3>{item.titulo}</h3>
              <p>{item.descricao}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
