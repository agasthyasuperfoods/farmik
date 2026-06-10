"use client";

import Image from "next/image";

export default function CertifiedMarquee() {
  const certs = [
    "/iso22000.png",
    "/haccp.png",
    "/fssai.png",
    "/gmp.png",
    "/fda.png",
    "/halal.png",
  ];

  return (
    <section className="py-12 px-4 bg-[#F9F8F4]">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#345A2B] bg-[#EBF7E3] px-4 py-1.5 rounded-full border border-[#DCEFD0] shadow-sm mb-3">
          Certifications
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] font-satoshi">We Are Certified</h2>
        <p className="text-gray-500 mt-2 text-sm">
          Globally recognized certifications ensuring quality, safety, and compliance.
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-14 items-center">
          {[...certs, ...certs].map((src, index) => (
            <div key={index} className="relative h-24 w-40 flex-shrink-0">
              <Image
                src={src}
                alt={`cert-${index}`}
                fill
                className="object-contain mix-blend-multiply pointer-events-none select-none"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
