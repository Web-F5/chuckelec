"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xlgzgwlq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-white rounded-2xl p-12 border border-[#e9ecef] text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-display font-bold text-2xl text-[#2a4861] mb-2">
          Message Received!
        </h3>
        <p className="text-[#6c757d]">
          Thanks for getting in touch. We'll be back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 border border-[#e9ecef] shadow-sm"
    >
      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-[#2a4861] mb-1.5"
          >
            Your Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-[#ced4da] rounded-lg px-4 py-3 text-[#343a40] focus:outline-none focus:border-[#2a4861] focus:ring-2 focus:ring-[#2a4861]/10 transition"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-[#2a4861] mb-1.5"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full border border-[#ced4da] rounded-lg px-4 py-3 text-[#343a40] focus:outline-none focus:border-[#2a4861] focus:ring-2 focus:ring-[#2a4861]/10 transition"
            placeholder="04XX XXX XXX"
          />
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-[#2a4861] mb-1.5"
        >
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-[#ced4da] rounded-lg px-4 py-3 text-[#343a40] focus:outline-none focus:border-[#2a4861] focus:ring-2 focus:ring-[#2a4861]/10 transition"
          placeholder="john@example.com"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="service"
          className="block text-sm font-semibold text-[#2a4861] mb-1.5"
        >
          Service Required
        </label>
        <select
          id="service"
          name="service"
          className="w-full border border-[#ced4da] rounded-lg px-4 py-3 text-[#343a40] focus:outline-none focus:border-[#2a4861] focus:ring-2 focus:ring-[#2a4861]/10 transition bg-white"
        >
          <option value="">Select a service...</option>
          <option>New Electrical Installation</option>
          <option>Electrical Troubleshooting / Fault Detection</option>
          <option>Lighting Installation</option>
          <option>Switchboard Installation / Upgrade</option>
          <option>LED Upgrade</option>
          <option>Emergency Lighting</option>
          <option>Home Automation</option>
          <option>Generator Connection / Maintenance</option>
          <option>Data / Communication Cabling</option>
          <option>Underground Cabling</option>
          <option>Fire Detection</option>
          <option>Preventative Maintenance</option>
          <option>Other</option>
        </select>
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-[#2a4861] mb-1.5"
        >
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-[#ced4da] rounded-lg px-4 py-3 text-[#343a40] focus:outline-none focus:border-[#2a4861] focus:ring-2 focus:ring-[#2a4861]/10 transition resize-none"
          placeholder="Tell us about your project or electrical issue..."
        />
      </div>
      {status === "error" && (
        <p className="text-red-600 text-sm mb-4">
          Something went wrong. Please try again or call us directly.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[#2a4861] hover:bg-[#1a2f3f] disabled:opacity-60 text-white py-4 rounded-lg font-display font-bold text-xl tracking-wide transition-colors"
      >
        {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
      </button>
      <p className="text-[#6c757d] text-xs text-center mt-3">
        We respond within one business day · Free quotes always
      </p>
    </form>
  );
}
