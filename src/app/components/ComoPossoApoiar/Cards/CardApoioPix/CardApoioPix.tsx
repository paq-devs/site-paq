import Link from "next/link";
import Image from "next/image";
import apoioPix from "./img/apoio-pix.png";
import pixQrcode from "./img/pix-qrcode.png";
import styles from "./CardApoioPix.module.css";

const CardApoioPix = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <Image src={apoioPix} alt="Apoio via PIX" width={263} height={192} />
        <p>
          Quer dar aquela força mas sem compromisso? Manda um pix pra gente!
          Qualquer valor ajuda e faz toda a diferença!
        </p>
        <span>admnistrativo.paq@prototipandoaquebrada.org</span>
      </div>
      <div className={styles.containerImage}>
        <Image src={pixQrcode} alt="QR Code PIX" width={450} height={526} />
      </div>
    </div>
  );
};

export default CardApoioPix;
