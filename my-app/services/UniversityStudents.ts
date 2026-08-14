import {api} from '@/lib/axios';
import { UUID } from 'crypto';

export class UniversityStudents{
    async list(){
        return await api.get("/discentes?populate=*&sort[0]=publishedAt:desc");
    }
}