import Image from "next/image";
import VideoConexao from "./VideoConexao";
import Button from "../button";

export default function ConectarETransformar() {
    return (

        <div className="flex w-full pt-[24px] flex-col items-center gap-[16px] justify-center">
            <div className="pt-6">
                <Image src='/Vector.svg' width={70} height={70} alt="" className="mb-6" />
            </div>
            <div>
                <Image src='/Vector.png' width={53} height={53} alt="" />
            </div>
            <div className="text-[#00171F] text-center font-formula-condensed text-[45px] font-normal leading-[40px] uppercase mt-2">
                <h1 >CONECTAR E</h1>
                <h2 className="text-[#00171F] font-formula-condensed text-[45px] font-bold leading-[40px] uppercase">TRANSFORMAR!</h2>
            </div>
            <div className="pt-4 text-black text-center font-poppins text-[14px] font-normal leading-[15px] tracking-[-0.12px] w-[218px;]">
                <p>Somos o
                    <span className="text-black font-poppins text-[14px] font-bold leading-[15px] tracking-[-0.12px]"> Prototipando a Quebrada, </span>
                    mas pode chamar de <span className="text-black font-poppins text-[14px] font-bold leading-[15px] tracking-[-0.12px]"> PAQ! </span>
                </p>
            </div>
            <div className="pt-2 text-black text-center font-poppins text-[14px] font-normal leading-[15px] tracking-[-0.12px] w-[218px;]">
                <p className="text-black ">
                    Nossa missão é <span className="text-black font-poppins text-[14px] font-bold leading-[15px] tracking-[-0.12px]"> conectar a juventude da periferia </span> ao conhecimento e oportunidades
                    do <span className="text-black font-poppins text-[14px] font-bold leading-[15px] tracking-[-0.12px]">  ecossistema de tecnologia! </span></p>
            </div>
            <VideoConexao />
            <div className="pt-4 text-black text-center font-poppins text-[14px] font-normal leading-[15px] tracking-[-0.12px] w-[218px;]">
                <p>Além de uma ONG, somos uma
                    <span className="text-black font-poppins text-[14px] font-bold leading-[15px] tracking-[-0.12px]"> comunidade de aprendizagem </span>
                </p>
            </div>
            <div className="py-2 text-black text-center font-poppins text-[14px] font-normal leading-[15px] tracking-[-0.12px] w-[218px;]">
                <p className="text-black ">
                    Somos uma ponte<span className="text-black font-poppins text-[14px] font-bold leading-[15px] tracking-[-0.12px]"> entre a quebrada
                        e os centros de inovação </span> e acreditamos
                    que acabar com a desigualdade social
                    do <span className="text-black font-poppins text-[14px] font-bold leading-[15px] tracking-[-0.12px]">
                        é uma missão coletiva. </span></p>
            </div>
            <Button title="NOSSA HISTÓRIA" href="" width="150px" height="42px"/>
        </div>
    );
}
