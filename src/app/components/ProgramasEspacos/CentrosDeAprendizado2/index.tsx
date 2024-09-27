"use client";
import styles from "./CentrosDeAprendizado2.module.css";
import Image from "next/image";
import galeria01 from "./img/galeria-01.png";
import galeria02 from "./img/galeria-02.png";
import galeria03 from "./img/galeria-03.png";
import galeria04 from "./img/galeria-04.png";
import galeria05 from "./img/galeria-05.png";
import galeria06 from "./img/galeria-06.png";

export default function CentrosDeAprendizado2() {
  return (
    <div className={styles.container}>
      <h2>centros de Experiência de aprendizagem (CEA)</h2>
      <header>
        <div>
          <p>
            Nosso movimento é de{" "}
            <strong>
              trazer as quebradas pra dentro dos centros de inovação e
              tecnologia
            </strong>
            , empoderando e mostrando que esses espaços podem e devem ser
            ocupados!
          </p>
        </div>
        <div>
          <p>
            Para que isso aconteça precisamos garantir espaços com toda a
            estrutura necessária para que os jovens possam se desenvolver com
            qualidade e imersos nos mesmos ambientes que empresas inovadoras.
          </p>
        </div>
      </header>

      <div className={styles.galeria}>
        <div>
          <Image src={galeria01} alt="Jovens no PAQ" />
          <Image src={galeria02} alt="Jovens no PAQ" />
          <Image src={galeria03} alt="Jovens no PAQ" />
        </div>
        <span>
          Nosso primeiro e maior CEA está localizado no bairro{" "}
          <strong>Pedra Branca, Palhoça</strong>
        </span>
        <div>
          <Image src={galeria04} alt="Jovens no PAQ" />
          <Image src={galeria05} alt="Jovens no PAQ" />
          <Image src={galeria06} alt="Jovens no PAQ" />
        </div>
        <span>
          Também estamos situados em Florianópolis, com um CEA localizado na
          <strong>Rodovia SC 401, em Florianópolis</strong> - próximo ao Passeio
          Primavera.
        </span>
      </div>
    </div>
  );
}
