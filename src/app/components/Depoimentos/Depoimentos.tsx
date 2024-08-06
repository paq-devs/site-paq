import CardDepoimento from "./CardDepoimento";
import depoimentos from "./cards";
import React from "react";
import style from "./CardDepoimento.module.css"

export default function Depoimentos() {

  return (
    <section className="bg-[#00171F]">
      <aside></aside>
      <div className={style.container_card}>
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
      </div>
      </section>
  );
}