import { ContentNew } from "@/components/ContentNew";
import { notFound } from "next/navigation";
import { NewService } from "@/services/NewsServices";

export default async function NoticiaPage( 
    {params} : {params: Promise<{noticiaId: string}>} 
) {

    const noticiaId =  (await params).noticiaId.split('-').at(-1);
    if(!noticiaId) { notFound();}

    let response = null;
    try{
        const newService = new NewService();
        response = (await newService.findNew(noticiaId)).data;
    }catch(e){
        notFound();
    }
    return(
        <ContentNew data={response.data}/>
    );
}