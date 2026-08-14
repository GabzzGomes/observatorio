import { api } from "@/lib/axios";
import { UUID } from "crypto";

export class Projects{
     async FirstProject(){
        return await api.get('/projetos?populate=*&sort[0]=publishedAt:desc&pagination[limit]=1');
    }
    async listProject(page : number, year : number){
        const start = `${year}-01-01`;
        const end = `${year}-12-31`;

        return await api.get(`/projetos?populate=*&filters[publishedAt][$notNull]=true&filters[data_publicacao][$gte]=${start}&filters[data_publicacao][$lte]=${end}&pagination[page]=${page}&pagination[pageSize]=5&sort[0]=data_publicacao:desc`);
    }
    async findProject(id : string | UUID){
        return await api.get(`/projetos/${id}?populate=*`);
    }
}