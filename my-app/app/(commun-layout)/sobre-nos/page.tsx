'use client'

import PersonCard from "@/components/PersonCard";
import Image from "next/image";
import { ExternalTeam } from "@/services/ExternalTeamServices";
import { InternalTeam } from "@/services/InternalTeamServices";
import { UniversityStudents } from "@/services/UniversityStudents";
import { useEffect, useState, useCallback } from "react";

export default function SobreNos(){

    const internal = new InternalTeam();
    const graduate = new UniversityStudents();
    const external = new ExternalTeam();

    const [equipe,setEquipe] = useState<any[]>([]);
    const [graduandos,setGraduandos] = useState<any[]>([]);
    const [pesquisadores,setPesquisadores] = useState<any[]>([]);

    const fetchTeam = useCallback(async () => {
        try{

            const [equipeRes, graduandoRes, pesquisadorRes] = await Promise.all([
                internal.list(),
                graduate.list(),
                external.list()
            ]);

            setEquipe(equipeRes.data.data || []);
            setGraduandos(graduandoRes.data.data || []);
            setPesquisadores(pesquisadorRes.data.data || []);

        }catch(e){
            console.log(e);
        }
    },[]);

    useEffect(() => {
       fetchTeam();
    },[fetchTeam]);


    return(
        <div className="w-full h-auto flex flex-col mb-40">

            <main className="w-full h-[100vh] md:h-[120vh] bg-[url(/images/back4.jpg)] bg-cover bg-center bg-[#1f1e1e] bg-blend-overlay" />

            <div className="py-14 px-6 md:px-20 lg:px-32 gap-8">
                <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#F4B404]">SOBRE NÓS</h1>

                <div className="font-roboto font-medium text-base md:text-[1.1rem] lg:text-[1.2rem] grid gap-4 md:gap-3 mt-6">
                    <p>
                        A Associação Opará nasce de uma trajetória construída a partir da pesquisa aplicada e da incidência institucional. Sua origem remonta a 2021, quando se estruturou uma agenda investigativa voltada ao enfrentamento do racismo institucional, tendo como foco inicial a não implementação da Lei nº 12.990/2014 pelas universidades federais. Em 2024, essa agenda foi formalmente incorporada ao Grupo de Pesquisa Observatório Opará, vinculado à Universidade Federal do Vale do São Francisco, consolidando um espaço acadêmico dedicado à produção sistemática de evidências sobre desigualdades raciais no serviço público.
                    </p>
                    <p>
                        Desde então, o Observatório passou a articular pesquisa, produção técnica e ação pública. Ao longo desse período, elaborou relatórios de referência — com destaque para “A implementação da Lei nº 12.990/2014: um cenário devastador de fraudes” (2024) — e desenvolveu atuação direta junto a instituições centrais do sistema de justiça e controle, como o Ministério Público Federal, o Tribunal de Contas da União e o Supremo Tribunal Federal, contribuindo para qualificar o debate público e fortalecer a defesa dos direitos da população negra no âmbito do Estado brasileiro.
                    </p>
                    <p>
                        O ano de 2025 marcou um ponto de inflexão. Além da ampliação da visibilidade pública por meio de artigos de opinião publicados no Brasil de Fato e no Le Monde Diplomatique Brasil, por exemplo, o Observatório passou a ser demandado pelo próprio Ministério Público Federal para a elaboração de notas técnicas voltadas à proteção dos interesses da população negra. No mesmo período, foi lançado o livro “A mão invisível do racismo institucional e a sabotagem da Lei de Cotas Raciais”, documento que sistematiza evidências acumuladas ao longo de uma década de fraudes e omissões na aplicação da política de cotas no serviço público federal. Esse ciclo de produção e incidência foi coroado com o Prêmio Benedicto Galvão, concedido pela Ordem dos Advogados do Brasil – Seção São Paulo, na categoria Educação e Pesquisa.
                    </p>
                    <p>
                        A constituição da Associação Opará representa, assim, um movimento de amadurecimento institucional. Diante da necessidade de ampliar o escopo de atuação e aprofundar a agenda de pesquisa, a entidade surge como plataforma autônoma voltada à produção de evidências, à articulação interinstitucional e ao fortalecimento de políticas públicas orientadas pela igualdade material. Mantendo como eixo estruturante o enfrentamento do racismo institucional, a Associação incorpora novas frentes temáticas e reafirma seu compromisso com uma atuação tecnicamente qualificada, politicamente engajada e socialmente orientada à democratização do acesso a direitos, recursos e oportunidades no Brasil.
                    </p>
                </div>
            </div>

            <div className="my-12 md:my-20 relative grid grid-cols-1 md:grid-cols-[40%_60%]">
                <div className="relative flex justify-center align-middle h-[70vw] md:h-[55vw] bg-[#F4B404]">
                        <Image
                            src={"/images/politicas-acoes.jpg"}
                            alt={"images-de-manifetacoes"}
                            fill
                            className="object-cover"
                        />
                </div>

                <div className="flex flex-col px-6 md:px-16 lg:px-24 py-10 gap-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#F4B404]">NOSSA MISSÃO</h2>

                    <div className="md:w-[90%] font-roboto text-base md:text-[1.1rem] lg:text-[1.2rem] grid gap-6 md:gap-10">
                        <p>
                         Monitorar, avaliar e incidir sobre políticas públicas de ação afirmativa no serviço público, nas universidades e nos espaços de poder, com o objetivo de assegurar sua implementação efetiva e o enfrentamento das desigualdades raciais.
                        </p>
                        <p>
                        Elaborar relatórios de pesquisa com rigor técnico e analítico, destinados a subsidiar a promoção e o fortalecimento de políticas de ações afirmativas raciais nos distintos campos da vida social e das políticas públicas.
                        </p>
                        <p>
                        Colaborar com a tomada de decisão de gestores públicos no enfrentamento do racismo institucional, por meio da qualificação das políticas e das práticas voltadas à promoção da justiça social.
                        </p>
                    </div>
                </div>
            </div>

            <div className="my-16 md:my-32 relative grid grid-cols-1 md:grid-cols-[60%_40%]">
                <div className="flex flex-col px-6 md:px-16 lg:px-24 py-10 gap-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#F4B404]">NOSSA EQUIPE</h2>

                    <p className="md:w-[90%] font-roboto text-base md:text-[1.1rem] lg:text-[1.2rem]">
                        The degree of Master of Fine Arts is the only degree offered by the School of Art. 
                        It is conferred by the University upon recommendation of the faculty after successful completion of all course work in residence and after a thesis presentation that has been approved by the faculty. 
                        It implies distinctive achievement on the part of students in studies in the professional area of their choice and demonstrated capacity for independent work. The minimum residence requirement is two years. 
                        All candidates’ work is reviewed by faculty at the end of each term. If the work is not considered satisfactory, the student may not be invited back to complete the program (see section on Review and Awards under Academic Regulations in the chapter General Information).
                        All degree candidates are expected to be present at the Commencement exercises in May unless excused by the dean.
                        Course work for the Master of Fine Arts degree carries a minimum of sixty credits. The disposition of these credits varies according to the area of study and is agreed upon at the time of registration between the student and the student’s faculty adviser.
                    </p>
                </div>

                <div className="relative flex justify-center align-middle h-[70vw] md:h-[55vw] bg-[#F4B404]">
                        <Image
                            src={"/images/politicas-acoes.jpg"}
                            alt={"images-de-manifetacoes"}
                            fill
                            className="object-cover"
                        />
                </div>
            </div>

            <div className="flex flex-col w-full items-center justify-center px-6 md:px-16 lg:px-32 gap-20 md:gap-30">

                <div className="flex flex-col items-center justify-center gap-5 w-full">
                    <h1 className="text-3xl md:text-4xl text-center">Pesquisadores e pesquisadoras - Equipe interna</h1>
                    <div className="w-20 h-[0.4rem] bg-[#F4B404]"/>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 w-full">
                        {equipe.map(e => 
                            <PersonCard
                                key={e.id}
                                lattesUrl={e.lattesURL}
                                nome={e.nome}
                                ocupacao={e.ocupacao}
                                formacao={e.formacao}
                                img={e.foto.url}
                            />
                        )}
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-5 w-full">
                    <h1 className="text-3xl md:text-4xl">Discentes</h1>
                    <div className="w-20 h-[0.4rem] bg-[#F4B404]"/>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 w-full">
                        {graduandos.map(g => 
                            <PersonCard
                                key={g.id}
                                lattesUrl={g.lattesURL}
                                nome={g.nome}
                                ocupacao={g.ocupacao}
                                formacao={g.formacao}
                                img={g.foto.url}
                            />
                        )}
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-5 w-full">
                    <h1 className="text-3xl md:text-4xl text-center">Colaboradores e Colaboradoras - Equipe externa</h1>
                    <div className="w-20 h-[0.4rem] bg-[#F4B404]"/>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 w-full">
                        {pesquisadores.map(p => 
                            <PersonCard
                                key={p.id}
                                lattesUrl={p.lattesURL}
                                nome={p.nome}
                                ocupacao={p.ocupacao}
                                formacao={p.formacao}
                                img={p.foto.url}
                            />
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}