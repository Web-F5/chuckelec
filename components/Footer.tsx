import Link from "next/link";
import { CONTACT, SERVICES, TOWNS } from "@/lib/data";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a2f3f] text-white">
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center font-display font-black text-[#1a2f3f]">
                 {/* Logo */}
                  <Link href="/" className="flex items-center gap-4 flex-shrink-0 py-3">
                    <Image
                      src="/images/logo-chuckelec2.webp"
                      alt="Chuck E Electrical Logo"
                      width={240}
                      height={120}
                      className="h-16 md:h-18 w-auto"
                      priority
                    />
                  </Link>
              </div>
              
            </div>
            <p className="text-[#7a99b0] text-sm leading-relaxed mb-4">
              A-grade licensed electricians serving Seymour and Central Victoria
              for over 30 years. Residential, commercial, industrial, and rural.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`}
                className="text-[#f5b840] hover:text-white transition-colors font-medium"
              >
                {CONTACT.phone1}
              </a>
            </div>
            <div className="mt-4 text-[#7a99b0] text-xs">
              <p>{CONTACT.hours.weekdays}</p>
              <p>{CONTACT.hours.weekends}</p>
              <p className="text-[#f5b840]">{CONTACT.hours.emergency}</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-sm tracking-widest uppercase text-[#f5b840] mb-4">
              Services
            </h3>
            <ul className="space-y-1.5">
              {SERVICES.slice(0, 9).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[#7a99b0] hover:text-white text-sm transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More services */}
          <div>
            <h3 className="font-display font-bold text-sm tracking-widest uppercase text-[#f5b840] mb-4">
              More Services
            </h3>
            <ul className="space-y-1.5">
              {SERVICES.slice(9).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[#7a99b0] hover:text-white text-sm transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-display font-bold text-sm tracking-widest uppercase text-[#f5b840] mb-4 mt-6">
              Pages
            </h3>
            <ul className="space-y-1.5">
              {[
                { href: "/gallery", label: "Gallery" },
                { href: "/faq", label: "FAQ" },
                { href: "/locations", label: "Service Areas" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[#7a99b0] hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Towns */}
          <div>
            <h3 className="font-display font-bold text-sm tracking-widest uppercase text-[#f5b840] mb-4">
              Service Areas
            </h3>
            <ul className="space-y-1.5">
              {TOWNS.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/locations/${t.slug}`}
                    className="text-[#7a99b0] hover:text-white text-sm transition-colors"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2a4861] pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#5d7b94]">
          <p>© 2025 Chuck E Electrical. All rights reserved.</p>
          <p>
            Web development and SEO by{" "}
            <a
              href="https://webf5.com.au"
              className="text-[#7a99b0] hover:text-white transition-colors"
            >
              Web F5
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
