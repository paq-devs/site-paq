import styles from "./MobileCard.module.css";

export default function MobileCard({
  titulo,
  descricaoCurta,
  imagem,
}: {
  titulo: string;
  descricaoCurta: string;
  imagem: any;
}) {
  return (
    <>
      <div className={styles.cardContainer}>
        <div
          className={styles.imagemCard}
          style={{
            backgroundImage: `url(${imagem.src})`,
            width: `${imagem.width}px`,
            height: `${imagem.height}px`,
          }}
        >
          <span>{titulo}</span>
        </div>
        <span className={styles.conteudo}>{descricaoCurta}</span>
        <span>botão +</span>
      </div>
    </>
  );
}
