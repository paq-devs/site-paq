import mercadoLivre from "./img/projetosParceria/mercado-livre.png";
import floripaMaisTec from "./img/projetosParceria/floripa-mais-tec.png";

import styles from "./ProjetosEmParceria.module.css";

import Image from "next/image";

const images = [
  { src: mercadoLivre, width: 212, height: 51 },
  { src: floripaMaisTec, width: 212, height: 35 },
];

export default function ProjetosEmParceria() {
  return (
    <div className={styles.container}>
      <h2>projetos em parceria</h2>
      <div className={styles.parcerias}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={`Imagem ${index + 1}`}
            width={image.width}
            height={image.height}
          />
        ))}
      </div>
    </div>
  );
}
