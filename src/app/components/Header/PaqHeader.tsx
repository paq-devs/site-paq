"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../button";
import { FiAlignJustify, FiChevronDown } from "react-icons/fi";
import style from "./PaqHeader.module.css";
import logoPaq from "./img/logo-paq.png";

const DropdownPaq = ({ text, isOpen, setIsOpen }: any) => {
  return (
    <div className={style.paqDropdown}>
      <a
        href="#"
        className={style.dropdownButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {text}
        <FiChevronDown />
      </a>
      {isOpen && (
        <div className={style.dropdownContent}>
          <a href="#quem-somos">Quem somos</a>
          <a href="#papel-do-paq">Papel do paq</a>
          <a href="#impaqtometro">Impacto</a>
        </div>
      )}
    </div>
  );
};

export default function PaqHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={style.container}>
      <FiAlignJustify className={style.hamburger} />
      <div className={style.dropdownContainer}>
        <DropdownPaq text={"Sobre"} isOpen={isOpen} setIsOpen={setIsOpen} />
        <a href="#como-apoiar">Apoio</a>
        <a href="#programas-e-espacos">Programas</a>
        <a href="#historias">Histórias</a>
      </div>
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
