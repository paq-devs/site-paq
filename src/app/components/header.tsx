import Image from "next/image";
import  Button  from "./button";
import { FiAlignJustify } from "react-icons/fi";


export function Header(){
    return(
        <div className='flex w-full items-center justify-between px-3 bg-transparent absolute max-[450px]:w-full max-[450px]:flex max-[450px]:justify-between max-[450px]:items-center'>
            <div>
                <Image src='/Logo-paq.png' width={45}
              height={45} alt={""}></Image>
            </div>
            <div className="flex items-center max-[400px]:justify-center  max-[400px]:items-center">
                <Button title="QUERO FAZER PARTE" href="/"/>
                <FiAlignJustify className="text-azul-paq size-10" />
            </div>
        </div>
    )
}
