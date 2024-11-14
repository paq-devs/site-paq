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
import suanam from "./img/suanamecaio.png";
import formados from './img/grupoDePessoasFormadas.png'
import styles from "./impaqtrometro.module.css";

console.log(styles.ImpaqtrometroTitulo);

export default function Impaqtrometro() {
  return (
    <div className={styles.container}>
      <section id="impaqtometro">
        <GlobalStyle />
        <div className="flex flex-col items-center gap-7 mt-12 mb-16 lg:mt-36">
          <Image src={imagemRelogio} alt="" width={75} height={75} />
          <h2 className={styles.ImpaqtrometroTitulo}>
            <span className="font-bold">
              IM<span className="text-azulpaq">PAQ</span>TÔMETRO:
            </span>
            <br />O IMPACTO REAL
          </h2>
        </div>
        <div className="flex flex-col gap-3 mb-20">
          <div className="flex items-center gap-6">
            <CardImpaqtrometro
              image={grupoDePessoas}
              numero="80"
              titulo="jovens"
              descricao="Ativos na comunidade de aprendizagem"
            />
            <Image
              src={william}
              alt=""
              width={403}
              height={344}
              className="hidden lg:block aspect-auto object-contain rounded-[40px]"
            />
            <Image
              src={william}
              alt=""
              width={244}
              height={208}
              className="hidden md:block aspect-auto object-contain  rounded-[40px] lg:hidden"
            />
          </div>
          <div className="flex items-center gap-6">
            <Image
              src={Tedd}
              alt=""
              width={403}
              height={344}
              className="hidden lg:block aspect-auto object-contain rounded-[40px]"
            />
            <Image
              src={Tedd}
              alt=""
              width={244}
              height={208}
              className="hidden md:block aspect-auto object-contain  rounded-[40px] lg:hidden"
            />
            <CardImpaqtrometro
              image={formados}
              numero="200"
              titulo="jovens"
              descricao="Atendidos em nossos programas"
            />
          </div>
          <div className="flex items-center gap-6">
            <CardImpaqtrometro
              image={voluntariado}
              numero="40"
              titulo="jovens"
              descricao="Trabalhando em empresas de tecnologia"
            />
            <Image
              src={anajulia}
              alt=""
              width={403}
              height={344}
              className="hidden lg:block aspect-auto object-contain  rounded-[40px]"
            />
            <Image
              src={anajulia}
              alt=""
              width={244}
              height={208}
              className="hidden md:block aspect-auto object-contain  rounded-[40px] lg:hidden"
            />
          </div>
          <div className="flex items-center gap-6">
            <Image
              src={suanam}
              alt=""
              width={403}
              height={344}
              className="hidden lg:block aspect-auto object-contain  rounded-[40px]"
            />
            <Image
              src={suanam}
              alt=""
              width={244}
              height={208}
              className="hidden md:block aspect-auto object-contain  rounded-[40px] lg:hidden"
            />
            <CardImpaqtrometro
              image={investidor}
              numero="780mil"
              titulo="reais"
              descricao="injetados nas quebradas através dos jovens"
            />
          </div>
        </div>
        <footer>
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
          </div>
        </footer>
      </section>
    </div>
  );
}
