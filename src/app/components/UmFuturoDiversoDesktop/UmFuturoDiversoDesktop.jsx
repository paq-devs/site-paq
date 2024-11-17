"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "../Slider";
import Image from "next/image";

import style from "./UmFuturoDiversoDesktop.module.css";

import img01 from "./img/carrossel-01-min.png";
import img02 from "./img/carrossel-02-min.png";
import img03 from "./img/carrossel-03-min.png";

export default function UmFuturoDiversoDesktop() {
  return (
    <div className={style.containerDesktop}>
      <Slider intervalo={1500} movimento={500}>
        <Image src={img01} alt="a" width={1024} height={466} />
        <Image src={img02} alt="a" width={1024} height={466} />
        <Image src={img03} alt="a" width={1024} height={466} />
      </Slider>
      <h2>
        UM FUTURO <span className={style.palavraDiverso}>DIVERSO</span> COMEÇA
        AQUI
      </h2>
    </div>
  );
}
