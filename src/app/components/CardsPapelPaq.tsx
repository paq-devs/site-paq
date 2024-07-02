"use client";
import styled from "styled-components";
import Image from "next/image";

const Card = styled.div`
  height: 200px;
  width: 500px;
  background-color: #0da2d2;
  margin-bottom: 10px;
  border: 2px solid #def5fc;
  border-radius: 7.216px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

export default function CardsPapelPaq({
  icone,
  titulo,
  texto,
}: {
  icone: string;
  titulo: string;
  texto: string;
}) {
  return (
    <Card>
      <div>
        <Image src={icone} alt="" />
      </div>
      <div>
        <h1>{titulo}</h1>
      </div>
      <div>
        <p>{texto}</p>
      </div>
    </Card>
  );
}
