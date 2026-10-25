import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Electrical Contractor FAQ Victoria",
  description:
    "Frequently asked questions about hiring a licensed electrical contractor in Victoria. Licensing, insurance, certificates, safety switches and more. Chuck E Electrical.",
};

const FAQ_ITEMS = [
  {
    q: "Are electricians in Victoria required to be licensed?",
    a: "Yes, every Electrical Contractor Victoria must hold a valid licence regulated by Energy Safe Victoria. Unlicensed electrical work is illegal and can result in heavy penalties for both clients and contractors.",
  },
  {
    q: "What insurance should an Electrical Contractor Victoria carry?",
    a: "A qualified Electrical Contractor Victoria is required to maintain at least $5 million in public liability insurance to safeguard against injury or damage during electrical services. Chuck E Electrical carries full public liability insurance for your peace of mind.",
  },
  {
    q: "Do I receive a Certificate of Electrical Safety from my Electrical Contractor Victoria?",
    a: "Yes, your Electrical Contractor Victoria must issue a Certificate of Electrical Safety (COES) after finishing work, which certifies that your electrical installation meets Victoria's safety standards. We issue a COES for all applicable work.",
  },
  {
    q: "Can I do any electrical work myself or should I hire an Electrical Contractor Victoria?",
    a: "Only a licensed Electrical Contractor Victoria should perform electrical installations, modifications, or repairs. DIY electrical work is restricted in Victoria for safety and legal reasons. Always use a licensed electrician.",
  },
  {
    q: "Are safety switches required by an Electrical Contractor Victoria?",
    a: "Safety switches (RCDs) are mandatory on power circuits and recommended for lighting circuits. Your Electrical Contractor Victoria will know the latest regulations and ensure correct installation.",
  },
  {
    q: "How often should I arrange electrical safety inspections?",
    a: "Routine inspections are advised every few years or when you buy a property. Rental homes must meet regular safety checks, which an Electrical Contractor Victoria can conduct to ensure compliance.",
  },
  {
    q: "How do I choose a reliable Electrical Contractor Victoria?",
    a: "Always check their licence, insurance, ask for references, a detailed quote, and confirm their experience with your specific type of project. Checking their REC (Registered Electrical Contractor) number with Energy Safe Victoria is also recommended.",
  },
  {
    q: "Do you provide free quotes?",
    a: "Yes — most reputable Electrical Contractor Victoria services will provide a no-obligation, free quote before starting work. We always provide a free quote and consultation before commencing any job.",
  },
  {
    q: "What is a Master Electrician in Victoria?",
    a: "A Master Electrician in Victoria offers accredited safety, quality, service, and provides a 12-month workmanship guarantee. Electrical Contractor Victoria companies often have Master Electricians on staff.",
  },
  {
    q: "Do you cover Melbourne and regional areas?",
    a: "We're based in Seymour and primarily serve Central Victoria — including Euroa, Broadford, Kilmore, Nagambie, Wallan, Heathcote, and all surrounding towns. Always confirm we service your area before booking.",
  },
  {
    q: "What should I do in an electrical emergency?",
    a: "Immediately disable power at your main switchboard and contact an Electrical Contractor Victoria for emergency assistance. Rental tenants should also notify their property manager or landlord. We offer emergency call-out services.",
  },
  {
    q: "Can you help with energy-saving solutions?",
    a: "Yes, your Electrical Contractor Victoria can recommend and install energy-saving solutions such as LED lighting, upgraded switchboards, and smart controls for your property.",
  },
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-[#2a4861] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#f5b840] font-display font-bold text-sm tracking-widest uppercase mb-3">
            Common Questions
          </p>
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-4">
            ELECTRICAL CONTRACTOR FAQ
            <br />
            <span className="text-3xl md:text-4xl text-[#a0bfd4] font-semibold">
              For Victoria, Australia
            </span>
          </h1>
          <p className="text-[#a0bfd4] text-lg max-w-2xl">
            Everything you need to know about hiring a licensed electrical
            contractor in Victoria.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <details
                key={i}
                className="group bg-[#f8f9fa] border border-[#e9ecef] rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-[#e9ecef] transition-colors">
                  <h2 className="font-display font-bold text-lg text-[#2a4861] pr-4">
                    {item.q}
                  </h2>
                  <span className="text-[#2a4861] flex-shrink-0 group-open:rotate-180 transition-transform">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-[#3d5068] leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 bg-[#f8f9fa] rounded-xl p-8 border border-[#e9ecef] text-center">
            <h3 className="font-display font-bold text-2xl text-[#2a4861] mb-3">
              Still Have Questions?
            </h3>
            <p className="text-[#6c757d] mb-6">
              Give us a call or send a message — we're happy to answer any
              questions about your electrical project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:0413091102"
                className="bg-[#2a4861] hover:bg-[#1a2f3f] text-white px-6 py-3 rounded font-display font-bold tracking-wide transition-colors"
              >
                CALL 0413 091 102
              </a>
              <Link
                href="/contact"
                className="border-2 border-[#2a4861] text-[#2a4861] hover:bg-[#2a4861] hover:text-white px-6 py-3 rounded font-display font-bold tracking-wide transition-colors"
              >
                SEND A MESSAGE
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
