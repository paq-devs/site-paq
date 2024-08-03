"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../button";
import { FiAlignJustify, FiChevronDown } from "react-icons/fi";
import style from "./PaqHeader.module.css";
import icone_sobre from "./img/chevron-down.png";
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
          <a href="#">quem somos</a>
          <a href="#">papel do paq</a>
          <a href="#">impacto</a>
        </div>
      )}
    </div>
  );
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={style.container}>
      <div className={style.dropdownContainer}>
        <DropdownPaq text={"Sobre"} isOpen={isOpen} setIsOpen={setIsOpen} />
        <a href="#">Apoio</a>
        <a href="#">Programas</a>
        <a href="#">Histórias</a>
      </div>
      <div className={style.logo}>
        <Image src={logoPaq} alt="Logo PAQ" />
      </div>
      <div className={style.containerButton}>
        <Button
          href="#"
          title="Quero apioar"
          height="50px"
          width="150px"
          key="btnQueroApioar"
        />
      </div>
    </div>
  );
}
