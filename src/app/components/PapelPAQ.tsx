'use client'
import CardsPapelPaq from "./CardsPapelPaq";
import styled from "styled-components";
import './PapelPaq.css'
import { HiOutlineLightBulb } from "react-icons/hi";
import { Poppins } from 'next/font/google';
import lampada from "./lampada.svg"
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const TextoinfoPAQ = styled.p`
color: #00171F;
text-align: center;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 15px; /* 125% */
letter-spacing: -0.12px;
`

const PapelPAq = styled.h3 `
color: #00171F;
text-align: center;
font-family: "PP Formula Condensed";
font-size: 37.405px;
font-style: normal;
font-weight: 700;
line-height: 40px; /* 106.936% */
text-transform: uppercase;`

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
    <section className="section-papelpaq">
      <div className="text-center flex flex-col items-center pt-[72px] pr-[33px] pb-[32px] pl-[33px]">
      <p><HiOutlineLightBulb  className="fill-[#0DA2D2] w-[87.432px] h-[80.861px]"/></p>
      <PapelPAq>papel do paq<br></br> na missão</PapelPAq>
      <TextoinfoPAQ className={poppins.variable}>
        O PAQ fortalece a jornada de quem tá <br></br> com a gente através desses pilares:
      </TextoinfoPAQ>
      </div>
      <ContainerOverflow className="pt-[0px] pr-[43px] pb-[40px] pl-[43px]  ">
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
