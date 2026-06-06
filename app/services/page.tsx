import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Electrical Services Central Victoria",
  description:
    "Full range of electrical services in Central Victoria — new installations, lighting, switchboards, data cabling, fire detection, generator connections, and more. A-grade licensed. Call 0413 091 102.",
};

const SERVICE_CATEGORIES = [
  {
    label: "Installations & Repairs",
    slugs: [
      "new-electrical-installations",
      "electrical-troubleshooting",
      "electrical-fault-detection",
    ],
  },
  {
    label: "Lighting & Automation",
    slugs: [
      "lighting-installations",
      "led-upgrades",
      "emergency-lighting-installations",
      "home-automation-installations",
    ],
  },
  {
    label: "Power & Switchboards",
    slugs: [
      "switchboard-installation",
      "generator-connection",
      "generator-maintenance",
    ],
  },
  {
    label: "Cabling & Communications",
    slugs: [
      "data-cabling",
      "communication-cabling",
      "network-wiring-installation",
      "underground-cabling",
      "underground-cable-repairs",
    ],
  },
  {
    label: "Safety & Maintenance",
    slugs: [
      "fire-detection-installation",
      "preventative-electrical-maintenance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#2a4861] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#f5b840] font-display font-bold text-sm tracking-widest uppercase mb-3">
            What We Offer
          </p>
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-4">
            ELECTRICAL SERVICES AVAILABLE
          </h1>
          <p className="text-[#a0bfd4] text-lg max-w-2xl">
            Electrical works for residential, commercial, heavy duty industrial,
            offices, retail stores, restaurants, rural, and warehouses across
            Central Victoria.
          </p>
        </div>
      </section>

      {/* Services by category */}
      <section className="py-16 px-4 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto space-y-16">
          {SERVICE_CATEGORIES.map((cat) => {
            const services = cat.slugs
              .map((slug) => SERVICES.find((s) => s.slug === slug))
              .filter(Boolean);
            return (
              <div key={cat.label}>
                <h2 className="font-display font-bold text-2xl text-[#2a4861] mb-6 pb-3 border-b-2 border-[#f5b840] inline-block">
                  {cat.label}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service) => (
                    <Link
                      key={service!.slug}
                      href={`/services/${service!.slug}`}
                      className="bg-white rounded-xl p-6 border border-[#e9ecef] hover:border-[#2a4861] hover:shadow-lg transition-all group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-display font-bold text-xl text-[#2a4861] leading-tight group-hover:text-[#5d7b94] transition-colors">
                          {service!.title}
                        </h3>
                        <svg
                          className="w-5 h-5 text-[#ced4da] group-hover:text-[#f5b840] transition-colors flex-shrink-0 ml-2 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <p className="text-[#6c757d] text-sm leading-relaxed mb-4">
                        {service!.summary}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {service!.benefits.slice(0, 2).map((b) => (
                          <span
                            key={b}
                            className="bg-[#f8f9fa] text-[#5d7b94] text-xs px-2 py-1 rounded"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
