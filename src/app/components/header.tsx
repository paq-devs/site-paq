import Image from "next/image";
import { Button } from "./button";

export function Header(){
    return(
        <div className='flex sm:w-full items-center justify-between px-3 bg-transparent absolute'>
            <div>
                <Image src='/logo-paq.png' width={45}
              height={45} alt={""}></Image>
            </div>
            <Button title='eu' href='/' />
        </div>
    )
}