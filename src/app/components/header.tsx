import Image from "next/image";
import  Button  from "./button";
import { BsJustify } from "react-icons/bs";




export function Header(){

    return(
        <div className='sm:flex w-full items-center justify-between px-3 bg-transparent absolute max-[400px]:flex max-[400px]:justify-between max-[400px]:items-center'>
            <div>
                <Image src='/logo-paq.png' width={45}
              height={45} alt={""}></Image>
            </div>
            <div className=" max-[400px]:justify-center  max-[400px]:items-center">
                <Button title="next" href="/"/>
                <BsJustify width={45} height={45}/>  
            </div>
        </div>
    )
}
