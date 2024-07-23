'use-client'
import styled from 'styled-components';
import grupoDePessoas from './img/grupoDePessoas.png'
import Image from 'next/image'
import voluntariado from './img/voluntariado1.png'


type props = {
    image: any;
    numero: string;
    titulo: string;
    descricao: string;
}

const CardImpaqtrometrofundo = styled.div`
    width: 252px;
    height: 215px;
    flex-shrink: 0;
    border-radius: 25px;
    background: #122329;
    padding: 19px 0;

`
const ParteDeCima = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    h2 {
        color: #FFF;
        text-align: right;
        font-family: "PP Formula Condensed";
        font-size: 64px;
        font-style: normal;
        font-weight: 400;
        line-height: 71px;
        text-transform: uppercase;
        margin-right: 13px;
    }
    h3 {
        color: #FFF;
        text-align: right;
        font-family: "PP Formula Condensed";
        font-size: 48.584px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
        text-transform: uppercase;
        margin-right: 13px;
    }
`
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
const ParteDeBaixo = styled.div`
    color: #FFF;
    width: 155px;
    text-align: right;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    margin-left: 88px;

`

export default function CardImpaqtrometro({ image, numero, titulo, descricao }: props) {
    return (
        <div>
            <CardImpaqtrometrofundo>
                <div>
                    <ParteDeCima>
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
                    </ParteDeCima>
                    <ParteDeBaixo>
                        <div>
                            <p>{descricao}</p>
                        </div>
                    </ParteDeBaixo>
                </div>
                <div>
                </div>
            </CardImpaqtrometrofundo>
        </div>
    )
}