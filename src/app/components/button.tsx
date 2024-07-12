'use-client'

import Link from "next/link";

type props = {
    title: string;
    href: string
};

export default function Button({ title, href  }: props){
    return (
        <Link href={href} className='flex h-12 w-48 items-center justify-center  rounded-full bg-azul-paq text-base text-white font-semibold max-[450px]:h-8 max-[450px]:w-40 '
        type='button'>
            {title}
        </Link>
    )
}
