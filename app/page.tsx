import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, SERVICES, TOWNS } from "@/lib/data";
import CTASection from "@/components/CTASection";
import HeroCarousel from "@/components/HeroCarousel";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "Licensed Electricians Central Victoria | Chuck E Electrical",
  description:
    "Chuck E Electrical — licensed electricians serving Seymour and Central Victoria for over 30 years. Residential, commercial, industrial and rural. Call 0413 091 102.",
};

const FEATURED_SERVICES = [
  "lighting-installations",
  "switchboard-installation",
  "new-electrical-installations",
  "fire-detection-installation",
  "home-automation-installations",
  "data-cabling",
];

export default function HomePage() {
  const featuredServices = SERVICES.filter((s) =>
    FEATURED_SERVICES.includes(s.slug)
  );

  return (
    <>
      {/* Hero */}
      <section className="relative text-white overflow-hidden" style={{ minHeight: "560px" }}>
        {/* Background carousel — sits behind everything */}
        <HeroCarousel />
 
        {/* Foreground content — sits above the carousel */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#f5b840]/20 border border-[#f5b840]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-[#f5b840] rounded-full animate-pulse" />
                <span className="text-[#f5b840] text-sm font-medium">
                  Emergency call-out available
                </span>
              </div>
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-none">
                LICENCED
                <br />
                <span className="text-[#f5b840]">ELECTRICIANS</span>
                <br />
                <span className="text-3xl md:text-4xl font-semibold text-white/90 tracking-wide mt-2 block">
                  Helping Central Victoria
                </span>
              </h1>
              <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-xl">
                At Chuck E Electrical, we don't just fix wires — we power homes,
                businesses, farms, and change the occasional grumpy switchboard
                with genuine expertise and old-fashioned service values.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0413091102"
                  className="bg-[#f5b840] hover:bg-[#e8a020] text-[#1a2f3f] px-8 py-4 rounded font-display font-bold text-xl tracking-wide transition-colors inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                  0413 091 102
                </a>
                <Link
                  href="/services"
                  className="border-2 border-[#5d7b94] hover:border-white text-white px-8 py-4 rounded font-display font-bold text-xl tracking-wide transition-colors text-center"
                >
                  OUR SERVICES
                </Link>
              </div>
            </div>
 
            {/* Stats panel */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { stat: "30+", label: "Years Experience" },
                { stat: "A-Grade", label: "Licensed Electrician" },
                { stat: "All Hours", label: "Emergency Call-Out" },
                { stat: "Free", label: "Quotes & Consultations" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#1a2f3f]/70 border border-[#5d7b94]/30 rounded-xl p-6 backdrop-blur"
                >
                  <div className="font-display font-black text-4xl text-[#f5b840] mb-1">
                    {item.stat}
                  </div>
                  <div className="text-[#a0bfd4] text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
 
        {/* Diagonal bottom — sits above the carousel overlay */}
        <div
          className="relative z-10 h-12 bg-white"
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
        />
      </section>

      {/* Trust bar */}
      <section className="bg-white py-8 border-b border-[#e9ecef]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-[#5d7b94] text-sm">
            {[
              "✓ A-Grade Licensed",
              "✓ REC Accredited",
              "✓ 30+ Years Experience",
              "✓ Certificate of Electrical Safety Issued",
              "✓ $5M+ Public Liability",
              "✓ Free Quotes",
            ].map((item) => (
              <span key={item} className="font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#f5b840] font-display font-bold text-sm tracking-widest uppercase mb-3">
                Your Trusted Electrical Professionals
              </p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2a4861] mb-6">
                Three Decades of Keeping the Lights On
              </h2>
              <div className="space-y-4 text-[#3d5068] leading-relaxed">
                <p>
                  Led by Chris Evans — not the Hollywood one, although ours is
                  your hero when your lights stop — our fully qualified
                  electricians have been proudly serving Seymour and surrounding
                  areas for over 30 years.
                </p>
                <p>
                  That's three decades of early starts, blown fuses, and a fair
                  amount of delicious coffee. All dedicated to keeping your
                  power running safely and efficiently.
                </p>
                <p>
                  Chuck E Electrical has built a strong reputation across
                  central Victoria as a licensed and trusted electrical
                  contractor. We don't just show up with tool belts; we show up
                  with integrity, attention to detail, and a clear understanding
                  of the latest electrical technologies and safety standards.
                </p>
                <p>
                  We're not just here to flip switches — we're here to build
                  lasting connections (pun intended).
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#f8f9fa] rounded-2xl p-8 border border-[#e9ecef]">
              <h3 className="font-display font-bold text-2xl text-[#2a4861] mb-6">
                Hours of Operation
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-[#dee2e6]">
                  <span className="text-[#3d5068] font-medium">
                    Monday – Friday
                  </span>
                  <span className="font-display font-bold text-[#2a4861]">
                    7:30am – 4pm
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#dee2e6]">
                  <span className="text-[#3d5068] font-medium">Saturday</span>
                  <span className="font-display font-bold text-[#2a4861]">
                    By appointment
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#dee2e6]">
                  <span className="text-[#3d5068] font-medium">Sunday</span>
                  <span className="font-display font-bold text-[#2a4861]">
                    By appointment
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-[#3d5068] font-medium">Emergency</span>
                  <span className="font-display font-bold text-[#f5b840]">
                    Call-out available
                  </span>
                </div>
              </div>
              <a
                href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`}
                className="mt-6 w-full bg-[#2a4861] hover:bg-[#1a2f3f] text-white px-6 py-3 rounded font-display font-bold tracking-wide text-center block transition-colors"
              >
                CALL {CONTACT.phone1}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#f5b840] font-display font-bold text-sm tracking-widest uppercase mb-3">
              What We Do
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2a4861] mb-4">
              Electrical Services Available
            </h2>
            <p className="text-[#6c757d] max-w-2xl mx-auto">
              From simple repairs to complete electrical installations — we cover
              every aspect of residential, commercial, industrial, and rural
              electrical work.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white rounded-xl p-6 border border-[#e9ecef] hover:border-[#2a4861] hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 bg-[#2a4861]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#2a4861] transition-colors">
                  <svg
                    className="w-5 h-5 text-[#2a4861] group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-[#2a4861] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#6c757d] text-sm leading-relaxed mb-4">
                  {service.summary}
                </p>
                <span className="text-[#f5b840] text-sm font-semibold group-hover:gap-2 transition-all inline-flex items-center gap-1">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/services"
              className="inline-block bg-[#2a4861] hover:bg-[#1a2f3f] text-white px-10 py-4 rounded font-display font-bold text-xl tracking-wide transition-colors"
            >
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Service areas strip */}
      <section className="py-12 px-4 bg-[#2a4861] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-3xl mb-2">
              Serving All of Central Victoria
            </h2>
            <p className="text-[#a0bfd4]">
              Based in Seymour — we cover an extensive service area including:
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {TOWNS.map((town) => (
              <Link
                key={town.slug}
                href={`/locations/${town.slug}`}
                className="bg-[#1a2f3f] hover:bg-[#f5b840] hover:text-[#1a2f3f] text-[#a0bfd4] px-3 py-1.5 rounded text-sm transition-colors font-medium"
              >
                {town.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/locations"
              className="text-[#f5b840] hover:text-white text-sm font-medium transition-colors underline underline-offset-2"
            >
              View all service area pages →
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#f5b840] font-display font-bold text-sm tracking-widest uppercase mb-3">
              Our Work
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#2a4861] mb-4">
              Examples of Our Work
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                src: "/images/gallery/chuck-e-electrical-victoria-frontdesk.jpg",
                alt: "Licensed electrical contractor example of commercial works",
                label: "Commercial",
              },
              {
                src: "/images/gallery/sportsFieldLighting.jpg",
                alt: "Licensed electrical contractor example of lighting works",
                label: "Lighting",
              },
              {
                src: "/images/gallery/kitchen_application.webp",
                alt: "Licensed electrical contractor example of kitchen lighting",
                label: "Residential",
              },
              {
                src: "/images/gallery/workshopLights.jpg",
                alt: "Industrial Lighting",
                label: "Industrial",
              },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-square rounded-xl overflow-hidden bg-[#e9ecef] group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#2a4861]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-display font-bold">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block border-2 border-[#2a4861] text-[#2a4861] hover:bg-[#2a4861] hover:text-white px-8 py-3 rounded font-display font-bold tracking-wide transition-colors"
            >
              VIEW FULL GALLERY
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />


      <CTASection />

    </>
  );
}
