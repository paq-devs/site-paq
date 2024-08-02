'use client'

import Image from "next/image"
import styled from "styled-components"

export async function Depoimentos(){



    const Section = styled.section`
    width: 80rem;
    height: 88.6875rem;
    flex-shrink: 0;
    background: #00171F;
    `
    const Historias = styled.div`
    display: flex;
    width: 100vw;
    padding: 3.75rem 0rem;
    flex-direction: column;
    align-items: center;
    gap: 3.5625rem;
    `
    const TituloHistoria = styled.h2`
    color: #FFF;
    text-align: center;
    font-family: "PP Formula Condensed";
    font-size: 4.20875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.25rem; /* 100.98% */
    text-transform: uppercase;
    `

    const ParteCards = styled.div`

    `

    return(
        <Section>
            <Historias>
                <Image src={""} alt="" />            
                <TituloHistoria>Histórias de quem já viveu!</TituloHistoria>
            </Historias>
            <ParteCards>
                
            </ParteCards>
        </Section>       
    )
}