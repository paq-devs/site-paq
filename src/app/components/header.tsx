import Image from "next/image";
import  Button  from "./button";
import { FiAlignJustify } from "react-icons/fi";


export function Header(){
    return(
        <div className='sm:flex w-full items-center justify-between  bg-transparent absolute max-[450px]:flex max-[450px]:justify-between max-[450px]:items-center max-[450px]:py-8 max-[450px]:px-8'>
            <div>
                <Image src='/logo-paq.png' width={44}
              height={48} alt={""}></Image>
            </div>
            <div className="flex items-center  max-[400px]:justify-center max-[400px]:items-center gap-2 ">
                <Button title="quero fazer parte" href="/"/>
                <FiAlignJustify className="text-azul-paq size-10" />
            </div>
        </div>
    )
}
