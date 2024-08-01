import alura from "./img/educacional/alura.png";
import dp6 from "./img/educacional/dp6.png";
import fullcycle from "./img/educacional/fullcycle.png";
import lab365 from "./img/educacional/lab365.png";
import rocketseat from "./img/educacional/rocketseat.png";

import Image from "next/image";

const imagesTop = [
  { src: dp6, width: 95, height: 42 },
  { src: alura, width: 125, height: 71 },
];

const imagesBottom = [
  { src: rocketseat, width: 212, height: 51 },
  { src: lab365, width: 212, height: 35 },
  { src: fullcycle, width: 212, height: 40 },
];

export default function CardEducacional() {
  return (
    <div className="bg-fundocinza rounded-[20px] py-4 my-6 mx-5">
      <h2 className="titulocard">PARCEIRAS EDUCACIONAIS</h2>
      <div className="flex p-4 items-center justify-center">
        {imagesTop.map((image, index) => (
          <div key={index} className="mx-6">
            <Image
              src={image.src}
              alt={`Imagem ${index + 1}`}
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 items-center justify-items-center ">
        {imagesBottom.map((image, index) => (
          <div key={index} className="w-auto">
            <Image
              src={image.src}
              alt={`Imagem ${index + 5}`}
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
