"use client";
import { useState, ReactNode } from "react";
import CardPessoaFisica from "./Cards/CardPessoaFisica";
import CardApoioPix from "./Cards/CardApoioPix/CardApoioPix";
import CardEmpresas from "./Cards/CardEmpresas";
import styles from "./CardsComoPossoApoiar.module.css";

type CardProps = {
  content: ReactNode;
};

interface CardComoPossoApoiarProps {
  onSelectButton: (buttonId: number) => void;
}

const CardComoPossoApoiar: React.FC<CardComoPossoApoiarProps> = ({
  onSelectButton,
}) => {
  const [selectedButton, setSelectedButton] = useState<number>(1);

  const handleClick = (buttonId: number) => {
    setSelectedButton(buttonId);
    onSelectButton(buttonId); // Envia o buttonId para o componente pai
  };

  return (
    <div className={styles.container}>
      <div className={styles.seletor}>
        <button
          onClick={() => handleClick(1)}
          className={selectedButton === 1 ? styles.selected : styles.unselected}
        >
          Empresas
        </button>
        <button
          onClick={() => handleClick(2)}
          className={selectedButton === 2 ? styles.selected : styles.unselected}
        >
          Financiamento Coletivo
        </button>
        <button
          onClick={() => handleClick(3)}
          className={selectedButton === 3 ? styles.selected : styles.unselected}
        >
          PIX
        </button>
      </div>
      <div className="transition-all duration-500 ease-in-out">
        {selectedButton === 1 && <Card content={<CardEmpresas />} />}
        {selectedButton === 2 && <Card content={<CardPessoaFisica />} />}
        {selectedButton === 3 && <Card content={<CardApoioPix />} />}
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ content }) => (
  <div className={styles.cardContainer}>{content}</div>
);

export default CardComoPossoApoiar;
