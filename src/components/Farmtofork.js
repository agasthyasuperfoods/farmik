"use client";

import React from "react";
import Image from "next/image";
import { Sprout, Factory, Package, ShoppingCart } from "lucide-react";

export default function Farmtofork() {
  const steps = [
    {
      icon: <Sprout size={16} className="text-[#345A2B]" />,
      title: "Step 1 – Grown at the Farm",
      desc: "It all starts at organic fields where ancient grains and superfoods are grown sustainably without synthetic chemicals or GMOs.",
    },
    {
      icon: <Factory size={16} className="text-[#345A2B]" />,
      title: "Step 2 – Processed at Our Facility",
      desc: "The harvest is brought to our ISO- and HACCP-certified facility for gentle cleaning, roasting, and minimal processing that locks in nutrition.",
    },
    {
      icon: <Package size={16} className="text-[#345A2B]" />,
      title: "Step 3 – Packed & Stored Securely",
      desc: "Finished goods are sealed in moisture-resistant packaging and stored in temperature-controlled warehouses for peak freshness.",
    },
    {
      icon: <ShoppingCart size={16} className="text-[#345A2B]" />,
      title: "Step 4 – Delivered to Fork",
      desc: "Farmik products reach customers through retail shelves, health stores, and online platforms — ready for everyday nourishment.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-[var(--main-bg)]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Image */}
        <div className="relative w-full h-[460px] rounded-2xl overflow-hidden">
          <Image
            src="/farmtofork.webp"
            alt="Farmik Global Facility"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Right: Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#345A2B] bg-[#EBF7E3] px-3.5 py-1.5 rounded-full border border-[#DCEFD0] w-fit shadow-sm">
            <Sprout size={12} /> Farm to Fork Process
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] font-satoshi leading-tight">
            From farm to your plate
          </h2>

          <p className="text-sm sm:text-base text-gray-600 font-satoshi leading-relaxed">
            Every Farmik product travels a trusted path — from farm to your fork — preserving purity, nutrition, and sustainability at each step.
          </p>

          <div className="grid grid-cols-1 gap-4 pt-2">
            {steps.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 bg-white border border-[#DCEFD0] border-l-4 border-l-[#345A2B] px-5 py-4 rounded-r-2xl rounded-l-md shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-[1px]"
              >
                <div className="w-9 h-9 rounded-xl bg-[#EBF7E3] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm sm:text-base font-satoshi mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-satoshi leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
