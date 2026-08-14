"use client";

import { Facebook, Instagram, Linkedin, Podcast, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const links = [
    { label: "O Observatório", path: "/sobre-nos" },
    { label: "Atuação", path: "/atuacao" },
    { label: "Biblioteca", path: "/biblioteca" },
    { label: "Opará em Ação", path: "/opara-em-acao" },
    { label: "Eventos", path: "/eventos" },
  ];

  return (
    <footer className="w-full">
      <div className="grid grid-rows-3 p-4 md:grid-cols-3 md:h-[70vh] md:py-[5rem] md:px-[8rem] items-start md:justify-items-center bg-[#E2E2E2] text-black font-light text-2xl">
        <div className="flex flex-col h-full space-y-2">
          <ul>
            {links.map((item) => (
              <li key={item.path} className="py-2">
                <Link
                  href={item.path}
                  className="text-2xl block hover:text-[#F4B404]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 self-center">
          <img
            src="/images/logo.png"
            alt="imagem"
            className="w-[5vw] md:w-[10vw] h-auto md:self-center"
          />
          <h2 className="font-normal text-3xl text-gray-700 md:text-center md:self-center">OBSERVATÓRIO OPARÁ</h2>
        </div>

        <div className="">
          <h2>Últimas Notícias</h2>
        </div>
      </div>

      <div className="flex flex-col justify-between bg-[#F4B404] text-white p-7 md:h-[35vh] md:py-[3rem] md:px-[8rem] text-2xl">
        <div className="flex flex-col md:flex-row gap-4 md:gap-14 self-center">
          <div className="flex gap-6 self-center">
            <Instagram/>
            <Facebook/>
            <Linkedin/>
            <Youtube/>
            <Podcast/>
          </div>
            <h2 className="text-center">Redes Socias</h2>
        </div>
        <div className="self-center">
            <h2>Observatório Opará - desde 2020</h2>
        </div>
      </div>
    </footer>
  );
}
