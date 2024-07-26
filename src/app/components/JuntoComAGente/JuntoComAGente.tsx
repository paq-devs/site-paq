import Image from 'next/image'
import coroa from './img/coroa.png'
import './JuntoComAGente.css'
import CardApoiadoras from './cardApoiadoras'
import CardParceira from './cardParceiras'


export default function JuntoComAGente(){
    return(
        <div className='flex flex-col items-center'>
            <Image src={coroa} alt='' width={160} height={90} className='my-9'/>
            <h2 className='corpo'><span className='font-bold'>Junto com a gente</span> <br /> nessa missão!</h2>
            <p className='paragrafo'>Nossa rede de apoio é fundamental para o sucesso de nossas iniciativas. Conheça nossos parceiros que acreditam em um futuro mais inclusivo e diversificado.</p> 
                <div className='my-10'>
                    <CardApoiadoras />
                    <CardParceira />
                </div>
            </div>
    )
}