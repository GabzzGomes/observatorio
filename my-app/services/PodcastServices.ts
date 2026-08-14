import { api } from "@/lib/axios";
import { UUID } from "crypto";

export class Podcast{
     async FirstPodcast(){
        return await api.get('/podcasts?populate=*&sort[0]=publishedAt:desc&pagination[limit]=5');
    }
    async listPodcast(page : number){
        return await api.get(`/podcasts?populate=*&pagination[page]=${page}&pagination[pageSize]=5&sort[0]=publishedAt:desc`);
    }
    async findPodcast(id : string | UUID){
        return await api.get(`/podcasts/${id}?populate=*`);
    }
}