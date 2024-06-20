import Image from "next/image"

export default function Section2() {
    return (
        <div className="flex justify-center items-center">
            <div className='max-[400px]:flex max-[400px]:w-full max-[400px]:flex-col max-[400px]:py-6 max-[400px]:px-0 max-[400px]:items-center max-[400px]:justify-center max-[400px]:gap-4'>
                <div>
                    <Image src='/Vector.png' width={53} height={53} alt="" />
                </div>
                <div className="text-center">
                    <h1 className="text-3xl text-black">CONECTAR E</h1>
                    <h2 className="text-3xl text-black font-bold">TRANSFORMAR!</h2>
                </div>
                <div>
                    <p className="text-black">Somos o
                        Prototipando a Quebrada,
                        mas pode chamar de PAQ!

                        Nossa missão é conectar a juventude da periferia ao conhecimento e oportunidades
                        do ecossistema de tecnologia!</p>
                </div>
            </div>
        </div>
    )
}