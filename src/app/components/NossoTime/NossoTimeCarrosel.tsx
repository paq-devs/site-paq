
"use client";
import { useState } from 'react';
import { time } from "./time"
import Carousel from "../Carousel/Carousel"
import Card from './Cards/Card'

enum SelectedButtonValues  {
  MENTORES = "MENTORES",
  TIME =  "TIME"
}
  
  const NossoTimeCarrosel: React.FC = () => {
    const [selectedButton, setSelectedButton] = useState<SelectedButtonValues>(SelectedButtonValues.TIME);
  
    const handleClick = (showValue: SelectedButtonValues) => {
      setSelectedButton(showValue);
    };
  
    return (
      <div className="flex flex-col items-center mt-9">
        <div className="flex space-x-4 mb-8 lg:bg-fundinhocinza rounded-[40px] px-3 md:bg-white bg-fundocinza">
          <button
            onClick={() => handleClick(SelectedButtonValues.TIME)}
            className={`font-poppins px-4 md:px-7 py-2 font-bold transition-all duration-500 ease-in-out ${selectedButton === SelectedButtonValues.TIME ? 'bg-azulopcoes text-white rounded-[40px]  my-1' : ' text-black rounded-[40px] my-1 '}`}
          >
            Time
          </button>
          <button
            onClick={() => handleClick(SelectedButtonValues.MENTORES)}
            className={`font-poppins px-4 md:px-6 py-2 font-bold transition-all duration-500 ease-in-out ${selectedButton === SelectedButtonValues.MENTORES ? 'bg-azulopcoes text-white rounded-[40px] my-1' : ' text-black rounded-[40px] my-1 '}`}
          >
            Mentores
          </button>
        </div>
      <div className=" transition-all duration-500 ease-in-out">
        { selectedButton === SelectedButtonValues.TIME && (
          <div className="flex flex-wrap p-4 items-center justify-center gap-3">
              <Carousel Cards={time.TIME.map((person, index) => (
                <Card key={index} imageSrc={person.src} role={person.cargo} name={person.nome}/>
              ))} />
          </div>
        )}
        { selectedButton === SelectedButtonValues.MENTORES && (
          <div className="flex flex-wrap p-4 items-center justify-center gap-3">
              <Carousel Cards={time.MENTORES.map((person, index) => (
                <Card key={index} imageSrc={person.src} role={person.cargo} name={person.nome}/>
              ))} />
          </div>
        )}
      </div>
    </div>
  );
};


  export default NossoTimeCarrosel;
