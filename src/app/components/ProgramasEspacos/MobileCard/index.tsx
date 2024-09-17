"use client";
import { useState } from "react";
import styles from "./MobileCard.module.css";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

export default function MobileCard({
  titulo,
  descricaoCurta,
  imagem,
  children,
}: {
  titulo: string;
  descricaoCurta: string;
  imagem: any;
  children?: any;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.imagemCard}
        style={{
          backgroundImage: `url(${imagem.src})`,
          width: `${imagem.width}px`,
          height: `${imagem.height}px`,
        }}
      >
        <span>{titulo}</span>
      </div>
      <span className={styles.conteudo}>{descricaoCurta}</span>
      {isOpen && <div>{children}</div>}
      {isOpen ? (
        <FaMinusCircle onClick={() => setIsOpen(!isOpen)} />
      ) : (
        <FaPlusCircle onClick={() => setIsOpen(!isOpen)} />
      )}
    </div>
  );
}
