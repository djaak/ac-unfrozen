# Phase 1: SEO/GEO Optimization — Design Spec

**Date:** 2026-04-04
**Status:** Approved
**Scope:** SEO/GEO fixes + server component refactor. No visual redesign (that comes separately).

---

## Business Context

AC Unfrozen is a **mobile** car AC repair service based at 411 Louis Trichardt Street, Wonderboom, Pretoria. It serves a 50km radius covering Pretoria, Centurion, Midrand, and surrounding areas.

- **Phone / WhatsApp:** 066 151 4879 (replaces old 082 451 9555)
- **WhatsApp link:** https://wa.me/27661514879
- **Service type:** Mobile (technician goes to customer)
- **No fixed workshop** customers visit

### Phased Roadmap

| Phase | Scope |
|-------|-------|
| **1 (this spec)** | SEO/GEO optimization + server component refactor |
| 2 | Parts catalog (browse, prices, inquiry via WhatsApp/call) |
| 3 | Full e-commerce checkout (cart, payment, order tracking) |

---

## 1. Architecture: Server/Client Component Split

**Problem:** The entire `page.tsx` is `"use client"`. All content depends on client-side JavaScript to render. Crawlers that don't execute JS (Bing, AI engines, social previews) see a blank page.

**Solution:** Make the page a Server Component. Extract only interactive behavior into thin client wrappers.

### Component Structure

```
app/
  layout.tsx              — Server. Metadata, fonts, JSON-LD injection.
  page.tsx                — Server. All page content and sections.
  sitemap.ts              — Auto-generates /sitemap.xml
  robots.ts               — Auto-generates /robots.txt
components/
  AnimatedSection.tsx     — Client. Framer-motion whileInView wrapper.
  AnimatedHero.tsx        — Client. Hero entry animations + scroll indicator.
  SmoothScrollButton.tsx  — Client. "Our Services" scroll-to button.
  WhatsAppButton.tsx      — Client. WhatsApp CTA (can be a simple <a> tag, but grouped here for consistency).
```

### Rules

- `page.tsx` contains ALL text content, headings, service descriptions, FAQ answers, footer text
- Client components receive content as `children` or props — they add animation behavior only
- If JavaScript fails to load, all content is still visible as static HTML

---

## 2. Structured Data (JSON-LD)

Two JSON-LD blocks injected via `<script type="application/ld+json">` in `layout.tsx`.

### 2a. AutoRepair + ServiceArea

```json
{
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "AC Unfrozen",
  "description": "Professional mobile car air conditioning repair, regas, and servicing in Pretoria and surrounding areas",
  "url": "https://ac-unfrozen.vercel.app",
  "telephone": "+27661514879",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -25.7226,
      "longitude": 28.1947
    },
    "geoRadius": "50000"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "411 Louis Trichardt Street",
    "addressLocality": "Wonderboom",
    "addressRegion": "Gauteng",
    "postalCode": "0182",
    "addressCountry": "ZA"
  },
  "sameAs": [],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Car AC Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Repair" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Regas / Refrigerant Recharge" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Compressor Repair" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Inspection" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Regular Maintenance" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heater Blower Repair" } }
    ]
  }
}
```

**Note:** `sameAs` is empty until Google Business Profile and social pages are set up. Opening hours omitted — mobile service, appointment-based.

### 2b. FAQPage

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does car AC regas cost in Pretoria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Car AC regas in Pretoria typically costs between R500 and R1,200 depending on the refrigerant type (R134a or R1234yf) and whether there are any leaks that need repair first."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a car AC regas take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard AC regas takes 30 to 60 minutes. If we find a leak or compressor issue during the inspection, we will let you know before doing any additional work."
      }
    },
    {
      "@type": "Question",
      "name": "Do you come to me or do I need to bring my car?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AC Unfrozen is a fully mobile service. We come to your home, office, or any convenient location within 50km of Pretoria. No need to drive anywhere."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if my car AC needs regassing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common signs include warm air blowing from vents, weak airflow, unusual noises when AC is on, or a musty smell. If your AC gradually lost cooling over months, it likely needs a regas."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We service Pretoria, Wonderboom, Pretoria North, Centurion, Midrand, Lyttelton, Montana, Sinoville, and all areas within a 50km radius of Wonderboom, Pretoria."
      }
    }
  ]
}
```

---

## 3. Technical SEO Additions

### 3a. sitemap.ts

```typescript
// app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: 'https://ac-unfrozen.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ]
}
```

### 3b. robots.ts

```typescript
// app/robots.ts
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://ac-unfrozen.vercel.app/sitemap.xml',
  }
}
```

### 3c. Enhanced Metadata (layout.tsx)

Update the existing metadata export to include:

- Canonical URL via `alternates.canonical`
- `geo.region` = `ZA-GP`, `geo.placename` = `Pretoria`
- OG image (placeholder 1200x630 — to be replaced with real image later)
- Twitter card metadata
- Updated phone number in description
- Updated title for better keyword targeting: `"Car AC Repair Pretoria | AC Unfrozen — Mobile Regas & Service"`

---

## 4. Content Changes

### 4a. New FAQ Section

Added between "Why Choose Us" and the CTA section. Displays the 5 questions from the FAQPage schema as an accordion or simple list with Q/A format. Content matches the JSON-LD exactly (important for GEO — consistency between visible content and structured data).

### 4b. Updated Phone Number

All instances of `082 451 9555` / `+27824519555` replaced with `066 151 4879` / `+27661514879`.

### 4c. WhatsApp CTA

A WhatsApp button added alongside the Call button in:
- Hero section
- CTA section
- Footer

Links to `https://wa.me/27661514879`.

### 4d. Footer Enhancements

- Physical base address: 411 Louis Trichardt Street, Wonderboom, Pretoria
- Service area text: "Serving Wonderboom, Pretoria North, Centurion, Midrand & surrounding areas within 50km"
- WhatsApp link added

### 4e. GEO-Optimized Content Tweaks

Service descriptions rewritten to include:
- Specific, quotable statements with details (refrigerant types, timeframes)
- Location references where natural
- Authority signals (experience, mobile convenience)

---

## 5. Page Section Order

```
Hero (brand + CTA)
Services (6 cards)
Why Choose Us (4 stats)
FAQ (5 questions) ← NEW
CTA (call + WhatsApp)
Footer (address + service area + contacts)
```

---

## 6. Files Changed

| File | Action |
|------|--------|
| `app/page.tsx` | Rewrite as Server Component. New FAQ section. Updated phone. WhatsApp CTAs. |
| `app/layout.tsx` | Enhanced metadata. JSON-LD injection. |
| `app/sitemap.ts` | New file |
| `app/robots.ts` | New file |
| `components/AnimatedSection.tsx` | New file — client wrapper for whileInView |
| `components/AnimatedHero.tsx` | New file — client wrapper for hero animations |
| `components/SmoothScrollButton.tsx` | New file — client scroll button |
| `app/__tests__/page.test.tsx` | Updated tests for new structure + FAQ section |

---

## 7. Out of Scope (Phase 1)

- Visual redesign (separate effort)
- Parts catalog / e-commerce (Phase 2/3)
- Google Business Profile setup (requires manual browser verification)
- Real OG image (placeholder for now)
- Custom domain (stays on vercel.app for now)
