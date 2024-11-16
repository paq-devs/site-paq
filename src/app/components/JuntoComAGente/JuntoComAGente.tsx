import Image from "next/image";
import coroa from "./img/coroa.png";

import styles from "./JuntoComAGente.module.css";

import CardApoiadoras from "./cardApoiadoras";
import Parcerias from "./Parceiras";
import ProjetosEmParceria from "./ProjetosEmParceria";

export default function JuntoComAGente() {
  return (
    <div id="juntoComAGente" className={styles.container}>
      <Image src={coroa} alt="" width={160} height={90} />
      <h2>
        Junto com a gente <br /> nessa missão!
      </h2>
      <div>
        <CardApoiadoras />
        <Parcerias />
        <ProjetosEmParceria />
      </div>
    </div>
  );
}
