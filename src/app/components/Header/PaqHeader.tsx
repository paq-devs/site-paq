"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../button";
import Menu from "../Menu/Menu"
import style from "./PaqHeader.module.css";
import logoPaq from "./img/logo-paq.png";


export default function PaqHeader() {
  
  return (
    <div className={style.container}>
      <Menu />
      <div className={style.logo}>
        <Image src={logoPaq} alt="Logo PAQ" />
      </div>
      <div className={style.containerButton}>
        <div className={style.buttonDesktop}>
          <Button
            href="#como-apoiar"
            title="Quero apoiar"
            height="50px"
            width="150px"
            key="btnQueroApoiarDkt"
          />
        </div>
        <div className={style.buttonMobile}>
          <Button
            href="#"
            title="APOIAR"
            height="30px"
            width="80px"
            key="btnQueroApoiarMob"
          />
        </div>
      </div>
    </div>
  );
}
