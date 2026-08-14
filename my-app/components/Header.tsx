"use client";
import Link from "next/link";
import {NavigationMenu,NavigationMenuContent,NavigationMenuItem,
  NavigationMenuLink,NavigationMenuList,NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { useMediaQuery } from "./hooks/use-media-query";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { ChevronDown, ChevronLeft, MenuIcon, Square, SquareXIcon } from "lucide-react";
import { Accordion } from "./ui/accordion";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import path from "path";

const menu = [
  { label: "Home", path: "/" },
  {
    label: "O Observatório",
    path: "/sobre-nos",
    children: [
      { label: "Equipe Interna", path: "/equipe-interna" },
      { label: "Discentes", path: "/discentes" },
      { label: "Equipe Externa", path: "/equipe-externa" },
    ],
  },
  {
    label: "Projetos",
    path: "/projetos"
  },
  {
    label: "Atuacao",
    path: "/atuacao",
    children: [
      { label: "Áreas de Atuação", path: "/areas" },
      { label: "Metodologias", path: "/metodologias" },
      { label: "Como colaborar", path: "/colaboracao" },
    ],
  },
  {
    label: "Biblioteca",
    path: "/biblioteca",
    children: [
      { label: "Documentos e Relatórios", path: "?page=1&type=documentos-e-relatorios" },
      { label: "Notas Técnicas", path: "?page=1&type=nota-tecnicas" },
      { label: "Artigos Científicos", path: "?page=1&type=artigo-cientificos" },
      { label: "Artigos de Opinião", path: "?page=1&type=artigo-de-opiniaos" },
    ],
  },
  { label: "Noticias", path: "/noticias" },
  { label: "Opará em Ação", path: "/opara-em-acao" },
  { label: "Eventos", path: "/eventos" },
];

export default function Header(props : {isHome : boolean}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <header className={`w-full h-[15vh] px-10 flex z-10
    ${props.isHome ? "absolute bg-transparent" : "relative bg-[#474747]"}`}>
      <div className="w-[70vw] self-center">
        <img src="" alt="logo-opara" />
      </div>
      {
        isDesktop ? (
      <NavigationMenu viewport={!isDesktop}>
        <NavigationMenuList>
          {menu.map((item) => (
            <NavigationMenuItem key={item.path}>
            {item.children ? (
              <>
                <NavigationMenuTrigger className="text-[1.3rem]">
                  <Link href={item.path}>
                  {item.label}
                  </Link>
                </NavigationMenuTrigger>

                <NavigationMenuContent className="!bg-[#474747] p-2 border-[#757575]">
                  <ul className="grid w-[200px] bg-[#474747] text-[#F4B404] p-0">
                    {item.children.map((subitem) => (
                      <li key={subitem.path}>
                        <NavigationMenuLink asChild className="text-[1.3rem]">
                          <Link href={`${item.path}/${subitem.path}`}>
                            {subitem.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link href={item.path} className="text-[1.3rem]">
                  {item.label}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
        ) : 
        (
          <Drawer direction="right">
            <DrawerTrigger className="">
              <MenuIcon className="text-[#F4B404]"/>
            </DrawerTrigger>
            <DrawerContent className=" bg-[#474747] rounded-sm p-4">
              <DrawerClose>
                <SquareXIcon className="text-[#F4B404]"/>
              </DrawerClose>
              <nav className="flex flex-col gap-4 mt-4">
                <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
                >
                {menu.map((item) => (
                      <AccordionItem value={item.label} className="text-[#F4B404] text-[1.5rem] gap-3 p-2">
                      {item.children ? (
                        <>
                          <div className="flex flex-row justify-between">
                          <AccordionTrigger className="flex flex-row justify-between gap-2 items-center">
                            {item.label}
                            <ChevronDown/>
                          </AccordionTrigger>
                          </div>

                          <AccordionContent className="!bg-[#474747] p-2 border-[#757575] text-balance">
                            <ul className="grid w-[200px] bg-[#474747] text-[#F4B404] p-0">
                              {item.children.map((subitem) => (
                                <li key={subitem.path}>
                                    <Link href={`${item.path}/${subitem.path}`}>
                                      {subitem.label}
                                    </Link>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </>
                      ) : (
                          <Link href={item.path}>
                            {item.label}
                          </Link>
                      )}
                    </AccordionItem>))}
                  </Accordion>
              </nav>
            </DrawerContent>
          </Drawer>
        )
      }
    </header>
  );
}
