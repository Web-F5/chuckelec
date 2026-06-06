import type { Metadata } from "next";
import BlogIframe from "@/components/BlogIframe";

export const metadata: Metadata = {
  title: "Electrical Blog | Tips & Advice from Central Victoria",
  description:
    "Electrical tips, safety advice, and industry news from the team at Chuck E Electrical — licensed electricians serving Central Victoria.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#2a4861] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#f5b840] font-display font-bold text-sm tracking-widest uppercase mb-3">
            News & Advice
          </p>
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-4">
            ELECTRICAL BLOG
          </h1>
          <p className="text-[#a0bfd4] text-lg max-w-2xl">
            Electrical tips, safety advice, and updates from the team at Chuck E Electrical.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <BlogIframe src="/blog/" />
      </section>
    </>
  );
}