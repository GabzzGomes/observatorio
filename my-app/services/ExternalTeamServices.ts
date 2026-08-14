import {api} from '@/lib/axios';
import { UUID } from 'crypto';

export class ExternalTeam{
    async list(){
        return await api.get("/equipe-externas?populate=*&sort[0]=publishedAt:desc");
    }
}