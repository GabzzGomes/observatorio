import {api} from '@/lib/axios';
import { UUID } from 'crypto';


export class DocumentService{

    async FirstDocument(){
        return await api.get('/documentos-e-relatorios?sort[0]=publishedAt:desc&pagination[limit]=1');
    }
    async listDocuments(page : number){
        return await api.get(`/documentos-e-relatorios?populate=*&pagination[page]=${page}&pagination[pageSize]=5&sort[0]=publishedAt:desc`);
    }
    async findDocuments(id : string | UUID){
        return await api.get(`/documentos-e-relatorios/${id}?populate=*`);
    }
}