import styles from "./CardBaseMobile.module.css";
import Image, { StaticImageData } from "next/image";

export default function CardBaseMobile({
  children,
  imagem,
  titulo,
  conteudoCurto,
}: {
  children: React.ReactNode;
  imagem: StaticImageData;
  titulo: string;
  conteudoCurto: string;
}) {
  return (
    <div className={styles.container}>
      <div
        style={{ backgroundImage: `url(${imagem.src})` }}
        className={styles.containerImagem}
      >
        <h3>{titulo}</h3>
      </div>
      <p>{conteudoCurto}</p>
      {children}
    </div>
  );
}
