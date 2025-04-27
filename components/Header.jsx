"use client";
import Image from "next/image";
import logo from "../assets/logo.png"
import MenuIcon from "../assets/menu_icon.svg"
import { useEffect, useState } from "react";
import CrossIcon from "../assets/cross_icon.svg"

const Header = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div>
       <div className="w-full h-20  flex justify-between items-center  px-10 md:px-30 ">
      <Image
        src={logo}
        alt="Logo"
        width={200}
        height={200}
      />
      <div className="hidden md:flex items-center gap-6">
        <a className="text-white  hover:text-green-400 transition ease-in-out"  href="#hero">Inico</a>
        <a className="text-white  hover:text-green-400 transition ease-in-out" href="#about">Sobre nós</a>
        <a className="text-white  hover:text-green-400 transition ease-in-out" href="#Services">Serviços</a>
        <a className="text-white  hover:text-green-400 transition ease-in-out" href="#pricing">Nossos Planos</a>
      </div>
      
      <a href="https://wa.me/556696989663" className=" hidden md:block bg-green-400 cursor-pointer hover:bg-green-600 transition ease-in-out text-white px-10 py-2 rounded  font-bold ">Contato</a>
      
      <Image
        onClick={() => setShowMobileMenu(true)}
        src={MenuIcon}
        alt="Menu Icon"
        width={30}
        height={30}
        className="md:hidden w-7 cursor-pointer"
        />

   

    </div>

    <div
  className={`md:hidden ${
    showMobileMenu ? "fixed w-60" : "h-0 w-0"
  } right-0 top-0 bottom-0 overflow-hidden bg-gray-900 transition-all text-white`}
>
  <div className="flex justify-end p-6 cursor-pointer">
    <Image
      onClick={() => setShowMobileMenu(false)} // Corrigido para fechar o menu
      src={CrossIcon} // Certifique-se de que o caminho está correto
      alt="Close Menu"
      width={24} // Ajuste o tamanho do ícone
      height={24}
      className="w-6 h-6 cursor-pointer mr-4"
    />
  </div>
  <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
    <a
      onClick={() => setShowMobileMenu(false)}
      href="#hero"
      className="px-4 py-2 rounded-full inline-block"
    >
      Inicio
    </a>
    <a
      onClick={() => setShowMobileMenu(false)}
      href="#about"
      className="px-4 py-2 rounded-full inline-block"
    >
      Sobre nós
    </a>
    <a
      onClick={() => setShowMobileMenu(false)}
      href="#Services"
      className="px-4 py-2 rounded-full inline-block"
    >
      Serviços
    </a>
    <a
      onClick={() => setShowMobileMenu(false)}
      href="#pricing"
      className="px-4 py-2 rounded-full inline-block"
    >
      Nossos Planos
    </a>
    <a
      onClick={() => setShowMobileMenu(false)}
      href="https://wa.me/556696989663"
      target="_blank"
      className="px-6 bg-green-500 py-2 rounded inline-block"
    >
      Contato
    </a>
  </ul>
</div>
  

    </div>
   
  );
};

export default Header;
