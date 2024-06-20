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

        <div className="flex justify-center w-full items-center">
          <p className="text-azulpaq animate-teste uppercase text-font-sec1 leading-[53.76px] ">
            diverso
          </p>

          {/*preciso linkar a immg nesse container, mas consta que não está achando */}
          <div className="bg-[url('/components/Notebooks-24 1.svg')] w-[500px]"></div>
          <div className="imageBackground"></div>
        </div>

        <div className="">
          <img src="" alt="" />
          <p></p>
        </div>

        <div className="">
          <p></p>
          <img src="" alt="" />
        </div>
      </section>
    </>
  );
}
