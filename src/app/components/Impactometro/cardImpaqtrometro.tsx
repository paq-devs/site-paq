'use-client'
import styled from 'styled-components';
import grupoDePessoas from './img/grupoDePessoas.png'
import Image from 'next/image'
import voluntariado from './img/voluntariado1.png'
import './cardImpaqtrometro.css'


type props = {
    image: any;
    numero: string;
    titulo: string;
    descricao: string;
}


const Icones = styled.div`
    display:flex;
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    background-color: #0EB3E8;
    border-radius: 100%;
    align-items: center;
    justify-content:center;
    margin-left: -10px
`
const NumeroEstilizado = styled.span`
    color: #0EB3E8;
`

export default function CardImpaqtrometro({ image, numero, titulo, descricao }: props) {
    return (
        <div className='fundoImpaqtrometro'>
                <div className='parteDeCima'>
                    <Icones>
                        <Image src={image} alt='' width={58} height={49} />
                    </Icones>
                    <div>
                        <h2>
                            +<NumeroEstilizado>{numero}</NumeroEstilizado>
                        </h2>
                        <h3>
                            {titulo}
                        </h3>
                    </div>
                    </div>
                    <div className='parteDeBaixo'>
                        <p>{descricao}</p>
                    </div>
                <div>
                </div>
        </div>
    )
}