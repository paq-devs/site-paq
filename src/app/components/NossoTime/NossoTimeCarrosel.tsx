"use client";

import { useState, ReactNode } from 'react';

import CardsTime from './Cards/CardsTime';
import CardsTime2 from './Cards/CardsTime2';

type CardProps = {
  content: ReactNode;
};

const CardVenhaFazerParte: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number>(1);

  const handleClick = (buttonId: number) => {
    setSelectedButton(buttonId);
  };

  return (
    <div className="flex flex-col items-center mt-9">
      <div className="flex space-x-4 mb-8 lg:bg-fundinhocinza rounded-[40px] px-3 md:bg-white bg-fundocinza">
        <button
          onClick={() => handleClick(1)}
          className={`px-4 md:px-7 py-2 font-bold ${selectedButton === 1 ? 'bg-azulopcoes text-white rounded-[40px]  my-1' : 'bg-fundobotao text-black rounded-[40px] my-1 border border-solid border-borda'}`}
        >
          Time
        </button>
        <button
          onClick={() => handleClick(2)}
          className={`px-4 md:px-6 py-2 font-bold ${selectedButton === 2 ? 'bg-azulopcoes text-white rounded-[40px] my-1' : 'bg-fundobotao text-black rounded-[40px] my-1 border border-solid border-borda'}`}
        >
          Mentores
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
        <CardsTime2 />
    </div>
);

const CardContent2: React.FC = () => (
    <div>

    </div>
  
);


export default CardVenhaFazerParte;