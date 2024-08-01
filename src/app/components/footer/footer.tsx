import logo from './img/logopaq.png'
import { FaInstagram, FaLinkedin, FaYoutube   } from "react-icons/fa";

import Image from 'next/image'

export default function  Footer(){
    return(
        <footer className="bg-[#00171F] w-full flex flex-col items-center gap-16 pt-10 pb-36">
            <Image src={logo} width={86} height={86} alt='' className='aspect-auto mt-[30px]'/>
            <div className='flex gap-5 items-center'>
            <a href="https://www.instagram.com/prototipandoaquebrada/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} color='white'/>
            </a>
            <a href="https://www.linkedin.com/company/prototipando-a-quebrada/mycompany/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} color='white'/> 
            </a>
            <a href="https://www.youtube.com/@prototipandoaquebrada7138" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={30} color='white'/> 
            </a>
            </div>
            <p className='text-center font-poppins md:text-[15px] text-[12px] font-medium leading-[15px]  text-white w-full'>© 2024 | Direitos reservados | Política de privacidade e termos de uso.<br/>
                Feito com ❤️ pelos educandos.
            </p>
        </footer>
    )
}