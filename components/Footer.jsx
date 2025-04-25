import { Facebook, Instagram, Mail, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Image src={logo} width={150} height={50} alt="Logo da NextWork" />
            <p className="mt-4 text-sm text-gray-400">
              Especialistas em tráfego pago para impulsionar seu negócio no
              ambiente digital.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-400">
              Empresa
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#hero"
                  className="text-gray-400 hover:text-green-500"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-green-500"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="#Services"
                  className="text-gray-400 hover:text-green-500"
                >
                  Serviços
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-400">
              Serviços
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#Services"
                  className="text-gray-400 hover:text-green-500"
                >
                  Google Ads
                </Link>
              </li>
              <li>
                <Link
                  href="#Services"
                  className="text-gray-400 hover:text-green-500"
                >
                  Meta Ads
                </Link>
              </li>
              <li>
                <Link
                  href="#Services"
                  className="text-gray-400 hover:text-green-500"
                >
                  LinkedIn Ads
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col  gap-4">
            <h3 className="text-sm font-semibold uppercase text-gray-400">
              Contato
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-gray-400">
                <Mail className="mr-2 h-4 w-4 text-green-500" />{" "}
                nextwork2@hotmail.com
              </li>
              <li className="flex items-center text-gray-400">
                <Smartphone className="mr-2 h-4 w-4 text-green-500" /> +55 66
                9698-9663
              </li>
              <li className="flex items-center text-gray-400">
                <Instagram className="mr-2 h-4 w-4 text-green-500" />{" "}
                nextwork_oficial2
              </li>
              <li className="text-gray-400">Primavera do Leste - MT, Brasil</li>
            </ul>
            <div className="flex items-center gap-4">
              <Link
                href="https://wa.me/556696989663"
                className="mt-4 flex items-center justify-center bg-green-500 px-4 py-4 rounded-full cursor-pointer text-white hover:bg-green-600"
              >
               <i class="fa-brands fa-whatsapp"></i>
              </Link>
              <Link
                href="https://www.instagram.com/nextwork_oficial2"
                className="mt-4 flex items-center justify-center bg-green-500 px-4 py-4 rounded-full cursor-pointer text-white hover:bg-green-600"
              >
                <Instagram className=" h-4 w-4" />
              </Link>
              <Link
                href="https://www.facebook.com/nextwork.oficial"
                className="mt-4 flex items-center justify-center bg-green-500 px-4 py-4 rounded-full cursor-pointer text-white hover:bg-green-600"
              >
                <Facebook className=" h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} NextWork. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
