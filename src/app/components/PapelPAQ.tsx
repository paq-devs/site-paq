"use client";
import { link } from "fs";
import Image from "next/image";
import CardsPapelPaq from "./CardsPapelPaq";
import joinha from "./joinha.svg";
import styled from "styled-components";

const ListaDeCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap:-12px;
  width: 777.84px;
  height: 290.04px;
  opacity: 0px;
  justify-content: center;

  :nth-child(odd){
  transform: rotate(-1.48deg); 
  } 
  :nth-child(even){
  transform: rotate(1.837deg);
  }
`;

const Carrosel = styled.div`
     overflow-x: auto;
`

export default async function PapelPAQ() {
  // const response = await fetch('http://localhost:5000/cards')
  // const data = await response.json()
  const data = [
    {
      id: 0,
      icone: "",
      titulo: "Acolhe e empodera",
      texto:"Despertamos os jovem para que eles enxerguem novos futuros possíveis, se sintam pertencentes ao ecossistema tech e se empoderem para ocupar esses espaços.",
    },
    {
      id: 1,
      icone: "",
      titulo: "Expande a Visão",
      texto: "“Só sonhamos com aquilo que conhecemos”. Conectamos os jovens com novos espaços, pessoas e experiências, ampliando sua visão sobre a cultura tech e também sobre o mundo.",
    },
    {
      id: 2,
      icone: "",
      titulo: "qualifica em tech",
      texto:"Fornecemos acesso a infraestrutura de qualidade, cursos, mentorias e também o acompanhamento necessário para o desenvolvolvimento dos jovens até a conquista do sucesso nas principais carreiras  de tecnologia.",
    },
    {
      id: 3,
      icone: "",
      titulo: "insere no mercado",
      texto:"Promovemos mobilidade social através da empregabilidade, conectando os jovens qualificados às vagas em empresas da área de tecnologia.",
    },
  ];
  return (
    <section>
      <p>icone</p>
      <h3>Papel do PAQ na missão</h3>
      <p>
        O PAQ fortalece a jornada de quem tá com a gente através desses pilares:
      </p>
        <Carrosel>
      <ListaDeCards>
        {data.map((item: any) => (
          <CardsPapelPaq
            key={item.id}
            icone={joinha}
            titulo={item.titulo}
            texto={item.texto}
          />
        ))}
      </ListaDeCards>
      </Carrosel>
    </section>
  );
}
