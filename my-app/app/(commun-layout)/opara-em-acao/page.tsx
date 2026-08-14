"use client";
import { Podcast } from "@/services/PodcastServices";
import { Projects } from "@/services/ProjectsServices";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import Button from "@/components/Button";
import Link from "next/link";
import { NewService } from "@/services/NewsServices";

export default function OparaAcao() {
  const project = new Projects();
  const podcast = new Podcast();
  const noticia = new NewService();

  const [projetos, setProjetos] = useState<any | null>(null);
  const [podcasts, setPodcast] = useState<any[]>([]);
  const [noticias, setNoticias] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const projectRes = (await project.FirstProject()).data.data[0];
      const podcastRes = (await podcast.FirstPodcast()).data.data;
      const noticiaRes = (await noticia.listFirstsNews()).data.data;
      setProjetos(projectRes);
      setPodcast(podcastRes);
      setNoticias(noticiaRes);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 py-16 flex flex-col gap-20">
      <section className="w-full flex flex-col gap-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#F4B404]">
          OPARÁ EM AÇÃO
        </h1>

        {podcasts.length > 0 && (
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
            <div className="w-full flex flex-col gap-6">
              <div className="relative w-full aspect-video">
                <iframe
                  src={podcasts[0].link_video.replace("watch?v=", "embed/")}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>

              <h2 className="text-3xl md:text-4xl text-[#F4B404]">
                {podcasts[0].titulo}
              </h2>

              <p className="text-lg">{podcasts[0].descricao}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {podcasts.slice(1).map((pod) => (
                <div
                  key={pod.id}
                  className="flex flex-col gap-3"
                >
                  <div className="relative w-full aspect-video">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${pod.capa.url}`}
                      alt={`${pod.capa.name}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Play className="text-white" size={28} />
                    </div>
                  </div>

                  <a
                    href={pod.link_video}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-xl text-[#F4B404] underline line-clamp-2">
                      {pod.titulo}
                    </h3>
                  </a>

                  <p className="text-base line-clamp-2">
                    {pod.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {projetos && (
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl">{projetos.titulo}</h2>

            <h3 className="text-2xl">
              Publicado em: {projetos.data_publicacao}
            </h3>

            <p className="font-roboto text-justify line-clamp-10">
              {projetos.texto}
            </p>

            <Link
              href="/"
              className="flex items-center justify-center gap-2 p-2 w-52 bg-[#1C1C1C] text-white shadow-[0_7px_4px_-3px_rgba(0,0,0,0.55)]
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-[0_12px_12px_-5px_rgba(0,0,0,0.5)]"
            >
              Veja Mais Em Nosso Canal
              <ArrowRight className="w-5" />
            </Link>
          </div>

          <div className="relative w-full aspect-[4/3]">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${projetos.capa.url}`}
              alt={`${projetos.capa.name}`}
              fill
              className="object-cover"
            />
          </div>
        </section>
      )}

      <section className="flex flex-col gap-10">
        <h2 className="text-4xl">Confira Nossas Últimas Notícias</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {noticias.map((news) => (
            <div key={news.id} className="flex flex-col gap-3">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${news.capa_noticia.url}`}
                  alt={`${news.capa_noticia.name}`}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl">{news.titulo}</h3>

              <h4 className="text-xl">
                Publicado em: {news.data_publicacao}
              </h4>

              <p className="font-roboto line-clamp-3">
                {news.campo_noticia}
              </p>

              <Button
                link={`/noticias/${news.titulo
                  .toLowerCase()
                  .replaceAll(" ", "-")}-${news.documentId}`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}