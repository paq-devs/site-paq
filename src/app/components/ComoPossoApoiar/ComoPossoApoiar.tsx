"use client";
import Image from "next/image";
import { useState } from "react";
import CardComoPossoApoiar from "./CardsComoPossoApoiar";
import check from './img/CheckBranco.png';
import style from './ComoPossoApoiar.module.css';

import './ComoPossoApoiar.css';

export default function ComoPossoFazerParte() {
  const [selectedButton, setSelectedButton] = useState<number>(1);

  const handleButtonSelect = (buttonId: number) => {
    setSelectedButton(buttonId);
  };

  return (
    <section id="como-apoiar" className={`flex flex-col items-center gap-7 pt-14 transition-all duration-500 ease-in-out  ${selectedButton === 1 ? 'bg-azul-paq' : 'bg-[#FF9A3E]'}`}>
      <div className=" flex flex-col mt-40 items-center">
      <Image
        src={check}
        width={100}
        height={300}
        alt="Ícone de verificação"
        className={selectedButton === 2 ? 'text-white': ''}
      />
      <h2 className="ComoPossoApoiarTitulo mt-5"> como posso <br /><span className="font-bold">Apoiar?</span></h2>
      <CardComoPossoApoiar onSelectButton={handleButtonSelect} />
      <div className={style.apoioFinanceiro}>
        <p>O apoio financeiro é essencial para a permanência da nossa <br/>
        missão no mundo, mas existem diversas formas de fortalecer a <br/>
        nossa missão e ser parte da construção de um futuro mais <br/>
        diverso e realmente inovador.
        </p>
      </div>
      </div>
    </section>
  );
}
