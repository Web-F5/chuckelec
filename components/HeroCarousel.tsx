"use client";
import { useState, useEffect, useCallback } from "react";

const SLIDES = [
  {
    src: "/images/Seymour_club-sm.webp",
    srcset:
      "/images/Seymour_club-sm.webp 400w, /images/Seymour_club-md.webp 800w, /images/Seymour_club.webp 1500w",
    alt: "Licenced electrical contractor example of commercial works",
    caption: "Completed Works",
    priority: true,
  },
  {
    src: "/images/Seymour_club3-sm.webp",
    srcset:
      "/images/Seymour_club3-sm.webp 400w, /images/Seymour_club3-md.webp 800w, /images/Seymour_club3.webp 1500w",
    alt: "Licenced electrical contractor example of lighting works",
    caption: "Commercial Solutions",
    priority: false,
  },
  {
    src: "/images/kitchen-sm.webp",
    srcset:
      "/images/kitchen-sm.webp 400w, /images/kitchen-md.webp 800w, /images/kitchen.webp 1500w",
    alt: "Licenced electrical contractor example of pendant lighting",
    caption: "Residential Application",
    priority: false,
  },
];

const AUTOPLAY_MS = 5000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Background image carousel"
    >
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <img
            src={slide.src}
            srcSet={slide.srcset}
            sizes="(max-width: 480px) 400px, (max-width: 768px) 800px, 1500px"
            alt={slide.alt}
            loading={slide.priority ? "eager" : "lazy"}
            fetchPriority={slide.priority ? "high" : "auto"}
            className="w-full h-full object-cover object-center"
            width={1500}
            height={600}
          />
          {/* Dark overlay so text remains readable */}
          <div className="absolute inset-0 bg-[#1a2f3f]/65" />
        </div>
      ))}

      {/* Caption */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 hidden md:block z-10">
        <div className="bg-black/50 text-white text-sm px-4 py-1.5 rounded-lg backdrop-blur-sm whitespace-nowrap">
          {SLIDES[current].caption}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-[#f5b840]" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-sm text-white flex items-center justify-center transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-sm text-white flex items-center justify-center transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}