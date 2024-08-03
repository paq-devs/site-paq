import style from "./CardDepoimento.module.css";
import Image from "next/image";

export default function CardDepoimento({
  id,
  pathFoto,
  text,
  name,
  role,
}: any) {
  return (
    <div className={style.cardContainer}>
      <div className={style.imagem}>
        <Image src={pathFoto} width={300} alt={name} />
      </div>

      <div className={style.margemConteudo}>
        <div className={style.depoimento}>{text}</div>
        <div className={style.nome}>{name}</div>
        <div className={style.cargo}>{role}</div>
      </div>
    </div>
  );
}
