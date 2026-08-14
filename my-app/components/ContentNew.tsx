import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from 'remark-gfm';
import remarkNormalizeHeadings from "remark-normalize-headings";
import remarkSqueezeParagraphs from "remark-squeeze-paragraphs";


export function ContentNew( props : {data : any}){
    return(
        <div className="flex flex-col h-auto px-20 py-10 gap-3">
            <h1 className="text-5xl text-[#F4B404] text-left mb-2">Notícia</h1>
            <h1 className="text-5xl ">{props.data.titulo.toUpperCase()}</h1>
            <h2 className="text-3xl">{props.data.descricao_noticia}</h2>
            <h4 className="text-2xl text-[#00000080]">Publicado em: {props.data.data_publicacao} | por: {props.data.autor}</h4>
            <div className="relative flex justify-center align-middle h-[35vw] mb-5">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${props.data.capa_noticia.url}`}
              alt={props.data.capa_noticia.name} 
              fill
              className="object-cover"
              />
            </div>
            <div className="markdown-render">
                <ReactMarkdown 
                remarkPlugins={[
                    remarkGfm, 
                    remarkSqueezeParagraphs, 
                    remarkNormalizeHeadings
                ]} 
                rehypePlugins={[rehypeRaw]}
                >
                    {props.data.campo_noticia}
                </ReactMarkdown>
                
            </div>
        </div>
    );
}