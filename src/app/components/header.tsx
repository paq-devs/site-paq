import Link from "next/link";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";

export function Header(){
    return(
        <div className='flex w-full items-center justify-between px-3 bg-transparent absolute'>
            <div>
                <Image src='/logo-paq.png' width={45}
              height={45} alt={""}></Image>
            </div>
            <div className='flex gap-6 items center'>
                <Link href={""}>sobre nós</Link>
                <Link href={""}>como fazer parte</Link>
                <Link href={""}>empresas</Link>
                <Link href={""}>frentes</Link>
            </div>
            <div className="flex gap-6 items-center">
                <CiLinkedin />
                <Link href={""}>ln</Link>
            </div>
        </div>
    )
}
