import { api } from "@/lib/axios";
import { UUID } from "crypto";

export class InternalTeam{
    async list(){
        return await api.get("/equipe-internas?populate=*&sort[0]=publishedAt:desc");
    }
}