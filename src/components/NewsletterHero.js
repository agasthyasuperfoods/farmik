'use client';

import Image from 'next/image';
import { Leaf } from 'lucide-react';

export default function NewsletterHero() {
  return (
    <section className="w-full bg-[#345A2B] py-12 md:py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left: Branding Content */}
        <div className="space-y-5 text-white">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#345A2B] bg-[#EBF7E3] px-4 py-1.5 rounded-full border border-[#DCEFD0] shadow-sm">
            <Leaf size={12} /> Health Community
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight font-satoshi">
            Farmik Wellness.{' '}
            <span className="italic font-serif font-normal text-amber-200">Fresh updates,</span>{' '}
            zero hassle.
          </h2>
          <p className="text-green-100/85 text-base leading-relaxed max-w-lg">
            Join our superfoods community and be the first to know about new flavors, exclusive offers, and nutrition tips curated by experts.
          </p>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
            <input
              type="email"
              placeholder="Enter your email..."
              className="bg-white/15 border border-white/25 placeholder-green-200/60 text-white px-5 py-3 rounded-full w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm transition-all"
            />
            <button className="bg-white text-[#345A2B] hover:bg-[#EBF7E3] px-6 py-3 rounded-full font-bold text-sm transition-all duration-250 cursor-pointer shadow-md hover:shadow-lg whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
          <p className="text-xs text-green-200/70">
            🎁 Sign up & unlock healthy savings, seasonal picks, and inside stories from Farmik.
          </p>
        </div>

        {/* Right: Mobile UI Image */}
        <div className="relative w-full flex justify-center">
          <Image
            src="/phone.webp"
            alt="Farmik Newsletter Preview"
            width={200}
            height={460}
          />
          <div className="absolute top-4 left-4 backdrop-blur-md bg-white/20 text-white px-4 py-2 rounded-xl text-sm shadow-lg border border-white/30">
            ⚠️ Hot picks! <br />
            <span className="text-xs text-green-100">Stock running out fast</span>
          </div>
          <div className="absolute bottom-4 right-4 backdrop-blur-md bg-white/20 text-white px-4 py-2 rounded-xl text-sm shadow-lg border border-white/30">
            🛒 In High Demand! <br />
            <span className="text-xs text-green-100">Flying off the shelves.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
