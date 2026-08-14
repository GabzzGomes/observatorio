import {api} from '@/lib/axios';
import { UUID } from 'crypto';


export class NewService{

    async listFirstsNews(){
        return await api.get('/news?populate=*&sort[0]=publishedAt:desc&pagination[limit]=3');
    }
    async listNews(page : number, year : number){
        const start = `${year}-01-01`;
        const end = `${year}-12-31`;

        return await api.get(`/news?populate=*&filters[publishedAt][$notNull]=true&filters[data_publicacao][$gte]=${start}&filters[data_publicacao][$lte]=${end}&pagination[page]=${page}&pagination[pageSize]=5&sort[0]=data_publicacao:desc`);
    }
    async findNew(id : string | UUID){
        return await api.get(`/news/${id}?populate=*`);
    }
}