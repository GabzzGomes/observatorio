"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ButtonTwo from "./ButtonTwo";
import { DocumentService } from "@/services/DocumentService";
import { OpinionArticleService } from "@/services/OpinionArticleService";
import { ScientifiqueArticleService } from "@/services/ScientifiqueArticleService";
import { TechnicalNotesService } from "@/services/TechnicalNotesService";
import { LibraryCard } from "./LibraryCard";
import { useMediaQuery } from "./hooks/use-media-query";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Filter, SquareXIcon, Loader2 } from "lucide-react";

const docs = new DocumentService();
const artOpinion = new OpinionArticleService();
const artCientifique = new ScientifiqueArticleService();
const note = new TechnicalNotesService();

export default function LibraryHome() {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  const requestRunning = useRef(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const fetchData = useCallback(async (type: number) => {

    if (requestRunning.current) return;

    requestRunning.current = true;
    setLoading(true);

    try {
      let res = null;
      let typeInfo = { tipo: "", label: "" };

      switch (type) {
        case 1:
          typeInfo = {
            tipo: "documentos-e-relatorios",
            label: "Documentos e Relatórios",
          };
          res = (await docs.FirstDocument()).data.data;
          break;

        case 2:
          typeInfo = {
            tipo: "artigo-de-opiniaos",
            label: "Artigo de Opinião",
          };
          res = (await artOpinion.FirstArticle()).data.data;
          break;

        case 3:
          typeInfo = {
            tipo: "artigo-cientificos",
            label: "Artigo Cientifico",
          };
          res = (await artCientifique.FirstArticle()).data.data;
          break;

        case 4:
          typeInfo = {
            tipo: "nota-tecnicas",
            label: "Notas Técnicas",
          };
          res = (await note.FirstNote()).data.data;
          break;
      }

      if (res?.length) {
        setData({
          ...res[0],
          metadata: typeInfo,
        });
      }
    } catch (error) {
      console.error("Erro ao buscar dados da biblioteca:", error);
    } finally {
      setLoading(false);
      requestRunning.current = false;
    }

  }, []);

  useEffect(() => {
    fetchData(1);
  }, [fetchData]);

  return (
    <section className="flex flex-col w-[90%] md:w-[70%] self-center">
      <header className="flex md:flex-row flex-col justify-evenly p-7 bg-[#F4B404] text-white">
        <h2 className="text-6xl md:w-[30%]">Nossa Biblioteca</h2>

        <p className="md:w-[50%] underline font-medium font-roboto">
          Acesse nossa biblioteca e aprofunde-se nas análises produzidas por
          nossos pesquisadores sobre a agenda racial. No Caderno Desigualdades
          em Evidência, você encontrará dados, reflexões e evidências que
          qualificam o debate público. Conheça, compartilhe e fortaleça uma
          produção científica comprometida com a redução das desigualdades
          raciais.
        </p>
      </header>

      <div className="flex flex-col justify-center md:justify-between bg-[#1C1C1C] w-full md:h-[55vw] p-5 md:p-15">
        <div className="grid grid-rows-1 md:grid-cols-[40%_60%]">

          {isDesktop ? (
            <div className="flex w-full flex-col text-white gap-5">
              <ButtonTwo fetchData={() => fetchData(1)} name="Documentos e Relatórios"/>
              <ButtonTwo fetchData={() => fetchData(4)} name="Notas Técnicas"/>
              <ButtonTwo fetchData={() => fetchData(2)} name="Notas de Opinião"/>
              <ButtonTwo fetchData={() => fetchData(3)} name="Artigo Cientifico"/>
            </div>
          ) : (
            <div className="lg:hidden mt-4">

            <Drawer direction="right">

                <DrawerTrigger
                disabled={loading}
                className="bg-[#F4B404] p-3 rounded-md w-fit disabled:opacity-70"
                >

                {loading ? (
                    <Loader2 className="text-white animate-spin" size={20}/>
                ) : (
                    <Filter className="text-white" size={20}/>
                )}

                </DrawerTrigger>

                <DrawerContent className="p-5 flex flex-col gap-5 bg-[#1C1C1C]">

                    <DrawerClose>
                        <SquareXIcon className="text-[#F4B404]" />
                    </DrawerClose>

                    <div className="flex flex-col gap-3">

                        <ButtonTwo
                        fetchData={() => fetchData(1)}
                        name="Documentos e Relatórios"
                        />

                        <ButtonTwo
                        fetchData={() => fetchData(4)}
                        name="Notas Técnicas"
                        />

                        <ButtonTwo
                        fetchData={() => fetchData(2)}
                        name="Notas de Opinião"
                        />

                        <ButtonTwo
                        fetchData={() => fetchData(3)}
                        name="Artigo Científico"
                        />

                    </div>

                    </DrawerContent>
            </Drawer>

        </div>
        )}

          {loading && (
            <div className="flex items-center justify-center w-full h-full">
              <Loader2 className="animate-spin text-[#F4B404]" size={28}/>
            </div>
          )}

          {!loading && data && (
            <LibraryCard
              type={data.metadata.label}
              title={data.titulo}
              link={`/biblioteca/${data.metadata.tipo}/${data.titulo}-${data.documentId}`}
              text={data.texto}
            />
          )}

        </div>

        <div className="flex flex-col mt-7 p-5 gap-3 px-7 md:h-[15vw] bg-[#FFF]/87">
          <h3 className="text-2xl text-[#F4B404]">Sobre Nosso Repertório</h3>

          <p className="font-roboto md:font-medium">
            Em nossa biblioteca encontram-se disponíveis diversos textos
            produzidos por nossos pesquisadores acerca da agenda racial,
            organizados segundo eixos temáticos e tipologias documentais. O
            Caderno Desigualdades em Evidência destaca-se como o principal
            veículo de difusão dos achados científicos elaborados pela
            Associação Opará, constituindo instrumento sistemático de
            socialização do conhecimento e de fortalecimento do debate público
            qualificado sobre desigualdades raciais.
          </p>
        </div>

      </div>
    </section>
  );
}