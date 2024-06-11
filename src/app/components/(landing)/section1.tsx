import { Header } from "../header";
import Button from "../button";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import './section1.css'

export default function Section1(){
    return (
        <div className="imagemDeFundo" >
            <Header/>
                    <h1 className='text-5xl max-w-64 items-center'>O futuro da tecnologia Começa aqui.</h1>
                    <p className=''>Desde 2018, o PAQ tem trabalhado incansavelmente para impulsionar o conhecimento e as oportunidades no mundo da tecnologia.</p>
                    <Button title="DOE PARA O PAQ" href="/" />

            </div>
    )
}

