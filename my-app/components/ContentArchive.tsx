import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from 'remark-gfm';
import remarkNormalizeHeadings from "remark-normalize-headings";
import remarkSqueezeParagraphs from "remark-squeeze-paragraphs";

export default function ContentArchive(props : { type : string, data : any }) {
    return(
        <div className="flex flex-col h-auto px-20 py-10 gap-3">
            <h1 className="text-5xl text-[#F4B404] text-left mb-2">{props.type}</h1>
            <h1 className="text-5xl ">{props.data.titulo.toUpperCase()}</h1>
            <h4 className="text-2xl text-[#00000080]">Publicado em: {props.data.data_publicacao}</h4>
            <div className="relative flex justify-center align-middle h-[35vw] mb-5">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${props.data.capa.url}`}
              alt={props.data.capa.name} 
              fill
              className="object-cover"
              />
            </div>
            <div className="grid gap-3">
                <h2 className="font-bold text-4xl">RESUMO</h2>
                <div className="markdown-render font-roboto leading-9">
                <ReactMarkdown 
                remarkPlugins={[
                    remarkGfm, 
                    remarkSqueezeParagraphs, 
                    remarkNormalizeHeadings
                ]} 
                rehypePlugins={[rehypeRaw]}
                >
                    {props.data.resumo}
                </ReactMarkdown>
                </div>

                <h2 className="font-bold text-4xl mt-5">INTRODUÇÃO</h2>
                <div className="markdown-render font-roboto leading-9">
                <ReactMarkdown 
                remarkPlugins={[
                    remarkGfm, 
                    remarkSqueezeParagraphs, 
                    remarkNormalizeHeadings
                ]} 
                rehypePlugins={[rehypeRaw]}
                >
                    {props.data.texto}
                </ReactMarkdown>
                </div>
            </div>
        </div>
    );
}

