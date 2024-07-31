import Image from "next/image"
import Button from "../../button"
import './CardEmpresaMadrinha.css'

import soho from '../img/SOHO.png'
import madrinha from '../img/Madrinha.png'


export default function CardEmpresaMadrinha() {
    return (
       <DesktopMadrinha/>
    )
}

const DesktopMadrinha : React.FC = () =>{
    return <div className='hidden md:flex items-center gap-5 lg:bg-fundocinza  rounded-2xl w-auto md:bg-white'>
        <div className='lg:gap-9 gap-4 flex flex-col mx-16'>
            <div className="flex flex-col items-center">
                <Image src={madrinha} alt="" width={117} height={109} />
                <h2 className='EmpresaMadrinhaTitulo'>Empresas<br /> 
                <span className="font-bold underline decoration-azulopcoes">Madrinhas</span></h2>
            </div>
            <p className='textinhofazerparte w-full'>Se você é um <span className='font-bold'>jovem de quebrada da<br/>Grande Floripa</span> e tem entre <span className='font-bold'>16 e 21<br /> anos</span>, vem participar do PAQ e<br />transformar o seu futuro! </p>
            <div className='hidden lg:block'>
                <Button title='Quero estudar no PAQ' href='/' width='225px' height='55px'></Button>
            </div>
            <div className='hidden md:block lg:hidden'>
                <Button title='Quero ser Madrinha!' href='/' width='160px' height='45px' />
            </div>
        </div>
        <Image src={soho} alt='' width={450} height={526} className='hidden lg:block aspect-auto object-cover rounded-2xl m-0' />
        <Image src={soho} alt='' width={270} height={333} className='hidden md:block aspect-auto object-cover m-0 rounded-2xl lg:hidden' />
    </div>
}