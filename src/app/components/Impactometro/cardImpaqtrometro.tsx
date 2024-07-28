import Image from "next/image";
import "./cardImpaqtrometro.css";

type props = {
  image: any;
  numero: string;
  titulo: string;
  descricao: string;
};

export default function CardImpaqtrometro({
  image,
  numero,
  titulo,
  descricao,
}: props) {
  return (
    <div className="fundoImpaqtrometro">
      <div className="parteDeCima">
        <div className="icone">
          <Image src={image} alt="" width={58} height={49} />
        </div>
        <div>
          <h2>
            +<span className="text-numeroestilizado">{numero}</span>
          </h2>
          <h3>{titulo}</h3>
        </div>
      </div>
      <div className="parteDeBaixo">
        <p>{descricao}</p>
      </div>
      <div></div>
    </div>
  );
}
