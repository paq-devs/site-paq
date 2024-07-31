"use client";
import { useState, ReactNode } from 'react';
import CardEmpresaMadrinha from './Cards/CardEmpresaMadrinha';
import CardPessoaFisica from './Cards/CardPessoaFisica';

type CardProps = {
  content: ReactNode;
};

interface CardComoPossoApoiarProps {
  onSelectButton: (buttonId: number) => void;
}

const CardComoPossoApoiar: React.FC<CardComoPossoApoiarProps> = ({ onSelectButton }) => {
  const [selectedButton, setSelectedButton] = useState<number>(1);

  const handleClick = (buttonId: number) => {
    setSelectedButton(buttonId);
    onSelectButton(buttonId); // Envia o buttonId para o componente pai
  };

  return (
    <div className="flex flex-col items-center mt-9">
      <div className="flex space-x-4 mb-8 lg:bg-fundinhocinza rounded-[40px] px-3 md:bg-white bg-fundocinza">
        <button
          onClick={() => handleClick(1)}
          className={`px-4 md:px-7 py-2 font-bold ${selectedButton === 1 ? 'bg-azulopcoes text-white rounded-[40px] my-1' : 'bg-fundobotao text-black rounded-[40px] my-1 border border-solid border-borda'}`}
        >
          Empresas
        </button>
        <button
          onClick={() => handleClick(2)}
          className={`px-4 md:px-6 py-2 font-bold ${selectedButton === 2 ? 'bg-[#FF9A3E] text-white rounded-[40px] my-1' : 'bg-fundobotao text-black rounded-[40px] my-1 border border-solid border-borda'}`}
        >
          Pessoas Físicas
        </button>
      </div>
      <div>
        {selectedButton === 1 && <Card content={<CardContent1 />} />}
        {selectedButton === 2 && <Card content={<CardContent2 />} />}
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ content }) => (
  <div className="rounded-2xl w-full">
    {content}
  </div>
);

const CardContent1: React.FC = () => (
  <div>
    <CardEmpresaMadrinha/>
  </div>
);

const CardContent2: React.FC = () => (
  <div>
    <CardPessoaFisica />
  </div>
);


export default CardComoPossoApoiar;