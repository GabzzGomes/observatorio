import {api} from '@/lib/axios';
import { UUID } from 'crypto';


export class OpinionArticleService{

    async FirstArticle(){
        return await api.get('/artigo-de-opiniaos?sort[0]=publishedAt:desc&pagination[limit]=1');
    }
    async listArticle(page : number){
        return await api.get(`/artigo-de-opiniaos?populate=*&pagination[page]=${page}&pagination[pageSize]=5&sort[0]=publishedAt:desc`);
    }
    async findArticle(id : string | UUID){
        return await api.get(`/artigo-de-opiniaos/${id}?populate=*`);
    }
}