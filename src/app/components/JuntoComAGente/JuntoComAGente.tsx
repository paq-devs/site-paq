import Image from "next/image";
import coroa from "./img/coroa.png";
import suanamfeliz from "./img/suanamfeliz.png";

import "./JuntoComAGente.css";

import CardApoiadoras from "./cardApoiadoras";
import CardParceira from "./cardParceiras";
import CardEducacional from "./cardEducacional";
import Button from "../button";

export default function JuntoComAGente() {
  return (
    <div className="flex flex-col items-center">
      <Image src={coroa} alt="" width={160} height={90} className="my-9" />
      <h2 className="corpo">
        <span className="font-bold">Junto com a gente</span> <br /> nessa
        missão!
      </h2>
      <p className="paragrafo">
        Nossa rede de apoio é fundamental para o sucesso de nossas iniciativas.
        Conheça nossos parceiros que acreditam em um futuro mais inclusivo e
        diversificado.
      </p>
      <div className="md:max-w-2xl xl:max-w-full">
        <CardApoiadoras />
        <CardParceira />
        <CardEducacional />
        <div className="hidden md:block relative w-full h-64 lg:hidden">
          <Image
            src={suanamfeliz}
            alt=""
            layout="fill"
            objectFit="cover"
            className="imagemTablet"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="TextoPaqAgradece">O PAQ AGRADECE TODO O APOIO!</h1>
          </div>
        </div>
      </div>
      <div className="md:hidden  flex  items-center lg:flex flex-col">
        <p className="paragrafo">
          Somos uma ponte{" "}
          <span className="font-bold">
            entre a quebrada e os centros de inovação
          </span>{" "}
          e acreditamos que acabar com a desigualdade social
          <span className="font-bold">é uma missão coletiva.</span>
        </p>
        <div className="my-10">
          <Button
            title="Também quero apoiar"
            href="/"
            width="215px"
            height="50px"
          ></Button>
        </div>
      </div>
    </div>
  );
}
