"use client";
import { useState, ReactNode } from 'react';
import CardEmpresaMadrinha from './Cards/CardEmpresaMadrinha';
import CardPessoaFisica from './Cards/CardPessoaFisica';
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
      </div>
      <div className="transition-all duration-500 ease-in-out">
        {selectedButton === 1 && <Card content={<CardEmpresaMadrinha />} />}
        {selectedButton === 2 && <Card content={<CardPessoaFisica />} />}
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ content }) => (
  <div className={styles.cardContainer}>{content}</div>
);

export default CardComoPossoApoiar;
