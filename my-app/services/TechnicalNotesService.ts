import {api} from '@/lib/axios';
import { UUID } from 'crypto';


export class TechnicalNotesService{

    async FirstNote(){
        return await api.get('/nota-tecnicas?sort[0]=publishedAt:desc&pagination[limit]=1');
    }
    async listNote(page : number){
        return await api.get(`/nota-tecnicas?populate=*&pagination[page]=${page}&pagination[pageSize]=5&sort[0]=publishedAt:desc`);
    }
    async findNote(id : string | UUID){
        return await api.get(`/nota-tecnicas/${id}?populate=*`);
    }
}