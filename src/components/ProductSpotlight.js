"use client";

import React from "react";
import Image from "next/image";

export default function ProductSpotlight() {
  return (
    <section className="w-full py-24 bg-[#FBFBFA] px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase text-brand-gold font-bold mb-3 block">
            Featured Innovation
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-black tracking-tight mb-4">
            Product Spotlight
          </h2>
          <p className="text-neutral-500 font-sans text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Explore our curated grain highlights, crafted for delicious taste and optimal nutrition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Spotlight 1 */}
          <div className="relative group overflow-hidden rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.015)] border border-neutral-200/40 hover:shadow-[0_25px_50px_rgba(11,58,34,0.06)] transition-all duration-500 bg-[#F4F3EF] aspect-[4/3] md:aspect-square lg:aspect-[4/3]">
            <Image
              src="/Product spotlight img 1.png"
              alt="Quinoa Cereal Flakes Honey & Almond"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Overlay link button */}
            <div className="absolute inset-0 bg-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button 
                onClick={() => window.location.href = '/product'}
                className="bg-white text-brand-green px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-brand-green hover:text-white cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Spotlight 2 */}
          <div className="relative group overflow-hidden rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.015)] border border-neutral-200/40 hover:shadow-[0_25px_50px_rgba(11,58,34,0.06)] transition-all duration-500 bg-[#F4F3EF] aspect-[4/3] md:aspect-square lg:aspect-[4/3]">
            <Image
              src="/Product spotlight img 2.png"
              alt="Quinoa Fruit & Nut and Choco Flakes"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Overlay link button */}
            <div className="absolute inset-0 bg-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button 
                onClick={() => window.location.href = '/product'}
                className="bg-white text-brand-green px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-brand-green hover:text-white cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

