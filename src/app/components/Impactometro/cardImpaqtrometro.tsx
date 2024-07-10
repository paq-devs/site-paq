'use-client'
import styled from 'styled-components';
import grupoDePessoas from './img/grupoDePessoas.png'
import Image from 'next/image'

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
    h2 {
        color: #FFF;
        text-align: right;
        font-family: "PP Formula Condensed";
        font-size: 64px;
        font-style: normal;
        font-weight: 400;
        line-height: 71px;
        text-transform: uppercase;
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
`
const NumeroEstilizado = styled.span`
    color: #0EB3E8;
`

export default function CardImpaqtrometro() {
    return (
        <div>
            <CardImpaqtrometrofundo>
                <div>
                    <ParteDeCima>
                        <Icones>
                            <Image src={grupoDePessoas} alt='' width={58} height={49} />
                        </Icones>
                        <div>
                            <h2>
                                +<NumeroEstilizado>80</NumeroEstilizado>
                            </h2>
                            <h3>
                                JOVENS
                            </h3>
                        </div>
                    </ParteDeCima>
                </div>
                <div>
                </div>
            </CardImpaqtrometrofundo>
        </div>
    )
}