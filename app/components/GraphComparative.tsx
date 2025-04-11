"use client";
import { useRef, useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import graphComparativeAnimation from "./carbonSequestrationComparativeGraphLottieData.json"; // A UNICA COISA QUE PRECISA SER MUDADA ENTRE ANIMACOES LOOTIE
import { handleScrollAnimation } from "../utils/animationUtils";

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const GraphComparative = () => {
    const lottieRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const handleScroll = handleScrollAnimation(lottieRef, containerRef);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isClient) {
        return <div className="w-full h-full bg-black" />;
    }

    return (
        <div ref={containerRef}>
            <Lottie lottieRef={lottieRef} animationData={graphComparativeAnimation} />
        </div>
    );
};

export default GraphComparative;