"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";

export default function LatestLaunch() {
  const launches = [
    {
      name: "Date Treats - Chocolate",
      img: "/Date treats chocolate.png",
      flavor: "Chocolate",
      desc: "Indulgent Belgian cocoa blended with premium natural dates for a rich, guilt-free bite.",
      benefits: ["100% Natural Dates", "Rich Belgian Cocoa", "No Added Sugar"],
    },
    {
      name: "Date Treats - Orange Cocoa",
      img: "/Date treats orange cocoa.png",
      flavor: "Orange Cocoa",
      desc: "A refreshing twist of zesty orange meets deep cocoa, bound together by sweet dates.",
      benefits: ["Zesty Orange Zest", "Premium Dark Cocoa", "Rich in Fiber"],
    },
  ];

  return (
    <section className="w-full bg-[var(--main-bg)] py-10 md:py-14 px-4 md:px-8 lg:px-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-xs text-[var(--button-primary)] bg-green-50 px-3.5 py-1.5 rounded-full font-semibold uppercase tracking-wider shadow-sm border border-green-150">
            Brand New Release
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mt-4 font-satoshi">
            Introducing Farmik Date Treats
          </h2>
          <p className="text-base md:text-lg text-[var(--text-primary)] opacity-75 mt-3 max-w-2xl mx-auto font-satoshi">
            Bite-sized energy powered by premium dates, rich cocoa, and zero compromises. The ultimate natural fuel for your active lifestyle.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {launches.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white flex flex-col sm:flex-row items-center p-6 md:p-8 gap-6 hover:shadow-2xl transition-all duration-500`}
            >
              {/* Product Image */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 shrink-0 bg-transparent rounded-2xl overflow-hidden flex items-center justify-center p-4">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-between h-full space-y-4">
                <div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2 bg-[#EBF7E3] text-[#345A2B] border border-[#DCEFD0]">
                    {item.flavor}
                  </span>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] font-satoshi">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[var(--text-primary)] opacity-80 mt-2 font-satoshi">
                    {item.desc}
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-1.5">
                  {item.benefits.map((benefit, bIndex) => (
                    <div key={bIndex} className="flex items-center gap-2 text-xs text-[var(--text-primary)] font-medium">
                      <Leaf size={13} className="text-[#345A2B] shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>


              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
