import Image, { StaticImageData } from "next/image"
import "./AccordionCard.css"

type AccordionCardProps = {
  title: string;
  content: string;
  alt: string;
  imageSrc: StaticImageData,
}

export default function AccordionCard(props: AccordionCardProps ) {
  return (
    <>
    <div className="accordion-card">
      <div className="accordion-card-content">
        <div className="accordion-card-title">
          {props.title}
        </div>
        <div className="accordion-card-body">
          {props.content}
        </div>

        <button className="accordion-button">Ver mais</button>
      </div>
      <div className="accordion-card-img">
          <Image 
            src={props.imageSrc} 
            alt={props.alt} 
            className="accordion-card-img-img" 
          />
      </div>
      </div>
  </>
  );
}
