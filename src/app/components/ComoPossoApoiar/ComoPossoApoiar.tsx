"use client";
import Image from "next/image";
import { useState } from "react";
import CardComoPossoApoiar from "./CardsComoPossoApoiar";
import check from './img/CheckBranco.png';
import style from './ComoPossoApoiar.module.css';

export default function ComoPossoApoiar() {
  const [selectedButton, setSelectedButton] = useState<number>(1);

  const handleButtonSelect = (buttonId: number) => {
    setSelectedButton(buttonId);
  };

  const estilosBackground: { [key: number]: string } = {
    1: style.bgAzul,
    2: style.bgLaranja,
    3: style.bgVerde,
  };

  return (
    <section
      id="como-apoiar"
      className={`${style.container} ${estilosBackground[selectedButton]}`}
    >
      <Image
        src={check}
        width={100}
        height={300}
        alt="Ícone de verificação"
      />
      <h2>Como posso apoiar?</h2>
      <CardComoPossoApoiar onSelectButton={handleButtonSelect} />
      <div className={style.apoioFinanceiro}>
        <p>
          O apoio financeiro é essencial para a permanência da nossa <br />
          missão no mundo, mas existem diversas formas de fortalecer a <br />
          nossa missão e ser parte da construção de um futuro mais <br />
          diverso e realmente inovador.
        </p>
      </div>
    </section>
  );
}
