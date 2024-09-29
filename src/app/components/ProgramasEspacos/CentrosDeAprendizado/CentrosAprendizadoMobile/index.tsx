import Image from "next/image";
import styles from "./CentrosAprendizagemMobile.module.css";

import pb01 from "./img/pb-01.png";
import pb02 from "./img/pb-02.png";
import pb03 from "./img/pb-03.png";
import sc01 from "./img/sc401-01.png";
import sc02 from "./img/sc401-02.png";
import sc03 from "./img/sc401-03.png";

const conteudo = [
  {
    titulo: (
      <span>
        <u>Pedra Branca</u>
      </span>
    ),
    descricao: (
      <span>
        Nosso primeiro e maior CEA está localizado no bairro{" "}
        <strong>Pedra Branca, Palhoça</strong>
      </span>
    ),
    imagens: [pb01, pb02, pb03],
  },
  {
    titulo: (
      <span>
        <u>SC-401</u>
      </span>
    ),
    descricao: (
      <span>
        Também estamos situados em Florianópolis, com um CEA localizado na
        <strong>Rodovia SC 401, em Florianópolis</strong> - próximo ao Passeio
        Primavera.
      </span>
    ),
    imagens: [sc01, sc02, sc03],
  },
];

export default function ProgramasEspacosCentrosAprendizadoMobile() {
  return (
    <div className={styles.container}>
      <section>
        <p>
          Para que isso aconteça precisamos garantir espaços com toda a
          estrutura necessária para que os jovens possam se desenvolver com
          qualidade e imersos nos mesmos ambientes que empresas inovadoras.
        </p>
      </section>
      <section className={styles.itens}>
        {conteudo.map((item, index) => (
          <div key={index} className={styles.detalhamentoItem}>
            <div className={styles.containerTextoCurto}>
              <h3>{item.titulo}</h3>
              <p>{item.descricao}</p>
            </div>
            {item.imagens.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={item.titulo.toString()}
                width={100}
                height={100}
              />
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}
