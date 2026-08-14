import ReactMarkdown from "react-markdown";
import Button from "./Button";
import remarkGfm from "remark-gfm";
import remarkSqueezeParagraphs from "remark-squeeze-paragraphs";
import remarkNormalizeHeadings from "remark-normalize-headings";
import rehypeRaw from "rehype-raw";

const remarkPlugins = [
  remarkGfm,
  remarkSqueezeParagraphs,
  remarkNormalizeHeadings
];

const rehypePlugins = [rehypeRaw];

export function LibraryCard(props: { type: string; title: string; text: string; link: string }) {
  return (
    <article className="flex flex-col mt-4 p-6 md:p-7 h-full w-full bg-white rounded-md gap-3">

      <span className="text-[0.9rem] md:text-[1.1rem] font-medium text-neutral-700">
        {props.type}
      </span>

      <div className="w-12 md:w-15 h-[3px] bg-[#F4B404]" />

      <h3 className="text-xl md:text-2xl font-semibold leading-snug">
        {props.title}
      </h3>

      <div className="line-clamp-4 markdown-render text-[0.95rem] md:text-[1rem] text-neutral-800">
        <ReactMarkdown
          remarkPlugins={remarkPlugins}
          rehypePlugins={rehypePlugins}
        >
          {props.text}
        </ReactMarkdown>
      </div>

      <Button link={props.link} />

    </article>
  );
}