import {api} from '@/lib/axios';
import { UUID } from 'crypto';


export class ScientifiqueArticleService{

    async FirstArticle(){
        return await api.get('/artigo-cientificos?sort[0]=publishedAt:desc&pagination[limit]=1');
    }
    async listArticle(page : number){
        return await api.get(`/artigo-cientificos?populate=*&pagination[page]=${page}&pagination[pageSize]=5&sort[0]=publishedAt:desc`);
    }
    async findArticle(id : string | UUID){
        return await api.get(`/artigo-cientificos/${id}?populate=*`);
    }
}