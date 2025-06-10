"use client";
import style from "./UnidadesEspacos.module.css";
import Image from "next/image";
import galeria01 from "./img/galeria-01.png";
import galeria02 from "./img/galeria-02.png";
import galeria03 from "./img/galeria-03.png";
import galeria04 from "./img/galeria-04.png";
import galeria05 from "./img/galeria-05.png";
import galeria06 from "./img/galeria-06.png";

export default function UnidadesEspacos() {
  return (
    <div className={style.container}>
      <header>
        <h2>centros de Experiência de aprendizagem (CEA)</h2>
        <p>Testeee de nova seção </p>
        <p>
          Nosso movimento é de{" "}
          <strong>
            trazer as quebradas pra dentro dos centros de inovação e tecnologia
          </strong>
          , empoderando e mostrando que esses espaços podem e devem ser
          ocupados!
        </p>
      </header>

      <div className={style.containerGaleria}>
        <div className={style.containerGaleriaItem} >
          <span>
            Nosso primeiro e maior CEA está localizado no bairro{" "}
            <strong>Pedra Branca, Palhoça</strong>
          </span>
          <div className={style.containerGaleriaItemImgs}>
            <Image src={galeria01} alt="Jovens no PAQ" />
            <Image src={galeria02} alt="Jovens no PAQ" />
            <Image src={galeria03} alt="Jovens no PAQ" />
          </div>
        </div>
        <div className={style.containerGaleriaItem}>
          <span>
            Também estamos situados em Florianópolis, com um CEA localizado na
            <strong>Rodovia SC 401, em Florianópolis</strong> - próximo ao
            Passeio Primavera.
          </span>
          <div  className={style.containerGaleriaItemImgs}>
            <Image src={galeria04} alt="Jovens no PAQ" />
            <Image src={galeria05} alt="Jovens no PAQ" />
            <Image src={galeria06} alt="Jovens no PAQ" />
          </div>
        </div>
      </div>
    </div>
  );
}
