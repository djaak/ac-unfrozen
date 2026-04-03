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
