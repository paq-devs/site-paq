import Image from "next/image";
import styles from "./ImersaoMobile.module.css";

import exnapdaVisao from "./img/expanda-visao.png";
import entendaPotencias from "./img/entenda-potencias.png";
import aprendaColaborativa from "./img/aprenda-colaborativa.png";
import sejaInovador from "./img/seja-inovador.png";

const conteudo = [
  {
    titulo: (
      <span>
        Expanda a visão <u>sobre tecnologia</u>
      </span>
    ),
    descricao: (
      <span>
        Conheça as <strong>principais carreiras</strong> para se seguir na tech
        e <strong>troque ideia</strong> com profissionais de diversas áreas.
      </span>
    ),
    imagem: exnapdaVisao,
  },
  {
    titulo: (
      <span>
        Entenda suas <u>potências</u>
      </span>
    ),
    descricao: (
      <span>
        Para trabalhar na tech não é só conhecimento técnico, é preciso das tais
        “habilidades comportamentais”!{" "}
        <strong>Explore e desenvolva suas forças</strong> e pontos de melhoria.
      </span>
    ),
    imagem: entendaPotencias,
  },
  {
    titulo: <span>aprenda de forma colaborativa</span>,
    descricao: (
      <span>
        Aprenda as principais ferramentas de{" "}
        <strong>trabalho colaborativo</strong> para se jogar nesse mundão de
        trampos remotos e <strong>aprenda a aprender</strong> em comunidade.
      </span>
    ),
    imagem: aprendaColaborativa,
  },
  {
    titulo: (
      <span>
        Seja inovador e <u>impacte o mundo</u>
      </span>
    ),
    descricao: (
      <span>
        <strong>Desenvolva um projeto</strong> de empreendedorismo social
        utilizando a tecnologia como ferramenta para{" "}
        <strong>resolver problemas reais</strong> do mundo.
      </span>
    ),
    imagem: sejaInovador,
  },
];

export default function ProgramasEspacosImersaoMobile() {
  return (
    <div className={styles.container}>
      <section>
        <p>
          Conteúdo: <br />
          Expanda a visão sobre mercado tech Conheça as principais carreiras
          para se seguir na tech e troque ideia com profissionais incríveis de
          diversas áreas.
        </p>
        <p>
          Informações Importantes: <br />
          <strong>Público:</strong> Jovens de 16 a 21 anos <br />
          <strong>Duração:</strong> 8 semanas <br />
          <strong>Formato:</strong> Presencial nas unidades Pedra Branca
          (Palhoça) e SC - 401 (Florianópolis) <br />
          <strong>Inscrições:</strong> Trimestralmente (Site e instagram) <br />
          <strong>Pré-requisitos:</strong> Conhecimentos básicos de informática
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
