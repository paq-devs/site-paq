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

import './impaqtrometro.css'


export default function Impaqtrometro() {
  return (
    <section className="w-full flex flex-col items-center rounded-[20px] bg-[#00171F] p-[53px_33px] pb-56">
      <GlobalStyle />
      <div className="flex flex-col items-center gap-7 mt-12 mb-16 lg:mt-36">
        <Image src={imagemRelogio} alt="" width={75} height={75} />
        <h2 className="ImpaqtrometroTitulo">
          <span className="font-bold">IM<span className="text-azulpaq">PAQ</span>TÔMETRO:</span><br />
          O IMPACTO REAL
        </h2>
        <p className="ImpaqtrometroTexto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim ven
        </p>
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
            descricao="Ativos na comunidade de aprendizagem"
          />
        </div>
      </div>
      <p className="ImpaqtrometroTexto mb-9">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, q
      </p>
      <Button title="VER RELATÓRIOS" href="/" width="150px" height="42px"/>
    </section>
  );
}
