import Link from "next/link";
import { CONTACT } from "@/lib/data";

interface CTASectionProps {
  heading?: string;
  subtext?: string;
}

export default function CTASection({
  heading = "Ready to Get Started?",
  subtext = "Contact us today for a free quote and consultation on your project.",
}: CTASectionProps) {
  return (
    <section className="bg-[#2a4861] text-white py-16 px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #f5b840 0,
            #f5b840 1px,
            transparent 0,
            transparent 50%
          )`,
          backgroundSize: "20px 20px",
        }}
      />
      <div className="max-w-3xl mx-auto text-center relative">
        <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-balance">
          {heading}
        </h2>
        <p className="text-[#a0bfd4] text-lg mb-8">{subtext}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`}
            className="bg-[#f5b840] hover:bg-[#e8a020] text-[#1a2f3f] px-8 py-4 rounded font-display font-bold text-xl tracking-wide transition-colors inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            {CONTACT.phone1}
          </a>
          <Link
            href="/contact#contactform"
            className="border-2 border-[#f5b840] hover:bg-[#f5b840] hover:text-[#1a2f3f] text-[#f5b840] px-8 py-4 rounded font-display font-bold text-xl tracking-wide transition-colors inline-flex items-center justify-center"
          >
            GET A QUOTE
          </Link>
        </div>
        <p className="text-[#5d7b94] text-sm mt-6">
          Emergency call-out service available · No job too big or too small
        </p>
      </div>
    </section>
  );
}
