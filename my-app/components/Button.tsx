import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Button(props : {link: string}) {
 return(
    <Link href={props.link} className="flex items-center justify-center gap-2 my-2.5 p-2 w-25 bg-[#1C1C1C] text-white rounded-sm shadow-[0_7px_4px_-3px_rgba(0,0,0,0.55)] 
    transition-all duration-300
    hover:-translate-y-1 hover:shadow-[0_12px_12px_-5px_rgba(0,0,0,0.5)]">
    Veja Mais 
    <ArrowRight className="w-5 "/>
    </Link>
 );
}