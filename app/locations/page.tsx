import type { Metadata } from "next";
import Link from "next/link";
import { TOWNS, CONTACT } from "@/lib/data";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Electrician Service Areas | Central Victoria",
  description:
    "Chuck E Electrical services Seymour, Euroa, Broadford, Kilmore, Nagambie, Wallan, Heathcote and all surrounding towns in Central Victoria. Call 0413 091 102.",
};

export default function LocationsPage() {
  return (
    <>
      <section className="bg-[#2a4861] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#f5b840] font-display font-bold text-sm tracking-widest uppercase mb-3">
            Where We Work
          </p>
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-4">
            SERVICE AREAS
          </h1>
          <p className="text-[#a0bfd4] text-lg max-w-2xl">
            Based in Seymour, we cover a broad service area throughout Central
            Victoria. If you're in one of the towns below — or anywhere nearby —
            get in touch for a free quote.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {TOWNS.map((town) => (
              <Link
                key={town.slug}
                href={`/locations/${town.slug}`}
                className="bg-[#f8f9fa] rounded-xl p-5 border border-[#e9ecef] hover:border-[#2a4861] hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h2 className="font-display font-bold text-xl text-[#2a4861] group-hover:text-[#5d7b94] transition-colors">
                    {town.name}
                  </h2>
                  <span className="text-[#ced4da] text-xs mt-1">
                    {town.postcode}
                  </span>
                </div>
                <p className="text-[#6c757d] text-xs leading-relaxed mb-3 line-clamp-2">
                  {town.character}
                </p>
                <span className="text-[#f5b840] text-xs font-semibold">
                  Electrician {town.name} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map note */}
      <section className="py-12 px-4 bg-[#f8f9fa] border-t border-[#e9ecef]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl text-[#2a4861] mb-4">
            Don't See Your Town?
          </h2>
          <p className="text-[#6c757d] mb-6">
            Our service area extends throughout Central Victoria. If you're
            outside the towns listed, give us a call — we may still be able to
            help, especially for larger or ongoing projects.
          </p>
          <a
            href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`}
            className="inline-block bg-[#2a4861] hover:bg-[#1a2f3f] text-white px-8 py-4 rounded font-display font-bold text-lg tracking-wide transition-colors"
          >
            CALL {CONTACT.phone1}
          </a>
        </div>
      </section>

      <CTASection />
    </>
  );
}
