import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Electrical Work Gallery | Central Victoria",
  description:
    "Examples of electrical work by Chuck E Electrical — commercial, industrial, residential, and rural projects in Central Victoria. View our gallery.",
};

const GALLERY_ITEMS = [
  {
    src: "/images/seymour_club_commercial_application.webp",
    alt: "Workshop powerpoint installation by a licensed electrician",
    label: "Commercial",
    caption: "Commercial electrical works and repairs",
  },
  {
    src: "/images/workshopLights.jpg",
    alt: "Workshop lights installed by a licensed electrician",
    label: "Industrial",
    caption: "Heavy duty industrial works and repairs",
  },
  {
    src: "/images/kitchen_example.webp",
    alt: "Office pendant lighting installation by a licensed electrician",
    label: "Residential",
    caption: "Domestic electrical works and repairs",
  },
  {
    src: "/images/rural_pump_control_application.webp",
    alt: "Rural pump control installation by a licensed electrician",
    label: "Rural",
    caption: "Rural electrical works and repairs",
  },
  {
    src: "/images/underground_cabling.webp",
    alt: "Underground wiring installation by a licensed electrical contractor",
    label: "Underground",
    caption: "Underground cable installation",
  },
  {
    src: "/images/commercial_application.webp",
    alt: "Licensed electrical contractor example of lighting works",
    label: "Lighting",
    caption: "Commercial lighting installation",
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-[#2a4861] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#f5b840] font-display font-bold text-sm tracking-widest uppercase mb-3">
            Our Portfolio
          </p>
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-4">
            EXAMPLES OF OUR WORK
          </h1>
          <p className="text-[#a0bfd4] text-lg max-w-2xl">
            At Chuck E Electrical, we take pride in delivering the best possible
            solutions. Here's a selection of projects we've completed across
            Central Victoria.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#3d5068] leading-relaxed max-w-3xl mb-10">
            Do any of the images below look like what you want to achieve in your home or business? 
            Do you have a tangle of wires in the ceiling, an old fuse box, or inefficient lighting setups? If so,
            you might be overdue for an upgrade or a professional inspection.
            Our experienced electricians can assess your current system,
            identify any potential hazards, and provide reliable solutions that
            meet current safety standards.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                className="group rounded-xl overflow-hidden border border-[#e9ecef] hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] bg-[#e9ecef] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-white">
                  <span className="inline-block bg-[#2a4861] text-white text-xs px-2 py-0.5 rounded font-medium mb-2">
                    {item.label}
                  </span>
                  <p className="text-[#3d5068] text-sm">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community section */}
      <section className="py-12 px-4 bg-[#f8f9fa] border-t border-[#e9ecef]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl text-[#2a4861] mb-4">
            Chuck E Electrical Support Our Local Community
          </h2>
          <p className="text-[#6c757d] leading-relaxed">
            We work with both residential and commercial clients across a wide
            range of projects, from small repairs to complete rewiring,
            switchboard upgrades, and new installations. No matter the size or
            complexity, we approach each job with care, precision, and attention
            to detail. At Chuck E Electrical, your safety and satisfaction are
            our top priorities.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
