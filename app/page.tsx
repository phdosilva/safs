import Image from "next/image";
import bannerImage from "../public/banner.png";
import scrollSVG from "../public/scroll.svg";
import ellipseSVG from "../public/ellipse.svg";

export default function Home() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src={bannerImage}
          alt="Desertos na Caatinga"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        {/* Optional overlay for darkening/lightening the image */}
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
  );
}
