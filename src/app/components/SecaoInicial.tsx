import Image from "next/image"
import imgTurma from './VISITA SOHO-2 1.jpg'
import imgNote from './Notebooks-24 1.svg'
import "tailwindcss/tailwind.css"
import "./SecaoInicial.css";
export default function SecaoInicial(){
  return (
    <>
      <section className="min-w-[287.37px] min-h-[288.11px] flex-col items-center">
        <div className="flex uppercase text-azul-paq text-font-sec1 leading-[53.76px]  justify-center flex-nowrap">
          <p>Um Futuro</p>
        </div>

        <div className="central">
          <p className="text1  text-azulpaq uppercase text-font-sec1 leading-[53.76px] "></p>
          <div className="imageBackground"></div>
        </div>

        <div className="">
          <img src="" alt="" />
          <p className="leading-[53.76px] text-font-sec1 ">teste</p>
        </div>
        <div className="">
          <p className="leading-[53.76px] text-font-sec1">teste</p>
          <img src="" alt="" />
        </div>
      </section>
    </>
  );
}
