import Image from "next/image";

import betahub from "./img/apoiadoras/betahub.png";
import mercadoLivre from "./img/apoiadoras/mercadolivre.png";
import cd2 from "./img/apoiadoras/cd2.png";
import silvaSchutz from "./img/apoiadoras/silviaschutz.svg";
import h from "./img/apoiadoras/h.png";
import aqtech from "./img/apoiadoras/aqtech.png";
import weduka from "./img/apoiadoras/weduka.png";
import hurbana from "./img/apoiadoras/hurbana.svg";

import styles from "./cardApoiadoras.module.css";
export default function CardApoiadora() {
  const images = [
    { src: hurbana, width: 160, height: 60 },
    { src: cd2, width: 100, height: 60 },
    { src: aqtech, width: 144, height: 60 },
    { src: weduka, width: 150, height: 60 },
    { src: silvaSchutz, width: 120, height: 60 },
  ];

  const repeatedImages = [...images, ...images, ...images]; // duplica para rolar infinitamente

  return (
    <div className={styles.container}>
      <h2>APOIADORES</h2>
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
