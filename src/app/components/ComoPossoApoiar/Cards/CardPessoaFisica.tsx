import Image from "next/image"
import Button from "../../button"
import './CardEmpresaMadrinha.css'

import parcas from '../img/BondedosParcas.png'
import tituloparcas from '../img/tituloparcas.png'


export default function CardPessoaFisica() {
    return (
       <DesktopPessoa/>
    )
}

const DesktopPessoa : React.FC = () =>{
    return <div className='hidden md:flex items-center gap-5 lg:bg-fundocinza  rounded-2xl w-auto md:bg-white'>
        <div className='lg:gap-8 gap-4 flex flex-col mx-16'>
            <Image src={tituloparcas} alt="" width={263} height={192} className="flex items-center"/>
            <p className='textinhofazerparte w-full'>Se você é um <span className='font-bold'>jovem de quebrada da<br/>Grande Floripa</span> e tem entre <span className='font-bold'>16 e 21<br /> anos</span>, vem participar do PAQ e<br />transformar o seu futuro! </p>
            <div className='hidden lg:block'>
                <Button title='Quero estudar no PAQ' href='/' width='225px' height='55px'></Button>
            </div>
            <div className='hidden md:block lg:hidden'>
                <Button title='Quero ser Madrinha!' href='/' width='160px' height='45px' />
            </div>
        </div>
        <Image src={parcas} alt='' width={450} height={526} className='hidden lg:block aspect-auto object-cover rounded-2xl m-0' />
        <Image src={parcas} alt='' width={270} height={333} className='hidden md:block aspect-auto object-cover m-0 rounded-2xl lg:hidden' />
    </div>
}