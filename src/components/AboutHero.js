"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--main-bg)] pt-20 md:pt-24 pb-8 flex flex-col items-center">
      {/* Main Banner Showcase - Full Width (edge-to-edge) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full aspect-[21/9] md:aspect-[2.8/1] relative bg-[#E4DCCF] overflow-hidden"
      >
        <Image
          src="/abthro.png"
          alt="Premium Superfoods Backed by Science & Tradition"
          fill
          priority
          unoptimized
          className="object-cover hover:scale-[1.01] transition-transform duration-700 ease-out"
        />
      </motion.div>

      {/* Heading Text Section - Below the Banner */}
      <div className="max-w-7xl w-full text-center mt-12 md:mt-16 px-4 md:px-8 lg:px-16">
        {/* Subtle Tag/Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block text-xs font-semibold uppercase tracking-wider text-[var(--button-primary)] bg-green-50 px-4 py-1.5 rounded-full mb-4 shadow-sm border border-green-100"
        >
          Our Philosophy
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] leading-tight font-satoshi max-w-4xl mx-auto"
        >
          Nourishing Lives with <span className="text-[var(--button-primary)]">Science & Tradition</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-base md:text-lg text-[var(--text-primary)] opacity-85 mt-4 max-w-2xl mx-auto font-satoshi"
        >
          We bridge the gap between ancient dietary wisdom and modern nutritional science, bringing you premium quality superfoods.
        </motion.p>
      </div>
    </section>
  );
}
