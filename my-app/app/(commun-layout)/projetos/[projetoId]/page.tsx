import { notFound } from "next/navigation";
import {Projects} from "@/services/ProjectsServices";
import { ContentProject } from "@/components/ContentProject";


export default async function ProjetoPage( 
    {params} : {params: Promise<{projetoId: string}>} 
) {

    const projetoId =  (await params).projetoId.split('-').at(-1);
    if(!projetoId) { notFound();}

    let response = null;
    try{
        const projectService = new Projects();
        response = (await projectService.findProject(projetoId)).data;
    }catch(e){
        notFound();
    }
    return(
        <ContentProject data={response.data}/>
    );
}