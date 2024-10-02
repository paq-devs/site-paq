"use client";
import React, { useState } from "react";
import styles from "./CardBaseMobile.module.css";
import { StaticImageData } from "next/image";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import Button from "../../button";

export default function CardBaseMobile({
  children,
  imagem,
  titulo,
  conteudoCurto,
}: {
  children: React.ReactNode;
  imagem: StaticImageData;
  titulo: string;
  conteudoCurto: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div
        style={{ backgroundImage: `url(${imagem.src})` }}
        className={styles.containerImagem}
      >
        <h3>{titulo}</h3>
      </div>
      <p>{conteudoCurto}</p>
      {isOpen && (
        <>
          {children}
          <Button
            href="#"
            title="Quero fazer parte"
            width="90%"
            height="40px"
          />
        </>
      )}

      {isOpen ? (
        <FaMinusCircle onClick={() => setIsOpen(false)} />
      ) : (
        <FaPlusCircle onClick={() => setIsOpen(true)} />
      )}
    </div>
  );
}
