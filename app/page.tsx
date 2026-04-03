"use client";

import { motion } from "framer-motion";
import { Phone, Clock, Wrench, CheckCircle, ChevronRight } from "lucide-react";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
              🚗 Pretoria&apos;s Trusted Car AC Specialists
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            AC <span className="text-cyan-400">Unfrozen</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto"
          >
            Professional car air conditioning repair & maintenance in Pretoria. 
            Stay cool, drive comfortable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:+27824519555"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Now: 082 451 9555
            </a>
            <button
              onClick={() => scrollToSection("services")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-700/50 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-600 transition-all hover:border-cyan-500"
            >
              Our Services
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
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
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-cyan-400">Services</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Comprehensive car air conditioning solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: "AC Repair",
                description: "Complete diagnosis and repair of all AC system issues. From refrigerant leaks to compressor problems.",
              },
              {
                icon: Clock,
                title: "Regular Maintenance",
                description: "Keep your AC running efficiently with scheduled maintenance, filter replacements, and system checks.",
              },
              {
                icon: CheckCircle,
                title: "AC Inspection",
                description: "Thorough inspection before road trips or sales. We check refrigerant levels, belts, and components.",
              },
              {
                icon: Wrench,
                title: "Refrigerant Recharge",
                description: "Professional refrigerant (R134a/R1234yf) recharge to restore cooling performance.",
              },
              {
                icon: Wrench,
                title: "Compressor Repair",
                description: "Expert compressor diagnostics and repair or replacement services.",
              },
              {
                icon: CheckCircle,
                title: "Heater Blower Repair",
                description: "Fix heater and blower issues for year-round comfort in your vehicle.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all hover:transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-cyan-400">Us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "500+", label: "Cars Serviced" },
              { number: "100%", label: "Satisfaction" },
              { number: "24hr", label: "Quick Turnaround" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Stay Cool?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Book your appointment today and experience the difference of a properly working car AC.
            </p>
            <a
              href="tel:+27824519555"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-lg rounded-lg transition-all hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              Call 082 451 9555
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white">
                AC <span className="text-cyan-400">Unfrozen</span>
              </h3>
              <p className="text-slate-400 mt-2">Pretoria&apos;s trusted car AC specialists</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <a href="tel:+27824519555" className="text-cyan-400 hover:text-cyan-300 font-medium">
                📞 082 451 9555
              </a>
              <p className="text-slate-500 text-sm">Serving Pretoria & surrounding areas</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} AC Unfrozen. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}