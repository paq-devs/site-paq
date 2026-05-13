"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "../button";
// import Menu from "../Menu/Menu" // Comentado se não estiver usando
import style from "./PaqHeader.module.css";
import logoPaq from "./img/logo-paq-escuro.png";

export default function PaqHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // 1. Tipamos o useRef como HTMLDivElement para o TS entender que ele tem a função .contains
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 2. Tipamos o evento como MouseEvent
    function handleClickOutside(event: MouseEvent) {
      // Usamos o 'as Node' para garantir que o TS aceite a comparação do target
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className={style.container}>
      <div className={style.itens}>
        <Image src={logoPaq} alt="Logo PAQ" />
      
        <nav className={style.itensNav}>
          <a href="#papel-do-paq">O que fazemos</a>
          <a href="#juntoComAGente">Quem faz parte</a>
          
          <div className={style.dropdownWrapper} ref={dropdownRef}>
            <a 
              href="#apoie" 
              onClick={(e) => {
                e.preventDefault();
                setIsDropdownOpen(!isDropdownOpen);
              }}
              className={isDropdownOpen ? style.linkAtivo : ""}
            >
              Apoie
            </a>

            {isDropdownOpen && (
              <div className={style.menuSuspenso}>
                <a target="_blank" rel="noopener noreferrer" href="https://pix-day-paq.vercel.app/">Apoie via Pix</a>
                <a target="_blank" rel="noopener noreferrer" href="https://bonde-dos-parcas.vercel.app/">Bonde dos Parças</a>
                <a target="_blank" rel="noopener noreferrer" href="https://madrinhas-paq.vercel.app/">Seja uma madrinha</a>
              </div>
            )}
          </div>
        </nav>
      </div>
      <div className={style.btns}>
        <Button title={"PARTICIPE"} width="109px" height="32px" href={"#outrasFormasDeFazerParte"} />
      </div>
    </div>
  );
}