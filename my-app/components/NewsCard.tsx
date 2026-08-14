"use client";

import { useEffect, useState } from "react";
import { NewService } from "@/services/NewsServices";
import Image from "next/image";
import Button from "./Button";

const newService = new NewService();

export default function NewsCard() {
  const [news, setNews] = useState<any[] | undefined>(undefined);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await newService.listFirstsNews();
        setNews(res?.data?.data);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="flex flex-col w-full h-auto align-middle justify-baseline gap-15 pb-18">
      <header className="flex flex-col w-full text-3xl">
        <h2 className="text-center">VEJA NOSSAS ULTIMAS NOTICIAS</h2>
        <div className="w-15 h-1 bg-[#F4B404] self-center" />
      </header>

      <div className="grid self-center md:grid-cols-3 w-[70%] pb-10 gap-10">
        {news?.map((newsItem, index) => {
          const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${newsItem.capa_noticia?.url}`;

          const slug = `${newsItem.titulo
            ?.toLowerCase()
            .replaceAll(" ", "-")}-${newsItem.documentId}`;

          return (
            <article
              key={newsItem.documentId}
              className="flex flex-col bg-[#F4B404] w-full rounded-md p-4 
              opacity-0 animate-[fadeInUp_.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Image
                src={imageUrl}
                alt={newsItem.titulo || "Imagem da notícia"}
                width={400}
                height={160}
                className="w-full h-[10rem] object-cover"
                loading="lazy"
                sizes="(max-width:768px) 100vw, 33vw"
              />

              <h3 className="text-3xl font-extralight text-white pt-5">
                {newsItem.titulo}
              </h3>

              <time
                className="text-white text-1xl"
                dateTime={newsItem.data_publicacao}
              >
                {newsItem.data_publicacao}
              </time>

              <p className="underline font-medium font-roboto text-[0.8rem]">
                {newsItem.descricao_noticia}
              </p>

              <Button link={`/noticias/${slug}`} />
            </article>
          );
        })}
      </div>
    </section>
  );
}