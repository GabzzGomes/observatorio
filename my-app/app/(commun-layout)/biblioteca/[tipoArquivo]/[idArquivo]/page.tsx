import { notFound } from "next/navigation";
import { DocumentService } from "@/services/DocumentService";
import { ScientifiqueArticleService } from "@/services/ScientifiqueArticleService";
import { OpinionArticleService } from "@/services/OpinionArticleService";
import { TechnicalNotesService } from "@/services/TechnicalNotesService";
import ContentArchive from "@/components/ContentArchive";


export default async function BibliotecaArquivoPage(
    {params} : 
    {params: Promise<{tipoArquivo: string, idArquivo: string}>}
) {
    const tipoArquivo = (await params).tipoArquivo;
    const idArquivo = (await params).idArquivo.split('-').at(-1);
    const tiposPermitdos = ['documentos-e-relatorios', 'nota-tecnicas', 'artigo-cientificos', 'artigo-de-opiniaos'];
    
    if(!tiposPermitdos.includes(tipoArquivo)) { notFound(); }
    if(!idArquivo) { notFound(); }

    let response = null;
    let tipo = '';

    try{
        switch (tipoArquivo) {
            case 'documentos-e-relatorios':
                const doc = new DocumentService();
                response =  (await doc.findDocuments(idArquivo)).data;
                tipo = "Documentos e Relatórios"
                break;
            case 'nota-tecnicas':
                const note = new TechnicalNotesService();
                response =  (await note.findNote(idArquivo)).data;
                tipo = "Notas Técnicas"
                break;
            case 'artigo-cientificos':
                const sci = new ScientifiqueArticleService();
                response =  (await sci.findArticle(idArquivo)).data;
                tipo = "Artigos Científicos"
                break;
            case 'artigo-de-opiniaos':
                const opin = new OpinionArticleService();
                response =  (await opin.findArticle(idArquivo)).data;
                tipo = "Artigos de Opinião"
                break;
        }
    } catch(e){
        notFound();
    }    
    return ( <ContentArchive type={tipo} data={response.data}/>);
}