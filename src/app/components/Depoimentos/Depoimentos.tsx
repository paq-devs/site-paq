import React from "react";
import CardDepoimento from "./CardDepoimento";
import depoimentos from "./cards";

export default function Depoimentos() {
  return (
    <section className="bg-[#00171F]">
      {depoimentos.map((depoimento) => (
        <CardDepoimento
          key={depoimento.id}
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
