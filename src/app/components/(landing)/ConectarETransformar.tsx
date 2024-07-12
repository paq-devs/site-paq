import Image from "next/image";

export default function ConectarETransformar() {
    return (
        <div className="flex justify-center items-center max-[450px]:pt-8 max-[450px]:px-8 mb-0">
            <div className='max-[450px]:flex max-[450px]:w-full max-[450px]:flex-col max-[450px]:py-6 max-[450px]:px-0 max-[450px]:items-center max-[450px]:justify-center max-[450px]:gap-4'>
                <div className="py-8">
                    <Image src='/Vector.svg' width={70} height={70} alt="" />
                </div>
                <div>
                    <Image src='/Vector.png' width={53} height={53} alt="" />
                </div>
                <div className="text-[#00171F] text-center font-formula-condensed text-[37.405px] font-normal leading-[40px] uppercase">
                    <h1 >CONECTAR E</h1>
                    <h2 className="text-[#00171F] font-formula-condensed text-[37.405px] font-bold leading-[40px] uppercase">TRANSFORMAR!</h2>
                </div>
                <div className="py-4 text-black text-center font-poppins text-[12px] font-normal leading-[15px] tracking-[-0.12px] w-[218px;]">
                    <p>Somos o
                        <span className="text-black font-poppins text-[12px] font-bold leading-[15px] tracking-[-0.12px]"> Prototipando a Quebrada, </span>
                        mas pode chamar de <span className="text-black font-poppins text-[12px] font-bold leading-[15px] tracking-[-0.12px]"> PAQ! </span>
                    </p>
                </div>
                <div className="py-4 text-black text-center font-poppins text-[12px] font-normal leading-[15px] tracking-[-0.12px] w-[218px;]">
                    <p className="text-black text-xs">
                    Nossa missão é <span className="text-black font-poppins text-[12px] font-bold leading-[15px] tracking-[-0.12px]"> conectar a juventude da periferia </span> ao conhecimento e oportunidades
                    do <span className="text-black font-poppins text-[12px] font-bold leading-[15px] tracking-[-0.12px]">  ecossistema de tecnologia! </span></p>
                </div>
            </div>
        </div>
    );
}
