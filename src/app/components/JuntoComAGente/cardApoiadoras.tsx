import Image from "next/image";
import cd2 from "./img/apoiadoras/cd2.svg";
import silvaSchutz from "./img/apoiadoras/silviaschutz.svg";
import aqtech from "./img/apoiadoras/aqtech.png";
import weduka from "./img/apoiadoras/weduka.png";
import ousaria from "./img/apoiadoras/ousaria.svg";
import audaces from "./img/apoiadoras/audaces.svg";

import styles from "./cardApoiadoras.module.css";
export default function CardApoiadora() {
  const images = [
    { src: cd2, width: 150, height: 60 },
    { src: aqtech, width: 134, height: 60 },
    { src: weduka, width: 130, height: 60 },
    { src: silvaSchutz, width: 120, height: 60 },
    { src: ousaria, width: 120, height: 60 },
    { src: audaces, width: 140, height: 60 },
  ];

  const repeatedImages = [...images, ...images, ...images, ...images]; // duplica para rolar infinitamente

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
