import Image from "next/image";

export default function Atuacao() {
  return (
    <div className="w-full h-auto flex flex-col mb-50">

      <div className="py-17 px-6 md:px-32 gap-8">
        <h1 className="text-5xl md:text-8xl text-[#F4B404]">ÁREAS DE ATUAÇÃO</h1>

        <div className="font-roboto font-medium text-[1.1rem] md:text-[1.2rem] grid gap-3">
          <p>
            A atuação do Opará concentra-se na defesa de direitos e na promoção da igualdade material, tomando como referência central o Decreto nº 10.932/2022. A partir desse marco normativo, o Opará acompanha, analisa e incide sobre políticas públicas voltadas ao acesso ao serviço público, à educação, à ciência e tecnologia, ao mercado de trabalho e aos processos eleitorais, compreendendo esses campos como dimensões estratégicas de produção, reprodução e disputa de poder na sociedade brasileira.
          </p>

          <p>
            Por meio da produção de relatórios de pesquisa baseados em evidências e da incidência institucional qualificada, o Opará busca identificar assimetrias, omissões e práticas de racismo institucional que limitam o acesso da população negra a esses espaços. Sua atuação visa subsidiar a tomada de decisão de gestores públicos, qualificar políticas e práticas institucionais e fortalecer a efetividade das ações afirmativas raciais, contribuindo para a promoção da justiça social e para a consolidação de uma democracia substantiva e racialmente inclusiva.
          </p>
        </div>
      </div>

      <div className="my-10 grid grid-cols-1 md:grid-cols-[40%_60%] relative">
        <div className="relative flex justify-center items-center h-[70vw] md:h-[55vw] bg-[#F4B404]">
          <Image
            src={"/images/politicas-acoes.jpg"}
            alt={"images-de-manifetacoes"}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 40vw"
            priority={false}
          />
        </div>

        <div className="flex flex-col px-6 md:pl-30 gap-4">
          <h2 className="text-4xl md:text-6xl text-[#F4B404]">
            METODOLOGIAS E PARCERIAS
          </h2>

          <div className="md:w-[80%] font-roboto text-[1.1rem] md:text-[1.2rem] grid gap-3">
            <p>
              A atuação do Opará fundamenta-se em metodologias de pesquisa aplicadas, orientadas simultaneamente pela agenda de investigação de seus pesquisadores e pelas demandas formuladas por parceiros institucionais. Os estudos desenvolvidos combinam análise normativa, levantamento e sistematização de dados empíricos, avaliação de políticas públicas e produção de diagnósticos institucionais, com foco na defesa de direitos e na efetividade das ações afirmativas raciais. Essa abordagem permite articular rigor analítico e relevância pública, assegurando que os produtos gerados respondam a problemas concretos enfrentados por gestores e instituições.
            </p>

            <p>
              As parcerias estabelecidas pelo Opará com órgãos públicos, organizações da sociedade civil e demais atores estratégicos são compreendidos como espaços de coprodução de conhecimento. A partir do diálogo técnico e institucional, essas parcerias contribuem para a definição de agendas de pesquisa, o acesso a informações qualificadas e a incidência sobre políticas públicas, fortalecendo a capacidade coletiva de enfrentar o racismo institucional e promover a justiça social.
            </p>
          </div>
        </div>
      </div>

      <div className="my-40 grid grid-cols-1 md:grid-cols-[60%_40%] relative">
        <div className="flex flex-col px-6 md:pl-30 gap-4">
          <h2 className="text-4xl md:text-6xl text-[#F4B404]">
            IMPACTOS E RESULTADOS
          </h2>

          <div className="md:w-[80%] font-roboto text-[1.1rem] md:text-[1.2rem] grid gap-3">
            <p>
              As pesquisas desenvolvidas pelo Opará têm como objetivo central incidir sobre práticas de racismo institucional, contribuindo para sua identificação, questionamento e superação, e promovendo a efetivação da justiça social. Ao produzir evidências qualificadas e análises institucionais consistentes, o Opará busca alterar padrões decisórios, orientar a formulação e o aprimoramento de políticas públicas e fortalecer a defesa de direitos nos diferentes campos em que atua.
            </p>

            <p>
              Os resultados desse trabalho materializam-se em múltiplas linguagens e formatos, de modo a ampliar seu alcance e impacto público. Entre os principais produtos estão artigos científicos, relatórios de pesquisa, textos de opinião, briefings técnicos e conteúdos disseminados por meio de redes sociais institucionais. Essa diversidade de formatos permite dialogar simultaneamente com a comunidade acadêmica, gestores públicos, atores institucionais e a sociedade em geral, ampliando a circulação do conhecimento produzido e potencializando sua capacidade de transformação institucional.
            </p>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-[70vw] md:h-[55vw] bg-[#F4B404]">
          <Image
            src={"/images/politicas-acoes.jpg"}
            alt={"images-de-manifetacoes"}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 40vw"
          />
        </div>
      </div>

    </div>
  );
}