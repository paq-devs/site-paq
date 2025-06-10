"use client";
import style from "./CardDepoimento.module.css";
import Image from "next/image";

export default function CardDepoimento({ id, pathFoto, text, name, role }: any) {
  return (
    <div className={style.card} key={id}>
      <figure className={style.card_figure}>
        <Image src={pathFoto} alt="" className={style.card_image} />
         <div className={style.nameRole}>
          <h3 className={style.nome}>{name}</h3>
          <p className={style.cargo}>{role}</p>
        </div>
      </figure>
      <article className={style.descricao}>
        <p className={style.texto} dangerouslySetInnerHTML={{__html: text}}/>
       
      </article>
    </div>
  );
}
