import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car AC Repair Pretoria | AC Unfrozen \u2014 Mobile Regas & Service",
  description:
    "Professional mobile car AC repair and regas in Pretoria. We come to you within 50km of Wonderboom. Call or WhatsApp 066 151 4879 for same-day service.",
  keywords:
    "car AC repair Pretoria, car air conditioning Pretoria, AC regas Pretoria, mobile AC repair, car AC service Wonderboom, refrigerant recharge",
  authors: [{ name: "AC Unfrozen" }],
  alternates: {
    canonical: "https://ac-unfrozen.vercel.app",
  },
  other: {
    "geo.region": "ZA-GP",
    "geo.placename": "Pretoria",
  },
  openGraph: {
    title: "Car AC Repair Pretoria | AC Unfrozen \u2014 Mobile Regas & Service",
    description:
      "Professional mobile car AC repair and regas in Pretoria. We come to you. Call or WhatsApp 066 151 4879.",
    url: "https://ac-unfrozen.vercel.app",
    siteName: "AC Unfrozen",
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car AC Repair Pretoria | AC Unfrozen",
    description:
      "Mobile car AC repair and regas in Pretoria. We come to you within 50km.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "AC Unfrozen",
  description:
    "Professional mobile car air conditioning repair, regas, and servicing in Pretoria and surrounding areas",
  url: "https://ac-unfrozen.vercel.app",
  telephone: "+27661514879",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -25.7226,
      longitude: 28.1947,
    },
    geoRadius: "50000",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "411 Louis Trichardt Street",
    addressLocality: "Wonderboom",
    addressRegion: "Gauteng",
    postalCode: "0182",
    addressCountry: "ZA",
  },
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Car AC Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Regas / Refrigerant Recharge" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Compressor Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Inspection" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Regular Maintenance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Heater Blower Repair" } },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does car AC regas cost in Pretoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Car AC regas in Pretoria typically costs between R500 and R1,200 depending on the refrigerant type (R134a or R1234yf) and whether there are any leaks that need repair first.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a car AC regas take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard AC regas takes 30 to 60 minutes. If we find a leak or compressor issue during the inspection, we will let you know before doing any additional work.",
      },
    },
    {
      "@type": "Question",
      name: "Do you come to me or do I need to bring my car?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AC Unfrozen is a fully mobile service. We come to your home, office, or any convenient location within 50km of Pretoria. No need to drive anywhere.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if my car AC needs regassing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common signs include warm air blowing from vents, weak airflow, unusual noises when AC is on, or a musty smell. If your AC gradually lost cooling over months, it likely needs a regas.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We service Pretoria, Wonderboom, Pretoria North, Centurion, Midrand, Lyttelton, Montana, Sinoville, and all areas within a 50km radius of Wonderboom, Pretoria.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
