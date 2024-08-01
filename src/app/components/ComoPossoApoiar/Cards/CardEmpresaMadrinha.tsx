import Image from "next/image"
import './CardEmpresaMadrinha.css'

import soho from '../img/SOHO.png'
import madrinha from '../img/Madrinha.png'
import ButtonPreto from "../ButtonPreto"


export default function CardEmpresaMadrinha() {
    return (
        <div>
            <div className="hidden md:block">
                <DesktopMadrinha/>
            </div>
            <div className="md:hidden">
                <MobileMadrinha />
            </div>
        </div>
    )
}

const DesktopMadrinha : React.FC = () =>{
    return <div className='hidden md:flex items-center gap-5 lg:bg-fundocinza  rounded-2xl w-auto md:bg-white'>
        <div className='lg:gap-9 gap-4 flex flex-col mx-16'>
            <div className="flex flex-col items-center">
                <Image src={madrinha} alt="" width={117} height={109} className="hidden lg:block"/>
                <h2 className='EmpresaMadrinhaTitulo'>Empresas<br /> 
                <span className="font-bold underline decoration-azulopcoes">Madrinhas</span></h2>
            </div>
            <p className='textinhofazerparte w-full'>Seja parte da transformação e construa<br/>
            junto com a gente um novo mercado de <br /> 
            tecnologia, mais diverso, equalitário e<br />
            inovador! </p>
            <div className='hidden lg:block'>
                <ButtonPreto title='Quero ser Madrinha!' href='/' width='225px' height='55px' />
            </div>
            <div className='hidden md:block lg:hidden'>
                <ButtonPreto title='Quero ser Madrinha!' href='/' width='160px' height='45px' />
            </div>
        </div>
        <Image src={soho} alt='' width={450} height={526} className='hidden lg:block aspect-auto object-cover rounded-2xl m-0' />
        <Image src={soho} alt='' width={270} height={333} className='hidden md:block aspect-auto object-cover m-0 rounded-2xl lg:hidden' />
    </div>
}

const MobileMadrinha : React.FC = () => {
    return(
        <div className="flex flex-col items-center bg-white p-9 rounded-2xl">
           <Image src={madrinha} alt="" width={117} height={109} />
           <h2 className="EmpresaMadrinhaTitulo">Empresas<br/>
           <span className="font-bold underline decoration-azulopcoes">Madrinhas</span></h2>
           <p className="text-center font-poppins text-xs leading-[15px] w-full">Seja parte da transformação e <br/>
            construa junto com a gente um novo<br/>
             mercado de tecnologia, mais <br/>
             diverso, equalitário e inovador!</p>
             <ButtonPreto title='Quero ser Madrinha!' href='/' width='160px' height='45px' />
        </div>
    )
}