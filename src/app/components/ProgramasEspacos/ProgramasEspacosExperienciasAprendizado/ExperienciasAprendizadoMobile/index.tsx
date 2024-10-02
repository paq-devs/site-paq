import Image from "next/image";
import styles from "./ImersaoMobile.module.css";

import competicoes from "./img/competicoes.png";
import eventosTech from "./img/eventos-tech.png";
import rodasConversa from "./img/rodas-conversa.png";
import visitaEmpresas from "./img/visita-empresas.png";

const conteudo = [
  {
    titulo: (
      <span>
        Eventos de <u>Tecnologia</u>
      </span>
    ),
    descricao: (
      <span>
        Estamos{" "}
        <strong>ativamente presentes no ecossistema de tecnologia</strong> da
        Grande Florianópolis, marcando presença em grandes eventos como Startup
        Summit, Concarh, FIN, e outros.
      </span>
    ),
    imagem: eventosTech,
  },
  {
    titulo: (
      <span>
        Competições <u>empreendedoras</u>
      </span>
    ),
    descricao: (
      <span>
        Participamos de <strong>competições empreendedoras</strong> (Startup
        Weekend e Hackaton do Bem) e também organizamos o{" "}
        <strong>PAQATHON, nossa própria competição</strong> em parceria com a
        TXM.
      </span>
    ),
    imagem: competicoes,
  },
  {
    titulo: (
      <span>
        Visitas em <u>empresas tech</u>
      </span>
    ),
    descricao: (
      <span>
        <strong>Promovemos visitas</strong> a empresas{" "}
        <strong>referência em tecnologia</strong>, como Softplan e Zoho,
        apresentando cultura, carreiras e despertando o desejo de se trabalhar
        nas gigantes da tech.
      </span>
    ),
    imagem: visitaEmpresas,
  },
  {
    titulo: (
      <span>
        Rodas de <u>conversa/oficina</u>
      </span>
    ),
    descricao: (
      <span>
        Conectamos os jovens com <strong>pessoas abertas a compartilhar</strong>{" "}
        seus conhecimentos e nas mais <strong>diversas áreas</strong> como
        Tecnologia e tendência, Carreira, Mercado Tech, Empreendedorismo,
        Diversidade e inclusão e, especialmente, Desenvolvimento socioemocional.
      </span>
    ),
    imagem: rodasConversa,
  },
];

export default function ProgramasEspacosExperienciasAprendizadoMobile() {
  return (
    <div className={styles.container}>
      <section>
        <p>
          Acreditamos que o aprendizado vai muito além de ter acesso a “cursos e
          professores”, aprendemos pelas trocas com pessoas, espaços que
          passamos e culturas que conhecemos. Por isso, proporcionamos
          diferentes tipos de experiências de aprendizagem que ampliam a visão
          dos jovens em relação ao mundo tech e à vida real.
        </p>
        <p>
          O PAQ é uma comunidade de aprendizagem, então, para Para fortalecer o
          senso de pertencimento, engajamento e conexões dentro da comunidade,
          temos nossos rituais que marcam e trazem significado para cada etapa
          dos membros dentro da jornada de experiência.
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
