import NewsCard from "@/components/NewsCard";
import LibraryHome from "@/components/LibraryHome";
import { ArrowDownRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <main className="relative flex flex-col items-center justify-center w-full min-h-screen text-center text-[#F4B404] overflow-hidden">
        <Image
          src="/images/back3.jpg"
          alt="observatorio-opara"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#1f1e1e]/70" />

        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-7xl font-semibold">
            OBSERVATÓRIO OPARÁ
          </h1>

          <h2 className="text-2xl md:text-5xl max-w-5xl mt-4">
            OBSERVATÓRIO DAS POLÍTICAS AFIRMATIVAS RACIAIS
          </h2>
        </div>

      </main>

      <div className="w-full grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] md:auto-rows-[200px]">
        <div className="relative w-full h-full">
          <Image
            src="/images/abdias-nascimento.jpeg"
            alt="abdias-nascimento"
            fill
            sizes="(max-width:768px) 100vw, 25vw"
            className="object-cover"
          />
        </div>

        <div className="relative w-full h-full">
          <Image
            src="/images/luizabarros.jpg"
            alt="luiza-barros"
            fill
            sizes="(max-width:768px) 100vw, 25vw"
            className="object-cover object-top"
          />
        </div>

        <div className="relative w-full h-full">
          <Image
            src="/images/leilagonzales.jpg"
            alt="leila-gonzales"
            fill
            sizes="(max-width:768px) 100vw, 25vw"
            className="object-cover"
          />
        </div>

        <div className="relative w-full h-full">
          <Image
            src="/images/luizalberto.webp"
            alt="luiz-alberto"
            fill
            sizes="(max-width:768px) 100vw, 25vw"
            className="object-cover"
          />
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-[65%_35%] w-full">
        <div className="flex flex-col justify-center p-6 md:p-20 gap-4">
          <h2 className="text-3xl md:text-4xl">Um pouco sobre o Observatório</h2>
          <div className="w-16 h-1 bg-[#F4B404]" />
          <p className="md:max-w-[70%] font-roboto text-base md:text-xl">
            O Opará é uma organização privada sem fins lucrativos que se dedica
            a produção de conhecimento aplicado e à incidência qualificada
            sobre políticas de ações afirmativas raciais. Sua atuação
            concentra-se no acompanhamento, análise e avaliação de políticas
            públicas voltadas à promoção da equidade racial, com especial
            atenção ao serviço público das três esferas da federação. Por meio
            da elaboração de relatórios de pesquisa baseados em evidências, o
            Opará busca contribuir para o enfrentamento do racismo
            institucional, o fortalecimento da justiça social e a ampliação da
            efetividade das políticas públicas de igualdade racial.
          </p>
        </div>

        <div className="relative flex items-center justify-center bg-[#F4B404] min-h-[300px]">
          <Image
            src="/images/logo.png"
            alt="logo-do-observatorio-opara"
            width={420}
            height={420}
            className="object-contain"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-[35%_65%] w-full bg-[#F3F3F3]">
        <div className="relative min-h-[300px]">
          <Image
            src="/images/politicas-acoes.jpg"
            alt="politicas-acoes"
            fill
            sizes="(max-width:768px) 100vw, 35vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-6 md:p-20 gap-4">
          <h2 className="text-3xl md:text-4xl">Nossa Missão</h2>
          <div className="w-16 h-1 bg-[#F4B404]" />

          <p className="md:max-w-[70%] font-roboto text-base md:text-xl">
            Atuar na defesa dos direitos da população negra, com foco na
            promoção da equidade racial e da justiça social, incidindo sobre
            políticas públicas e instituições para o enfrentamento do racismo
            institucional e a ampliação de direitos.
          </p>

          <Link
            href="/"
            className="group flex items-center gap-2 px-4 py-2 text-lg text-white bg-[#F4B404] w-fit transition-all duration-300 hover:-translate-y-[2px] active:scale-95"
          >
            Confira Mais
            <ArrowDownRightIcon className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
          </Link>
        </div>
      </section>

      <div className="w-full bg-[#F3F3F3] py-10">
        <NewsCard />
      </div>

      <div className="flex justify-center w-full py-10">
        <LibraryHome />
      </div>

      <section className="flex flex-col w-full py-10 md:py-20 px-6 md:px-24 bg-[url(/images/back4.jpg)] bg-cover bg-center bg-[#d69c00]/80 bg-blend-overlay">
        <h1 className="text-3xl md:text-6xl text-[#474747]">Opará em Ação</h1>
        <h2 className="text-2xl md:text-4xl text-[#474747]">Confira nosso canal</h2>

        <div className="flex mt-6 w-full p-4 md:p-8 bg-[#fff9e3]/95 rounded-md">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/Lhjp789IA40"
            title="Opará em Ação"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}