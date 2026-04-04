import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { AnimatedHeroItem, ScrollIndicator } from "@/components/AnimatedHero";
import NavBar from "@/components/NavBar";

const services = [
  {
    icon: "build",
    title: "AC Repair",
    description:
      "Complete diagnostic and repair of faulty cooling systems. From refrigerant leaks to electrical faults, we fix it on-site at your location in Pretoria.",
  },
  {
    icon: "calendar_today",
    title: "Regular Maintenance",
    description:
      "Preventative system flushing and optimization to ensure longevity of your vehicle's thermal core and cabin filter performance.",
  },
  {
    icon: "search",
    title: "AC Inspection",
    description:
      "Thorough pressure and leak testing to identify issues before they become critical. Pre-purchase or pre-trip inspections available.",
  },
  {
    icon: "ev_station",
    title: "Refrigerant Recharge",
    description:
      "Precision weighing and injection of R134a or R1234yf refrigerants to OEM specifications. Typically completed in 30 to 60 minutes.",
  },
  {
    icon: "settings_input_component",
    title: "Compressor Repair",
    description:
      "Expert diagnostics, overhaul, or replacement of the AC compressor, clutch, bearing, and seals. Most jobs completed same-day.",
  },
  {
    icon: "air",
    title: "Heater Blower Repair",
    description:
      "Circuitry and motor diagnostics for internal ventilation and heater core functionality, including fan speed and resistor replacement.",
  },
];

const stats = [
  { number: "10+", label: "Years Excellence" },
  { number: "500+", label: "Cars Restored" },
  { number: "100%", label: "Satisfaction" },
  { number: "24hr", label: "Turnaround" },
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
    <main className="min-h-screen bg-background text-on-background">
      <div className="noise-overlay" aria-hidden="true" />

      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
        {/* Background image + gradient overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt=""
            aria-hidden="true"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dim via-surface-dim/90 to-surface-dim/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-surface-dim/20" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left w-full">
          <AnimatedHeroItem>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/20 border border-primary-container/30 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] font-label font-bold tracking-[0.1em] text-cyan-400 uppercase">
                Pretoria&apos;s Elite Mobile Service
              </span>
            </div>
          </AnimatedHeroItem>

          <AnimatedHeroItem delay={0.2}>
            <h1 className="text-5xl md:text-8xl font-headline font-bold leading-none tracking-tighter mb-6 text-white">
              AC{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary-container">
                UNFROZEN
              </span>
            </h1>
          </AnimatedHeroItem>

          <AnimatedHeroItem delay={0.4}>
            <p className="text-lg md:text-2xl text-on-surface font-body max-w-xl mb-10 leading-relaxed drop-shadow-lg">
              Professional mobile car AC repair &amp; regas in Pretoria.{" "}
              <span className="text-primary font-bold">We come to you.</span>{" "}
              Stay cool, drive comfortable.
            </p>
          </AnimatedHeroItem>

          <AnimatedHeroItem
            delay={0.6}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="tel:+27661514879"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl font-headline font-bold text-on-primary bg-gradient-to-br from-primary to-primary-container shadow-[0_0_40px_rgba(0,212,255,0.4)] transition-transform active:scale-95 hover:shadow-[0_0_60px_rgba(0,212,255,0.5)]"
            >
              <Phone className="w-5 h-5" />
              Call Now: 066 151 4879
            </a>
            <a
              href="https://wa.me/27661514879"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl font-headline font-bold text-tertiary glass-card border border-tertiary-container/40 transition-transform active:scale-95 hover:border-tertiary-container/70"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </AnimatedHeroItem>
        </div>

        <ScrollIndicator />
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-surface-container-low relative">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-white mb-4">
              Precision Services
            </h2>
            <div className="w-20 h-1 bg-primary-container" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="glass-card p-8 rounded-2xl group hover:bg-surface-container-high transition-colors h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary-container/10 flex items-center justify-center mb-6 border border-primary-container/20 group-hover:bg-primary-container/20 transition-all">
                    <span
                      className="material-symbols-outlined text-primary-container text-3xl"
                      aria-hidden="true"
                    >
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-headline font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.1} animation="fadeScale">
              <div className="text-center p-6 border-l border-white/5">
                <div className="text-4xl md:text-5xl font-headline font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-xs font-label uppercase tracking-widest text-slate-500">
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-surface">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-headline font-bold text-white mb-4 uppercase tracking-tighter">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 font-body">
              Everything you need to know about our mobile car AC service in Pretoria.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div
                  className={`glass-card p-6 rounded-xl ${
                    index === 0 ? "border-l-4 border-l-primary-container" : ""
                  }`}
                >
                  <h3 className="font-headline font-bold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-12 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-surface-container-high to-surface-container-lowest p-12 rounded-3xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 p-8 opacity-10" aria-hidden="true">
            <span className="material-symbols-outlined text-9xl text-primary">ac_unit</span>
          </div>
          <AnimatedSection className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div>
              <h2 className="text-4xl font-headline font-bold text-white mb-4">
                Restore Your Cabin Comfort Today
              </h2>
              <p className="text-slate-400 font-body max-w-lg">
                Don&apos;t suffer in the South African heat. Our mobile technicians are on standby
                anywhere within 50km of Pretoria.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0">
              <a
                href="tel:+27661514879"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl font-headline font-bold text-on-primary-container bg-primary-container transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
              >
                <Phone className="w-5 h-5" />
                Call 066 151 4879
              </a>
              <a
                href="https://wa.me/27661514879"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl font-headline font-bold text-tertiary bg-surface-variant/40 backdrop-blur border border-tertiary-container/20 hover:border-tertiary-container/50 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0e1322] w-full border-t border-white/5 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 py-16 max-w-7xl mx-auto">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-cyan-400" aria-hidden="true">ac_unit</span>
              <span className="text-lg font-bold text-slate-100 font-headline tracking-tighter">
                AC UNFROZEN
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Pretoria&apos;s trusted mobile air conditioning specialists. We combine automotive
              engineering with precision cooling to keep you comfortable.
            </p>
            <p className="text-slate-500 text-xs">
              411 Louis Trichardt Street, Wonderboom, Pretoria
            </p>
            <p className="text-cyan-400 text-xs uppercase tracking-widest">
              &copy; {new Date().getFullYear()} AC Unfrozen. All rights reserved.
            </p>
          </div>

          {/* Service links */}
          <div>
            <h4 className="text-white font-headline font-bold mb-6 uppercase text-sm tracking-widest">
              Service Protocol
            </h4>
            <ul className="grid grid-cols-2 gap-4">
              {services.map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="text-slate-500 text-sm uppercase tracking-widest hover:text-cyan-300 transition-all"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-headline font-bold mb-6 uppercase text-sm tracking-widest">
              Mission Control
            </h4>
            <div className="space-y-4 text-slate-500 text-sm">
              <p className="flex items-start gap-3">
                <span className="material-symbols-outlined text-cyan-400 text-sm mt-1" aria-hidden="true">location_on</span>
                411 Louis Trichardt Street, Wonderboom, Pretoria
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-cyan-400 text-sm" aria-hidden="true">phone</span>
                <a href="tel:+27661514879" className="hover:text-cyan-300 transition-colors">
                  066 151 4879
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-cyan-400 text-sm" aria-hidden="true">chat</span>
                <a
                  href="https://wa.me/27661514879"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  WhatsApp Us
                </a>
              </p>
              <p className="text-slate-600 text-xs pt-2">
                Serving Wonderboom, Pretoria North, Centurion, Midrand, Lyttelton, Montana,
                Sinoville &amp; all areas within 50km of Wonderboom, Pretoria.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
