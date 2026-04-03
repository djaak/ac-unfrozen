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
              Pretoria. We come to you &mdash; stay cool, drive comfortable.
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
              Comprehensive mobile car air conditioning solutions &mdash; we come to
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
              the Pretoria area &mdash; no need to drive to a workshop.
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
