"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../button";
import Menu from "../Menu/Menu"
import style from "./PaqHeader.module.css";
import logoPaq from "./img/logo-paq-escuro.png";
//import { list } from "postcss";


export default function PaqHeader() {

  return (
    
   <div className={style.container}>
      <div className={style.itens}>
        <Image src={logoPaq} alt="Logo PAQ"/>
        {/* <a href="#quem-somos">QUEM SOMOS</a> */}
        <nav className={style.itensNav}>
          <a href="#papel-do-paq">O que fazemos</a>
          <a href="#juntoComAGente"> Quem faz parte</a>
        </nav>
      </div>
      <div className={style.btns}>
        <Button title={"PARTICIPE"} width="109px" height="32px" href={"#outrasFormasDeFazerParte"} />
        <Button title={"APOIE"} width="77px" height="32px" href={"#como-apoiar"} />
      </div>
    </div>
  );
}
