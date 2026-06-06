import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TOWNS, SERVICES, CONTACT } from "@/lib/data";
import CTASection from "@/components/CTASection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TOWNS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const town = TOWNS.find((t) => t.slug === slug);
  if (!town) return {};
  return {
    title: `Electrician ${town.name} | Chuck E Electrical`,
    description: `Need a licensed electrician in ${town.name} VIC ${town.postcode}? Chuck E Electrical serves ${town.name} and surrounds. A-grade licensed, 30+ years experience. Free quotes. Call 0413 091 102.`,
  };
}

const FEATURED_SERVICE_SLUGS = [
  "new-electrical-installations",
  "electrical-troubleshooting",
  "lighting-installations",
  "switchboard-installation",
  "fire-detection-installation",
  "data-cabling",
];

export default async function TownPage({ params }: Props) {
  const { slug } = await params;
  const town = TOWNS.find((t) => t.slug === slug);
  if (!town) notFound();

  const featuredServices = FEATURED_SERVICE_SLUGS.map((s) =>
    SERVICES.find((svc) => svc.slug === s)
  ).filter(Boolean);

  const nearbyTowns = TOWNS.filter((t) => t.slug !== slug).slice(0, 6);

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ElectricalContractor",
            name: "Chuck E Electrical",
            url: `https://chuckelec.com.au/locations/${slug}`,
            telephone: [CONTACT.phone1],
            description: `Licensed electricians serving ${town.name}, VIC ${town.postcode} and surrounding areas.`,
            areaServed: {
              "@type": "City",
              name: town.name,
              containedIn: {
                "@type": "State",
                name: "Victoria",
                addressCountry: "AU",
              },
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Seymour",
              addressRegion: "VIC",
              postalCode: "3660",
              addressCountry: "AU",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "07:30",
                closes: "16:00",
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-[#2a4861] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-[#5d7b94] text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/locations"
              className="hover:text-white transition-colors"
            >
              Service Areas
            </Link>
            <span>/</span>
            <span className="text-white">{town.name}</span>
          </nav>
          <p className="text-[#f5b840] font-display font-bold text-sm tracking-widest uppercase mb-3">
            {town.region} · VIC {town.postcode}
          </p>
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-4 leading-none">
            ELECTRICIAN
            <br />
            <span className="text-[#f5b840]">{town.name.toUpperCase()}</span>
          </h1>
          <p className="text-[#a0bfd4] text-lg max-w-2xl mb-8">
            Looking for a licensed electrician in {town.name}? Chuck E
            Electrical has been serving {town.name} and surrounding areas for
            over 30 years. A-grade licensed, locally trusted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`}
              className="bg-[#f5b840] hover:bg-[#e8a020] text-[#1a2f3f] px-8 py-4 rounded font-display font-bold text-lg tracking-wide transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              CALL {CONTACT.phone1}
            </a>
            <Link
              href="/contact"
              className="border-2 border-[#5d7b94] hover:border-white text-white px-8 py-4 rounded font-display font-bold text-lg tracking-wide transition-colors text-center"
            >
              FREE QUOTE
            </Link>
          </div>
        </div>
      </section>

      {/* Town-specific content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-display font-bold text-3xl text-[#2a4861] mb-4">
                Electrical Services in {town.name}
              </h2>
              <p className="text-[#3d5068] leading-relaxed mb-4">
                {town.description}
              </p>
              <p className="text-[#3d5068] leading-relaxed mb-4">
                {town.character}
              </p>
              <p className="text-[#3d5068] leading-relaxed">
                Whether you need a simple electrical repair, a full switchboard
                upgrade, or a new installation for your {town.name} property,
                Chuck E Electrical is your local licensed electrician. We're
                based in Seymour — just{" "}
                {town.driveTime.toLowerCase().includes("part of")
                  ? "minutes away"
                  : town.driveTime.toLowerCase()}{" "}
                — so we can respond quickly to {town.name} calls.
              </p>
            </div>

            {/* Why choose us */}
            <div className="bg-[#f8f9fa] rounded-xl p-6 border border-[#e9ecef]">
              <h3 className="font-display font-bold text-2xl text-[#2a4861] mb-4">
                Why Choose Chuck E Electrical in {town.name}?
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Local Knowledge",
                    body: `We know ${town.name} and understand the property types and electrical challenges common in the area.`,
                  },
                  {
                    title: "Licensed & Insured",
                    body: "A-grade licensed electrician with $5M+ public liability insurance for complete peace of mind.",
                  },
                  {
                    title: "Fast Response",
                    body: `Based in Seymour, we can reach ${town.name} quickly — including emergency call-outs.`,
                  },
                  {
                    title: "Certificate of Electrical Safety",
                    body: "Every job receives a Certificate of Electrical Safety, as required by Victorian law.",
                  },
                  {
                    title: "Free Quotes",
                    body: "We provide honest, no-obligation quotes before any work begins. No surprises.",
                  },
                  {
                    title: "30+ Years Experience",
                    body: "Three decades of electrical expertise across residential, commercial, and rural properties.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#f5b840] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-[#1a2f3f]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-[#2a4861] text-sm">
                        {item.title}
                      </div>
                      <div className="text-[#6c757d] text-sm">{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Contact card */}
            <div className="bg-[#2a4861] rounded-xl p-6 text-white">
              <h3 className="font-display font-bold text-xl mb-1">
                Electrician in {town.name}
              </h3>
              <p className="text-[#7a99b0] text-sm mb-4">
                {town.driveTime} · Free quotes
              </p>
              <a
                href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`}
                className="block w-full bg-[#f5b840] hover:bg-[#e8a020] text-[#1a2f3f] py-3 rounded font-display font-bold text-center transition-colors mb-2"
              >
                {CONTACT.phone1}
              </a>
              
              <div className="mt-4 pt-4 border-t border-[#3a5871] text-[#7a99b0] text-xs space-y-1">
                <p>Mon–Fri: 7:30am – 4pm</p>
                <p>Emergency call-out available</p>
                <p>Free quotes always</p>
              </div>
            </div>

            {/* Nearby areas */}
            <div className="bg-[#f8f9fa] rounded-xl p-5 border border-[#e9ecef]">
              <h3 className="font-display font-bold text-base text-[#2a4861] mb-3">
                Nearby Areas We Also Service
              </h3>
              <div className="flex flex-wrap gap-2">
                {nearbyTowns.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/locations/${t.slug}`}
                    className="bg-white border border-[#dee2e6] hover:border-[#2a4861] text-[#5d7b94] hover:text-[#2a4861] px-3 py-1 rounded text-xs font-medium transition-colors"
                  >
                    {t.name}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Services available in this town */}
      <section className="py-16 px-4 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-[#2a4861] mb-2">
            Electrical Services in {town.name}
          </h2>
          <p className="text-[#6c757d] mb-8">
            We provide our full range of electrical services to {town.name} and
            surrounding areas:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {featuredServices.map((service) => (
              <Link
                key={service!.slug}
                href={`/services/${service!.slug}`}
                className="bg-white rounded-lg p-5 border border-[#e9ecef] hover:border-[#2a4861] hover:shadow-md transition-all group"
              >
                <h3 className="font-display font-bold text-lg text-[#2a4861] mb-1 group-hover:text-[#5d7b94] transition-colors">
                  {service!.title}
                </h3>
                <p className="text-[#6c757d] text-xs leading-relaxed">
                  {service!.summary}
                </p>
              </Link>
            ))}
          </div>
          <Link
            href="/services"
            className="inline-block border-2 border-[#2a4861] text-[#2a4861] hover:bg-[#2a4861] hover:text-white px-6 py-3 rounded font-display font-bold tracking-wide transition-colors"
          >
            VIEW ALL SERVICES
          </Link>
        </div>
      </section>

      <CTASection
        heading={`Need an Electrician in ${town.name}?`}
        subtext={`Call us today for a free, no-obligation quote. We service ${town.name} and all surrounding areas in Central Victoria.`}
      />
    </>
  );
}
