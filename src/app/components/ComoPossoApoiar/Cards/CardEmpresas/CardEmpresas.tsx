import Link from "next/link";
import Image from "next/image";
import maosApoio from "./img/maos-apoio.png";
import empresaMadrinha from "./img/empresa-madrinha.png";

import styles from "./CardEmpresas.module.css";

const CardEmpresas = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <Image
          src={maosApoio}
          alt="Apoio via PIX"
          width={263}
          height={192}
          className={styles.imgDesktop}
        />
        <h2>
          Empresas <span>madrinhas</span>
        </h2>
        <p>
          Seja uma empresa apoiadora, faça parte da nossa comunidade e acompanhe
          o sucesso dos nossos jovens de perto.
        </p>
        <Link href="#" target="_blank" >Quero ser madrinha</Link>
      </div>
      <div className={styles.containerImage}>
        <Image
          src={empresaMadrinha}
          alt="QR Code PIX"
          width={450}
          height={526}
        />
      </div>
    </div>
  );
};

export default CardEmpresas;
