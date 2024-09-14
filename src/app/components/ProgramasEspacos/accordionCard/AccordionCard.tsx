import Image, { StaticImageData } from "next/image"
import styles from "./AccordionCard.module.css";

type AccordionCardProps = {
  title: string;
  content: string;
  alt: string;
  imageSrc: StaticImageData,
}

export default function AccordionCard(props: AccordionCardProps ) {
  return (
    <>
      <div className={styles.accordionCard}>
        <div className={styles.accordionCardContent}>
          <div className={styles.accordionCardTitle}>{props.title}</div>
          <div className={styles.accordionCardBody}>{props.content}</div>

          <button className={styles.accordionButton}>Ver mais</button>
        </div>
        <div className={styles.accordionCardImg}>
          <Image
            src={props.imageSrc}
            alt={props.alt}
            className={styles.accordionCardImgImg}
          />
        </div>
      </div>
    </>
  );
}
