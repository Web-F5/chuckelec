import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Chuck E Electrical | Licensed Electricians Central Victoria",
    template: "%s | Chuck E Electrical",
  },
  description:
    "Chuck E Electrical — licensed electricians serving Seymour and Central Victoria for over 30 years. Residential, commercial, industrial, and rural electrical services. Call 0413 091 102.",
  metadataBase: new URL("https://chuckelec.com.au"),
  openGraph: {
    siteName: "Chuck E Electrical",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Source+Sans+3:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ElectricalContractor",
              name: "Chuck E Electrical",
              url: "https://chuckelec.com.au",
              telephone: ["0413091102", "0427500966"],
              email: "info@chuckelec.com.au",
              description:
                "Licensed electricians serving Central Victoria for over 30 years. Residential, commercial, industrial and rural electrical services.",
              areaServed: [
                "Seymour",
                "Euroa",
                "Nagambie",
                "Broadford",
                "Kilmore",
                "Wallan",
                "Heathcote",
              ],
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
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
