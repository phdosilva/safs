import { RefObject } from "react";
import { LottieRefCurrentProps } from "lottie-react";

export const handleScrollAnimation = (
    lottieRef: RefObject<LottieRefCurrentProps | null>,
    containerRef: RefObject<HTMLDivElement | null>
) => {
    return () => {
        // Check if we're in a browser environment
        if (typeof window === 'undefined' || typeof document === 'undefined') return;
        
        if (!lottieRef.current || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const { top } = rect;
        const totalFrames = lottieRef.current.getDuration(true);
        if (!totalFrames) return;

        const screenHeight = window.innerHeight;
        const maxScroll = document.documentElement.scrollHeight - screenHeight;
        const offsetTop = containerRef.current.offsetTop; // distance from document top
        const scrollY = window.scrollY;

        // Can this element's top actually reach the top of the viewport?
        const canReachTop = offsetTop <= maxScroll;

        // If the element hasn't appeared yet
        if (top >= screenHeight) {
            lottieRef.current.goToAndStop(0, true);
            return;
        }

        // If the element's top (or page bottom) can reach the top of the screen:
        if (canReachTop) {
            // If the element's top is already at/above the very top of the screen
            if (top <= 0) {
                lottieRef.current.goToAndStop(totalFrames, true);
                return;
            }
            // Otherwise, interpolate between 0 (just appeared) and totalFrames (hits top)
            const fraction = 1 - top / screenHeight;
            lottieRef.current.goToAndStop(totalFrames * fraction, true);
        } else {
            // The element can't reach the top, so treat the bottom of the page as "100%"
            const startScroll = offsetTop - screenHeight; // when the element just enters
            const endScroll = maxScroll;                 // bottom of the page

            if (scrollY <= startScroll) {
                lottieRef.current.goToAndStop(0, true);
                return;
            }

            if (scrollY >= endScroll) {
                lottieRef.current.goToAndStop(totalFrames, true);
                return;
            }

            // Interpolate from 0 to totalFrames between startScroll and endScroll
            const fraction = (scrollY - startScroll) / (endScroll - startScroll);
            lottieRef.current.goToAndStop(totalFrames * fraction, true);
        }
    };
};