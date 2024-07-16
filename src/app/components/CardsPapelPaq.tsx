'use client'
import styled from "styled-components";
import Image from "next/image";
import { TfiSave } from "react-icons/tfi";
import { BiLike } from "react-icons/bi";
import { LuSunMedium } from "react-icons/lu";
import { GrFormPin } from "react-icons/gr";

const Secoes = styled.div`
  height: 245.22px;
  width: 161.168px;
  display: flex;
 align-items: center;
 justify-content:center;
`

const Card = styled.div`
  height: 245.22px;
  width: 196.05px;
  background-color: #0da2d2;
  margin-bottom: 10px;
  border: 2px solid #def5fc;
  border-radius: 7.216px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-family: "PP Formula Condensed";
  padding: 12px 10.825px;
  justify-content:center;
`;

const Titulo = styled.h3`
color: #FFF;
text-align: center;
font-family: "PP Formula Condensed";
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;
  letter-spacing: 1px;
`;

const Conteudo = styled.p`
  color: #fff;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px; /* 125% */
  margin-bottom: 12px;
`;

const Icone = styled(Image)`
  margin: 12px 0;
`

export default function CardsPapelPaq({
  icone,
  titulo,
  texto,
}: {
  icone: string;
  titulo: string;
  texto: string;
}) {

  function retornaIcone(icone:any) {
    switch (icone){
      case "joinha":
        return (<BiLike />);
      case "fogos":
        return (<LuSunMedium />);
        case "save":
        return (<TfiSave />);
      case "pin":
        return (<GrFormPin />);
    }
  }

  


  return (

    <Card className="rotation">
        <Secoes>
        {retornaIcone(icone)}
        </Secoes>
        <Secoes>
        <Titulo>{titulo}</Titulo>
        </Secoes>
        <Secoes>
        <Conteudo>{texto}</Conteudo>
        </Secoes>
    </Card>

  );
}
