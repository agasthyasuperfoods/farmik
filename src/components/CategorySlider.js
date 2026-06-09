'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CategorySlider() {
  const router = useRouter();

  const categories = [
    {
      label: "Millet",
      category: "Muesli",
      image: "/cateogories/MILLET.png",
    },
    {
      label: "Milk Mixes",
      category: "Milk Mixes",
      image: "/cateogories/MILK MIXES.png",
    },
    {
      label: "Quinoa",
      category: "Cereals",
      image: "/cateogories/QUINOA.png",
    },
    {
      label: "Snacks",
      category: "Snacks",
      image: "/cateogories/SNACKS.png",
    },
    {
      label: "Bars",
      category: "Bars",
      image: "/cateogories/BARS.png",
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-[var(--main-bg)] px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--text-primary)] font-satoshi">
        Our Collection
      </h2>
      <p className="text-center text-[var(--text-primary)] opacity-75 text-lg mt-1 font-semibold font-satoshi">
        you&apos;ll want them all!
      </p>

      <div className="mt-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => router.push(`/product?category=${encodeURIComponent(cat.category)}`)}
            className="group relative rounded-2xl overflow-hidden border border-[var(--border-warm)] cursor-pointer bg-white interactive-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative w-full aspect-[4/5]">
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
