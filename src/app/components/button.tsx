'use-client'

import Link from "next/link";

type Props = {
    title: string;
    href: string;
    width?: string;
    height?: string;
};

export default function Button({ title, href, width, height }: Props) {
    return (
        <Link 
            href={href} 
            className={`flex items-center justify-center rounded-[10px] bg-azul-paq text-base text-white font-semibold`}
            type="button"
            style={{ width: width, height: height }}
        >
            {title}
        </Link>
    );
}
