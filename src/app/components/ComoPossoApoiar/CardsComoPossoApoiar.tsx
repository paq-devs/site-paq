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
          className={`font-poppins px-4 md:px-6 py-2 font-bold transition-all duration-500 ease-in-out ${
            selectedButton === 2
              ? "bg-preto text-white rounded-[40px] my-1"
              : " text-black rounded-[40px] my-1"
          }`}
        >
          Pessoas Físicas
        </button>
      </div>
      <div className=" transition-all duration-500 ease-in-out">
        {selectedButton === 1 && <Card content={<CardContent1 />} />}
        {selectedButton === 2 && <Card content={<CardContent2 />} />}
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ content }) => (
  <div className="rounded-2xl w-full ">{content}</div>
);

const CardContent1: React.FC = () => (
  <div>
    <CardEmpresaMadrinha />
  </div>
);

const CardContent2: React.FC = () => (
  <div>
    <CardPessoaFisica />
  </div>
);

export default CardComoPossoApoiar;
