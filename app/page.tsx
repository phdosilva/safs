import Image from "next/image";
import bannerImg from "../public/banner.png";
import backgroundImg from "../public/background.png";
import scrollSVG from "../public/scroll.svg";
import ellipseSVG from "../public/ellipse.svg";

export default function Home() {
  return (
    <>
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Image
            src={bannerImg}
            alt="Desertos na Caatinga"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
        </div>

        {/* Text Content */}
        <div className="z-10 max-w-5xl px-4">
          <h1 className=" text-white text-3xl md:text-6xl font-bold mb-4 unbounded-bold">
            Desertos na Caatinga:
            <br />
            <span className="text-white text-xl md:text-4xl unbounded-regular">
              Agroflorestas podem barrar o avanço da degradação do bioma
            </span>
          </h1>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-20 flex flex-col items-center">
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
      </section>

      <main className="relative">
        {/* Primeira Seção */}
        <section className="w-full min-h-screen flex flex-col text-white">
          <div className="max-w-4xl mx-auto flex flex-col min-h-screen space-y-8 mx-16 bg-black/60">
            <p></p>
            <p>
              Por anos, um bioma representado na grande mídia pela morte e pela seca: a caatinga, que é o único bioma exclusivamente brasileiro, na verdade exala mais vida do que se pode ver a olho nu. As variações de solo se transformam em diferentes tipos de paisagens, como serras, chapadas e afloramento de rochas chamados de ‘‘lajedos’’.
            </p>
            <p>
              Essa variedade se estende para a fauna e a flora, com cerca de 1.794 espécies de animais vertebrados e invertebrados, e mais de 3 mil espécies de plantas vasculares. Com um clima quente e seco, onde longos períodos de estiagem são a regra, essa paisagem abriga milhões de pessoas que dependem dela para viver.
            </p>

            <video
              className="rounded-lg object-cover"
              controls
              muted
            >
              <source src="/agroflorestas.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo HTML5.
            </video>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 aspect-square space-y-8">
                <p>
                  A caatinga cobre 83% do território de Pernambuco, dominando o sertão e parte do agreste, o que dá cerca de 135 municípios. O bioma se estende por outros oito estados do Nordeste e parte do Sudeste, abrangendo Alagoas, Bahia, Ceará, Maranhão, Paraíba, Piauí, Rio Grande do Norte, Sergipe e uma pequena porção de Minas Gerais.
                </p>
                <p>
                  E esse ecossistema ganha ainda mais importância devido ao seu potencial no sequestro de carbono. Mais de uma década de estudos do Observatório Nacional da Caatinga apontaram que esse é o bioma brasileiro que mais se destaca pelo alto desempenho no sequestro de carbono (CO²).
                </p>
                <p>
                  O excesso de CO² na atmosfera é a principal causa do efeito estufa, relacionado ao aquecimento global. Na caatinga, para cada 100 toneladas de CO² capturadas, entre 45% e 60% permanecem retidas e não retornam à atmosfera. 
                </p>
              </div>
              <div className="flex-1 aspect-square bg-gray-300 rounded-lg" />
            </div>
          
            <p>
              Mas a caatinga não está livre da degradação, assim como outros biomas do Brasil. De acordo com o Ibama, o país já perdeu 34 milhões dos 82,6 milhões de hectares do bioma. Ao todo, cerca de 27 milhões de pessoas vivem na região e o avanço da degradação ameaça não só a biodiversidade, mas as famílias que tiram da terra seu sustento, o que torna urgente a busca por soluções sustentáveis. 
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
