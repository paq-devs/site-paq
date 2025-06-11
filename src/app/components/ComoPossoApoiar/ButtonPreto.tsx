"use-client";

import Link from "next/link";
import styles from "./ButtonPreto.module.css";


type Props = {
    title: string;
    href: string;
    width?: string;
    height?: string;
    newTab?: boolean;
};

export default function ButtonPreto({ title, href, width, height, newTab }: Props) {
    return (
        <Link
            href={href}
            className={styles.btn}
            type="button"
            target={newTab ? "_blank" : "_self"}
            style={{ width: width, height: height }}
        >
            {title}
        </Link>
    );
}
