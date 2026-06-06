"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CONTACT } from "@/lib/data";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/locations", label: "Service Areas" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#2a4861] shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#1a2f3f] text-white text-sm py-2">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-4">
          <span className="hidden sm:block text-[#f5b840] font-semibold tracking-wide uppercase text-xs">
            A-Grade Licensed Electrician · REC Licence: 16298
          </span>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 hover:text-[#f5b840] transition-colors"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              <span className="font-medium">{CONTACT.phone1}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-center font-display font-black text-[#1a2f3f] text-lg">
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
            <div>
              <div className="text-white font-display font-bold text-lg leading-tight tracking-wide">
                CHUCK E ELECTRICAL
              </div>
              <div className="text-[#5d7b94] text-xs">
                Central Victoria's Trusted Electricians
              </div>
            </div>
          

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#c0d4e4] hover:text-white hover:bg-[#1a2f3f] px-3 py-2 rounded text-sm font-medium transition-all font-body tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/contact#contactform"
              className="ml-2 bg-[#f5b840] hover:bg-[#e8a020] text-[#1a2f3f] px-4 py-2 rounded font-display font-bold text-sm tracking-wide transition-colors"
            >
              GET A QUOTE
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-current mb-1" />
            <div className="w-5 h-0.5 bg-current mb-1" />
            <div className="w-5 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#1a2f3f] border-t border-[#2a4861]">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#c0d4e4] hover:text-white py-2.5 text-sm font-medium border-b border-[#2a4861] last:border-0"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/contact#contactNote"
              className="mt-2 bg-[#f5b840] text-[#1a2f3f] px-4 py-3 rounded font-display font-bold text-sm tracking-wide text-center"
            >
              GET A QUOTE
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
