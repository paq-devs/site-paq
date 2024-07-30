import Image from "next/image";
import Button from "../button";
import { FiAlignJustify } from "react-icons/fi";
import style from "./PaqHeader.module.css";
import icone_sobre from "./img/chevron-down.png";
import logoPaq from "./img/logo-paq.png";

export function Header() {
  return (
    <div className={style.icones_header}>
      <div className={style.conteudo}>
        <div className="flex">
          <ul className={style.lista}>
            <li className="flex items-center justify-center">
              <input
                type="checkbox"
                name="menu"
                id="menu"
                className={style.sobre}
              />
              <label
                htmlFor="menu"
                className="flex items-center justify-center gap-[0.03125rem]"
              >
                Sobre <Image src={icone_sobre} width={16} height={18} alt="" />{" "}
              </label>
              <ul className={style.menu_sobre}>
                <li>quem somos</li>
                <li>papel do paq</li>
                <li>impacto</li>
              </ul>
            </li>
            <li>apoio</li>
            <li>programas</li>
            <li>histórias</li>
          </ul>

          <FiAlignJustify className={style.hamburguer} />
        </div>
        <Image
          src={logoPaq}
          width={44}
          height={48}
          className={style.logo_paq}
          alt={""}
        />
        <div className="flex items-center justify-center mt-[-23px]">
          <Button href="/" width="auto" height="auto" title="Quero apoiar" />
        </div>
      </div>
    </div>
  );
}
