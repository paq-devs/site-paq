"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import style from "./CardBase.module.css";
import CardExpandido from "./CardExpandido";

type AccordionCardProps = {
  title: string;
  content: string;
  alt: string;
  imageSrc: StaticImageData;
  children?: React.ReactNode;
};

export default function CardBase(props: AccordionCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen && (
        <div className={style.cardContainer}>
          <div className={style.cardContent}>
            <div className={style.cardTitle}>{props.title}</div>
            <div className={style.cardBody}>{props.content}</div>

            {props.children ? (
              <button
                className={style.cardButton}
                onClick={() => setIsOpen(!isOpen)}
              >
                Ver mais
              </button>
            ) : null}
          </div>
          <Image
            src={props.imageSrc}
            alt={props.alt}
            className={style.cardImage}
          />
        </div>
      )}
      <CardExpandido isOpen={isOpen} setIsOpen={setIsOpen}>{props.children}</CardExpandido>
    </>
  );
}
