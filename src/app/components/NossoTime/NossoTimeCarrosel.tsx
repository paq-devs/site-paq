
"use client";
import { useState, ReactNode } from 'react';
import Image from "next/image";
import { Diretoria, Equipe, Conselhos } from "./time";
import style from './NossoTime.module.css'

const Button: React.FC<{children: ReactNode, onClick: Function, selected: boolean}> = ({ children, onClick, selected }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`font-poppins px-4 md:px-7 py-2 font-bold transition-all duration-500 ease-in-out ${selected ? 'bg-azulopcoes text-white rounded-[40px]  my-1' : ' text-black rounded-[40px] my-1 '}`}
    >
      {children}
    </button>
  )
}

const NossoTimeCarrosel: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number>(0);
  const team = [Diretoria, Equipe, Conselhos];

  return (
    <div className="max-w-full flex flex-col items-center mt-9">
      <div className="flex space-x-4 mb-8 lg:bg-fundinhocinza rounded-[40px] px-3 md:bg-white bg-fundocinza">
        <Button
          selected={selectedButton == 0}
          onClick={() => setSelectedButton(0)}
        >
          Diretorias
        </Button>
        <Button
          selected={selectedButton == 1}
          onClick={() => setSelectedButton(1)}
        >
          Equipe
        </Button>
        <Button
          selected={selectedButton == 2}
          onClick={() => setSelectedButton(2)}
        >
          Conselhos
        </Button>
      </div>
      <div className="flex max-w-full pb-8 gap-y-8 p-4 items-center overflow-x-auto 2xl:overflow-none 2xl:flex-wrap 2xl:justify-center">
        {team[selectedButton].map((member, index) => (
          <div
            key={index}
            className="mx-6 bg-fundocinza flex-none rounded-[27px] first:ml-16 2xl:first:ml-6"
          >
            <Image
              src={member.src}
              alt={`Imagem ${index + 1}`}
              width={298}
              height={229}
              className="aspect-auto rounded-[27px]"
            />
            <h2 className={style.CardsNossoTimeNome}>{member.nome}</h2>
            <p className={style.CardsNossoTimeCargo}>{member.cargo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NossoTimeCarrosel;
