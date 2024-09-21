import Image, { StaticImageData } from "next/image";
import style from "./CardBase.module.css";

type AccordionCardProps = {
  title: string;
  content: string;
  alt: string;
  imageSrc: StaticImageData;
};

export default function CardBase(props: AccordionCardProps) {
  return (
    <>
      <div className={style.cardContainer}>
        <div className={style.cardContent}>
          <div className={style.cardTitle}>{props.title}</div>
          <div className={style.cardBody}>{props.content}</div>

          <button className={style.cardButton}>Ver mais</button>
        </div>
        <Image
          src={props.imageSrc}
          alt={props.alt}
          className={style.cardImage}
        />
      </div>
    </>
  );
}
