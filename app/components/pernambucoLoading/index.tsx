"use client";
import { useRef, useEffect } from "react";
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import pernambucoLoadingAnimation from "./pernambucoLoadingAnimation.json"; // A UNICA COISA QUE PRECISA SER MUDADA ENTRE ANIMACOES LOOTIE
import { handleScrollAnimation } from "../../utils/animationUtils";

const PernambucoLoading = () => {
    const lottieRef = useRef<LottieRefCurrentProps>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = handleScrollAnimation(lottieRef, containerRef);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={containerRef}>
            <Lottie lottieRef={lottieRef} animationData={pernambucoLoadingAnimation} />
        </div>
    );
};

export default PernambucoLoading;