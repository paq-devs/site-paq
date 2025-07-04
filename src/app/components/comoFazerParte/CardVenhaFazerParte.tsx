"use client";

import { useState, ReactNode } from 'react';
import Image from 'next/image';
import Button from '../button';

import anajulia from './img/anajulia.png'
import evanz from './img/evanz.png'
import costaspaq from './img/costaspaq.png'

import anajuliamobile from './img/anajuliamobile.png'
import style from "./CardVenhaFazerParte.module.css"

type CardProps = {
  content: ReactNode;
};

const CardVenhaFazerParte: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number>(1);

  const handleClick = (buttonId: number) => {
    setSelectedButton(buttonId);
  };

  return (
    <div id="outrasFormasDeFazerParte" className="flex flex-col items-center mt-9">
      <div className={style.containerButtons}>
        <button
          onClick={() => handleClick(1)}
          className={`${style.btn} ${selectedButton === 1 ? 'bg-azulopcoes text-white rounded-[40px]  my-1' : ' text-black rounded-[40px] my-1 '}`}
        >
          Estudar
        </button>
        <button
          onClick={() => handleClick(2)}
          className={`${style.btn} ${selectedButton === 2 ? 'bg-azulopcoes text-white rounded-[40px] my-1' : ' text-black rounded-[40px] my-1 '}`}
        >
          Mentorar
        </button>
        <button
          onClick={() => handleClick(3)}
          className={`${style.btn} ${selectedButton === 3 ? 'bg-azulopcoes text-white rounded-[40px] my-1' : ' text-black rounded-[40px] my-1 '}`}
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
    <div className={`${style.FazerparteContainer}`}>
      <div className={`${style.textinhofazerparteContainer}`}>
        <h2 className={style.titulocardfazerparte}>estudar<br /> no PAQ</h2>
        <p className={`${style.textinhofazerparte}`}>Se você é um <span className='font-bold'>jovem de quebrada da<br />Grande Floripa</span> e tem entre <span className='font-bold'>16 e 21<br /> anos</span>, vem participar do PAQ e<br />transformar o seu futuro! </p>
        <div className='hidden lg:block'>
          <Button title='Quero ser educando' newTab href='https://forms.gle/zxUdENyFWK5ApHQh9' width='225px' height='55px'></Button>
        </div>
        <div className='hidden md:block lg:hidden'>
          <Button title='Quero ser educando' newTab href='https://forms.gle/zxUdENyFWK5ApHQh9' width='160px' height='45px' />
        </div>
      </div>
      <Image src={anajulia} alt='' width={300} height={400} className='hidden lg:block aspect-auto object-cover rounded-2xl my-0' />
      <Image src={anajulia} alt='' width={270} height={333} className='hidden md:block aspect-auto object-cover rounded-2xl lg:hidden my-0' />
    </div>
    {/* Card Mobile */}
    <div className={style.cardMobile}>
      <Image src={anajuliamobile} alt='' width={270} height={190} className='object-contain rounded-t-2xl my-0' />
      <h2 className={style.titulocardfazerparte}>Educando</h2>
      <p className={`${style.textinhofazerparte}w-full`}>Se você é um <span className='font-bold'>jovem de quebrada da<br />Grande Floripa</span> e tem entre <span className='font-bold'>16 e 21<br /> anos</span>, vem participar do PAQ e<br />transformar o seu futuro! </p>
      <Button title='Quero ser educando' newTab href='https://forms.gle/zxUdENyFWK5ApHQh9' width='160px' height='45px' />
    </div>
  </div>
);

const CardContent2: React.FC = () => (
  <div>
    {/* Card Desktop e tablet */}
    <div className={style.FazerparteContainer}>
      <div className={`${style.textinhofazerparteContainer}`}>
        <h2 className={style.titulocardfazerparte}>mentorar<br /> no PAQ</h2>
        <p className={`${style.textinhofazerparte}`}>Traga sua bagagem e experiências<br />para trocar com nossos jovens.<br /> Essa é uma oportunidade incrível de<br />conexão, onde você se desafia a<br />ensinar e também a aprender!</p>
        <div className='hidden lg:block'>
          <Button title='Quero ser mentor' newTab href='https://forms.gle/MyMESxtxj6iT9P3x6' width='225px' height='55px' />
        </div>
        <div className='hidden md:block lg:hidden'>
          <Button title='Quero ser mentor' newTab href='https://forms.gle/MyMESxtxj6iT9P3x6' width='160px' height='45px' />
        </div>
      </div>
      <Image src={evanz} alt='' width={300} height={400} className='hidden lg:block aspect-auto object-cover rounded-2xl my-0' />
      <Image src={evanz} alt='' width={270} height={333} className='hidden md:block aspect-auto object-cover rounded-2xl lg:hidden my-0' />
    </div>
    {/* Card Mobile */}
    <div className={style.cardMobile}>
      <Image src={evanz} alt='' width={270} height={190} className='object-contain rounded-t-2xl my-0' />
      <h2 className={style.titulocardfazerparte}>Mentor</h2>
      <p className={`${style.textinhofazerparte}w-full`}>Traga sua bagagem e experiências<br />para trocar com nossos jovens.<br /> Essa é uma oportunidade incrível de<br />conexão, onde você se desafia a<br />ensinar e também a aprender!</p>
      <Button title='Quero ser mentor' newTab href='https://forms.gle/MyMESxtxj6iT9P3x6' width='160px' height='45px' />
    </div>
  </div>
);

const CardContent3: React.FC = () => (
  <div>
    {/* Card Desktop e tablet */}
    <div className={style.FazerparteContainer}>
      <div className={`${style.textinhofazerparteContainer}`}>
        <h2 className={style.titulocardfazerparte}>Voluntário<br /> no PAQ</h2>
        <p className={`${style.textinhofazerparte}`}>Venha fazer parte da da missão<br />do Prototipando a Quebrada <br /> colaborando com o que você faz de <br />melhor - todas as áreas tem a sua<br />importância, certo? </p>
        <div className='hidden lg:block'>
          <Button title='Quero ser voluntario' newTab href='/' width='225px' height='55px' />
        </div>
        <div className='hidden md:block lg:hidden'>
          <Button title='Quero ser voluntario' newTab href='/' width='160px' height='45px' />
        </div>
      </div>
      <Image src={costaspaq} alt='' width={300} height={400} className='hidden lg:block aspect-auto object-cover rounded-2xl my-0' />
      <Image src={costaspaq} alt='' width={270} height={333} className='hidden md:block aspect-auto object-cover rounded-2xl lg:hidden my-0' />
    </div>
     {/* Card Mobile */}
    <div className={style.cardMobile}>
      <Image src={costaspaq} alt='' width={270} height={190} className='object-contain rounded-t-2xl my-0' />
      <h2 className={style.titulocardfazerparte}>Voluntário</h2>
      <p className={style.textinhofazerparteMobile}>Venha fazer parte da da missão<br />do Prototipando a Quebrada <br /> colaborando com o que você faz de <br />melhor - todas as áreas tem a sua<br />importância, certo? </p>
      <Button title='Quero ser voluntario' newTab href='/' width='160px' height='45px' />
    </div>
  </div>

);

export default CardVenhaFazerParte;