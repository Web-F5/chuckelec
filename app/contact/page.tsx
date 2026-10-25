import type { Metadata } from "next";
import { CONTACT } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Licensed Electricians Central Victoria",
  description:
    "Contact Chuck E Electrical for a free quote. Licensed electricians serving Seymour and Central Victoria. Call 0413 091 102.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#2a4861] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#f5b840] font-display font-bold text-sm tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-4">
            CONTACT YOUR
            <br />
            LICENCED ELECTRICIAN
          </h1>
          <p className="text-[#a0bfd4] text-lg max-w-2xl">
            When you need reliable, high-quality electrical work, trust the
            experts at Chuck E Electrical. Contact us today for a free quote and
            consultation on your project.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact details */}
          <div>
            <h2 className="font-display font-bold text-3xl text-[#2a4861] mb-6">
              Contact Us
            </h2>
            <p className="text-[#3d5068] leading-relaxed mb-8">
              With over 30 years of combined industry experience as an A-grade
              licenced electrician, we deliver precision and excellence in every
              project. From data & communication to heavy-duty industrial
              electrical contracting, we cover all aspects of domestic and rural
              electrical design, installation, repairs, and maintenance. No job
              is too big or small.
            </p>

            <div className="space-y-5 mb-10">
              <a
                href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`}
                className="flex items-center gap-4 p-4 bg-[#f8f9fa] rounded-xl border border-[#e9ecef] hover:border-[#2a4861] transition-colors group"
              >
                <div className="w-10 h-10 bg-[#2a4861] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  ><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#6c757d] mb-0.5">
                    Primary number
                  </p>
                  <p className="font-display font-bold text-xl text-[#2a4861] group-hover:text-[#5d7b94] transition-colors">
                    {CONTACT.phone1}
                  </p>
                </div>
              </a>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#f8f9fa] rounded-xl border border-[#e9ecef] hover:border-[#2a4861] transition-colors group"
              >
                <div className="w-10 h-10 bg-[#1877F2] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#6c757d] mb-0.5">Facebook</p>
                  <p className="font-semibold text-[#2a4861] group-hover:text-[#5d7b94] transition-colors">
                    Chuck E Electrical
                  </p>
                </div>
              </a>
            </div>

            {/* Hours */}
            <div  id="contactNote" className="bg-[#2a4861] rounded-xl p-6 text-white scroll-mt-100">
              <h3 className="font-display font-bold text-xl mb-4">
                Hours of Operation
              </h3>
              <div className="space-y-3">
                {[
                  { day: "Monday – Friday", hours: "7:30am – 4pm" },
                  { day: "Saturday", hours: "By appointment" },
                  { day: "Sunday", hours: "By appointment" },
                  { day: "Emergency", hours: "Call-out available", highlight: true },
                ].map((row) => (
                  <div
                    key={row.day}
                    className="flex justify-between items-center py-2 border-b border-[#3a5871] last:border-0"
                  >
                    <span className="text-[#a0bfd4] text-sm">{row.day}</span>
                    <span
                      className={`font-display font-bold ${
                        row.highlight ? "text-[#f5b840]" : "text-white"
                      }`}
                    >
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div id="contactform" className="scroll-mt-48">
            <h2 className="font-display font-bold text-3xl text-[#2a4861] mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
