import style from "./CardDepoimento.module.css";

export default function CardDepoimento({
  id,
  pathFoto,
  text,
  name,
  role,
}: any) {
  return (
    <div className={style.cardContainer}>
      <div className={style.imagem}>{pathFoto}</div>

      <div className={style.margemConteudo}> 
        <div className={style.depoimento}>{text}</div>
        <div className={style.nome}>{name}</div>
        <div className={style.cargo}>{role}</div>
      </div>
    </div>
  );
}
 