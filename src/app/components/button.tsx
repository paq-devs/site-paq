'use-client'

import Link from "next/link";


type props = {
    title: string;
    href: string
};

export default function Button({ title, href  }: props){
    return (
        <Link href={href} className='flex h-12 w-48 items-center justify-center rounded-full border bg-cyan-400 text-base font-semibold max-[400px]:h-8 max-[400px]:w-24'
        type='button'>
            {title}
        </Link>
    )
}