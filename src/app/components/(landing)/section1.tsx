import { Header } from "../header";
import Button from "../button";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";

export default function Section1(){
    return (
        <div className='h-screen relative '>
            <Header/>
            <CiLinkedin />
            <Image src='/BG.png' className='w-full h-full top-0 left-0' width={1600} height={1600} alt={""}></Image>

            <div className='absolute bg-transparent flex h-full items-center justify-center paq-imae'>
                <div className='flex flex-col justify-center items-center gap-3 '>
                    <h1 className='text-5xl max-w-64 items-center'>O futuro da tecnologia Começa aqui.</h1>
                    <p className=''>Desde 2018, o PAQ tem trabalhado incansavelmente para impulsionar o conhecimento e as oportunidades no mundo da tecnologia.</p>
                    <Button title="DOE PARA O PAQ" href="/" />
                </div>
            </div>
        </div>
    )
}

