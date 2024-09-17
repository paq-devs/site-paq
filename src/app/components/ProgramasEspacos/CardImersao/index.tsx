import MobileCard from "../MobileCard";
import imersao from "../img/bg-imersao.png";

export default function CardImersao() {
  return (
    <MobileCard
      titulo="Imersão"
      imagem={imersao}
      descricaoCurta="Primeiros passos para explorar as carreiras cultura do ecossistema de tecnologia,  desenvolver habilidades e competências básicas - Porta de entrada para quem quer iniciar no PAQ!"
    >
      <p>
        Nosso movimento é de{" "}
        <strong>
          trazer as quebradas pra dentro dos centros de inovação e tecnologia
        </strong>
        , empoderando e mostrando que esses espaços podem e devem ser ocupados!
      </p>

      <p>
        Para que isso aconteça precisamos garantir espaços com toda a estrutura
        necessária para que os jovens possam se desenvolver com qualidade e
        imersos nos mesmos ambientes que empresas inovadoras.
      </p>
    </MobileCard>
  );
}
