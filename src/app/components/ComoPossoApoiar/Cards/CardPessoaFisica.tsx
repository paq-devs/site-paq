import Image from "next/image";

import parcas from "../img/BondedosParcas.png";
import tituloparcas from "../img/tituloparcas.png";
import ButtonPreto from "../ButtonPreto";
import parcasmobile from "../img/BondedosParcasMobile.png";
import styles from "./CardPessoaFisica.module.css";

export default function CardPessoaFisica() {
  return (
    <div>
      <div className="hidden md:block">
        <DesktopPessoa />
      </div>
      <div className="md:hidden">
        <MobilePessoa />
      </div>
    </div>
  );
}

const DesktopPessoa: React.FC = () => {
  return (
    <div className={styles.containerDesktop}>
      <div className={styles.containerText}>
        <Image src={tituloparcas} alt="" width={263} height={192} />
        <p>
          O Bonde dos Parças é o nosso projeto de financimento coletivo no
          Catarse para pessoas físicas. Apoie mensalmente o PAQ e se conecte com
          a nossa comunidade.
        </p>
        <div className="hidden lg:block">
          <ButtonPreto
            title="Quero ser Parça!"
            href="https://www.catarse.me/bondedosparcas"
            width="225px"
            height="55px"
            newTab
          ></ButtonPreto>
        </div>
        <div className="hidden md:block lg:hidden">
          <ButtonPreto
            title="Quero ser Parça!"
            href="https://www.catarse.me/bondedosparcas"
            width="160px"
            height="45px"
            newTab
          />
        </div>
      </div>
      <Image
        src={parcas}
        alt=""
        width={350}
        height={526}
        className="hidden lg:block aspect-auto object-cover rounded-2xl m-0"
      />
      <Image
        src={parcas}
        alt=""
        width={270}
        height={333}
        className="hidden md:block aspect-auto object-cover m-0 rounded-2xl lg:hidden"
      />
    </div>
  );
};

const MobilePessoa: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-white px-9 pt-4 pb-6 rounded-2xl">
      <Image
        src={parcasmobile}
        alt=""
        width={220}
        height={398}
        className="objecti-fit aspect-auto"
      />
      <p className="text-center font-poppins text-xs leading-[15px] w-full">
        Seja parte da transformação e <br />
        construa junto com a gente um novo
        <br />
        mercado de tecnologia, mais <br />
        diverso, equalitário e inovador!
      </p>
      <ButtonPreto
        title="Quero ser Parça!"
        href="/"
        width="160px"
        height="45px"
      />
    </div>
  );
};
