import Image from "next/image"
import imgNote from './Notebooks-24 1.svg'
import styleSecao1 from './SecaoInicial.module.css'
export default function SecaoInicial(){
    return(
        <>
            


            <div className={styleSecao1.teste}>
                <p className={styleSecao1.paragrapo}></p>
                <Image
                    src={imgNote}
                    width={30}
                    height={30}
                    alt="teste"
                    className={styleSecao1.imgTeste}
                />
            </div>


            
        </>
    )
}