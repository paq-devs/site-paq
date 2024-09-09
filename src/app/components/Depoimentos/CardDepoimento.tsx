"use client";
import style from "./CardDepoimento.module.css";
import Image from "next/image";

export default function CardDepoimento({ id, pathFoto, text, name, role }: any) {
  return (
    <div className={style.card} key={id}>
      <figure>
        <Image src={pathFoto} alt="" className={style.card_image} />
      </figure>
      <article className={style.descricao}>
        <p className={style.texto}>{text}</p>
        <div className={style.nameRole}>
          <h3 className={style.nome}>{name}</h3>
          <p className={style.cargo}>{role}</p>
        </div>
      </article>
    </div>
  );
}
