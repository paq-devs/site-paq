"use client";

import { useState, ReactNode } from 'react';
import Image from 'next/image';
import Button from '../button';

import anajulia from './img/anajulia.png'
import evanz from './img/evanz.png'
import costaspaq from './img/costaspaq.png'

import anajuliamobile from './img/anajuliamobile.png'

import './CardVenhaFazerParte.css'

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
          className={`font-poppins px-4 md:px-7 py-2 font-bold transition-all duration-500 ease-in-out ${selectedButton === 1 ? 'bg-azulopcoes text-white rounded-[40px]  my-1' : ' text-black rounded-[40px] my-1 '}`}
        >
          Estudar
        </button>
        <button
          onClick={() => handleClick(2)}
          className={`font-poppins px-4 md:px-6 py-2 font-bold transition-all duration-500 ease-in-out ${selectedButton === 2 ? 'bg-azulopcoes text-white rounded-[40px] my-1' : ' text-black rounded-[40px] my-1 '}`}
        >
          Mentorar
        </button>
        <button
          onClick={() => handleClick(3)}
          className={`font-poppins px-4 md:px-7 py-3 font-bold transition-all duration-500 ease-in-out ${selectedButton === 3 ? 'bg-azulopcoes text-white rounded-[40px] my-1' : ' text-black rounded-[40px] my-1 '}`}
        >
          Voluntariar
        </button>
      </div>
      <div>
        {selectedButton === 1 && <Card content={<CardContent1 />} />}
        {selectedButton === 2 && <Card content={<CardContent2 />} />}
        {selectedButton === 3 && <Card content={<CardContent3 />} />}
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
    {/* Card Desktop e tablet */}
    <div className='hidden md:flex items-center gap-5 lg:bg-fundocinza  rounded-2xl w-auto md:bg-white'>
      <div className='gap-4 lg:gap-9 flex flex-col mx-16'>
        <h2 className='titulocardfazerparte'>estudar<br /> no PAQ</h2>
        <p className='textinhofazerparte w-full'>Se você é um <span className='font-bold'>jovem de quebrada da<br />Grande Floripa</span> e tem entre <span className='font-bold'>16 e 21<br /> anos</span>, vem participar do PAQ e<br />transformar o seu futuro! </p>
        <div className='hidden lg:block'>
          <Button title='Quero ser educando' href='/' width='225px' height='55px'></Button>
        </div>
        <div className='hidden md:block lg:hidden'>
          <Button title='Quero ser educando' href='/' width='160px' height='45px' />
        </div>
      </div>
      <Image src={anajulia} alt='' width={450} height={526} className='hidden lg:block aspect-auto object-cover rounded-2xl my-0' />
      <Image src={anajulia} alt='' width={270} height={333} className='hidden md:block aspect-auto object-cover rounded-2xl lg:hidden my-0' />
    </div>
    {/* Card Mobile */}
    <div className='md:hidden flex flex-col items-center gap-4 pb-6 justify-center border border-solid border-azul-paq rounded-2xl w-full'>
      <Image src={anajuliamobile} alt='' width={270} height={190} className='object-contain rounded-t-2xl my-0' />
      <h2 className='titulocardfazerparte'>Educando</h2>
      <p className='textinhofazerparte'>Se você é um <span className='font-bold'>jovem de quebrada da<br />Grande Floripa</span> e tem entre <span className='font-bold'>16 e 21<br /> anos</span>, vem participar do PAQ e<br />transformar o seu futuro! </p>
      <Button title='Quero ser educando' href='/' width='160px' height='45px' />
    </div>
  </div>
);

const CardContent2: React.FC = () => (
  <div>
    {/* Card Desktop e tablet */}
    <div className='hidden md:flex items-center gap-5 lg:bg-fundocinza  rounded-2xl w-auto md:bg-white'>
      <div className='gap-4 lg:gap-9 flex flex-col mx-16'>
        <h2 className='titulocardfazerparte'>mentorar<br /> no PAQ</h2>
        <p className='textinhofazerparte w-full'>Traga sua bagagem e experiências<br />para trocar com nossos jovens.<br /> Essa é uma oportunidade incrível de<br />conexão, onde você se desafia a<br />ensinar e também a aprender!</p>
        <div className='hidden lg:block'>
          <Button title='Quero ser mentor' href='/' width='225px' height='55px' />
        </div>
        <div className='hidden md:block lg:hidden'>
          <Button title='Quero ser mentor' href='/' width='160px' height='45px' />
        </div>
      </div>
      <Image src={evanz} alt='' width={450} height={526} className='hidden lg:block aspect-auto object-cover rounded-2xl my-0' />
      <Image src={evanz} alt='' width={270} height={333} className='hidden md:block aspect-auto object-cover rounded-2xl lg:hidden my-0' />
    </div>
    {/* Card Mobile */}
    <div className='md:hidden flex flex-col items-center gap-4 pb-6 justify-center border border-solid border-azul-paq rounded-2xl  w-full'>
      <Image src={evanz} alt='' width={270} height={190} className='object-contain rounded-t-2xl my-0' />
      <h2 className='titulocardfazerparte'>Mentor</h2>
      <p className='textinhofazerparte'>Traga sua bagagem e experiências<br />para trocar com nossos jovens.<br /> Essa é uma oportunidade incrível de<br />conexão, onde você se desafia a<br />ensinar e também a aprender!</p>
      <Button title='Quero ser mentor' href='/' width='160px' height='45px' />
    </div>
  </div>
);

const CardContent3: React.FC = () => (
  <div>
    {/* Card Desktop e tablet */}
    <div className='hidden md:flex items-center gap-5 lg:bg-fundocinza  rounded-2xl w-auto md:bg-white'>
      <div className='gap-4 lg:gap-9 flex flex-col mx-16'>
        <h2 className='titulocardfazerparte'>Voluntário<br /> no PAQ</h2>
        <p className='textinhofazerparte w-full'>Venha fazer parte da da missão<br />do Prototipando a Quebrada <br /> colaborando com o que você faz de <br />melhor - todas as áreas tem a sua<br />importância, certo? </p>
        <div className='hidden lg:block'>
          <Button title='Quero ser voluntario' href='/' width='225px' height='55px' />
        </div>
        <div className='hidden md:block lg:hidden'>
          <Button title='Quero ser voluntario' href='/' width='160px' height='45px' />
        </div>
      </div>
      <Image src={costaspaq} alt='' width={450} height={526} className='hidden lg:block aspect-auto object-cover rounded-2xl my-0' />
      <Image src={costaspaq} alt='' width={270} height={333} className='hidden md:block aspect-auto object-cover rounded-2xl lg:hidden my-0' />
    </div>
     {/* Card Mobile */}
    <div className='md:hidden flex flex-col items-center gap-4 pb-6 justify-center ounded-2xl border border-solid border-azul-paq rounded-2xl w-full'>
      <Image src={costaspaq} alt='' width={270} height={190} className='object-contain rounded-t-2xl my-0' />
      <h2 className='titulocardfazerparte'>Voluntário</h2>
      <p className='textinhofazerparte'>Venha fazer parte da da missão<br />do Prototipando a Quebrada <br /> colaborando com o que você faz de <br />melhor - todas as áreas tem a sua<br />importância, certo? </p>
      <Button title='Quero ser voluntario' href='/' width='160px' height='45px' />
    </div>
  </div>

);

export default CardVenhaFazerParte;