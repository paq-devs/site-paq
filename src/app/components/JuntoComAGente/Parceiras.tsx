import acate from "./img/parceiras/acate.png";
import bewiki from "./img/parceiras/bewiki.png";
import impacthub from "./img/parceiras/impacthub.png";
import txm from "./img/parceiras/txm.png";
import rdstation from "./img/parceiras/rdstation.png";
import inaitec from "./img/parceiras/inaitec.png";
import alura from "./img/parceiras/alura.png";
import rocketseat from "./img/parceiras/rocketseat.png";
import hurbana from "./img/parceiras/hurbana.svg";
import fiap from "./img/parceiras/fiap.svg";
import inpetuhub from "./img/parceiras/inpetuhub.svg";
import sebrae from "./img/parceiras/sebrae.svg";

import styles from "./Parceiras.module.css";

import Image from "next/image";


export default function Parcerias() {
  const imagesTop = [
    { src: impacthub, width: 62, height: 102 },
    { src: inaitec, width: 80, height: 119 },
    { src: bewiki, width: 100, height: 36 }, // Dimensões personalizadas para bewiki
    { src: txm, width: 100, height: 60 },
    { src: acate, width: 100, height: 95 },
    { src: rdstation, width: 128, height: 34 },
    { src: rocketseat, width: 160, height: 94 },
    { src: alura, width: 83, height: 94 },
    { src: hurbana, width: 103, height: 94 },
    { src: fiap, width: 103, height: 94 },
    { src: inpetuhub, width: 103, height: 94 },
    { src: sebrae, width: 103, height: 94 },
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
