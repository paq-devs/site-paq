import Image from "next/image";
import  Button  from "./button";
import { FiAlignJustify } from "react-icons/fi";
import style from "./landing/PaqHeader.module.css"


export function Header() {
  return (
    <div className={style.icones_header}>
      <div>
        <span><a href=""></a></span>
        <span><a href=""></a></span>
        <span><a href=""></a></span>
        <span><a href=""></a></span>
      <FiAlignJustify className="h-[30px] w-[30px]"/>
      </div>
        <Image src="/logo-paq.png" width={44} height={48} alt={""}></Image>
        <div className="flex items-center justify-center mt-[-23px]">
        <Button
          title="Apoiar"
          href="/"
          width="auto"
          height="auto"
        />
        </div>
    </div>
  );
}
