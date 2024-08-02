import CardDepoimento from "./CardDepoimento";
import depoimentos from "./depoimentos.json";

export default function Depoimentos() {
  return (
    <section className="bg-[#00171F]">
      {depoimentos.map((depoimento) => (
        <CardDepoimento
          id={depoimento.id}
          pathFoto={depoimento.pathFoto}
          text={depoimento.text}
          name={depoimento.name}
          role={depoimento.role}
        />
      ))}
      </section>
  );
}
