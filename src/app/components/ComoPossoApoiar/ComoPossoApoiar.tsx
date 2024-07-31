"use client";
import Image from "next/image";
import { useState } from "react";
import CardComoPossoApoiar from "./CardsComoPossoApoiar";

export default function ComoPossoFazerParte() {
  const [selectedButton, setSelectedButton] = useState<number>(0);

  const handleButtonSelect = (buttonId: number) => {
    setSelectedButton(buttonId);
  };

  return (
    <section className={`flex flex-col items-center gap-7 py-14 ${selectedButton === 1 ? 'bg-[#DEF5FC] ' : 'bg-[#FF9A3E]'}`}>
      <Image
        src="images/perguntas-frequentes.svg"
        width={100}
        height={300}
        alt="Ícone de verificação"
        className={selectedButton === 2 ? 'text-white': ''}
      />
      <h2 className="titulo"> como posso <br /><span className="font-bold">Apoiar?</span></h2>
      <p className="texto">Faça parte da nossa comunidade e ajude <br />a construir um futuro melhor para todos.<br />Descubra como você pode contribuir. </p>
      <CardComoPossoApoiar onSelectButton={handleButtonSelect} />
    </section>
  );
}