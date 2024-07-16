'use client'
import { TfiSave } from "react-icons/tfi";
import { link } from "fs";
import Image from "next/image";
import CardsPapelPaq from "./CardsPapelPaq";
import joinha from "./joinha.svg";
import styled from "styled-components";
import './PapelPaq.css'

const ContainerOverflow = styled.div`
    overflow-x: auto;
    `

const ListaDeCards = styled.div`
    width: 500px;
    display: flex;
    flex-direction: row;
`;

const Carrosel = styled.div`
       width: 777.84px;
  height: 290.04px;
       
`

export default async function PapelPAQ() {
  // const response = await fetch('http://localhost:5000/cards')
  // const data = await response.json()
  const data = [
    {
      id: 0,
      icone: "joinha",
      titulo: "Acolhe e empodera",
      texto: "Despertamos os jovem para que eles enxerguem novos futuros possíveis, se sintam pertencentes ao ecossistema tech e se empoderem para ocupar esses espaços.",
    },
    {
      id: 1,
      icone: "fogos",
      titulo: "Expande a Visão",
      texto: "“Só sonhamos com aquilo que conhecemos”. Conectamos os jovens com novos espaços, pessoas e experiências, ampliando sua visão sobre a cultura tech e também sobre o mundo.",
    },
    {
      id: 2,
      icone: "save",
      titulo: "qualifica em tech",
      texto: "Fornecemos acesso a infraestrutura de qualidade, cursos, mentorias e também o acompanhamento necessário para o desenvolvolvimento dos jovens até a conquista do sucesso nas principais carreiras  de tecnologia.",
    },
    {
      id: 3,
      icone: "pin",
      titulo: "insere no mercado",
      texto: "Promovemos mobilidade social através da empregabilidade, conectando os jovens qualificados às vagas em empresas da área de tecnologia.",
    },
  ];
  return (
    <section>

      <p>icone</p>
      <h3>Papel do PAQ na missão</h3>
      <p>
        O PAQ fortalece a jornada de quem tá com a gente através desses pilares:
      </p>
      <ContainerOverflow>
        <Carrosel>
          <ListaDeCards>

            {data.map((item: any) => (
              <CardsPapelPaq
                key={item.id}
                icone={item.icone}
                titulo={item.titulo}
                texto={item.texto}
              />
            ))}
          </ListaDeCards>
        </Carrosel>
      </ContainerOverflow>
    </section>
  );
}
