import Image from "next/image"
import styles from "./CardEmpresaMadrinha.module.css";

import soho from '../img/SOHO.png'
import madrinha from '../img/Madrinha.png'
import ButtonPreto from "../ButtonPreto"


export default function CardEmpresaMadrinha() {
    return (
        <div className={"teste1"}>
            <div className="hidden md:block">
                <DesktopMadrinha/>
            </div>
            <div className="md:hidden">
                <MobileMadrinha />
            </div>
        </div>
    )
}

const DesktopMadrinha: React.FC = () => {
  return (
    <div className={styles.desktopContainer}>
      <div className={styles.textContainer}>
        <Image
          src={madrinha}
          alt=""
          width={117}
          height={109}
        />
        <h2>
          <span>Empresas</span>
          <span>Madrinhas</span>
        </h2>
        <p>
          Seja uma empresa apoiadora, faça parte da nossa comunidade e acompanhe
          o sucesso dos nossos jovens de perto.
        </p>
        <div className="hidden lg:block">
          <ButtonPreto
            title="Quero ser Madrinha!"
            href="/"
            width="225px"
            height="55px"
          />
        </div>
        <div className="hidden md:block lg:hidden">
          <ButtonPreto
            title="Quero ser Madrinha!"
            href="/"
            width="160px"
            height="45px"
          />
        </div>
      </div>
      <Image
        src={soho}
        alt=""
        width={450}
        height={526}
        className="hidden lg:block aspect-auto object-cover rounded-2xl m-0"
      />
      <Image
        src={soho}
        alt=""
        width={270}
        height={333}
        className="hidden md:block aspect-auto object-cover m-0 rounded-2xl lg:hidden"
      />
    </div>
  );
};

const MobileMadrinha: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-white p-9 rounded-2xl">
      <Image src={madrinha} alt="" width={117} height={109} />
      <h2 className={styles.EmpresaMadrinhaTitulo}>
        Empresas
        <br />
        <span className="font-bold underline decoration-azulopcoes">
          Madrinhas
        </span>
      </h2>
      <p className="text-center font-poppins text-xs leading-[15px] w-full">
        Seja parte da transformação e <br />
        construa junto com a gente um novo
        <br />
        mercado de tecnologia, mais <br />
        diverso, equalitário e inovador!
      </p>
      <ButtonPreto
        title="Quero ser Madrinha!"
        href="/"
        width="160px"
        height="45px"
      />
    </div>
  );
};
