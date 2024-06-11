import Link from "next/link";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";

export function Header(){
    return(
        <div className='paqNavbar'>
            <Image src={'/Logo-paq.png'} width={45} height={45} alt={""}></Image>
            <CiLinkedin className="iconeRedesSociais" />
            <Link href={""}>sobre nós</Link>
            <Link href={""}>como fazer parte</Link>
            <Link href={""}>empresas</Link>
            <Link href={""}>frentes</Link>
            <CiLinkedin />
            <Link href={""}>ln</Link>
        </div>
    )
}
