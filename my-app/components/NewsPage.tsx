"use client";

import { ButtonFilterTwo } from "@/components/ButtonFilterTwo";
import { useEffect, useState, useCallback } from "react";
import { NewService } from "@/services/NewsServices";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Button from "./Button";
import rehypeRaw from "rehype-raw";
import remarkNormalizeHeadings from "remark-normalize-headings";
import remarkSqueezeParagraphs from "remark-squeeze-paragraphs";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

import { useMediaQuery } from "./hooks/use-media-query";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Filter, SquareXIcon } from "lucide-react";

const newsService = new NewService();

export default function NewsPage() {

  const currentYear = new Date().getFullYear();

  const years = Array.from(
    { length: currentYear - 2025 + 1 },
    (_, i) => currentYear - i
  );

  const searchParam = useSearchParams();
  const router = useRouter();

  const pageParam = Number(searchParam.get("page") ?? 1);
  const yearParam = Number(searchParam.get("year") ?? currentYear);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [data, setData] = useState<any[]>([]);
  const [totalPage, setTotalPage] = useState(1);

  const updateParam = useCallback((page: number, year: number) => {
    router.push(`/noticias?page=${page}&year=${year}`);
  }, [router]);

  const fetchData = useCallback(async (year: number, page: number) => {
    try {

      const api = await newsService.listNews(page, year);

      setData(api.data.data);
      setTotalPage(api.data.meta.pagination.pageCount);

    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchData(yearParam, pageParam);
  }, [yearParam, pageParam, fetchData]);

  return (

    <div className="grid md:grid-cols-[30%_70%] grid-cols-1 py-25 pl-5 pr-5 md:pr-20 gap-5">

      <aside className="flex flex-col h-full">

        <h1 className="text-6xl md:text-8xl text-[#F4B404] relative md:left-10">
          NOTÍCIAS
        </h1>

        <h2 className="relative text-[1rem] md:text-[1.3rem] md:left-10 md:-top-3">
          CONFIRA NOSSAS ÚLTIMAS PUBLICAÇÕES
        </h2>

        {isDesktop ? (

          <div className="w-full flex flex-col">
            {years.map((y) => (
              <ButtonFilterTwo
                key={y}
                active={yearParam === y}
                label={String(y)}
                funcao={() => updateParam(1, y)}
              />
            ))}
          </div>

        ) : (

          <div className="mt-4">

            <Drawer direction="right">

              <DrawerTrigger className="bg-[#F4B404] p-3 rounded-md w-fit">
                <Filter className="text-white" />
              </DrawerTrigger>

              <DrawerContent className="p-5 flex flex-col gap-5 bg-[#1C1C1C]">

                <DrawerClose>
                  <SquareXIcon className="text-[#F4B404]" />
                </DrawerClose>

                <div className="flex flex-col gap-3">

                  {years.map((y) => (
                    <ButtonFilterTwo
                      key={y}
                      active={yearParam === y}
                      label={String(y)}
                      funcao={() => updateParam(1, y)}
                    />
                  ))}

                </div>

              </DrawerContent>

            </Drawer>

          </div>

        )}

      </aside>

      <div className="grid grid-cols-1 w-full py-5">

        <div className="bg-[#E3E2E2] w-full">

          {data.map((item, i) => {

            const isOdd = (i + 1) % 2 !== 0;

            return (

              <div
                key={item.id}
                className={`relative grid my-20 
                ${isOdd ? "md:grid-cols-[40%_60%]" : "md:grid-cols-[60%_40%]"}
                grid-cols-1`}
              >

                {isOdd && (

                  <div className="relative flex justify-center items-center h-[250px] md:h-[25vw] bg-[#F4B404]">

                    {item.capa_noticia && (

                      <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.capa_noticia.url}`}
                        alt={item.capa_noticia.name}
                        fill
                        className="object-cover"
                      />

                    )}

                  </div>

                )}

                <div className="flex flex-col md:pl-30 gap-4 p-5 md:p-0">

                  <h2 className="text-2xl md:text-3xl uppercase text-[#F4B404]">
                    {item.titulo}
                  </h2>

                  <h3 className="text-[0.9rem] md:text-[1.2rem] text-black/50">
                    Publicado em {item.data_publicacao} por: {item.autor}
                  </h3>

                  <div className="md:w-full md:pr-15 font-roboto text-[0.9rem] md:text-[1rem] line-clamp-7 markdown-render">

                    <ReactMarkdown
                      remarkPlugins={[
                        remarkGfm,
                        remarkSqueezeParagraphs,
                        remarkNormalizeHeadings
                      ]}
                      rehypePlugins={[rehypeRaw]}
                    >
                      {item.campo_noticia}
                    </ReactMarkdown>

                  </div>

                  <Button
                    link={`noticias/${item.titulo.toLowerCase().replaceAll(" ", "-")}-${item.documentId}`}
                  />

                </div>

                {!isOdd && (

                  <div className="relative flex justify-center items-center h-[250px] md:h-[25vw] bg-[#F4B404]">

                    {item.capa_noticia && (

                      <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.capa_noticia.url}`}
                        alt={item.capa_noticia.name}
                        fill
                        className="object-cover"
                      />

                    )}

                  </div>

                )}

              </div>

            );

          })}

        </div>

        <div className="my-7 w-full flex justify-center gap-2 flex-wrap">

          {pageParam > 1 && (
            <button
              onClick={() => updateParam(pageParam - 1, yearParam)}
              className="text-sm font-medium transition-colors duration-200 rounded-md text-neutral-700 hover:bg-neutral-200 px-2 py-1"
            >
              Anterior
            </button>
          )}

          {Array.from({ length: totalPage }).map((_, i) => {

            const p = i + 1;

            return (

              <button
                key={p}
                onClick={() => updateParam(p, yearParam)}
                className={`
                  w-7 h-7
                  flex items-center justify-center
                  text-sm font-medium
                  transition-colors duration-200
                  rounded-md
                  ${
                    pageParam === p
                      ? "bg-[#1C1C1C] text-white border border-[#E3E2E2]"
                      : "text-neutral-700 hover:bg-neutral-200"
                  }
                `}
              >
                {p}
              </button>

            );

          })}

          {pageParam < totalPage && (
            <button
              onClick={() => updateParam(pageParam + 1, yearParam)}
              className="text-sm font-medium transition-colors duration-200 rounded-md text-neutral-700 hover:bg-neutral-200 px-2 py-1"
            >
              Próximo
            </button>
          )}

        </div>

      </div>

    </div>

  );
}