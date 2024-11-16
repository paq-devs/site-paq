import Image from "next/image";
import ferramenta from "./img/Ferramenta.svg";
import styles from "./NossoTime.module.css";
import NossoTimeCarrosel from "./NossoTimeCarrosel";

export default function NossoTime() {
  return (
    <section className={styles.container}>
      <div className="flex flex-col items-center gap-6">
        <Image src={ferramenta} width={74} height={74} alt="" />
        <p className={styles.NossoTimeTitulo}>
          <span className="font-bold">nosso time:</span> linha de frente
        </p>
      </div>
      <NossoTimeCarrosel />
    </section>
  );
}
