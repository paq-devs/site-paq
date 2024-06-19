import Image from "next/image"
import imgTurma from './VISITA SOHO-2 1.jpg'
import imgNote from './Notebooks-24 1.svg'
import styleSecao1 from './SecaoInicial.module.css'
import "tailwindcss/tailwind.css"
export default function SecaoInicial(){
    return(
        <>  
        <section className="central">

            <div className={styleSecao1.testes}>
                <p className='animate-teste'>teste</p>
                <Image
                    src={imgNote}
                    width={30}
                    height={30}
                    alt="teste"
                    className={styleSecao1.imgTeste}
                />
            </div>
        </section>
        </>
    )
}