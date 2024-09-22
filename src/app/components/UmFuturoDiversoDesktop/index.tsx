"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import style from "./UmFuturoDiversoDesktop.module.css";

import img01 from "./img/carrossel-01-min.png";
import img02 from "./img/carrossel-02-min.png";
import img03 from "./img/carrossel-03-min.png";

export default function UmFuturoDiversoDesktop() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };
  return (
    <div className={style.containerDesktop}>
      <Slider {...settings} className={style.container}>
        <div>
          <Image src={img01} alt="a" width={1024} height={466} />
        </div>
        <div>
          <Image src={img02} alt="a" width={1024} height={466} />
        </div>
        <div>
          <Image src={img03} alt="a" width={1024} height={466} />
        </div>
      </Slider>
      <div className={style.containerFrase}>
        <span className={style.fraseUmFuturoDiverso}>
          UM FUTURO <span className={style.palavraDiverso}>DIVERSO</span> COMEÇA
          AQUI
        </span>
      </div>
    </div>
  );
}
