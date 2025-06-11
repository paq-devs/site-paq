"use client";
import React from "react";
import Image from "next/image";
import style from "./UmFuturoDiversoDesktop.module.css";

import img01 from "./img/carrossel-01-min.png";
import img02 from "./img/carrossel-02-min.png";
import img03 from "./img/carrossel-03-min.png";

export default function UmFuturoDiversoDesktop() {
    return (
        <div className={style.containerDesktop}>
            <div className={style.imageStack}>
                <div className={`${style.imageContainer} ${style.image01}`}>
                    <Image src={img01} alt="Imagem 1" width={1024} height={370} />
                </div>
                <div className={`${style.imageContainer} ${style.image02}`}>
                    <Image src={img02} alt="Imagem 2" width={1024} height={370} />
                </div>
                <div className={`${style.imageContainer} ${style.image03}`}>
                    <Image src={img03} alt="Imagem 3" width={1024} height={370} />
                </div>
            </div>
            <h2>
                UN FUTURO <span className={style.palavraDiverso}>DIVERSO</span> COMECA AQUI
            </h2>
        </div>
    );
}