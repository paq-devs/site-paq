"use client";
import imagemRelogio from "./img/relogio.png";
import Image from "next/image";
import GlobalStyle from "./fontPaq";
import CardImpaqtrometro from "./cardImpaqtrometro";
import Button from "../button";
import voluntariado from "./img/voluntariado1.png";
import grupoDePessoas from "./img/grupoDePessoas.png";
import investidor from "./img/investidor1.png";
import anajulia from "./img/anaju.png";
import Tedd from "./img/Tedd.png";
import william from "./img/William.png";
import { useEffect, useState } from "react";
import suanam from "./img/suanamecaio.png";
import formados from './img/grupoDePessoasFormadas.png'
import styles from "./impaqtrometro.module.css";

console.log(styles.ImpaqtrometroTitulo);

export default function Impaqtrometro() {

  return (
    <div className={styles.container} >
      <section id="impaqtometro">
        <GlobalStyle />
        <div className={styles.impaqtometroHeader}>
          <Image src={imagemRelogio} alt="" width={75} height={75} />
          <h2 className={styles.ImpaqtrometroTitulo}>
            <span className="font-bold">
              IM<span className="text-azulpaq">PAQ</span>TÔMETRO:
            </span>
            <br />O IMPACTO REAL
          </h2>
          <p>Dados 2024</p>
        </div>
        <div className={styles.impaqtometroCards}>
          <div className={styles.impaqtometroCard} data-anima="centro">
            <CardImpaqtrometro
              image={grupoDePessoas}
              numero="80"
              titulo="jovens"
              descricao="Ativos na comunidade de aprendizagem"
            />
            <Image
              src={william}
              alt=""
              className="ImpaqtometroImagem"
            />
          </div>
          <div className={styles.impaqtometroCard} data-anima="cima">
            <Image
              src={Tedd}
              alt=""
         
              className="ImpaqtometroImagem"
            />
           
            <CardImpaqtrometro
              image={formados}
              numero="500"
              titulo="jovens"
              descricao="Impactados em nossos programas"
            />
          </div>
          <div className={styles.impaqtometroCard} data-anima="centro">
            <CardImpaqtrometro
              image={voluntariado}
              numero="50%"
              titulo="jovens"
              descricao="Trabalhando em empresas de tecnologia"
            />
            <Image
              src={anajulia}
              alt=""
             
              className="ImpaqtometroImagem"
            />
           
          </div>
          <div className={styles.impaqtometroCard} data-anima="cima">
            <Image
              src={suanam}
              alt=""

              className="ImpaqtometroImagem"
            />
          
            <CardImpaqtrometro
              image={investidor}
              numero="780mil"
              titulo="reais"
              descricao="injetados nas quebradas através dos jovens"
            />
          </div>
        </div>
        <div className={styles.portal}>
          <h2>portal da transparência</h2>
          <div>
            <Button 
              title="VER RELATÓRIOS"
              href="https://drive.google.com/drive/folders/137Qh9c7aQejgg9IDlzIVxlFNaneUbSKK?usp=sharing"
              width="150px"
              height="42px"

              newTab
            />
            <Button
              title="ESTATUTO"
              href="https://drive.google.com/drive/folders/11j-IDR46-vxoSy7hgWb5tOYXqPE7BJ0P?usp=drive_link"
              width="150px"
              height="42px"
              newTab
            />
            <Button
              title="BALANCETE"
              href="https://drive.google.com/drive/folders/11NDYCP33CkR79YR7kY4ZwfQQC_YVwPVI?usp=sharing"
              width="150px"
              height="42px"
              newTab
            />
            <Button
              title="MANIFESTO"
              href="https://drive.google.com/drive/folders/179HaNiDTyNOADPq9HGY_aJiILlZtKoqi?usp=sharing"
              width="150px"
              height="42px"
              newTab
            />

            
          </div>
        </div>
      </section>

      
    </div>
  );
}


