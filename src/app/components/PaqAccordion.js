import styled from "styled-components";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";

const PerguntaResposta = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  text-align: left;
  padding: 0.5rem;
  border-radius: 10px;
  background: #f5f7fb;
`;

const AreaPergunta = styled.div`
  width: 100%;
`;

const AbreResposta = styled.div`
  display: flex;
  padding: 10px 8px;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  gap: 10px;
`;

export default function PaqAccordion({ pergunta, resposta }) {
  const [respostaAberta, setRespostaAberta] = useState(false);

  const aoClicarNoIcone = () => {
    setRespostaAberta(!respostaAberta);
  };

  return (
    <div>
      <PerguntaResposta>
        <AreaPergunta>
          <span>
            <strong>{pergunta}</strong>
          </span>
          <div>{respostaAberta && <span>{resposta}</span>}</div>
        </AreaPergunta>
        <AbreResposta>
          {respostaAberta ? (
            <BsChevronUp onClick={aoClicarNoIcone} />
          ) : (
            <BsChevronDown onClick={aoClicarNoIcone} />
          )}
        </AbreResposta>
      </PerguntaResposta>
    </div>
  );
}
