import Image from "next/image"
import './CardEmpresaMadrinha.css'

import parcas from '../img/BondedosParcas.png'
import tituloparcas from '../img/tituloparcas.png'
import ButtonPreto from "../ButtonPreto"
import parcasmobile from '../img/BondedosParcasMobile.png'


export default function CardPessoaFisica() {
    return (
        <div>
            <div className="hidden md:block">
                <DesktopPessoa/>
            </div>
            <div className="md:hidden">
                <MobilePessoa />
            </div>
        </div>
    )
}

const DesktopPessoa : React.FC = () =>{
    return <div className='hidden md:flex items-center gap-5 lg:bg-fundocinza  rounded-2xl w-auto md:bg-white'>
        <div className='lg:gap-8 gap-4 flex flex-col mx-16'>
            <Image src={tituloparcas} alt="" width={263} height={192} className="flex items-center"/>
            <p className='textinhofazerparte w-full'>Se você é um <span className='font-bold'>jovem de quebrada da<br/>Grande Floripa</span> e tem entre <span className='font-bold'>16 e 21<br /> anos</span>, vem participar do PAQ e<br />transformar o seu futuro! </p>
            <div className='hidden lg:block'>
                <ButtonPreto title='Quero estudar no PAQ' href='/' width='225px' height='55px'></ButtonPreto>
            </div>
            <div className='hidden md:block lg:hidden'>
                <ButtonPreto title='Quero ser Madrinha!' href='/' width='160px' height='45px' />
            </div>
        </div>
        <Image src={parcas} alt='' width={450} height={526} className='hidden lg:block aspect-auto object-cover rounded-2xl m-0' />
        <Image src={parcas} alt='' width={270} height={333} className='hidden md:block aspect-auto object-cover m-0 rounded-2xl lg:hidden' />
    </div>
}

const MobilePessoa : React.FC = () => {
    return(
        <div className="flex flex-col items-center bg-white px-9 pt-4 pb-6 rounded-2xl">
           <Image src={parcasmobile} alt="" width={220} height={398} className="objecti-fit aspect-auto"/>
           <p className="text-center font-poppins text-xs leading-[15px] w-full">Seja parte da transformação e <br/>
            construa junto com a gente um novo<br/>
             mercado de tecnologia, mais <br/>
             diverso, equalitário e inovador!</p>
             <ButtonPreto title='Quero ser Madrinha!' href='/' width='160px' height='45px' />
        </div>
    )
}