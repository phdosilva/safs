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
        <div className="absolute bottom-10">
          <Image src={scrollSVG} alt="Scroll Indicator"></Image>
          <Image
            className="absolute top-2.5 left-1.5 inset-0 animate-bounce"
            src={ellipseSVG}
            alt="Scroll Animated"
            objectFit="contain"
          />
        </div>
      </section>

      

      <section className="relative w-full min-h-screen flex flex-col md:flex-row text-white">
        {/* Background Image (opcional) */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={backgroundImg}
            alt="Background da seção"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-screen bg-black/60">
          {/* Coluna Esquerda */}
          <div className="max-w7xl max-auto px-4 flex flex-col md:flex-row min-h-screen text-white bg-black">
            <div className="relative w-full md:w-1/2 flex flex-col justify-between p-8">
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
                A Caatinga é um bioma exclusivamente brasileiro e ocupa a maior
                área do estado de Pernambuco, cerca de 83% do território,
                abrangendo regiões de clima árido e semiárido. Ela tem um clima
                semiárido, ou seja, quente e seco, com longas estiagens. É um
                bioma extremamente diverso, onde o solo se transforma em
                diferentes tipos de paisagens, com serras, morros e extensões
                rochosas chamadas de “lajedos”. Essa variedade se estende para a
                fauna e a flora, com cerca de 1.794 espécies de invertebrados, e
                3150 espécies de plantas vasculares.
              </p>
              <br />
              <p className="text-base md:text-lg leading-relaxed">
                Apenas em Pernambuco, a Caatinga abrange cerca de 135
                municípios, envolvendo inúmeras famílias que muitas vezes vivem
                da agricultura, atividade ameaçada pela crescente degradação do
                bioma.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
