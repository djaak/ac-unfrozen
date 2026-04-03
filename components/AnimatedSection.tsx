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
