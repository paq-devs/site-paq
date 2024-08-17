import Image, { StaticImageData } from "next/image";
import style from './Cards.module.css'

type CardProps = {
    imageSrc: StaticImageData,
    name: string
    role: string
}

export default function Card(props: CardProps) {
    return (
        <div className="mx-6 bg-fundocinza rounded-[27px]">
            <Image
                src={props.imageSrc}
                alt={`Foto da pessoa ${props.name}`}
                width={298}
                height={229}
                className="aspect-auto rounded-[27px]"
            />
            <h2 className={style.CardsNossoTimeNome}>{props.name}</h2>
            <p className={style.CardsNossoTimeCargo}>{props.role}</p>
        </div>
    )
}




