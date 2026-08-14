"use client";

import { ButtonFilter } from "@/components/ButtonFilter";
import { useEffect, useState } from "react";
import { DocumentService } from "@/services/DocumentService";
import { OpinionArticleService } from "@/services/OpinionArticleService";
import { ScientifiqueArticleService } from "@/services/ScientifiqueArticleService";
import { TechnicalNotesService } from "@/services/TechnicalNotesService";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Button from "./Button";

import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkNormalizeHeadings from "remark-normalize-headings";
import remarkSqueezeParagraphs from "remark-squeeze-paragraphs";

import { Filter, Loader2, SquareXIcon } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose
} from "@/components/ui/drawer";
import { useMediaQuery } from "./hooks/use-media-query";
import { ButtonFilterTwo } from "./ButtonFilterTwo";

const remarkPlugins = [
  remarkGfm,
  remarkSqueezeParagraphs,
  remarkNormalizeHeadings,
];

const rehypePlugins = [rehypeRaw];

export default function LibraryPage() {

  const docs = new DocumentService();
  const artOpinion = new OpinionArticleService();
  const artCientifique = new ScientifiqueArticleService();
  const note = new TechnicalNotesService();

  const searchParam = useSearchParams();
  const router = useRouter();

  const pageParam = Number(searchParam.get("page") ?? 1);
  const typeParam = String(searchParam.get("type") ?? "documentos-e-relatorios");

  const [data, setData] = useState<any | null>(null);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");
  
  const updateParam = (newPage: number, newType: string) => {

    if (loading) return;

    router.push(`/biblioteca?page=${newPage}&type=${newType}`);
  };

  const fetchData = async (type: string, page: number) => {

    if (loading) return;

    try {

      setLoading(true);

      let api = null;

      switch (type) {

        case "documentos-e-relatorios":
          api = await docs.listDocuments(page);
          break;

        case "nota-tecnicas":
          api = await note.listNote(page);
          break;

        case "artigo-cientificos":
          api = await artCientifique.listArticle(page);
          break;

        case "artigo-de-opiniaos":
          api = await artOpinion.listArticle(page);
          break;

      }

      if (!api) return;

      const res = api.data.data;
      const totalPages = api.data.meta.pagination.pageCount;

      setData(res);
      setTotalPage(totalPages);

    } catch (e) {

      console.error(e);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    fetchData(typeParam, pageParam);

  }, [typeParam, pageParam]);

  return (

    <section className="grid grid-cols-1 lg:grid-cols-[30%_70%] py-20 px-5 lg:pl-5 lg:pr-20 gap-10">

      <aside className="flex flex-col gap-2">

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F4B404] leading-none">
          BIBLIOTECA
        </h1>

        <h2 className="text-[1rem] md:text-[1.3rem] text-neutral-700 md:ml-10 md:-mt-2">
          CONFIRA NOSSAS ÚLTIMAS PUBLICAÇÕES
        </h2>

        {isDesktop ? (

          <div className="w-full flex flex-col gap-3 mt-4">

            <ButtonFilter
              active={typeParam === "documentos-e-relatorios"}
              label="Documentos e Relatório"
              funcao={() => updateParam(1, "documentos-e-relatorios")}
            />

            <ButtonFilter
              active={typeParam === "nota-tecnicas"}
              label="Notas Técnicas"
              funcao={() => updateParam(1, "nota-tecnicas")}
            />

            <ButtonFilter
              active={typeParam === "artigo-cientificos"}
              label="Artigos Científicos"
              funcao={() => updateParam(1, "artigo-cientificos")}
            />

            <ButtonFilter
              active={typeParam === "artigo-de-opiniaos"}
              label="Artigos de Opinião"
              funcao={() => updateParam(1, "artigo-de-opiniaos")}
            />

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

                  <ButtonFilter
                    active={typeParam === "documentos-e-relatorios"}
                    label="Documentos e Relatório"
                    funcao={() => updateParam(1, "documentos-e-relatorios")}
                  />

                  <ButtonFilter
                    active={typeParam === "nota-tecnicas"}
                    label="Notas Técnicas"
                    funcao={() => updateParam(1, "nota-tecnicas")}
                  />

                  <ButtonFilter
                    active={typeParam === "artigo-cientificos"}
                    label="Artigos Científicos"
                    funcao={() => updateParam(1, "artigo-cientificos")}
                  />

                  <ButtonFilter
                    active={typeParam === "artigo-de-opiniaos"}
                    label="Artigos de Opinião"
                    funcao={() => updateParam(1, "artigo-de-opiniaos")}
                  />

                </div>

              </DrawerContent>

            </Drawer>

          </div>

        )}

      </aside>

      <div className="grid grid-cols-1 w-full py-5">

        <div className="bg-[#E3E2E2] w-full">

          {loading && (

            <div className="w-full flex justify-center py-20">
              <Loader2 className="animate-spin text-[#F4B404]" size={32}/>
            </div>

          )}

          {!loading && Array.isArray(data) &&

            data.map((item, i) => {

              const isOdd = (i + 1) % 2 !== 0;

              return (

                <article
                  key={item.documentId}
                  className={`relative grid gap-6 my-16 
                  ${isDesktop
                    ? isOdd
                      ? "md:grid-cols-[40%_60%]"
                      : "md:grid-cols-[60%_40%]"
                    : "grid-cols-1"
                  }`}
                >

                  {(isDesktop ? isOdd : true) && (

                    <div className="relative h-[60vw] md:h-[25vw] bg-[#F4B404]">

                      {item.capa && (

                        <Image
                          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.capa.url}`}
                          alt={item.capa.name}
                          fill
                          sizes="(max-width:768px) 100vw, 40vw"
                          className="object-cover"
                        />

                      )}

                    </div>

                  )}

                  <div className="flex flex-col gap-4 px-4 md:pl-16 md:pr-10">

                    <h3 className="text-2xl md:text-3xl uppercase text-[#F4B404] leading-snug">
                      {item.titulo}
                    </h3>

                    <span className="text-[0.9rem] md:text-[1.1rem] text-black/50">
                      Publicado em {item.data_publicacao}
                    </span>

                    <div className="font-roboto text-[0.95rem] md:text-[1rem] line-clamp-7 markdown-render">

                      <ReactMarkdown
                        remarkPlugins={remarkPlugins}
                        rehypePlugins={rehypePlugins}
                      >
                        {item.texto}
                      </ReactMarkdown>

                    </div>

                    <Button
                      link={`/biblioteca/${typeParam}/${item.titulo
                        .toLowerCase()
                        .replaceAll(" ", "-")
                        .replaceAll("/", "-")}-${item.documentId}`}
                    />

                  </div>

                  {isDesktop && !isOdd && (

                    <div className="relative h-[60vw] md:h-[25vw] bg-[#F4B404]">

                      {item.capa && (

                        <Image
                          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.capa.url}`}
                          alt={item.capa.name}
                          fill
                          sizes="(max-width:768px) 100vw, 40vw"
                          className="object-cover"
                        />

                      )}

                    </div>

                  )}

                </article>

              );
            })

          }

        </div>

        <nav className="my-7 w-full flex justify-center gap-2 flex-wrap">

          {pageParam > 1 && (

            <button
              disabled={loading}
              onClick={() => updateParam(pageParam - 1, typeParam)}
              className="text-sm font-medium rounded-md px-3 py-1 text-neutral-700 hover:bg-neutral-200"
            >
              Anterior
            </button>

          )}

          {Array.from({ length: totalPage }).map((_, i) => {

            const p = i + 1;

            return (

              <button
                key={p}
                disabled={loading}
                onClick={() => updateParam(p, typeParam)}
                className={`w-8 h-8 flex items-center justify-center text-sm font-medium rounded-md
                ${pageParam === p
                  ? "bg-[#1C1C1C] text-white"
                  : "text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {p}
              </button>

            );

          })}

          {pageParam < totalPage && (

            <button
              disabled={loading}
              onClick={() => updateParam(pageParam + 1, typeParam)}
              className="text-sm font-medium rounded-md px-3 py-1 text-neutral-700 hover:bg-neutral-200"
            >
              Próximo
            </button>

          )}

        </nav>

      </div>

    </section>
  );
}