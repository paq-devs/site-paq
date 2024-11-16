import Image from "next/image";

import betahub from "./img/apoiadoras/betahub.png";
import mercadoLivre from "./img/apoiadoras/mercadolivre.png";
import cd2 from "./img/apoiadoras/cd2.png";
import silvaSchutz from "./img/apoiadoras/silvaschutz.png";
import h from "./img/apoiadoras/h.png";
import aqtech from "./img/apoiadoras/aqtech.png";
import weduka from "./img/apoiadoras/weduka.png";
import hurbana from "./img/apoiadoras/hurbana.png";

import styles from "./cardApoiadoras.module.css";

export default function CardApoiadora() {
  const images = [
    { src: hurbana, width: 394, height: 63 },
    { src: cd2, width: 100, height: 49 }, // Dimensões personalizadas para cd2
    { src: aqtech, width: 164, height: 60 },
    { src: weduka, width: 161, height: 32 },
    { src: silvaSchutz, width: 120, height: 88 },
  ];

  return (
    <div className={styles.container}>
      <h2>APOIADORES</h2>
      <Image
        src={images[0].src}
        alt={`Imagem 1`}
        width={images[0].width}
        height={images[0].height}
      />
      <div className={styles.grid}>
        {images.slice(1).map((image, index) => (
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
