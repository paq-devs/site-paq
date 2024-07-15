'use client'
import styled from "styled-components";
import imagemRelogio from './img/relogio.png'
import Image from 'next/image'
import GlobalStyle from './fontPaq'
import CardImpaqtrometro from "./cardImpaqtrometro";


const Impaqtrometrofundo = styled.div`
    width: auto;
    height: 1505px;
    border-radius: 20px;
    background: #00171F;
    padding: 53px 33px;
`;

const Cabecalho = styled.div`
    color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 11px;
    h2 {
        font-family: "PP Formula Condensed";
        color: #FFF;
        font-size: 37.405px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px;
        text-align: center;
        text-transform: uppercase;
        margin-top: 26px;
    }
    h3 {
        color: #FFF;
        font-family: "PP Formula Condensed";
        font-size: 37.405px;
        font-style: normal;
        font-weight: 400;
        line-height: 40px;
        text-transform: uppercase;
    }
    p{
        color: #FFF;
        text-align: center;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 15px; /* 125% */
        letter-spacing: -0.12px;
    }
`

const PaqEstilizado = styled.span`
    color: #1EB4E9;
`

export default function Impaqtrometro() {
    return (
        <div>
            <GlobalStyle/>  
            <Impaqtrometrofundo>
                <Cabecalho>
                    <Image src={imagemRelogio} alt='' width={75} height={75} />
                    <div>
                        <h2> IM<PaqEstilizado>PAQ</PaqEstilizado>TÔMETRO:</h2>
                        <h3>o impacto real</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven</p>
                </Cabecalho>
                <CardImpaqtrometro image="grupoDePessoas" numero="80" titulo="jovens" descricao="Ativos na comunidade de aprendizagem" />
                <CardImpaqtrometro image="grupoDePessoas" numero="200" titulo="jovens" descricao="Atendidos em nossos programas" />
                <CardImpaqtrometro image="grupoDePessoas" numero="40" titulo="jovens" descricao="Trabalhando em empresas de tecnologia" />
                <CardImpaqtrometro image="grupoDePessoas" numero="780" titulo="reais" descricao="Ativos na comunidade de aprendizagem" />
                
            </Impaqtrometrofundo>
        </div>
    )
}