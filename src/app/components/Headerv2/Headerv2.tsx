"use client";
import { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import paqiconheader from './img/paqiconheader.svg'
import Image from "next/image";
import Button from "../button";

export function MenuHamburguer() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  }

  useEffect(() => {
    const handleResize = () => {
      const isWideScreen = window.matchMedia("(min-width: 769px)").matches;
      if (isWideScreen) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Chama a função para definir o estado inicial

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="flex justify-between items-center py-8 px-4 sm:px-36">
        <nav className={` ${menuOpen ? 'relative' : 'flex-col sm:flex-row'}`}>
            <div className="block sm:hidden items-start pr-5" onClick={toggleMenu}>
                {menuOpen ? <IoCloseSharp color="black" size={30} /> : <TiThMenu color="black" size={30}/>}
            </div>
            {(menuOpen || window.matchMedia("(min-width: 769px)").matches) && (
                <ul className={`flex ${menuOpen ? 'rounded-[20px] flex-col absolute bg-fundocinza left-0 w-full p-0' : 'gap-8 p-0'} sm:flex-row`}>
                <li className="list-none px-2 py-1"><a href="/" className="font-poppins text-black font-bold ">Sobre</a></li>
                <li className="list-none px-2 py-1"><a href="/" className="font-poppins text-black font-bold ">Apoio</a></li>
                <li className="list-none px-2 py-1"><a href="/" className="font-poppins text-black font-bold ">Programas</a></li>
                <li className="list-none px-2 py-1"><a href="/" className="font-poppins text-black font-bold ">Histórias</a></li>
                </ul>
            )}
        </nav>
        <Image src={paqiconheader} alt='' width={54} height={57} className="md: ml-10"/>
        <div className="hidden md:block">
            <Button title="QUERO APOIAR" href="/" width="150px" height="40px"/>
        </div>
        <div className="md:hidden">
            <Button title="APOIAR" href="/" width="45px" height="18px"/>
        </div>
    </div>
  );
}
