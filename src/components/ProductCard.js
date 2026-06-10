'use client';

import Image from 'next/image';
import React from 'react';
import { FaLeaf, FaSeedling, FaUtensils, FaFireAlt, FaStar } from 'react-icons/fa';

export default function ProductCard() {
  const features = [
    {
      title: '30% Millet',
      desc: 'Wholesome grains for sustained energy.',
      icon: <FaSeedling className="text-green-600 text-2xl" />,
    },
    {
      title: 'Dark Chocolate',
      desc: 'Belgian dark chocolate for rich flavor.',
      icon: <FaFireAlt className="text-yellow-600 text-2xl" />,
    },
    {
      title: 'Jumbo Oats',
      desc: 'High fiber and slow-digesting carbs.',
      icon: <FaUtensils className="text-orange-500 text-2xl" />,
    },
    {
      title: 'Clean Label',
      desc: 'Low fat, no preservatives, gluten-free.',
      icon: <FaLeaf className="text-lime-600 text-2xl" />,
    },
  ];

  return (
    <section className="bg-[#FFFDF7] py-10">
      {/* Centered Heading */}
      <div className="text-center mb-8 px-4 flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2.5 border border-amber-500/20">
          <FaStar className="text-amber-500 animate-pulse" /> Best Seller
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Customer Favorite</h2>
        <div className="flex items-center justify-center gap-1.5 mt-2.5 text-xs md:text-sm text-gray-500">
          <div className="flex text-amber-500 gap-0.5">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <span className="font-semibold text-gray-700">4.9/5</span>
          <span>(240+ verified wholesale reviews)</span>
        </div>
      </div>

      {/* Main Card Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center px-4 md:px-8 lg:px-16">
        {/* Product Image */}
        <div className="flex justify-center">
          <Image
            src="/productmockups/MILLET MUESLI/Multi Millet Muesli - Dark Chocolate.png"
            alt="Mr. Flakes Dark Chocolate Millet Muesli"
            width={380}
            height={480}
            className="object-contain drop-shadow-xl rounded-2xl hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        {/* Product Info – All Corners Rounded */}
        <div className="bg-white rounded-2xl border border-[var(--border-warm)] shadow-sm p-8 w-full max-w-md mt-6 md:mt-0 md:ml-6">
          <p className="text-sm text-gray-500 mb-1">Wholesome. Functional. Delicious.</p>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Dark Chocolate Millet Muesli</h1>
          <ul className="text-gray-600 text-sm mb-5 space-y-1.5 list-disc pl-4">
            <li>Made with authentic Belgian dark chocolate</li>
            <li>Contains 30% wholesome millets & jumbo oats</li>
            <li>Crunchy almonds, black raisins, & clean seeds</li>
            <li>A guilt-free, low-fat treat that fuels your day</li>
          </ul>

          {/* Nutrition Highlights */}
          <div className="flex gap-4 mb-6">
            <div className="bg-[#F5EFE6] text-[#6A5F4E] px-3 py-1 rounded-full text-sm font-semibold">
              Fiber: 9.4g
            </div>
            <div className="bg-[#f0fdf4] text-[#15803d] px-3 py-1 rounded-full text-sm font-semibold">
              Protein: 10.7g
            </div>
          </div>

          {/* Buy Now CTA */}
          <button
            className="w-full bg-[var(--button-primary)] hover:bg-[var(--button-hover)] text-white px-6 py-3 rounded-full text-sm font-bold shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            onClick={() => {
              window.location.href = '/contact?subject=Wholesale Inquiry for Dark Chocolate Millet Muesli';
            }}
          >
            Enquire For Wholesale
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm text-gray-700 px-4 md:px-8 lg:px-16">
        {features.map(({ title, desc, icon }) => (
          <div key={title} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow">
              {icon}
            </div>
            <p className="font-semibold">{title}</p>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
