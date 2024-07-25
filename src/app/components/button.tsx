'use-client'

import Link from "next/link";
import style from "./landing/PaqHeader.module.css"


type Props = {
    href: string;
    width?: string;
    height?: string;
};

export default function Button({ href, width, height }: Props) {
    return (
        <Link
            href={href}
            className={style.link}
            type="button"
            style={{ width: width, height: height, }}
        >
        </Link>
    );
}
