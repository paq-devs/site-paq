"use-client";

import Link from "next/link";

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
            className={`font-poppins flex items-center justify-center rounded-[10px] bg-preto text-base text-white font-semibold`}
            type="button"
            target={newTab ? "_blank" : "_self"}
            style={{ width: width, height: height }}
        >
            {title}
        </Link>
    );
}
