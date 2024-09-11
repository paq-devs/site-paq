import Image from "next/image";
import VideoConexao from "./VideoConexao";
import Button from "../button";
import imagemSetaAbaixo from "./img/setaAbaixo.svg";
import imagemCompartilhar from "./img/compartilhar.svg";
import styles from "./ConectarETransformar.module.css";

export default function ConectarETransformar() {
  return (
    <div id="quem-somos" className={styles.container}>
      <Image src={imagemSetaAbaixo} width={70} height={70} alt="" />
      <Image
        src={imagemCompartilhar}
        width={53}
        height={53}
        alt=""
        className="xl:hidden"
      />
      <div className="text-[#00171F] text-center font-formula-condensed text-[45px] font-normal leading-[40px] uppercase mt-2 xl:text-[60px] xl:leading-[68px]">
        <h1>CONECTAR E</h1>
        <h2 className="text-[#00171F] font-formula-condensed text-[45px] font-bold leading-[40px] uppercase xl:text-[60px] xl:leading-[68px]">
          TRANSFORMAR!
        </h2>
      </div>
      <div className={styles.textoSubtitulo}>
        <p>
          Somos o <strong>Prototipando a Quebrada, </strong>
          mas pode chamar de <strong>PAQ!</strong>
        </p>
        <p>
          Nossa missão é <strong>conectar a juventude da periferia</strong>
          ao conhecimento e oportunidades do{" "}
          <strong>ecossistema de tecnologia!</strong>
        </p>
      </div>
      <VideoConexao />
      <div className={styles.textoAbaixoVideo}>
        <p>
          Além de uma ONG, somos uma{" "}
          <strong>comunidade de aprendizagem.</strong>
        </p>
        <p>
          Somos uma ponte{" "}
          <strong>entre a quebrada e os centros de inovação</strong> e
          acreditamos que acabar com a desigualdade social{" "}
          <strong>é uma missão coletiva.</strong>
        </p>
      </div>
      <Button title="NOSSA HISTÓRIA" href="" width="165px" height="42px" />
    </div>
  );
}
