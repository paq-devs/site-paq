'use client'
import styled from "styled-components";
import imagemRelogio from './img/relogio.png'
import Image from 'next/image'
import GlobalStyle from './fontPaq'
import CardImpaqtrometro from "./cardImpaqtrometro";
import Button from "../button";
import voluntariado from './img/voluntariado1.png'
import grupoDePessoas from './img/grupoDePessoas.png'
import investidor from './img/investidor1.png'
import formatura from './img/imagemformatura.png'
import yohana from './img/yohanafeliz.png'
import janvi from './img/fotinhaJanvi.png'
import suanam from './img/suanam.png'



const Impaqtrometrofundo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
        line-height: 15px;
        letter-spacing: -0.12px;
    }
`

const Corpo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 55px;

`

const PaqEstilizado = styled.span`
    color: #1EB4E9;
`

export default function Impaqtrometro() {
    return (
        <section className="w-full flex flex-col items-center rounded-[20px] bg-[#00171F] p-[53px_33px]">
            <GlobalStyle/>  
                <Cabecalho>
                    <Image src={imagemRelogio} alt='' width={75} height={75} />
                    <div>
                        <h2> IM<PaqEstilizado>PAQ</PaqEstilizado>TÔMETRO:</h2>
                        <h3>o impacto real</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven</p>
                </Cabecalho>
                <Corpo>
                    <div className="flex items-center gap-6">
                        <CardImpaqtrometro image={grupoDePessoas} numero="80" titulo="jovens" descricao="Ativos na comunidade de aprendizagem" />
                        <Image src={formatura} alt="" width={403} height={344} className="hidden xl:block aspect-auto object-contain"/>
                    </div>

                    <div className="flex items-center gap-6">
                        <Image src={yohana} alt="" width={403} height={344} className="hidden xl:block aspect-auto object-contain rounded-2xl" />
                        <CardImpaqtrometro image={voluntariado} numero="200" titulo="jovens" descricao="Atendidos em nossos programas" />
                    </div>

                    <div className="flex items-center gap-6">
                        <CardImpaqtrometro image={voluntariado} numero="40" titulo="jovens" descricao="Trabalhando em empresas de tecnologia" />
                        <Image src={janvi}  alt="" width={403} height={344} className="hidden xl:block aspect-auto object-contain  rounded-2xl"/>
                    </div> 

                    <div className="flex items-center gap-6">
                        <Image src={suanam}  alt="" width={403} height={344} className="hidden xl:block aspect-auto object-contain  rounded-2xl" />
                        <CardImpaqtrometro image={investidor} numero="780" titulo="reais" descricao="Ativos na comunidade de aprendizagem" />
                    </div>

                    <p className="mt-[55px] text-white text-center font-poppins text-[14px] not-italic font-normal leading-[15px] tracking-[-0.12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q </p>
                    <Button title="VER RELATÓRIOS" href="/" width="150px" height="42px" />
                </Corpo>
            </section>        
    )
}