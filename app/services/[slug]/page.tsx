import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, CONTACT } from "@/lib/data";
import CTASection from "@/components/CTASection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      {/* Breadcrumb + Hero */}
      <section className="bg-[#2a4861] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-[#5d7b94] text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </nav>
          <p className="text-[#f5b840] font-display font-bold text-sm tracking-widest uppercase mb-3">
            {service.tagline}
          </p>
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-4 leading-none">
            {service.title.toUpperCase()}
          </h1>
          <p className="text-[#a0bfd4] text-xl max-w-2xl">{service.summary}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
              GET A FREE QUOTE
            </Link>
          </div>
        </div>
      </section>

      {/* Content + benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              {service.description.split("\n\n").map((para, i) => (
                <p key={i} className="text-[#3d5068] leading-relaxed mb-5">
                  {para}
                </p>
              ))}
            </div>

            {/* Local schema */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Service",
                  name: service.title,
                  description: service.metaDescription,
                  provider: {
                    "@type": "ElectricalContractor",
                    name: "Chuck E Electrical",
                    telephone: CONTACT.phone1,
                    areaServed: "Central Victoria, Australia",
                  },
                  areaServed: {
                    "@type": "State",
                    name: "Victoria",
                    addressCountry: "AU",
                  },
                }),
              }}
            />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Benefits */}
            <div className="bg-[#f8f9fa] rounded-xl p-6 border border-[#e9ecef]">
              <h2 className="font-display font-bold text-xl text-[#2a4861] mb-4">
                What's Included
              </h2>
              <ul className="space-y-3">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
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
                    <span className="text-[#3d5068] text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact card */}
            <div className="bg-[#2a4861] rounded-xl p-6 text-white">
              <h3 className="font-display font-bold text-xl mb-3">
                Get a Free Quote
              </h3>
              <p className="text-[#a0bfd4] text-sm mb-4">
                No obligation. We'll discuss your project and provide an honest,
                detailed quote.
              </p>
              <a
                href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`}
                className="block w-full bg-[#f5b840] hover:bg-[#e8a020] text-[#1a2f3f] py-3 rounded font-display font-bold text-center transition-colors mb-2"
              >
                {CONTACT.phone1}
              </a>
              <Link
                href="/contact"
                className="block w-full text-center text-[#a0bfd4] hover:text-white text-sm transition-colors underline underline-offset-2"
              >
                Or send us a message →
              </Link>
              <div className="mt-4 pt-4 border-t border-[#3a5871] text-[#7a99b0] text-xs space-y-1">
                <p>Mon–Fri: 7:30am – 4pm</p>
                <p>Emergency call-out available</p>
              </div>
            </div>

            {/* Trust signals */}
            <div className="bg-white rounded-xl p-6 border border-[#e9ecef]">
              <h3 className="font-display font-bold text-lg text-[#2a4861] mb-4">
                Our Credentials
              </h3>
              <ul className="space-y-2 text-sm text-[#3d5068]">
                {[
                  "A-Grade Licensed Electrician",
                  "REC Accredited",
                  "30+ Years Experience",
                  "Certificate of Electrical Safety Issued",
                  "$5M+ Public Liability Insurance",
                  "All Work to Australian Standards",
                ].map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <span className="text-[#f5b840]">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 px-4 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-[#2a4861] mb-8">
            Other Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-white rounded-lg p-4 border border-[#e9ecef] hover:border-[#2a4861] hover:shadow-md transition-all group"
              >
                <h3 className="font-display font-bold text-base text-[#2a4861] mb-1 group-hover:text-[#5d7b94] transition-colors">
                  {s.title}
                </h3>
                <p className="text-[#6c757d] text-xs leading-relaxed">
                  {s.tagline}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/services"
              className="text-[#2a4861] hover:text-[#f5b840] font-semibold text-sm transition-colors"
            >
              ← View all services
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
