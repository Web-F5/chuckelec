"use client";

import { useState, useEffect, useRef } from "react";

interface Review {
  name: string;
  text: string;
  stars: number;
  reviewUrl: string;
}

const reviews: Review[] = [
 { name: "Karen Connolly", stars: 5, reviewUrl: "https://www.google.com/maps/place/Chuck+E+Electrical/@-37.0295054,145.1405916,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad7f595f9be7585:0x1fa467b5a26e7d0f!8m2!3d-37.0295054!4d145.1431665!16s%2Fg%2F11s9r0bmz7?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D", text: "Chuck sent us his subordinate Tom today to do half a dozen jobs, the service was outstanding, great work ethics, skills and manners. Have no reservations recommending Chucky Electrical to anyone." },
 { name: "Melanie Young", stars: 5, reviewUrl: "https://www.google.com/maps/place/Chuck+E+Electrical/@-37.0295054,145.1405916,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad7f595f9be7585:0x1fa467b5a26e7d0f!8m2!3d-37.0295054!4d145.1431665!16s%2Fg%2F11s9r0bmz7?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D", text: "Needed an electrician after a fire. Was here within the hour even though it was 7 am. Amazing thanks." },
 { name: "Damian Cavanagh", stars: 5, reviewUrl: "https://www.google.com/maps/place/Chuck+E+Electrical/@-37.0295054,145.1405916,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad7f595f9be7585:0x1fa467b5a26e7d0f!8m2!3d-37.0295054!4d145.1431665!16s%2Fg%2F11s9r0bmz7?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D", text: "Always a pleasure having Chuck and his crew working on my place. Prompt, polite and efficient. They have never failed me. Be confident when requesting their services. You won't be disappointed. Quality work at competitive prices." },
 { name: "Castro China", stars: 5, reviewUrl: "https://www.google.com/maps/place/Chuck+E+Electrical/@-37.0295054,145.1405916,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad7f595f9be7585:0x1fa467b5a26e7d0f!8m2!3d-37.0295054!4d145.1431665!16s%2Fg%2F11s9r0bmz7?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D", text: "Chris is great to deal with." },
 { name: "Grant Miller", stars: 5, reviewUrl: "https://www.google.com/maps/place/Chuck+E+Electrical/@-37.0295054,145.1405916,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad7f595f9be7585:0x1fa467b5a26e7d0f!8m2!3d-37.0295054!4d145.1431665!16s%2Fg%2F11s9r0bmz7?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D", text: "Best sparkie around! We have used Chris several times over the years. Most recently a burnt out mains fuse box. Highly recommend. Thanks again." },
 { name: "Kay Hayden", stars: 5, reviewUrl: "https://www.google.com/maps/place/Chuck+E+Electrical/@-37.0295054,145.1405916,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad7f595f9be7585:0x1fa467b5a26e7d0f!8m2!3d-37.0295054!4d145.1431665!16s%2Fg%2F11s9r0bmz7?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D", text: "Thanks to Chris and team who did a range of work inside and out at our home. Great communication, clean and friendly. Would recommend." },
 { name: "Josh Berg", stars: 5, reviewUrl: "https://www.google.com/maps/place/Chuck+E+Electrical/@-37.0295054,145.1405916,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad7f595f9be7585:0x1fa467b5a26e7d0f!8m2!3d-37.0295054!4d145.1431665!16s%2Fg%2F11s9r0bmz7?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D", text: "Outstanding Commercial Electrical Upgrade in Seymour! Chris and the team at Chuck E Electrical did an exceptional job rewiring our commercial premises in Seymour, Victoria. When we purchased the property, we knew the electrical system was outdated; over 50 years old, with old Bakelite switches and ceramic fuses. It was a safety hazard waiting to happen. The team completely overhauled the wiring, installed modern safety switches, and upgraded the switchboard to current standards. Their work was neat, efficient, and professionally certified; this even helped reduce our building insurance costs! If you need a reliable, professional electrician for commercial, residential, or industrial work, I highly recommend Chuck E Electrical." },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? "text-[#d7b377]" : "text-white/20"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// Truncate long reviews to keep cards uniform height
function truncate(text: string, max = 180) {
  return text.length <= max ? text : text.slice(0, max).trimEnd() + "…";
}

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const update = () => setVisibleCount(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCount);

  const go = (index: number) => {
    setCurrent(Math.max(0, Math.min(maxIndex, index)));
  };

  // Auto-advance
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, 5000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [maxIndex]);

  const stopAuto = () => { if (autoRef.current) clearInterval(autoRef.current); };

  const pct = (100 / visibleCount) * current;

  return (
    <section className="section-pad bg-[#2b4162] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      </div>

      <div className="container-site relative">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-600 uppercase tracking-[0.2em] text-[#d7b377] mb-4">
            Google Reviews
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-white uppercase tracking-wide">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-[#d7b377] mx-auto mt-6" />
          {/* Google rating summary */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <StarRating count={5} />
            <span className="text-white/60 text-sm">
              {reviews.length} reviews · 5.0 on Google
            </span>
          </div>
        </div>

        {/* Carousel track */}
        <div className="overflow-hidden" onMouseEnter={stopAuto}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${pct}%)` }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-7 h-full flex flex-col">
                  {/* Quote mark */}
                  <div className="text-[#d7b377] text-4xl font-display leading-none mb-3">&ldquo;</div>
                  {/* Review text */}
                  <p className="text-white/80 leading-relaxed text-sm flex-1 mb-5">
                    {truncate(review.text)}
                  </p>
                  {/* Footer */}
                  <div className="border-t border-white/10 pt-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="font-display text-white font-700 uppercase tracking-wide text-sm">
                        {review.name}
                      </p>
                      <StarRating count={review.stars} />
                    </div>
                    
                    <a href={review.reviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Read full review on Google"
                      className="flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity mt-0.5"
                    >
                      {/* Google G icon */}
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8" onMouseEnter={stopAuto}>
          <button
            onClick={() => go(current - 1)}
            disabled={current === 0}
            aria-label="Previous reviews"
            className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:text-white hover:border-[#fe5d26] hover:bg-[#fe5d26]/10 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Tabular numbers */}
          <span className="text-white/40 text-sm font-display tabular-nums">
            {current + 1} / {maxIndex + 1}
          </span>

          <button
            onClick={() => go(current + 1)}
            disabled={current === maxIndex}
            aria-label="Next reviews"
            className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:text-white hover:border-[#fe5d26] hover:bg-[#fe5d26]/10 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Google CTA */}
        <div className="text-center mt-8">
          
          <a href="https://www.google.com/maps/place/Chuck+E+Electrical/@-37.0295054,145.1405916,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad7f595f9be7585:0x1fa467b5a26e7d0f!8m2!3d-37.0295054!4d145.1431665!16s%2Fg%2F11s9r0bmz7?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 text-xs uppercase tracking-widest transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            View all reviews on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}