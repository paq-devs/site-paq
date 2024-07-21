"use client";

import Image from "next/image";
import styled from "styled-components";
import PaqAccordion from "./PaqAccordion";
import perguntas from "./perguntasFrequentes.json";

const ImagemFluxo = styled.div`
  display: flex;
  justify-content: center;

  img {
    margin: 50px 10px;
  }
`;

const SubtituloSecao = styled.div`
  display: flex;
  justify-content: center;
  h2 {
    font-size: 2.5rem;
    max-width: 500px;
  }
`;

const AreaDePerguntasERespostas = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export default function PaqFaq() {
  return (
    <div>
      <ImagemFluxo>
        <Image
          src="images/perguntas-frequentes.svg"
          width={100}
          height={300}
          alt="Ícone de verificação"
        />
      </ImagemFluxo>
      <SubtituloSecao>
        <h2>
          <strong>Perguntas</strong> Frequentes
        </h2>
      </SubtituloSecao>
      <p>
        Essas são as perguntas que mais são feitas para o nosso time e decidimos
        colocar algumas respostas para otimizar.
      </p>
      <AreaDePerguntasERespostas>
        {perguntas.map((pergunta) => (
          <PaqAccordion
            key={pergunta.pergunta}
            pergunta={pergunta.pergunta}
            resposta={pergunta.resposta}
          />
        ))}
      </AreaDePerguntasERespostas>
    </div>
  );
}
