import Image from "next/image";
import ferramenta from "./img/Ferramenta.svg";
import styles from "./NossoTime.module.css";
import NossoTimeCarrosel from "./NossoTimeCarrosel";

export default function NossoTime() {
  return (
    <section className={styles.container}>
      <Image src={ferramenta} width={50} height={50} alt="" />
      <p className={styles.NossoTimeTitulo}>
        <strong>nosso time:</strong> <br /> linha de frente
      </p>
      <NossoTimeCarrosel />
    </section>
  );
}
