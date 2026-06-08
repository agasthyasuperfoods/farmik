"use client";
 
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Shield, Leaf, Heart } from "lucide-react";
 
export default function HeroShowcase() {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [isDeckHovered, setIsDeckHovered] = useState(false);

  const products = [
    {
      name: "Berry Blast Muesli",
      tag: "Breakfast",
      src: "/mockups/Multi Millet Muesli - Berry Blast.png",
      category: "Muesli"
    },
    {
      name: "Almond Choco Bar",
      tag: "Energy",
      src: "/mockups/Almond Choco Energy Bar.png",
      category: "Bars"
    },
    {
      name: "Quinoa Choco Flakes",
      tag: "Cereals",
      src: "/mockups/Quinoa Choco Flakes.png",
      category: "Cereals"
    },
    {
      name: "Cheese Cheddar Makhana",
      tag: "Snacks",
      src: "/mockups/Makhana- Cheese Cheddar.png",
      category: "Snacks"
    },
    {
      name: "Apple Cinnamon Porridge",
      tag: "Wellness",
      src: "/mockups/Millet Porridge- Apple & Cinnamon.png",
      category: "Porridge"
    },
  ];
 
  return (
    <section className="w-full bg-[var(--main-bg)] lg:h-[calc(100vh-76px)] lg:min-h-[620px] pt-24 md:pt-28 lg:pt-12 pb-6 lg:pb-0 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 max-w-7xl mx-auto">
      
      {/* Left Column: Copy & Actions */}
      <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
        {/* Organic Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#345A2B] bg-[#EBF7E3] px-4 py-1.5 rounded-full shadow-sm border border-[#DCEFD0]"
        >
          <Leaf size={14} className="text-[#345A2B]" />
          Nourish Your Life, Naturally
        </motion.div>
 
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] leading-tight font-satoshi"
        >
          Elevating Wellness <br className="hidden sm:inline" />
          With <span className="text-[#345A2B] italic font-serif font-normal">Smart Nutrition</span>
        </motion.h1>
 
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg text-[var(--text-primary)] opacity-85 leading-relaxed font-satoshi"
        >
          Explore Farmik’s curated range of healthy cereals, snacks, and wellness blends — crafted from ancient grains, powered by modern nutrition, and certified for purity.
        </motion.p>
 
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <button
            className="bg-[#345A2B] hover:bg-[#25421F] text-white px-8 py-4 rounded-full text-sm font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            onClick={() => {
              window.location.href = "/product";
            }}
          >
            Explore Products
          </button>
          <button
            className="bg-transparent hover:bg-neutral-100 text-[#345A2B] px-8 py-4 font-bold rounded-full border-2 border-[#345A2B] transition-all duration-300 text-sm cursor-pointer"
            onClick={() => {
              window.location.href = "/contact";
            }}
          >
            Contact Team
          </button>
        </motion.div>
 
        {/* Trust Markers */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-6 grid grid-cols-3 gap-3 md:gap-4 border-t border-[var(--border-warm)]"
        >
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-xs border border-[var(--border-warm)] px-3 py-2.5 rounded-2xl shadow-xs hover:shadow-sm transition-all duration-300">
            <Shield size={16} className="text-[#345A2B] shrink-0" />
            <span className="text-[10px] md:text-xs font-bold text-gray-800 leading-tight">100% Certified Safe</span>
          </div>
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-xs border border-[var(--border-warm)] px-3 py-2.5 rounded-2xl shadow-xs hover:shadow-sm transition-all duration-300">
            <Star size={16} className="text-amber-500 fill-amber-500 shrink-0" />
            <span className="text-[10px] md:text-xs font-bold text-gray-800 leading-tight">4.9/5 Rating Score</span>
          </div>
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-xs border border-[var(--border-warm)] px-3 py-2.5 rounded-2xl shadow-xs hover:shadow-sm transition-all duration-300">
            <Heart size={16} className="text-red-500 fill-red-500 shrink-0" />
            <span className="text-[10px] md:text-xs font-bold text-gray-800 leading-tight">Loved by Families</span>
          </div>
        </motion.div>
      </div>
 
      {/* Right Column: Staggered Premium Card Deck */}
      <div className="flex-1 w-full flex items-center justify-center relative min-h-[440px] max-w-lg mx-auto">
        {/* Soft Background Radial Gradient */}
        <div className="absolute w-72 h-72 bg-gradient-to-tr from-[#E4DCCF]/45 to-transparent rounded-full blur-3xl -z-10" />
 
        {/* Cards Stack with hover dispersion */}
        <motion.div 
          onMouseEnter={() => setIsDeckHovered(true)}
          onMouseLeave={() => {
            setIsDeckHovered(false);
            setHoveredCardIndex(null);
          }}
          className="relative flex items-center justify-center w-full h-full"
          style={{ overflow: 'visible' }}
        >
          {products.map((product, index) => {
            const isHovered = hoveredCardIndex === index;
            const isAnyHovered = hoveredCardIndex !== null;
            
            const offsetFromCenter = index - 2; // -2, -1, 0, 1, 2
            
            let x = 0;
            let y = 0;
            let rotate = 0;
            let scale = 1;
            let zIndex = 10;
            let opacity = 1;
            
            if (isDeckHovered) {
              // Fanned coordinates
              x = offsetFromCenter * 105;
              y = Math.abs(offsetFromCenter) * 15;
              rotate = offsetFromCenter * 12;
              scale = 1.05;
              
              if (isAnyHovered) {
                if (isHovered) {
                  // Focused card floats up, expands, resets rotation
                  y = -55;
                  rotate = 0;
                  scale = 1.15;
                  zIndex = 100;
                  opacity = 1;
                } else {
                  // Other cards dim and push away from the hovered card
                  opacity = 0.45;
                  scale = 0.95;
                  if (index < hoveredCardIndex) {
                    x -= 40;
                  } else {
                    x += 40;
                  }
                }
              }
            } else {
              // Neatly overlapped stacked state with subtle offset
              x = offsetFromCenter * 15;
              y = Math.abs(offsetFromCenter) * 4;
              rotate = offsetFromCenter * 4;
              scale = 1 - Math.abs(offsetFromCenter) * 0.02;
              zIndex = 50 - Math.abs(offsetFromCenter) * 10;
            }
            
            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}
                animate={{
                  x: x,
                  y: isDeckHovered ? y : [y - 4, y + 4, y - 4],
                  rotate: rotate,
                  scale: scale,
                  opacity: opacity
                }}
                transition={{
                  y: isDeckHovered 
                    ? { type: "spring", stiffness: 180, damping: 20, mass: 0.8 }
                    : { repeat: Infinity, repeatType: "mirror", duration: 3.5 + index * 0.4, ease: "easeInOut" },
                  default: { type: "spring", stiffness: 180, damping: 20, mass: 0.8 }
                }}
                style={{ 
                  transformOrigin: "bottom center",
                  zIndex: zIndex
                }}
                className="absolute w-48 h-64 sm:w-56 sm:h-76 bg-white/95 backdrop-blur-md rounded-3xl border border-neutral-200/50 p-5 flex flex-col justify-between shadow-lg hover:border-[#345A2B]/35 hover:shadow-[0_20px_50px_rgba(52,90,43,0.12)] cursor-pointer transition-all duration-300"
                onClick={() => {
                  window.location.href = `/product?category=${product.category}`;
                }}
              >
                {/* Product Label / Tag */}
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-extrabold">
                    {product.tag}
                  </span>
                  <Star size={12} className="text-amber-500 fill-amber-500" />
                </div>
 
                {/* Product Mockup */}
                <div className="relative w-full h-36 sm:h-44 my-2 flex items-center justify-center">
                  <Image
                    src={product.src}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 33vw, 20vw"
                    unoptimized
                    className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
 
                {/* Title & Micro CTA */}
                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-800 font-satoshi truncate pr-2">
                    {product.name}
                  </span>
                  <span className="text-[10px] font-bold text-[#345A2B] hover:text-[#25421F] shrink-0">
                    View →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
 
    </section>
  );
}
