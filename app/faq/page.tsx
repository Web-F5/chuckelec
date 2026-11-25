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
    a: "Yes. Every electrician carrying out electrical work in Victoria must hold a valid licence regulated by Energy Safe Victoria (ESV). Unlicensed electrical work is illegal and can result in heavy penalties for both the person carrying out the work and the property owner who engages them.",
  },
  {
    q: "What insurance should a licensed electrician carry?",
    a: "Licensed electrical contractors in Victoria are required to hold public liability insurance. Chuck E Electrical carries $5M+ public liability cover, giving you full protection against injury or property damage during any electrical work we carry out.",
  },
  {
    q: "What is a Certificate of Electrical Safety and do I need one?",
    a: "A Certificate of Electrical Safety (COES) is a legal document that certifies the electrical work meets Victoria's safety standards. Your electrician must issue one after completing any notifiable work. We issue a COES for all applicable work as standard — it's important for insurance and when selling a property.",
  },
  {
    q: "Can I do electrical work myself in Victoria?",
    a: "Only licensed electricians can legally carry out electrical installations, modifications, or repairs in Victoria. DIY electrical work is restricted for safety and legal reasons. Some minor tasks — like replacing a light globe or a powerboard — are permitted, but anything involving fixed wiring must be done by a licensed electrician.",
  },
  {
    q: "Are safety switches (RCDs) required in Victoria?",
    a: "Safety switches are mandatory on power circuits in all Victorian homes, and are strongly recommended on lighting circuits too. When we carry out any work that triggers the requirement, we install RCDs to bring your property into compliance. We also offer switchboard upgrades specifically to add safety switch protection to older homes.",
  },
  {
    q: "How often should I have my home's electrical system inspected?",
    a: "We recommend an inspection every 5–10 years for owner-occupied homes, or when buying a property. Rental properties have more specific obligations — landlords must ensure electrical safety at the start of each tenancy. We carry out pre-purchase and rental compliance inspections across Central Victoria.",
  },
  {
    q: "Do you provide free quotes?",
    a: "Yes. We provide a no-obligation free quote before starting any job. For straightforward work we can often quote over the phone; for larger projects we'll arrange a site visit first. Call us on 0413 091 102.",
  },
  {
    q: "What areas do you service?",
    a: "We're based in Seymour and cover a broad area of Central Victoria — including Euroa, Broadford, Kilmore, Nagambie, Wallan, Heathcote, Pyalong, Wandong, Tallarook, Puckapunyal, Locksley, Longwood, Avenel, Tooborac, and all surrounding towns. If you're unsure whether we cover your area, give us a call.",
  },
  {
    q: "What should I do in an electrical emergency?",
    a: "If it's safe to do so, turn off power at your main switchboard. Then call us on 0413 091 102 — we offer emergency call-out services. If the fault involves the power network (poles, wires, or the meter) rather than your internal wiring, contact AusNet on 13 17 99. Rental tenants should also notify their property manager.",
  },
  {
    q: "Do you install solar panels and battery storage?",
    a: "Yes. We install solar panel systems and battery storage for residential, commercial, and rural properties throughout Central Victoria. We handle the full installation — from panels and inverter through to switchboard connection and grid approval paperwork. Contact us for a free solar assessment.",
  },
  {
    q: "What size solar system do I need?",
    a: "The right system size depends on your household's daily energy usage, your roof's orientation and available area, and whether you want battery storage. As a rough guide, a typical Central Victorian home uses 15–20 kWh per day and suits a 6–10 kW system. We assess your specific situation and recommend accordingly.",
  },
  {
    q: "Do you work on rural and agricultural properties?",
    a: "Yes — rural and agricultural electrical work is a large part of what we do. We service pump controls, irrigation switching, three-phase machinery power, shed wiring, bore pump faults, and homestead upgrades across the farming districts of Central Victoria.",
  },
  {
    q: "Can you upgrade an older switchboard?",
    a: "Yes. Switchboard upgrades are one of our most common jobs. Older boards with ceramic fuses offer no protection against electric shock and are a fire risk. We upgrade to modern boards with circuit breakers and RCD protection, and can add circuits for air conditioning, solar, EV chargers, or workshops at the same time.",
  },
  {
    q: "Can you help reduce my power bills?",
    a: "Several upgrades can meaningfully reduce power bills: solar panel systems, LED lighting conversions, smart home controls that reduce standby consumption, and switchboard upgrades that allow time-of-use tariffs. We're happy to advise on what will give you the best return for your property type.",
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
