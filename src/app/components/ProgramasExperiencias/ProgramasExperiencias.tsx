"use client";
import style from "./ProgramasExperiencias.module.css";
import Image from "next/image";

import bannerImersao from "./img/img_1.png";
import bannerAceleracao from "./img/img_2.png";

export default function ProgramasExperiencias() {
  return (
    <div className={style.container}>
      <div className={style.cardImersao}>
        <Image className={style.img} src={bannerImersao} alt="Jovens no PAQ" />

        <div className={style.conteudo}>
          <h2>Imersão</h2>

          <div className={style.cardConteudo}>
            <div className={style.cardItem}>
              <h3>Expanda a visão sobre tecnologia</h3>
              <p>
                Conheça as principais carreiras para se seguir na tech e troque
                ideia com profissionais de diversas áreas.
              </p>
            </div>
            <div className={style.cardItem}>
              <h3>Expanda a visão sobre tecnologia</h3>
              <p>
                Conheça as principais carreiras para se seguir na tech e troque
                ideia com profissionais de diversas áreas.
              </p>
            </div>
            <div className={style.cardItem}>
              <h3>Expanda a visão sobre tecnologia</h3>
              <p>
                Conheça as principais carreiras para se seguir na tech e troque
                ideia com profissionais de diversas áreas.
              </p>
            </div>
            <div className={style.cardItem}>
              <h3>Expanda a visão sobre tecnologia</h3>
              <p>
                Conheça as principais carreiras para se seguir na tech e troque
                ideia com profissionais de diversas áreas.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className={style.cardAceleracao}>
        <Image src={bannerAceleracao} alt="Jovens no PAQ" />

        <div className={style.conteudo}>
          <h2>Imersão</h2>

          <div className={style.cardConteudo}>
            <div className={style.cardItem}>
              <h3>Expanda a visão sobre tecnologia</h3>
              <p>
                Conheça as principais carreiras para se seguir na tech e troque
                ideia com profissionais de diversas áreas.
              </p>
            </div>
            <div className={style.cardItem}>
              <h3>Expanda a visão sobre tecnologia</h3>
              <p>
                Conheça as principais carreiras para se seguir na tech e troque
                ideia com profissionais de diversas áreas.
              </p>
            </div>
            <div className={style.cardItem}>
              <h3>Expanda a visão sobre tecnologia</h3>
              <p>
                Conheça as principais carreiras para se seguir na tech e troque
                ideia com profissionais de diversas áreas.
              </p>
            </div>
            <div className={style.cardItem}>
              <h3>Expanda a visão sobre tecnologia</h3>
              <p>
                Conheça as principais carreiras para se seguir na tech e troque
                ideia com profissionais de diversas áreas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
