"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

type CarouselSlide = {
  id: number;
  imageUrl: string;
  title: string;
  description?: string;
};

interface ImageCarouselProps {
  slides: CarouselSlide[];
}

export default function ImageCarousel({ slides }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (slideIndex: number) => {
    if (isAnimating || slideIndex === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(slideIndex);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    // Auto-advance slides
    timeoutRef.current = setTimeout(goToNext, 6000);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4">
      <div className="relative flex justify-center pb-12 md:pb-16 w-[calc(100%)] md:w-[100%] max-w-4xl aspect-[16/9] md:aspect-[16/8]">
        {slides.map((slide, index) => {
          // Calculate positions: before, current, after
          let position = "after";
          if (index === currentIndex) {
            position = "current";
          } else if (
            index === currentIndex - 1 ||
            (currentIndex === 0 && index === slides.length - 1)
          ) {
            position = "before";
          }

          return (
            <div
              key={slide.id}
              className={clsx(
                "absolute transition-all duration-500 rounded-xl overflow-hidden shadow-lg",
                "w-[calc(100%-32px)] md:w-[80%] max-w-4xl aspect-[16/9]",
                {
                  "z-30 opacity-100 translate-x-0 scale-100":
                    position === "current",
                  "z-20 opacity-70 -translate-x-[calc(50%-50px)] md:-translate-x-[calc(30%-80px)] scale-[0.85]":
                    position === "before",
                  "z-10 opacity-70 translate-x-[calc(50%-50px)] md:translate-x-[calc(30%-80px)] scale-[0.85]":
                    position === "after",
                  "z-0 opacity-0":
                    position !== "current" &&
                    position !== "before" &&
                    position !== "after",
                }
              )}
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.imageUrl || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  priority={index === currentIndex}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <h2 className="text-xl md:text-3xl font-bold text-white">
                    {slide.title}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-6 -translate-y-1/2 z-40 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-6 -translate-y-1/2 z-40 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 z-40">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={clsx(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>

      {/* Description Text */}
      <div className="z-50 absolute  text-center mt-6 px-4 max-w-3xl mx-auto">
        {slides[currentIndex]?.description && (
          <p className="text-base md:text-lg text-center">
            {slides[currentIndex].description}
          </p>
        )}
      </div>
    </div>
  );
}
