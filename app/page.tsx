import Image from "next/image";
import bannerImg from "../public/banner.png";
import backgroundImg from "../public/background.png";
import scrollSVG from "../public/scroll.svg";
import ellipseSVG from "../public/ellipse.svg";
import { Slider } from "./components/Slider";

import img1 from "../public/img1.png";
import img2 from "../public/img2.png";
import img3 from "../public/img3.png";
import img4 from "../public/img4.png";
import img5 from "../public/img5.png";
import img6 from "../public/img6.png";
import img7 from "../public/img7.png";
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

      {/* Background fixo para toda a página */}
      <div className="fixed inset-0 -z-50">
        <Image
          src={backgroundImg}
          alt="Background da seção"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <main className="relative">
        {/* Primeira Seção */}
        <section className="w-full min-h-screen flex flex-col md:flex-row text-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-screen bg-black/60">
            {/* Coluna Esquerda */}
            <div className="w-full md:w-1/2 max-auto px-4 flex flex-col md:flex-row min-h-screen text-white bg-black">
              <div className="relative w-full md:w-2/3 flex flex-col justify-between p-8">
                {/* Jitter */}

                <h2 className="text-2xl md:text-4xl font-bold self-start mt-auto">
                  O Bioma nordestino e pernambucano
                </h2>
              </div>
            </div>

            {/* Coluna Direita (Texto) */}
            <div className="w-full md:w-1/2 p-8 flex items-center">
              <div>
                <p className="text-base md:text-lg leading-relaxed">
                  A Caatinga é um bioma exclusivamente brasileiro e ocupa a
                  maior área do estado de Pernambuco, cerca de 83% do
                  território, abrangendo regiões de clima árido e semiárido. Ela
                  tem um clima semiárido, ou seja, quente e seco, com longas
                  estiagens. É um bioma extremamente diverso, onde o solo se
                  transforma em diferentes tipos de paisagens, com serras,
                  morros e extensões rochosas chamadas de “lajedos”. Essa
                  variedade se estende para a fauna e a flora, com cerca de
                  1.794 espécies de invertebrados, e 3150 espécies de plantas
                  vasculares.
                </p>
                <br />
                <p className="text-base md:text-lg leading-relaxed">
                  Apenas em Pernambuco, a Caatinga abrange cerca de 135
                  municípios, envolvendo inúmeras famílias que muitas vezes
                  vivem da agricultura, atividade ameaçada pela crescente
                  degradação do bioma.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full min-h-screen flex flex-col md:flex-row text-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-screen bg-black/60">
            {/* Coluna Esquerda */}
            <div className="w-full md:w-1/2 max-auto px-4 flex flex-col md:flex-row min-h-screen text-white bg-black">
              <div className="relative w-full md:w-2/3 flex flex-col justify-between p-8">
                {/* Jitter */}

                <h2 className="text-2xl md:text-4xl font-bold self-start mt-auto">
                  Desertificação da Caatinga
                </h2>
              </div>
            </div>

            {/* Coluna Direita (Texto) */}
            <div className="w-full md:w-1/2 p-8 flex items-center">
              <div>
                <p className="text-base md:text-lg leading-relaxed">
                  A desertificação é um processo em que a vegetação de áreas
                  secas diminui a ponto de desaparecer, o solo sofre tamanha
                  degradação a ponto de se tornar excessivamente seco e sem
                  nutrientes, resultando em uma paisagem similar a dos desertos.
                  É um fenômeno antrópico, isto é, inteiramente causado pela
                  interferência humana, que também é o caso da Caatinga.{" "}
                </p>
                <br />
                <p className="text-base md:text-lg leading-relaxed">
                  O processo de desertificação da Caatinga não é algo recente,
                  nos anos de 1970 o agrônomo João Vasconcelos Sobrinho já tinha
                  sido responsável pelos primeiros estudos sobre este crescente
                  problema no bioma. Trata-se de uma área com um índice muito
                  grande de desmatamento, sem nenhum movimento político para
                  frear a situação. A geógrafa Jocimara Lobão, pesquisadora do
                  MapBiomas, explica em entrevista para o Brasil de Fato: “A
                  Caatinga tem uma dinâmica de processos mais lentos.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full min-h-screen flex flex-col md:flex-row text-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-screen bg-black/60">
            {/* Coluna Esquerda */}
            <div className="w-full md:w-1/2 max-auto px-4 flex flex-col md:flex-row min-h-screen text-white bg-black">
              <div className="relative w-full md:w-2/3 flex flex-col justify-between p-8">
                {/* Jitter */}

                <h2 className="text-2xl md:text-4xl font-bold self-start mt-auto">
                  Desertificação da Caatinga
                </h2>
              </div>
            </div>

            {/* Coluna Direita (Texto) */}
            <div className="w-full md:w-1/2 p-8 flex items-center">
              <div>
                <p className="text-base md:text-lg leading-relaxed">
                  Uma degradação que é feita na Caatinga leva muito mais tempo
                  para recuperar que em outro ambiente. Quando a gente fala em
                  degradação e desmatamento, a gente está falando em acelerar
                  processos que vão gerar a desertificação”. Um estudo publicado
                  em 2024 pela revista Applied Soil Ecology já constatou que a
                  desertificação no bioma reduz mais de 50% a funcionalidade do
                  solo. Esse fator reduz consideravelmente a capacidade de
                  sustentar o crescimento das plantas, afetando diretamente a
                  vida humana e animal no local. Esse grande estado de
                  degradação contribui ainda mais para o agravamento da
                  condição, o solo enfraquecido dessa maneira impede parte da
                  infiltração de água, o que acelera o processo de erosão.
                  Devido ao desmatamento desenfreado, a Caatinga já perdeu mais
                  de 40% de seu território original, segundo dados do Relatório
                  Anual do Desmatamento de 2023 do MapBiomas, que também relatou
                  um aumento de 43,3% de áreas desmatadas em comparação ao ano
                  anterior, 2022.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full min-h-screen flex flex-col md:flex-row text-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-screen bg-black/60">
            {/* Coluna Esquerda */}
            <div className="w-full md:w-1/2 max-auto px-4 flex flex-col md:flex-row min-h-screen text-white bg-black">
              <div className="relative w-full md:w-2/3 flex flex-col justify-between p-8">
                {/* Jitter */}

                <h2 className="text-2xl md:text-4xl font-bold self-start mt-auto">
                  Desertificação da Caatinga
                </h2>
              </div>
            </div>

            {/* Coluna Direita (Texto) */}
            <div className="w-full md:w-1/2 p-8 flex items-center">
              <div>
                <p className="text-base md:text-lg leading-relaxed">
                  Na época do lançamento do relatório, Washington Rocha,
                  coordenador da equipe da Caatinga do MapBiomas explicou causas
                  desse aumento: “O maior desmatamento verificado na Caatinga
                  foi impulsionado pela expansão de atividades agropecuárias. Um
                  fenômeno que capturamos é o desmatamento para fins de
                  implantação de parques solares e eólicos crescendo pelo
                  bioma”. Mais 4.302 hectares foram desmatados por
                  empreendimentos de energia renováveis (eólica e solar), de
                  acordo com a revista Exame. No meio desta situação, secas
                  ficam cada vez mais severas e a expansão do agronegócio
                  impulsiona a degradação na área, afetando não apenas as
                  famílias residentes mas também a vegetação e os animais.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full min-h-screen flex flex-col md:flex-row text-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-screen bg-black/60">
            {/* Coluna Esquerda */}
            <div className="w-full md:w-1/2 max-auto px-4 flex flex-col md:flex-row min-h-screen text-white bg-black">
              <div className="relative w-full md:w-2/3 flex flex-col justify-between p-8">
                {/* Jitter */}

                <h2 className="text-2xl md:text-4xl font-bold self-start mt-auto">
                  A caatinga é o bioma brasileiro com maior potencial de
                  sequestro de carbono
                </h2>
              </div>
            </div>

            {/* Coluna Direita (Texto) */}
            <div className="w-full md:w-1/2 p-8 flex items-center">
              <div>
                <p className="text-base md:text-lg leading-relaxed">
                  Diferente do que era pensado antigamente, a Caatinga, bioma
                  exclusivo do Brasil, é um bioma muito rico, com propriedades
                  surpreendentes que o tornam a vegetação número um no sequestro
                  de carbono. Com cerca de 860 Km², a vegetação da caatinga é
                  seca mas repleta de vida, abarcando mais de 3.300 espécies e
                  contribuindo com a redução dos gases do efeito estufa. “A
                  floresta presta muitos benefícios, incluindo a mitigação, no
                  caso o sequestro de carbono, a retirada de CO2 da atmosfera
                  que está ligado ao aquecimento global”, pontuou John Cunha,
                  pesquisador do Observatório da Caatinga. Estudos do
                  Observatório Nacional da Caatinga apontam que a Caatinga,
                  mesmo durante duras secas, é excelente no sequestro de CO2,
                  também conhecido como Dióxido de Carbono. Essa substância
                  gasosa existe em abundância na atmosfera, no entanto, ações
                  humanas, como queima de carvão e petróleo, expelem ainda mais,
                  agravando o efeito estufa e aquecendo ainda mais o planeta. Em
                  áreas mais úmidas, conhecidas como Caatinga Hipoxerófilas, a
                  vegetação sequestra até três vezes mais carbono por ano, em
                  comparação com regiões mais secas.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full min-h-screen flex flex-col md:flex-row text-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-screen bg-black/60">
            {/* Coluna Esquerda */}
            <div className="w-full md:w-1/2 max-auto px-4 flex flex-col md:flex-row min-h-screen text-white bg-black">
              <div className="relative w-full md:w-2/3 flex flex-col justify-between p-8">
                {/* Jitter */}

                <h2 className="text-2xl md:text-4xl font-bold self-start mt-auto">
                  A caatinga é o bioma brasileiro com maior potencial de
                  sequestro de carbono
                </h2>
              </div>
            </div>

            {/* Coluna Direita (Texto) */}
            <div className="w-full md:w-1/2 p-8 flex items-center">
              <div>
                <p className="text-base md:text-lg leading-relaxed">
                  A caatinga também se mostra super eficiente na utilização e
                  armazenamento do carbono, apresentando uma média de 45% em
                  eficiência. Por exemplo, a cada 100 toneladas de CO2
                  capturadas pela caatinga, 45 ficam retidas. Além disso, cerca
                  de 3,5 quilogramas de dióxido de carbono são fixadas por metro
                  cúbico de água transpirada pelo bioma. Apesar de ser um dos
                  mais importantes biomas, a caatinga sofre com uma forte
                  degradação, empobrecendo o solo e levando todo um ecossistema
                  à morte. De acordo com a Agência Brasil, o país já perdeu 34
                  milhões de hectares dos 82,6 milhões de hectares da Caatinga,
                  além de ter 60% da vegetação nativa ocupada. Do contrário do
                  que era imaginado, esse processo de desertificação não
                  acontece somente pelas mãos do pequeno agricultor, mas
                  principalmente pelas grandes empresas.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full min-h-screen flex flex-col md:flex-row text-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-screen bg-black/60">
            {/* Coluna Esquerda */}
            <div className="w-full md:w-1/2 max-auto px-4 flex flex-col md:flex-row min-h-screen text-white bg-black">
              <div className="relative w-full md:w-2/3 flex flex-col justify-between p-8">
                {/* Jitter */}

                <h2 className="text-2xl md:text-4xl font-bold self-start mt-auto">
                  A caatinga é o bioma brasileiro com maior potencial de
                  sequestro de carbono
                </h2>
              </div>
            </div>

            {/* Coluna Direita (Texto) */}
            <div className="w-full md:w-1/2 p-8 flex items-center">
              <div>
                <p className="text-base md:text-lg leading-relaxed">
                  “A gente tem visto novas dinâmicas de degradação impulsionadas
                  pelos mega empreendimentos. Esses que têm capacidade de fato
                  para modificar o ambiente de forma significativa”, pontuou o
                  pesquisador. Além disso, De acordo com John Cunha, algumas
                  questões têm sido pontuais nesse processo de modificação da
                  Caatinga:
                </p>
                <br />
                <p className="text-base md:text-lg leading-relaxed">
                  O pesquisador também reforçou que a degradação da caatinga não
                  está somente ligada à escassez de água, por isso, a criação e
                  oferta de Oásis não deve ser vista como única solução para a
                  desertificação do ambiente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div>
          <Slider.Wrapper backgroundColor="#EBEBFE" backgroundImage={true}>
        <Slider.Carousel bulletColor="white" bulletActiveColor="gray" variant="blue">
        <div>
            <div className="w-full flex justify-center">
              <Image src={img1} alt="" className="max-w-[1050px]" />
            </div>
          </div>
          <div>
            <div className="w-full flex justify-center">
              <Image src={img2} alt="" className="max-w-[1050px]" />
            </div>
          </div>
          <div>
            <div className="w-full flex justify-center">
            <Image src={img3} alt="" className="max-w-[1050px]" />
            </div>
          </div>

          <div>
            <div className="w-full flex justify-center">
            <Image src={img4} alt="" className="max-w-[1050px]" />
            </div>
          </div>

          <div>
            <div className="w-full flex justify-center">
            <Image src={img5} alt="" className="max-w-[1050px]" />
            </div>
          </div>

          <div>
            <div className="w-full flex justify-center">
            <Image src={img6} alt="" className="max-w-[1050px]" />
            </div>
          </div>

          <div>
            <div className="w-full flex justify-center">
            <Image src={img7} alt="" className="max-w-[1050px]" />
            </div>
          </div>
        </Slider.Carousel>
      </Slider.Wrapper>
          </div>
        </section>
      </main>
    </>
  );
}
