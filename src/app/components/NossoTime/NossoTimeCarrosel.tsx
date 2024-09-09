
"use client";
import { useState, ReactNode } from 'react';
import CardsTime from './Cards/CardsTime';
import CardEducacionalMentores from './Cards/CardsMentores';

type NossoTimeCarroselprops = {
    content: ReactNode;
  };
  
  const NossoTimeCarrosel: React.FC = () => {
    const [selectedButton, setSelectedButton] = useState<number>(1);
  
    const handleClick = (buttonId: number) => {
      setSelectedButton(buttonId);
    };
  
    return (
      <div className="flex flex-col items-center mt-9">
        <div className="flex space-x-4 mb-8 lg:bg-fundinhocinza rounded-[40px] px-3 md:bg-white bg-fundocinza">
          <button
            onClick={() => handleClick(1)}
            className={`font-poppins px-4 md:px-7 py-2 font-bold transition-all duration-500 ease-in-out ${selectedButton === 1 ? 'bg-azulopcoes text-white rounded-[40px]  my-1' : ' text-black rounded-[40px] my-1 '}`}
          >
            Time
          </button>
          <button
            onClick={() => handleClick(2)}
            className={`font-poppins px-4 md:px-6 py-2 font-bold transition-all duration-500 ease-in-out ${selectedButton === 2 ? 'bg-azulopcoes text-white rounded-[40px] my-1' : ' text-black rounded-[40px] my-1 '}`}
          >
            Mentores
          </button>
        </div>
      <div className=" transition-all duration-500 ease-in-out">
        {selectedButton === 1 && <Card content={<CardContent1 />} />}
        {selectedButton === 2 && <Card content={<CardContent2 />} />}
      </div>
    </div>
  );
};

const Card: React.FC<NossoTimeCarroselprops> = ({ content }) => (
  <div className="rounded-2xl w-full ">
    {content}
  </div>
);

const CardContent1: React.FC = () => (
  <div>
    <CardsTime/>
  </div>
);

const CardContent2: React.FC = () => (
    <div>
      <CardEducacionalMentores />
    </div>
  );

  export default NossoTimeCarrosel;