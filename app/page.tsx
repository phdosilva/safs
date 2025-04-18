"use client";

import Image from "next/image";
import bannerImg from "../public/banner.png";
import desertificacaoImage from "../public/desertificacao.jpg";
import agroflorestaCaatingaImage from "../public/agrofloresta_na_caatinga.png";
import antonioSabinoImage from "../public/antonio_sabino.jpg";
import brownCactus from "../public/brownCactus.svg";
import whiteCactus from "../public/whiteCactus.svg";
import quotes from "../public/quotes.svg";
import brownQuotes from "../public/brownQuotes.svg";
import scrollSVG from "../public/scroll.svg";
import ellipseSVG from "../public/ellipse.svg";
import solar from "../public/solar.png";
import solo from "../public/solo.png";
import trator from "../public/trator.png";
import mineracao from "../public/mineracao.png";

import PernambucoLoading from "./components/pernambucoLoading";
import GraphComparative from "./components/GraphComparative";
import ImageCarousel from "./components/carousel";

import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    imageUrl: "/carousel_1.png?height=600&width=1200",
    title: "Atualização do Índice de Aridez",
    description:
      "Mede a relação entre a chuva e a evaporação, permitindo mapear áreas mais suscetíveis à desertificação. A nova versão revelou o avanço da aridez na Caatinga e até a formação de zonas áridas fora do semiárido",
  },
  {
    id: 2,
    imageUrl: "/carousel_2.png?height=600&width=1200",
    title: "Monitoramento de Secas",
    description:
      "Sistemas avançados de monitoramento permitem acompanhar e prever períodos de seca, ajudando comunidades a se prepararem para condições adversas",
  },
  {
    id: 3,
    imageUrl: "/carousel_3.png?height=600&width=1200",
    title: "Recuperação de Áreas Degradadas",
    description:
      "Projetos de reflorestamento e técnicas sustentáveis ajudam a recuperar regiões afetadas pela desertificação e erosão do solo",
  },
  {
    id: 4,
    imageUrl: "/carousel_4.png?height=600&width=1200",
    title: "Gestão Hídrica Sustentável",
    description:
      "Estratégias para o uso eficiente da água em regiões áridas, incluindo captação de água da chuva e reuso de águas residuais",
  },
  {
    id: 5,
    imageUrl: "/carousel_5.png?height=600&width=1200",
    title: "Impactos das Mudanças Climáticas",
    description:
      "Estudos sobre como o aquecimento global intensifica os processos de desertificação e afeta ecossistemas vulneráveis",
  },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate blur and opacity based on scroll position
  const blurAmount = Math.min(scrollY * 0.1, 10);
  const opacityAmount = Math.max( scrollY * 0.003, 0.4);

  return (
    <>
      {/* Banner */}
      <section className="w-full max-w-screen h-screen flex flex-col justify-center items-center text-center overflow-hidden sticky top-0 z-0">
        {/* Background Image with scroll-based blur */}
        <div 
          className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden"
          style={{
            filter: `blur(${blurAmount}px)`,
            transition: 'filter 0.1s ease-out',
            transform: `scale(${1 + blurAmount * 0.005})`,
            transformOrigin: 'center'
          }}
        >
          <Image 
            src={bannerImg} 
            alt="Desertos na Caatinga" 
            layout="fill" 
            objectFit="cover" 
            objectPosition="center"
            className="w-full h-full"
          />
          {/* Dynamic Overlay */}
          <div 
            className="absolute top-0 left-0 w-full h-full bg-[#271800] transition-opacity duration-100"
            style={{ opacity: opacityAmount }}
          />
        </div>

        {/* Text Content with scroll-based fade */}
        <div 
          className="z-10 max-w-5xl px-4 transition-opacity duration-100"
          style={{ opacity: 1 - scrollY * 0.002 }}
        >
          <h1 className="text-white text-3xl md:text-6xl font-bold mb-4 unbounded-bold">
            Desertos na Caatinga:
            <br />
            <span className="text-white text-xl md:text-4xl unbounded-regular">
              Agroflorestas podem barrar o avanço da degradação do bioma
            </span>
          </h1>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-20 flex flex-col items-center transition-opacity duration-300"
          style={{ opacity: 1 - scrollY * 0.005 }}
        >
          <div className="relative">
            <Image src={scrollSVG} alt="Scroll Indicator"></Image>
            <Image
              className="absolute top-2.5 left-1.5 inset-0 animate-bounce"
              src={ellipseSVG}
              alt="Scroll Animated"
              objectFit="contain"
            />
          </div>
          <p className="text-white text-sm mt-2">Arraste para navegar</p>
        </div>

        {/* Gradient Fade at Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#271800] pointer-events-none" />
      </section>

      <main className="relative z-10">
        {/* Primeira Seção */}
        <section className="w-full min-h-screen flex flex-col text-white bg-[#271800] pb-[200px] mb-[-200px] relative z-20">
          <div className="max-w-5xl mx-auto flex flex-col min-h-screen space-y-8" style={{ padding: "2rem 2rem" }}>
            <div className="md:px-10 space-y-8 poppins-regular">
              <p>
                Por anos, um bioma representado na grande mídia pela morte e pela seca: a caatinga, que é o único bioma
                exclusivamente brasileiro, na verdade exala mais vida do que se pode ver a olho nu. As variações de solo
                se transformam em diferentes tipos de paisagens, como serras, chapadas e afloramento de rochas chamados
                de 'lajedos'.
              </p>
              <p>
                Essa variedade se estende para a fauna e a flora, com cerca de 1.794 espécies de animais vertebrados e
                invertebrados, e mais de 3 mil espécies de plantas vasculares. Com um clima quente e seco, onde longos
                períodos de estiagem são a regra, essa paisagem abriga milhões de pessoas que dependem dela para viver.
              </p>
            </div>

            <div className="video-container md:px-10 rounded-xl">
              <iframe
                src="https://www.youtube.com/embed/LaeN72uQ7ao?si=bTY5moEeelwhgr9k"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: "0" }}
              ></iframe>
            </div>

            <div className="flex flex-col md:flex-row overflow-hidden">
              <div className="w-full md:w-1/2 flex items-center">
                <p className="bg-[#4A3D29] py-12 pl-8 pr-2 w-full flex items-center rounded-tl-xl md:rounded-bl-xl rounded-tr-xl md:rounded-tr-none md:rounded-br-none poppins-medium">
                  A caatinga cobre 83% do território de Pernambuco, dominando o sertão e parte do agreste, o que dá
                  cerca de 135 municípios. O bioma se estende por outros oito estados do Nordeste e parte do Sudeste,
                  abrangendo Alagoas, Bahia, Ceará, Maranhão, Paraíba, Piauí, Rio Grande do Norte, Sergipe e uma pequena
                  porção de Minas Gerais.
                </p>
              </div>

              <div className="bg-black w-full md:w-1/2 flex flex-col items-center justify-center md:rounded-xl rounded-bl-xl rounded-br-xl aspect-[1/0.7]">
                <PernambucoLoading />
              </div>
            </div>

            <div className="md:px-10 space-y-8 poppins-regular">
              <p>
                E esse ecossistema ganha ainda mais importância devido ao seu potencial no sequestro de carbono. Mais de
                uma década de estudos do Observatório Nacional da Caatinga apontaram que esse é o bioma brasileiro que
                mais se destaca pelo alto desempenho no sequestro de carbono (CO²).
              </p>
              <p>
                O excesso de CO² na atmosfera é a principal causa do efeito estufa, relacionado ao aquecimento global.
                Na caatinga, para cada 100 toneladas de CO² capturadas, entre 45% e 60% permanecem retidas e não
                retornam à atmosfera.
              </p>
              <p>
                Mas a caatinga não está livre da degradação, assim como outros biomas do Brasil. De acordo com o Ibama,
                o país já perdeu 34 milhões dos 82,6 milhões de hectares do bioma. Ao todo, cerca de 27 milhões de
                pessoas vivem na região e o avanço da degradação ameaça não só a biodiversidade, mas as famílias que
                tiram da terra seu sustento, o que torna urgente a busca por soluções sustentáveis.
              </p>
            </div>
          </div>
        </section>

        {/* Segunda Seção */}
        <div className="flex w-full relative z-30">
          <h2 className="lg:text-[38px] max-lg:text-[24px] text-[#271800] bg-[#FCEEE2] rounded-tr-[140px] p-10 mt-14 unbounded-regular w-[80%] max-h-[140px]">
            Desertificação da Caatinga
          </h2>
          <Image
            className="max-w-[182px] max-md:max-w-[120px] lg:ml-20 mt-10 md:mb-[-25px] max-md:mb-[-70px]"
            src={whiteCactus}
            alt="Cacto"
          ></Image>
        </div>
        <section className="bg-[#FCEEE2] text-black pb-[200px] mb-[-200px] relative z-30">
          <div
            className="max-w-5xl mx-auto flex flex-col items-center min-h-screen space-y-8 bg-[#FCEEE2]"
            style={{ padding: "2rem 2rem" }}
          >

            <div className="space-y-2 text-justify mt-4 md:px-7">
              <p className="text-right poppins-medium font-[14px]">
                Foto: Acervo Centro Sábia
              </p>
              <Image src={desertificacaoImage} alt="video" className="rounded-xl"></Image>
              <p className="poppins-light font-sm">
                <span className="poppins-medium">Imagem aérea de área degradada centro sabiá:</span> O processo de desertificação da Caatinga é impulsionado principalmente pela degradação do solo. 85% do Semiárido brasileiro está em processo de desertificação moderado, enquanto 9% já está efetivamente desertificado.
              </p>
            </div>
            
            <div className="mt-4 md:px-7 space-y-5 poppins-regular">
              <p>
                A desertificação é um processo em que a vegetação de áreas secas diminui a ponto de desaparecer,
                tornando o solo excessivamente seco e sem nutrientes, similar ao dos desertos. A ocorrência de zonas
                áridas ou desérticas no Brasil não é algo natural, sua causa se deve inteiramente pela interferência
                humana, através do desmatamento, do uso irresponsável do solo em processos agrícolas e da extração
                desenfreada de recursos naturais.
              </p>
              <p>
                Segundo o estudo publicado em 2024 pela revista Applied Soil Ecology, a desertificação da Caatinga reduz
                mais de 50% da funcionalidade do solo e compromete a sua capacidade de sustentar o crescimento das
                plantas. Além disso, com o solo enfraquecido, parte da infiltração de água é impedida, o que acelera o
                processo de erosão.
              </p>
              <p>
                O processo de desertificação da Caatinga é impulsionado principalmente pela degradação do solo, através
                do uso desmedido dos recursos naturais, das queimadas e do desmatamento, e pelos efeitos das mudanças
                climáticas. De acordo com John Cunha, pesquisador do Observatório Nacional da Caatinga, as principais
                causas de degradação do bioma são:
              </p>

              <div className="flex  justify-around my-10">
                <div className="flex max-md:flex-col max-md:items-center max-md:gap-10 w-full justify-around">
                  <div className="w-3/4">
                    <Image src={solo} alt="solo"></Image>
                    <p className="text-[#271800] text-center font-bold mt-4">Irrigação excessiva do solo</p>
                  </div>
                  <div className="w-3/4">
                    <Image src={mineracao} alt="mineracao"></Image>
                    <p className="text-[#271800] text-center font-bold mt-4">Mineração e industrialização</p>
                  </div>
                </div>
                <div className="flex max-md:flex-col max-md:items-center max-md:gap-10 w-full justify-around">
                  <div className="w-3/4">
                    <Image src={trator} alt="trator"></Image>
                    <p className="text-[#271800] text-center font-bold mt-4">Expansão da fronteira agrícola</p>
                  </div>
                  <div className="w-3/4">
                    <Image src={solar} alt="solar"></Image>
                    <p className="text-[#271800] text-center font-bold mt-4">Parques solares e eólicos</p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center px-4 py-10 min-h-[400px] max-lg:flex-col-reverse">
                {/* Texto */}
                <div className="bg-[#e8d6c7] p-6 rounded-[20px] max-w-[500px] z-10 relative">
                  <p className="text-[16px] leading-relaxed roboto-regular p-10">
                    O desmatamento e a desertificação da Caatinga promovem danos severos ao planeta, tendo em vista que
                    o bioma é responsável por capturar grandes proporções de CO2, que seriam lançados na atmosfera. A
                    Caatinga, em áreas úmidas, pode sequestrar até cinco toneladas de CO2 por hectare-ano, enquanto em
                    áreas mais secas, o sequestro varia entre 1,5 a 2,5 toneladas de CO2 por hectare-ano. Com a
                    destruição do bioma, o efeito estufa é agravado e suas consequências podem ser percebidas por toda
                    superfície.
                  </p>
                </div>

                {/* Vídeo ou imagem sobreposta */}
                <div className="lg:absolute right-[8%] top-[0%] bg-black w-[350px] h-[350px] rounded-[20px] z-20 flex items-center justify-center text-white text-center shadow-xl max-lg:mb-[-30px]">
                  <GraphComparative />
                </div>
              </div>

              <div className="flex gap-10 items-start max-md:flex-col">
                <p className="md:w-[70%]">
                  Segundo dados do Relatório Anual do Desmatamento de 2023, elaborado pelo MapBiomas, a Caatinga já
                  perdeu mais de 40% de seu território original e sofreu um aumento de 43,4% de áreas desmatadas em
                  comparação ao ano de 2022. Historicamente, isso tem sido impulsionado pela expansão das atividades
                  agropecuárias, porém a implantação de empreendimentos de energia renovável (parques solares e eólicos)
                  também se tornou um vetor significativo, atingindo mais de 4.302 hectares. O desmatamento é a
                  principal causa da desertificação da Caatinga, pois expõe o solo ao sol e às chuvas, acelerando o
                  processo de erosão e
                </p>

                <div className="bg-[#EFE1D4] p-10 rounded-[30px] md:w-[90%] relative ml-8">
                  <Image src={brownQuotes} alt="aspas" className="absolute top-6 left-[-30px] w-16 h-16" />
                  <p className="text-[25px] roboto-bold pl-4 text-[#271800]">
                    A gente tem visto novas dinâmicas de degradação impulsionadas pelos megaempreendimentos. Esses que
                    têm capacidade de fato para modificar o ambiente de forma significativa
                  </p>
                  <br />
                  <p className="pl-4">Rivaneide Almeida</p>
                </div>
              </div>
              <p className="mt-[-18px] max-md:mt-10">
                reduzindo a fertilidade. Além disso, sem vegetação, a água não consegue infiltrar adequadamente na
                terra, o que prejudica a absorção de nutrientes e a regeneração da vegetação. Todas estas condições
                reduzem a umidade do solo e favorecem a desertificação.
              </p>
              <p>
                Em consequência disso, observa-se o impacto na produção de alimentos, a diminuição dos recursos
                hídricos, a ameaça à biodiversidade e o aumento do efeito estufa no bioma, prejudicando as vidas
                existentes no bioma. Além disso, a dinâmica econômica e social das comunidades que vivem na Caatinga
                sofre alterações, pois, com a escassez de recursos, é comum a ocorrência de migrações forçadas para
                outras regiões.
              </p>
              <p>
                O processo de desertificação da Caatinga não é algo recente, e suas consequências vêm sendo observadas
                há décadas. Ainda nos anos 1970, o engenheiro agrônomo João Vasconcelos Sobrinho realizou os primeiros
                estudos sobre este fenômeno no semiárido brasileiro. Sendo o pioneiro no estudo do tema, suas pesquisas
                evidenciaram como o desmatamento, o manejo inadequado do solo e o uso intensivo dos recursos naturais
                aceleram a degradação ambiental do semiárido nordestino. Ele classificou diferentes níveis de degradação
                da terra, desenvolvendo um sistema de categorias essencial para compreender o avanço da desertificação.
              </p>
              <p>
                As características dos diferentes tipos de solo, geralmente pedregosos, endurecidos, argilosos ou
                arenosos, todos com baixa fertilidade e pouca capacidade de drenagem, combinados ao desmatamento e
                práticas agropecuárias inadequadas influenciam muito no processo de degradação. Dados do Instituto
                Nacional do Semiárido (INSA), revelam que 85% do semiárido brasileiro está em processo de desertificação
                moderado, enquanto 9% já está efetivamente desertificado, o que torna o processo de reversão quase
                impossível. Para frear a situação, é indispensável a preservação da Caatinga, já que é ela que protege o
                solo da erosão.
              </p>
            </div>
          </div>
        </section>

        {/* Terceira Seção */}
        {/* Aqui é o banner */}
        <div className="flex w-full relative z-30">
          <h2 className="lg:text-[38px] max-lg:text-[24px] text-[#FFFFFF] bg-[#271800] rounded-tr-[140px] p-10 mt-14 unbounded-regular w-[80%] max-h-[140px]">
            Como os Sistemas Agroflorestais podem salvar a caatinga?
          </h2>
          <Image
            className="max-w-[182px] max-md:max-w-[120px] lg:ml-20 mt-10 md:mb-[-25px] max-md:mb-[-70px]"
            src={brownCactus}
            alt="Cacto"
          ></Image>
        </div>
        <section className="bg-[#271800] text-white relative z-30">
          <div
            className="max-w-5xl mx-auto flex flex-col items-center min-h-screen space-y-5 bg-[#271800]"
            style={{ padding: "2rem 2rem" }}
          >
            <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", height: 0 }} className="rounded-xl overflow-hidden">
              <br />
              <br />
              <iframe
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                className="rounded-xl"
                src="https://www.youtube.com/embed/w6z5RlvIdcM?si=CIc5dCV0RXIK6iSj"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-10 md:px-7 space-y-5 poppins-regular text-white">
              <p>
                Imagine uma paisagem no sertão, onde, em vez de solo seco e empobrecido, há um sistema diverso de
                plantas crescendo juntas. Enquanto árvores como angico, juazeiro e umbuzeiro oferecem sombra e ajudam a
                manter a umidade, plantações de feijão, milho e abóbora protegem a terra contra a erosão, e pés de caju
                e macaúba garantem frutos. Esse cenário pode parecer distante da realidade de muitas regiões semiáridas,
                mas é, na verdade, uma alternativa que tem ganhado força na Caatinga, onde as agroflorestas têm se
                mostrado uma solução eficaz para combater a desertificação e promover a recuperação do bioma.
              </p>
              <p>
                Os Sistemas Agroflorestais (SAFs) são um ciclo produtivo milenar que combina árvores e arbustos com
                culturas agrícolas ou forrageiras (plantas cultivadas para alimentar animais herbívoros). Eles têm como
                objetivo proteger a biodiversidade, recuperar áreas degradadas e proporcionar segurança alimentar aos
                agricultores, com base no princípio da economia sustentável, que vai além da lógica monetária.
                <br />A implementação de SAFs começa com a observação detalhada da área a ser revitalizada. Avaliar o
                potencial da terra, o clima e a capacidade do solo é essencial, assim como a definição da demanda: será
                voltada para a alimentação animal ou para o cultivo familiar? A escolha das espécies adequadas é
                fundamental, assim como a identificação de quais delas podem coexistir de forma harmônica.
              </p>
              <div className="flex gap-10 items-start max-md:flex-col">
                <p className="md:w-[70%]">
                  Os SAFs funcionam através de sucessão ecológica. De acordo com Rivaneide Almeida, engenheira agrônoma
                  e coordenadora territorial do Centro de Desenvolvimento Agroecológico Sabiá no Sertão do Pajeú, os
                  Sistemas Agroflorestais obedecem aos princípios da natureza. Essa abordagem está alinhada com os
                  princípios da agroecologia, que busca formas de produção agrícola sustentáveis. e integradas ao meio
                  ambiente. Ao combinar uma vegetação diversificada, os SAFs criam ecossistemas equilibrados que
                  favorecem a regeneração da terra e a manutenção da diversidade ecológica. A interação entre as
                  espécies melhora a capacidade do solo de reter água.
                </p>

                <div className="bg-[#4A3D29] p-10 rounded-[30px] md:w-[90%] relative ml-8">
                  <Image src={quotes} alt="aspas" className="absolute top-6 left-[-30px] w-16 h-16" />
                  <p className="text-[25px] roboto-bold pl-4">
                    Na agrofloresta, tem que haver uma sucessão de espécies. Tem de haver primeiramente os musgos, as
                    pioneiras, as colonizadoras, para preparar o ambiente
                  </p>
                  <br />
                  <p className="pl-4">Rivaneide Almeida</p>
                </div>
              </div>
              <p className="mt-[-18px] max-md:mt-10">
                "O solo se torna como uma esponja, absorvendo melhor a água e os nutrientes necessários para sobreviver.
                Onde não há mata, não há água", afirma a engenheira agrônoma.
              </p>
              <p>
                Segundo Rivaneide, os SAFs podem ser implementados mesmo em áreas pequenas, de pelo menos 20 metros
                quadrados. No entanto, muitos agricultores ainda hesitam em adotar essa prática, seja pela falta de
                assistência técnica que ofereça o suporte necessário para garantir a segurança alimentar, seja pela
                incerteza em relação à posse da terra. "Eles têm medo. Se cultivarem em terras de outras pessoas, podem
                ser surpreendidos caso o proprietário decida mudar o uso do terreno, como, por exemplo, para pastagem.
                Todo o trabalho pode ser perdido", explica.
              </p>
            </div>
          </div>

          {/* Headline da quarta seção */}
          <div className="flex w-full ">
            <h2 className="lg:text-[38px] max-lg:text-[24px] text-[#271800] bg-[#FCEEE2] rounded-tr-[140px] p-10 mt-14 unbounded-regular w-[80%] max-h-[140px]">
              A Agrofloresta de Antônio Sabino
            </h2>
            <Image
              className="max-w-[182px] max-md:max-w-[120px] lg:ml-20 mt-10 md:mb-[-25px] max-md:mb-[-70px]"
              src={whiteCactus}
              alt="Cacto"
            ></Image>
          </div>
        </section>

        {/* Quarta Seção */}
        <section className="w-full min-h-screen flex flex-col text-black bg-[#FCEEE2]">
          <div
            className="max-w-5xl mx-auto flex flex-col items-center min-h-screen space-y-8 bg-[#FCEEE2]"
            style={{ padding: "2rem 2rem" }}
          >
            <div className="md:px-10 space-y-8 poppins-regular">
              {/* Grid de imagens */}
              <div className="space-y-2 text-justify mt-4">
              <p className="text-right poppins-medium font-[14px]">
                Foto: Acervo Centro Sábia
              </p>
              <Image src={antonioSabinoImage} alt="video" className="rounded-xl"></Image>
              <p className="poppins-light font-sm">
                <span className="poppins-medium">Antônio Sabino em sua Agrofloresta:</span> Em Santa Cruz da Baixa Verde, Antônio Sabino utiliza o sistema agroflorestal desde 1997. A agrofloresta do Sítio São Bento é uma referência na Caatinga
              </p>
            </div>

              <div className="space-y-5 text-[#271800]">
                <p>
                  Na comunidade São Bento, em Santa Cruz da Baixa Verde, sertão de Pernambuco, Antônio Sabino tem
                  transformado a paisagem e a vida da sua família por meio da agrofloresta. Desde 1997, ele substituiu o
                  monocultivo tradicional pelo sistema agroflorestal, desafiando a tradição agrícola herdada do pai e do
                  avô.
                </p>
                <p>
                  "Retirávamos toda a vegetação para plantar cana-de-açúcar. Eu fui educado a plantar monocultivo de
                  cana, milho, feijão, mandioca — tudo era cultivado separado", relembra Antônio. A transição para o
                  Sistema Agroflorestal não foi fácil: o solo estava degradado e demorou a se recuperar. Mas, com
                  persistência, ele viu sua produção prosperar.
                </p>
                <p>
                  Sabino iniciou sua jornada na agrofloresta ainda na adolescência, quando começou a participar de
                  atividades promovidas pelo Sindicato dos Trabalhadores Rurais e pelo Centro de Desenvolvimento
                  Agroecológico Sabiá. Foi por meio dessas formações, principalmente dentro dos grupos de jovens, que
                  ele passou a enxergar a importância de cuidar do meio ambiente e a questionar o modelo agrícola
                  convencional adotado por sua família.
                </p>
                <p>
                  Essa caminhada foi fortalecida pelo trabalho dos Sindicatos dos Trabalhadores Rurais de Triunfo e de
                  Bom Jardim, que tiveram papel essencial na organização das famílias e na criação de espaços de
                  aprendizado sobre agroecologia. Essas iniciativas foram fundamentais para incentivar agricultores e
                  agricultoras a se tornarem multiplicadores da agricultura agroflorestal, abrindo caminho para a
                  fundação de associações como a Adessu Baixa Verde, no Sertão, e a Agroflor, no Agreste.
                </p>
                <p>
                  Além de melhorar a qualidade de vida da família — permitindo que seus filhos estudem e tenham uma
                  alimentação mais saudável — a agrofloresta fortaleceu sua missão de vida. "Hoje, eu acredito que tenho
                  ainda mais sonhos. Estou velho, careca, cansado, mas o meu sonho é ampliar ainda mais esse trabalho e
                  contribuir para que outras pessoas também possam aderir", afirma o agricultor.
                </p>
                <p>
                  Para Antônio, cada árvore plantada é uma pequena, mas significativa, contribuição para um futuro
                  melhor: "O que eu faço é muito pouco, mas sigo a lógica de Madre Teresa de Calcutá. Ela diz que o que
                  fazemos é apenas uma gota de água no oceano, mas sem ela, o oceano seria menor".
                </p>
                <p>
                  Atualmente, sua experiência inspira outros agricultores da região, embora ele reconheça que a adesão
                  aos SAFs ainda é baixa. O incentivo financeiro e o suporte técnico são, segundo Antônio, fundamentais
                  para expandir a agroecologia.
                </p>
              </div>
            </div>

            {/* Bloco de citação */}
            <div className="md:px-10 mt-10">
              <div className="bg-[#F2E1D3] p-8 rounded-3xl max-w-2xl relative shadow-md">
                <Image
                  src="/sec4_small4.png"
                  alt="Antônio Sabino"
                  width={100}
                  height={100}
                  className="rounded-full absolute top-8 right-8"
                />
                <Image src={brownQuotes} alt="aspas" className="absolute top-6 left-[-30px] w-16 h-16" />
                <blockquote className="text-[#271800] text-xl pl-10 pr-20 justify-center leading-tight roboto-bold">
                  "Se houvesse um apoio das ONGs de extensão rural, ou uma política que possibilitasse essa assistência
                  técnica, acho que poderia avançar."
                </blockquote>
                <p className="pl-4 text-[#271800] text-left font-bold">Antônio Sabino</p>
              </div>
            </div>
          </div>

          {/* Headline da quinta seção */}
          <div className="flex w-full ">
            <h2 className="lg:text-[38px] max-lg:text-[24px] text-[#FFFFFF] bg-[#271800] rounded-tr-[140px] p-10 mt-14 unbounded-regular w-[80%] max-h-[140px]">
              Estratégias de combate à desertificação
            </h2>
          </div>
        </section>

        {/* Quinta Seção */}
        <section className="bg-[#271800] text-white">
          <div
            className="max-w-5xl mx-auto flex flex-col items-center min-h-screen space-y-5 bg-[#271800]"
            style={{ padding: "2rem 2rem" }}
          >
            <div className="mt-10 md:px-10 space-y-5 poppins-regular text-white">
              <div className="mb-20 space-y-5 poppins-regular text-white">
                <p>
                  Criado em janeiro de 2023, o Departamento de Combate à Desertificação (DCDE) faz parte do Ministério
                  do Meio Ambiente e tem a missão de coordenar a implementação da Política Nacional de Combate à
                  Desertificação e Mitigação dos Efeitos (PNCD), instituída pela Lei 13.153/2015. Além disso, é
                  responsável por subsidiar e monitorar a implementação da Convenção das Nações Unidas para o Combate à
                  Desertificação (UNCCD).
                </p>
                <p>
                  Segundo o Instituto Brasileiro de Geografia e Estatística (IBGE), o semiárido brasileiro, onde
                  predomina a Caatinga, possui cerca de 1,7 milhão de estabelecimentos da agricultura familiar, que
                  dependem da preservação do bioma para gerar alimentos e renda. Segundo Alexandre, o Departamento de
                  Combate à Desertificação tem adotado ações para frear a degradação no semiárido.
                </p>
              </div>

              <div className="flex gap-10 items-start max-md:flex-col">
                <div className="bg-[#4A3D29] p-10 rounded-[30px] md:w-[90%] relative ml-8">
                  <Image src={quotes} alt="aspas" className="absolute top-6 left-[-30px] w-16 h-16" />
                  <p className="text-[25px] roboto text-left pl-4">
                    O objetivo é implementar boas práticas como agroflorestas, manejo sustentável e florestal da
                    Caatinga, recuperação de solos degradados, uso de curvas de nível e tecnologias sociais que ajudem
                    na recomposição da vegetação
                  </p>
                  <br />
                  <div>
                    <p className="pl-4 roboto-bold">Alexandre Pires</p>
                    <p className="pl-4 text-sm">diretor de Combate à Desertificação do Ministério do Meio Ambiente</p>
                  </div>
                </div>
                <div className="bg-[#4A3D29] p-10 rounded-[30px] md:w-[90%] relative ml-8">
                  <Image src={quotes} alt="aspas" className="absolute top-6 left-[-30px] w-16 h-16" />
                  <p className="text-[25px] roboto text-left pl-4">
                    A Caatinga é um bioma único, não existe em nenhum outro lugar do mundo. Sua vegetação, fauna e solos
                    são exclusivos do Brasil. Isso torna essencial protegê-la da desertificação, pois há populações que
                    dependem dela para seus modos de vida e cultivo
                  </p>
                  <br />
                  <div>
                    <p className="pl-4 roboto-bold">Alexandre Pires</p>
                    <p className="pl-4 text-sm">diretor de Combate à Desertificação do Ministério do Meio Ambiente</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-b text-white pt-16 pb-32">
                <div className="container mx-auto px-4"><ImageCarousel slides={slides}></ImageCarousel></div>
              </div>
            </div>
          </div>

          {/* Headline da sexta seção */}
          <div className="flex w-full ">
            <h2 className="lg:text-[38px] max-lg:text-[24px] text-[#271800] bg-[#FCEEE2] rounded-tr-[140px] p-10 mt-14 unbounded-regular w-[80%] max-h-[140px]">
              As agroflorestas têm espaço nas políticas públicas?
            </h2>
          </div>
        </section>

        {/* Sexta Seção */}
        <section className="bg-[#FCEEE2] text-black">
          <div
            className="max-w-5xl mx-auto flex flex-col items-center min-h-screen space-y-8 bg-[#FCEEE2]"
            style={{ padding: "2rem 2rem" }}
          >

            <div className="space-y-2 text-justify mt-4 md:px-7">
              <p className="text-right poppins-medium font-[14px]">
                Foto: Acervo Centro Sábia
              </p>
              <Image src={agroflorestaCaatingaImage} alt="video" className="rounded-xl"></Image>
              <p className="poppins-light font-sm">
                <span className="poppins-medium">Agrofloresta na Caatinga:</span>  As agroflorestas são uma estratégia eficaz no combate à desertificação por recuperar o solo e produzir alimentos. Entretanto, desafios de ordem política e econômica impedem sua implementação de forma mais expansiva. Foto: Acervo Centro Sabiá.
              </p>
            </div>

            <div className="mt-2 md:px-7 space-y-5 poppins-regular">
              <p>
                É fato que as agroflorestas são boas alternativas para o combate à desertificação, principalmente aliada
                a outras tecnologias utilizadas no semiárido, como as cisternas para captação de água e o Reúso de Águas
                Cinzas (RAC) que reutiliza a água de serviços domésticos para uso na agricultura.
              </p>
              <p>
                No entanto, é de causar estranhamento que os sistemas não sejam tão divulgados e mais do que isso,
                utilizados amplamente para combater os problemas que a Caatinga enfrenta. Conforme Alexandre Pires, os
                sistemas agroflorestais já são utilizados por agricultores familiares, povos indígenas, quilombolas e
                assentados da reforma agrária, mas o problema, segundo ele, é que a maioria das áreas degradadas estão
                nas mãos do agronegócio.
              </p>
              <p>
                "Os agricultores camponeses já têm estratégias estruturadas para conservar a biodiversidade e as
                condições produtivas. No entanto, os grandes produtores, que detêm as terras mais degradadas, ainda não
                enxergam a agrofloresta como uma estratégia economicamente vantajosa", analisa Alexandre.
              </p>
              <p>
                Apesar das ações do departamento, existe a dificuldade de ver o impacto na prática. O Ministério do Meio
                Ambiente já está ciente do problema, mas a efetividade das ações não é experimentada pela população. Um
                dos principais desafios para a efetivação dessas políticas, segundo Alexandre, é o orçamento. "Podemos
                ter planos, programas e campanhas, mas, sem recursos, corremos o risco de ter bons instrumentos, mas
                pouca aplicabilidade", aponta Pires.
              </p>

              <div className="flex w-full gap-10 max-sm:flex-col max-sm:items-center">
                <p className=" leading-relaxed max-w-[600px] sm:w-2/3">
                  De acordo com o diretor, o DCDE teve recurso de 5 milhões de reais em 2023, 3,6 milhões em 2024 e há
                  uma projeção de 2,5 milhões para 2025. É de responsabilidade do Congresso Nacional deliberar sobre as
                  leis orçamentárias dos ministérios para políticas públicas. De acordo com pesquisa do Instituto
                  Democracia e Sustentabilidade (IDS), lançada em 2024, apenas 30% dos deputados e 25% dos senadores têm
                  compromisso com a pauta ambiental.
                </p>

                <div className="relative flex flex-col items-start">
                  <div className="absolute left-5 top-4 h-[77%] w-[2px] bg-[#FFBA10] z-0" />

                  <div className="flex items-center gap-3 mb-14 relative z-10">
                    <span className="w-10 h-10 rounded-full bg-[#FFBA10]"></span>
                    <div>
                      <p className="font-bold text-lg text-black">2023</p>
                      <p className="text-sm text-black">5 milhões de reais</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-14 relative z-10">
                    <span className="w-10 h-10 rounded-full bg-[#FFBA10]"></span>
                    <div>
                      <p className="font-bold text-lg text-black">2024</p>
                      <p className="text-sm text-black">3,6 milhões de reais</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 relative z-10">
                    <span className="w-10 h-10 rounded-full border-dashed border-2 border-[#FFBA10] bg-transparent"></span>
                    <div>
                      <p className="font-bold text-lg text-black">2025</p>
                      <p className="text-sm text-black">2,5 milhões de reais</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
