"use client";

import { motion } from "motion/react";

interface AnimatedDivProps {
  children: React.ReactNode;
  delay?: number;
}

export default function AnimatedDiv({ children, delay = 0 }: AnimatedDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
