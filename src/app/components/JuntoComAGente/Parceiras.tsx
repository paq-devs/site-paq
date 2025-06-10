import acate from "./img/parceiras/acate.png";
import bewiki from "./img/parceiras/bewiki.png";
import impacthub from "./img/parceiras/impacthub.png";
import txm from "./img/parceiras/txm.png";
import rdstation from "./img/parceiras/rdstation.png";
import atre from "./img/parceiras/atre.png";
import inaitec from "./img/parceiras/inaitec.png";
import alura from "./img/parceiras/alura.png";
import rocketseat from "./img/parceiras/rocketseat.png";

import styles from "./Parceiras.module.css";

import Image from "next/image";


export default function Parcerias() {
  const imagesTop = [
    { src: impacthub, width: 102, height: 102 },
    { src: inaitec, width: 124, height: 119 },
    { src: bewiki, width: 156, height: 36 }, // Dimensões personalizadas para bewiki
    { src: txm, width: 123, height: 60 },
    { src: acate, width: 191, height: 95 },
    { src: rdstation, width: 188, height: 34 },
    { src: atre, width: 103, height: 94 },
    { src: rocketseat, width: 403, height: 94 },
    { src: alura, width: 103, height: 94 },
  ];

  const repeatedImages = [...imagesTop, ...imagesTop, ...imagesTop]; // duplica para rolar infinitamente

  return (
    <div className={styles.container}>
      <h2>Parceiras</h2>
      <div className={styles.grid}>
        {repeatedImages.map((image, index) => (
          <Image
            key={`img-${index}`}
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
