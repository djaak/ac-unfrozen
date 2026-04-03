# Phase 1: SEO/GEO Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor the AC Unfrozen landing page from a client-only component to a server-rendered page with structured data, technical SEO, FAQ section, updated contact info, and WhatsApp CTAs.

**Architecture:** The page becomes a Next.js Server Component with all text content rendered as static HTML. Interactive behavior (framer-motion animations, smooth scrolling) is extracted into thin `"use client"` child components that wrap server-rendered content via `children` props.

**Tech Stack:** Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, Framer Motion, Vitest + React Testing Library

---

### Task 1: Create client animation wrapper components

**Files:**
- Create: `components/AnimatedSection.tsx`
- Create: `components/AnimatedHero.tsx`
- Create: `components/SmoothScrollButton.tsx`

- [ ] **Step 1: Create `components/AnimatedSection.tsx`**

This is a thin client wrapper that adds framer-motion `whileInView` animation to any server-rendered children.

```tsx
// components/AnimatedSection.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fadeUp" | "fadeScale";
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  animation = "fadeUp",
}: AnimatedSectionProps) {
  const variants = {
    fadeUp: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
    },
    fadeScale: {
      initial: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      initial={variants[animation].initial}
      whileInView={variants[animation].whileInView}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Create `components/AnimatedHero.tsx`**

Handles hero entry animations (fade-in staggered) and the scroll indicator bounce.

```tsx
// components/AnimatedHero.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedHeroItemProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedHeroItem({ children, className, delay = 0 }: AnimatedHeroItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center pt-2"
      >
        <div className="w-1 h-3 bg-slate-500 rounded-full" />
      </motion.div>
    </motion.div>
  );
}
```

- [ ] **Step 3: Create `components/SmoothScrollButton.tsx`**

Client component for the "Our Services" button that uses `scrollIntoView`.

```tsx
// components/SmoothScrollButton.tsx
"use client";

import { ChevronRight } from "lucide-react";

interface SmoothScrollButtonProps {
  targetId: string;
  className?: string;
}

export default function SmoothScrollButton({ targetId, className }: SmoothScrollButtonProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      Our Services
      <ChevronRight className="w-5 h-5" />
    </button>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add components/
git commit -m "feat: add client animation wrapper components"
```

---

### Task 2: Create sitemap.ts and robots.ts

**Files:**
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`

- [ ] **Step 1: Create `app/sitemap.ts`**

```ts
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ac-unfrozen.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

- [ ] **Step 2: Create `app/robots.ts`**

```ts
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://ac-unfrozen.vercel.app/sitemap.xml',
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add app/sitemap.ts app/robots.ts
git commit -m "feat: add sitemap.xml and robots.txt generation"
```

---

### Task 3: Update layout.tsx with enhanced metadata and JSON-LD

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Rewrite `app/layout.tsx`**

Replace the entire file with enhanced metadata, JSON-LD injection, and updated contact info.

```tsx
// app/layout.tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: enhanced metadata, JSON-LD structured data (AutoRepair + FAQPage)"
```

---

### Task 4: Rewrite page.tsx as Server Component

**Files:**
- Modify: `app/page.tsx`

This is the largest task. The page is rewritten to remove `"use client"`, use the client wrapper components for animations, update phone numbers, add WhatsApp CTAs, add the FAQ section, and enhance the footer.

- [ ] **Step 1: Rewrite `app/page.tsx`**

Replace the entire file:

```tsx
// app/page.tsx
import { Phone, Clock, Wrench, CheckCircle, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { AnimatedHeroItem, ScrollIndicator } from "@/components/AnimatedHero";
import SmoothScrollButton from "@/components/SmoothScrollButton";

const services = [
  {
    icon: Wrench,
    title: "AC Repair",
    description:
      "Complete diagnosis and repair of all car AC system issues. From refrigerant leaks to electrical faults, we fix it on-site at your location in Pretoria.",
  },
  {
    icon: Clock,
    title: "Regular Maintenance",
    description:
      "Keep your AC running efficiently with scheduled maintenance, cabin filter replacements, and full system performance checks.",
  },
  {
    icon: CheckCircle,
    title: "AC Inspection",
    description:
      "Thorough pre-purchase or pre-trip AC inspection. We check refrigerant levels, compressor health, belts, and all components.",
  },
  {
    icon: Wrench,
    title: "Refrigerant Recharge",
    description:
      "Professional refrigerant recharge with R134a or R1234yf to restore full cooling performance. Typically completed in 30 to 60 minutes.",
  },
  {
    icon: Wrench,
    title: "Compressor Repair",
    description:
      "Expert compressor diagnostics, repair, or replacement. We carry common parts so most jobs are done same-day.",
  },
  {
    icon: CheckCircle,
    title: "Heater Blower Repair",
    description:
      "Fix heater and blower motor issues for year-round cabin comfort. Includes fan speed diagnosis and resistor replacement.",
  },
];

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "500+", label: "Cars Serviced" },
  { number: "100%", label: "Satisfaction" },
  { number: "24hr", label: "Quick Turnaround" },
];

const faqs = [
  {
    question: "How much does car AC regas cost in Pretoria?",
    answer:
      "Car AC regas in Pretoria typically costs between R500 and R1,200 depending on the refrigerant type (R134a or R1234yf) and whether there are any leaks that need repair first.",
  },
  {
    question: "How long does a car AC regas take?",
    answer:
      "A standard AC regas takes 30 to 60 minutes. If we find a leak or compressor issue during the inspection, we will let you know before doing any additional work.",
  },
  {
    question: "Do you come to me or do I need to bring my car?",
    answer:
      "AC Unfrozen is a fully mobile service. We come to your home, office, or any convenient location within 50km of Pretoria. No need to drive anywhere.",
  },
  {
    question: "How do I know if my car AC needs regassing?",
    answer:
      "Common signs include warm air blowing from vents, weak airflow, unusual noises when AC is on, or a musty smell. If your AC gradually lost cooling over months, it likely needs a regas.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We service Pretoria, Wonderboom, Pretoria North, Centurion, Midrand, Lyttelton, Montana, Sinoville, and all areas within a 50km radius of Wonderboom, Pretoria.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedHeroItem>
            <span className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
              Pretoria&apos;s Trusted Mobile Car AC Specialists
            </span>
          </AnimatedHeroItem>

          <AnimatedHeroItem delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AC <span className="text-cyan-400">Unfrozen</span>
            </h1>
          </AnimatedHeroItem>

          <AnimatedHeroItem delay={0.4}>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Professional mobile car air conditioning repair &amp; regas in
              Pretoria. We come to you — stay cool, drive comfortable.
            </p>
          </AnimatedHeroItem>

          <AnimatedHeroItem delay={0.6} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+27661514879"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Now: 066 151 4879
            </a>
            <a
              href="https://wa.me/27661514879"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <SmoothScrollButton
              targetId="services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-700/50 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-600 transition-all hover:border-cyan-500"
            />
          </AnimatedHeroItem>
        </div>

        <ScrollIndicator />
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-cyan-400">Services</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Comprehensive mobile car air conditioning solutions — we come to
              your home or office anywhere in the Pretoria area
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all hover:transform hover:-translate-y-1 h-full">
                  <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-400">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-cyan-400">Us</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                delay={index * 0.1}
                animation="fadeScale"
              >
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-300">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked <span className="text-cyan-400">Questions</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Everything you need to know about our mobile car AC service in
              Pretoria
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Stay Cool?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Book your appointment today. We come to your location anywhere in
              the Pretoria area — no need to drive to a workshop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27661514879"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-lg rounded-lg transition-all hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                Call 066 151 4879
              </a>
              <a
                href="https://wa.me/27661514879"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-green-600 hover:bg-green-500 text-white font-bold text-lg rounded-lg transition-all hover:scale-105"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white">
                AC <span className="text-cyan-400">Unfrozen</span>
              </h3>
              <p className="text-slate-400 mt-2">
                Pretoria&apos;s trusted mobile car AC specialists
              </p>
              <p className="text-slate-500 text-sm mt-4">
                411 Louis Trichardt Street, Wonderboom, Pretoria
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+27661514879"
                  className="text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  <Phone className="w-4 h-4 inline mr-2" />
                  066 151 4879
                </a>
                <a
                  href="https://wa.me/27661514879"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium"
                >
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Service Area</h4>
              <p className="text-slate-400 text-sm">
                Serving Wonderboom, Pretoria North, Centurion, Midrand,
                Lyttelton, Montana, Sinoville &amp; all areas within 50km of
                Wonderboom, Pretoria.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} AC Unfrozen. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/page.tsx
git commit -m "feat: rewrite page as Server Component with FAQ, WhatsApp CTAs, updated phone"
```

---

### Task 5: Update tests for new page structure

**Files:**
- Modify: `app/__tests__/page.test.tsx`

The tests need to mock the client components (since they use framer-motion), update phone number assertions, and add tests for new content (FAQ, WhatsApp, address, service area).

- [ ] **Step 1: Rewrite `app/__tests__/page.test.tsx`**

Replace the entire file:

```tsx
// app/__tests__/page.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Home from "../page";

// Mock client components that use framer-motion
vi.mock("@/components/AnimatedSection", () => ({
  default: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
  ),
}));

vi.mock("@/components/AnimatedHero", () => ({
  AnimatedHeroItem: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
  ),
  ScrollIndicator: () => <div data-testid="scroll-indicator" />,
}));

vi.mock("@/components/SmoothScrollButton", () => ({
  default: ({ className }: { className?: string }) => (
    <button className={className}>Our Services</button>
  ),
}));

describe("Home page", () => {
  it("renders the brand name", () => {
    render(<Home />);
    expect(screen.getAllByText(/AC Unfrozen/i).length).toBeGreaterThan(0);
  });

  it("renders the hero tagline", () => {
    render(<Home />);
    expect(
      screen.getByText(/Professional mobile car air conditioning repair/i)
    ).toBeInTheDocument();
  });

  it("renders call links with the correct phone number (066 151 4879)", () => {
    render(<Home />);
    const phoneLinks = screen.getAllByRole("link", { name: /066 151 4879/i });
    expect(phoneLinks.length).toBeGreaterThan(0);
    phoneLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "tel:+27661514879");
    });
  });

  it("renders WhatsApp links", () => {
    render(<Home />);
    const waLinks = screen.getAllByRole("link", { name: /WhatsApp/i });
    expect(waLinks.length).toBeGreaterThan(0);
    waLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "https://wa.me/27661514879");
    });
  });

  it("renders the Services section heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /Our Services/i })
    ).toBeInTheDocument();
  });

  it("renders all 6 service cards", () => {
    render(<Home />);
    const expectedServices = [
      "AC Repair",
      "Regular Maintenance",
      "AC Inspection",
      "Refrigerant Recharge",
      "Compressor Repair",
      "Heater Blower Repair",
    ];
    expectedServices.forEach((service) => {
      expect(
        screen.getByRole("heading", { name: service })
      ).toBeInTheDocument();
    });
  });

  it("renders the Why Choose Us stats", () => {
    render(<Home />);
    expect(screen.getByText("10+")).toBeInTheDocument();
    expect(screen.getByText("500+")).toBeInTheDocument();
    expect(screen.getByText("100%")).toBeInTheDocument();
    expect(screen.getByText("24hr")).toBeInTheDocument();
  });

  it("renders the FAQ section with all 5 questions", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /Frequently Asked Questions/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/How much does car AC regas cost in Pretoria/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/How long does a car AC regas take/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Do you come to me or do I need to bring my car/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/How do I know if my car AC needs regassing/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/What areas do you service/i)
    ).toBeInTheDocument();
  });

  it("renders the footer with address and service area", () => {
    render(<Home />);
    expect(
      screen.getByText(/411 Louis Trichardt Street, Wonderboom, Pretoria/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Serving Wonderboom, Pretoria North, Centurion/i)
    ).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run tests to verify they pass**

```bash
cd "D:/Other AI projects/projects/ac-unfrozen" && npm test
```

Expected: all 10 tests pass.

- [ ] **Step 3: Commit**

```bash
git add app/__tests__/page.test.tsx
git commit -m "test: update tests for server component structure, FAQ, WhatsApp, new phone"
```

---

### Task 6: Run full pipeline locally and push

**Files:** None (verification only)

- [ ] **Step 1: Run lint**

```bash
cd "D:/Other AI projects/projects/ac-unfrozen" && npm run lint
```

Expected: `No ESLint warnings or errors`

- [ ] **Step 2: Run typecheck**

```bash
cd "D:/Other AI projects/projects/ac-unfrozen" && npm run typecheck
```

Expected: no errors

- [ ] **Step 3: Run tests**

```bash
cd "D:/Other AI projects/projects/ac-unfrozen" && npm test
```

Expected: 10 tests pass

- [ ] **Step 4: Run build**

```bash
cd "D:/Other AI projects/projects/ac-unfrozen" && npm run build
```

Expected: build succeeds, page pre-rendered as static content

- [ ] **Step 5: Push to main and verify CI/CD pipeline passes**

```bash
cd "D:/Other AI projects/projects/ac-unfrozen" && git push origin main
```

Watch pipeline with: `gh run watch --repo djaak/ac-unfrozen`

Expected: all 4 stages pass (Lint & Type Check → Unit Tests → Build → Deploy to Vercel)

- [ ] **Step 6: Verify deployed site**

Visit `https://ac-unfrozen.vercel.app` and confirm:
- Page loads with all content visible
- View page source shows all text content in HTML (not hidden behind JS)
- Phone links use `+27661514879`
- WhatsApp buttons link to `wa.me/27661514879`
- FAQ section visible between Why Choose Us and CTA
- Footer shows address and service area
- `/sitemap.xml` returns valid XML
- `/robots.txt` returns valid robots file
