"use client";

import { useRouter } from "next/navigation";

export default function PersonCard(props: {
  lattesUrl: string;
  nome: string;
  formacao: string;
  ocupacao: string;
  img: string;
}) {
  const router = useRouter();

  function openLattes() {
    router.push(props.lattesUrl);
  }

  return (
    <div className="w-full min-h-[300px] p-4 flex flex-col items-center justify-start gap-1">
      <img
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${props.img}`}
        className="w-[140px] h-[140px] md:w-[170px] md:h-[170px] rounded-full object-cover"
      />

      <h2 className="mt-2 text-lg md:text-xl font-semibold text-black text-center leading-tight">
        {props.nome}
      </h2>

      <h3 className="text-sm md:text-base text-gray-800 text-center leading-tight">
        {props.formacao}
      </h3>

      <h3 className="text-sm md:text-base text-gray-700 text-center leading-tight">
        {props.ocupacao}
      </h3>

      <button
        onClick={openLattes}
        className="mt-2 bg-[#F4B404] rounded-sm text-white text-sm md:text-base px-4 py-2"
      >
        Curriculum Lattes
      </button>
    </div>
  );
}