"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

// Updated categories to match your new dedicated mockups
const categoriesData = {
  All: [],
  Muesli: ["Millet Muesli", "Quinoa Muesli"],
  Cereals: ["Millet Cereal Flakes", "Quinoa Flakes"],
  Bars: ["Energy Bars", "Protein Bars", "Millet Bars"],
  "Milk Mixes": ["Milk Mixes"],
  Snacks: ["Quinoa Balls", "Porridges", "Wavy Chips", "Makhana"],
};

const categories = Object.keys(categoriesData);

const productsData = [
  // MILLET MUESLI
  {
    id: 1,
    name: "Multi Millet Muesli - Berry Blast",
    category: "Muesli",
    subCategory: "Millet Muesli",
    desc: "A crunchy burst of premium berries, multi-millets, and wholesome grains.",
    image: "/productmockups/MILLET MUESLI/Multi Millet Muesli - Berry Blast.png",
    amazonLink: "https://www.amazon.in/dp/B0FP5742N7",
  },
  {
    id: 2,
    name: "Multi Millet Muesli - Nutty Crunchy",
    category: "Muesli",
    subCategory: "Millet Muesli",
    desc: "Packed with crunchy nuts, seeds, and toasted multi-millet flakes.",
    image: "/productmockups/MILLET MUESLI/Multi Millet Muesli - Nutty Crunchy.png",
    amazonLink: "https://www.amazon.in/dp/B0GNMBLBRN",
  },
  {
    id: 3,
    name: "Multi Millet Muesli - Dark Chocolate",
    category: "Muesli",
    subCategory: "Millet Muesli",
    desc: "Indulgent Belgian dark chocolate blended with 30% millets and jumbo oats.",
    image: "/productmockups/MILLET MUESLI/Multi Millet Muesli - Dark Chocolate.png",
    amazonLink: "https://www.amazon.in/dp/B0GNMNJPY2",
  },

  // QUINOA MUESLI & FLAKES
  {
    id: 4,
    name: "Quinoa Muesli Fruit & Nut",
    category: "Muesli",
    subCategory: "Quinoa Muesli",
    desc: "Premium quinoa flakes mixed with luscious fruits, honey, and crunchy nuts.",
    image: "/productmockups/QUINOA/Quinoa Muesli Fruit & Nut.png",
    amazonLink: "https://www.amazon.in/dp/B0FP51Q6TT",
  },
  {
    id: 5,
    name: "Quinoa Choco Flakes",
    category: "Cereals",
    subCategory: "Quinoa Flakes",
    desc: "Nutritious chocolatey quinoa flakes for a delicious, healthy morning.",
    image: "/productmockups/QUINOA/Quinoa Choco Flakes.png",
    amazonLink: "https://www.amazon.in/dp/B0FP2HCC9C",
  },
  {
    id: 6,
    name: "Quinoa CF Honey & Almond",
    category: "Cereals",
    subCategory: "Quinoa Flakes",
    desc: "Quinoa cereal flakes sweetened with natural honey and loaded with almond slices.",
    image: "/productmockups/QUINOA/Quinoa CF- Honey & Almond.png",
    amazonLink: "https://www.amazon.in/dp/B0FP1SY88K",
  },

  // BARS
  {
    id: 7,
    name: "Almond Choco Energy Bar",
    category: "Bars",
    subCategory: "Energy Bars",
    desc: "Rich almond and chocolate energy bar for quick sustained energy.",
    image: "/productmockups/BARS/Energy Bars/Almond Choco Energy Bar.png",
    amazonLink: "",
  },
  {
    id: 8,
    name: "Cranberry Choco Energy Bar",
    category: "Bars",
    subCategory: "Energy Bars",
    desc: "Tart cranberries and dark chocolate crisps for an active lifestyle.",
    image: "/productmockups/BARS/Energy Bars/Cranberry Choco Energy Bar.png",
    amazonLink: "",
  },
  {
    id: 9,
    name: "Meal Replacement Bar",
    category: "Bars",
    subCategory: "Protein Bars",
    desc: "Wholesome, high-protein meal replacement bar with super grains and seeds.",
    image: "/productmockups/BARS/Protein Bars/Meal Replacement Bar.png",
    amazonLink: "",
  },
  {
    id: 10,
    name: "Millet Bar - Peanut",
    category: "Bars",
    subCategory: "Millet Bars",
    desc: "Savory and sweet peanut-millet bar, perfect for post-workout snacking.",
    image: "/productmockups/BARS/Millet Bars/Millet Bar - Peanut.png",
    amazonLink: "https://www.amazon.in/Farmik-Millet-Bar-Protein-Rich-Go/dp/B0GD17D7DM/ref=sr_1_4?crid=154EUHSZNFNNF&dib=eyJ2IjoiMSJ9.h__G_qTPVVvOjNQPYU5NPpxLjMp6aY5ZxYXyr3IRbQ6U0MMzO640NlpV1zG4FAAhotjfJixRzyJHbDgAQmpndfyIGhzreEPXan9SIlBFryGijficTFSRTGNd3tCxcpXTZJwlC9y6E5_0hl3hqt-_1LG7OOZSoTfRuVBaMaZkOecItBPc9Bz7YnWq4d0uFM4eCPqcxbVL_W7ubS5dW5ZPcI-_DYDp4xklWp-Pbi6ofaVercjD5QOxfjM5PWqYtOtOKP0XKR0Z7neC2ezhhnbDXUjoMcEsZZ8oqqDktLzDpEs.Vm7kcIlIveuYqAjvg8T1oMwytF8QJIw5jE-g4qtYVkg&dib_tag=se&keywords=millet+bar+peanut+farmik&nsdOptOutParam=true&qid=1781515552&s=grocery&sprefix=millet+bar+peanut+farmik%2Cgrocery%2C225&sr=1-4",
  },
  {
    id: 11,
    name: "Millet Bar - Fruit & Berries",
    category: "Bars",
    subCategory: "Millet Bars",
    desc: "Enriched with natural berries, dates, and puffed millets.",
    image: "/productmockups/BARS/Millet Bars/Millet Bar - Fruit & Berries.png",
    amazonLink: "https://www.amazon.in/dp/B0GD1293W2",
  },
  {
    id: 12,
    name: "Millet Bar - Seeds & Nuts",
    category: "Bars",
    subCategory: "Millet Bars",
    desc: "Nutrient-dense bar loaded with pumpkin seeds, sunflower seeds, and almonds.",
    image: "/productmockups/BARS/Millet Bars/Millet Bar - Seeds & Nuts.png",
    amazonLink: "https://www.amazon.in/dp/B0GD16XQSC",
  },

  // MILLET CEREAL FLAKES
  {
    id: 13,
    name: "Sorghum Millet Cereal Flakes",
    category: "Cereals",
    subCategory: "Millet Cereal Flakes",
    desc: "Crispy, wholesome flakes made from 100% natural sorghum millet.",
    image: "/productmockups/MILLET CEREAL FLAKES/Millet CF - Sorghum Millet.png",
    amazonLink: "https://www.amazon.in/dp/B0FNK9ZCK1",
  },
  {
    id: 14,
    name: "Finger Millet Cereal Flakes",
    category: "Cereals",
    subCategory: "Millet Cereal Flakes",
    desc: "Calcium-rich ragi (finger millet) flakes for a powerful start to your day.",
    image: "/productmockups/MILLET CEREAL FLAKES/Millet CF- Finger Millet.png",
    amazonLink: "https://www.amazon.in/dp/B0FP1PWY4D",
  },
  {
    id: 15,
    name: "Pearl Millet Cereal Flakes",
    category: "Cereals",
    subCategory: "Millet Cereal Flakes",
    desc: "Iron-rich bajra (pearl millet) flakes to keep you energized all day.",
    image: "/productmockups/MILLET CEREAL FLAKES/Millet CF- Pearl Millet.png",
    amazonLink: "https://amzn.in/d/0227ne6r",
  },

  // MILK MIXES
  {
    id: 16,
    name: "Multigrain Mix Powder - Vanilla",
    category: "Milk Mixes",
    subCategory: "Milk Mixes",
    desc: "Delicious vanilla-flavored multigrain health mix powder.",
    image: "/productmockups/MILK MIXES/Multigrain Mix Powder- Vanilla.png",
    amazonLink: "https://www.amazon.in/dp/B0GNM6XB71",
  },
  {
    id: 17,
    name: "Multigrain Mix Powder - Strawberry",
    category: "Milk Mixes",
    subCategory: "Milk Mixes",
    desc: "Refreshing strawberry-infused multigrain nutrition drink mix.",
    image: "/productmockups/MILK MIXES/Multigrain Mix Powder- Strawberry.png",
    amazonLink: "https://www.amazon.in/dp/B0GNMC8QLN",
  },
   {
    id: 18,
    name: "Super grains -Chocolate",
    category: "Milk Mixes",
    subCategory: "Milk Mixes",
    desc: "Rich chocolatey flavor meets wholesome goodness.",
    image: "/productmockups/MILK MIXES/Chocolate.png",
    amazonLink: "",
  },
   {
    id: 19,
    name: "Super grains - Malt",
    category: "Milk Mixes",
    subCategory: "Milk Mixes",
    desc: "Rich traditional malt flavor combined with essential grains for health.",
    image: "/productmockups/MILK MIXES/Malt.png",
    amazonLink: "",
  },

  // SNACKS: Quinoa Balls
  {
    id: 20,
    name: "Quinoa Balls - Desi Masala",
    category: "Snacks",
    subCategory: "Quinoa Balls",
    desc: "Spicy and tangy Indian masala-flavored roasted quinoa balls.",
    image: "/productmockups/SNACKS/Quinoa Balls/Quinoa Balls- Desi Masala.png",
    amazonLink: "",
  },
  {
    id: 21,
    name: "Quinoa Balls - Korean BBQ",
    category: "Snacks",
    subCategory: "Quinoa Balls",
    desc: "Sweet and savory Korean BBQ-style seasoned quinoa balls.",
    image: "/productmockups/SNACKS/Quinoa Balls/Quinoa Balls- Korean BBQ.png",
    amazonLink: "",
  },

  // SNACKS: Porridges
  {
    id: 22,
    name: "Millet Porridge - Mixed Fruit & Chocolate",
    category: "Snacks",
    subCategory: "Porridges",
    desc: "Nutritious chocolate porridge mixed with real dehydrated fruit pieces.",
    image: "/productmockups/SNACKS/Porridges/Millet Porridge- Mixed Fruit & Chocolate.png",
    amazonLink: "https://www.amazon.in/dp/B0FPMFMJD5",
  },
  {
    id: 23,
    name: "Millet Porridge - Mixed Vegetables",
    category: "Snacks",
    subCategory: "Porridges",
    desc: "Savory veggie-loaded millet porridge for a warm, comforting meal.",
    image: "/productmockups/SNACKS/Porridges/Millet Porridge- Mixed Vegetables.png",
    amazonLink: "https://www.amazon.in/dp/B0FPMLP71X",
  },
  {
    id: 24,
    name: "Millet Porridge - Apple & Cinnamon",
    category: "Snacks",
    subCategory: "Porridges",
    desc: "Classic sweet porridge loaded with apple flavor and a hint of cinnamon.",
    image: "/productmockups/SNACKS/Porridges/Millet Porridge- Apple & Cinnamon.png",
    amazonLink: "https://www.amazon.in/dp/B0FPMMLXT2",
  },
  {
    id: 25,
    name: "Millet Porridge - Tangy Tomato & Onion",
    category: "Snacks",
    subCategory: "Porridges",
    desc: "Zesty Indian tomato-onion savory porridge mix.",
    image: "/productmockups/SNACKS/Porridges/Millet Porridge- Tangy Tomato & Onion.png",
    amazonLink: "https://www.amazon.in/dp/B0FPMP4PV4",
  },

  // SNACKS: Wavy Chips
  {
    id: 26,
    name: "Wavy Chips - Peri Peri",
    category: "Snacks",
    subCategory: "Wavy Chips",
    desc: "Crispy and spicy peri peri seasoned wavy millet chips.",
    image: "/productmockups/SNACKS/Wavy Chips/Wavy Chips- Peri Peri.png",
    amazonLink: "",
  },
  {
    id: 27,
    name: "Wavy Chips - Sour Cream & Onion",
    category: "Snacks",
    subCategory: "Wavy Chips",
    desc: "Creamy sour cream and zesty onion-flavored healthy wavy chips.",
    image: "/productmockups/SNACKS/Wavy Chips/Wavy Chips- Sour Cream & Onion.png",
    amazonLink: "",
  },

  // SNACKS: Makhana
  {
    id: 28,
    name: "Makhana - Cheese Cheddar",
    category: "Snacks",
    subCategory: "Makhana",
    desc: "Gourmet white cheddar cheese seasoned crunchy roasted makhana.",
    image: "/productmockups/SNACKS/MAKHANA/Makhana- Cheese Cheddar.png",
    amazonLink: "",
  },
  {
    id: 29,
    name: "Makhana - Peri Peri",
    category: "Snacks",
    subCategory: "Makhana",
    desc: "Fiery peri peri seasoned premium roasted foxnuts.",
    image: "/productmockups/SNACKS/MAKHANA/Makhana- Peri Peri.png",
    amazonLink: "",
  },
];

const subCategorySideImages = {
  "Millet Muesli": "/MILLET MUESLI.png",
  "Quinoa Muesli": "/QUINOA.png",
  "Quinoa Flakes": "/QUINOA.png",
  "Millet Cereal Flakes": "/MILLETS.png",
  "Energy Bars": "/BARS.png",
  "Protein Bars": "/BARS.png",
  "Millet Bars": "/BARS.png",
  "Milk Mixes": "/MILK MIXES.png",
  "Quinoa Balls": "/Quinoa balls.png",
  Porridges: "/PORRIDGES.png",
  "Wavy Chips": "/Wavy chips.png",
  Makhana: "/Makhana.png",
};

const getProductBadge = (id) => {
  switch (id) {
    case 3:
      return "Best Seller";
    case 1:
      return "Trending";
    case 7:
      return "High Energy";
    case 9:
      return "High Protein";
    case 18:
    case 19:
    case 20:
      return "New Launch";
    case 26:
      return "Popular Choice";
    default:
      return null;
  }
};

const getProductRating = (id) => {
  const ratings = {
    1: { rate: "4.8", count: 94 },
    2: { rate: "4.7", count: 48 },
    3: { rate: "4.9", count: 185 },
    4: { rate: "4.8", count: 32 },
    5: { rate: "4.6", count: 27 },
    6: { rate: "4.7", count: 19 },
    7: { rate: "4.9", count: 112 },
    8: { rate: "4.8", count: 64 },
    9: { rate: "4.9", count: 140 },
    10: { rate: "4.6", count: 28 },
    11: { rate: "4.8", count: 53 },
    12: { rate: "4.7", count: 41 },
  };
  return ratings[id] || { rate: (4.5 + (id % 5) * 0.1).toFixed(1), count: 12 + (id * 7) % 50 };
};

export default function PremiumFarmikProducts() {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("category");
      if (cat && categoriesData[cat]) {
        setFilter(cat);
      }
    }
  }, []);

  // Filter products based on selected tab
  const activeProducts =
    filter === "All"
      ? productsData
      : productsData.filter((p) => p.category === filter);

  // Group by subCategory for the "Series" effect
  const groupedBySub = activeProducts.reduce((acc, product) => {
    const sub = product.subCategory || "General";
    if (!acc[sub]) acc[sub] = [];
    acc[sub].push(product);
    return acc;
  }, {});

  return (
    <div className="bg-[#F9F8F4] min-h-screen pt-24 md:pt-28 pb-16 font-satoshi">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Editorial Header */}
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[11px] tracking-[0.3em] uppercase text-brand-gold font-bold mb-4 block animate-fade-in">
            Nourish Your Life, Naturally
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-black tracking-tight leading-none mb-6">
            Curated <span className="text-brand-green italic font-normal font-serif">Nutrition.</span>
          </h1>
          <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Discover our premium range of wholesome superfoods, crafted with precision using sustainable organic ingredients.
          </p>
        </header>

        {/* Categories Navigation */}
        <nav className="flex justify-center flex-wrap gap-4 md:gap-8 mb-16 border-b border-gray-200/60 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative pb-3 text-xs md:text-sm uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? "text-brand-green font-extrabold scale-105"
                  : "text-gray-400 hover:text-brand-black"
              }`}
            >
              {cat}
              {filter === cat && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-green rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Main Products Grid */}
        <main className="space-y-24">
          {Object.entries(groupedBySub).map(([subName, products]) => (
            <section
              key={subName}
              className="relative flex flex-col lg:flex-row items-start gap-10 lg:gap-14 border-b border-gray-100 pb-20 last:border-none last:pb-0"
            >
              {/* STICKY SIDE HERO CARD */}
              <div className="w-full lg:w-[300px] shrink-0 lg:sticky lg:top-28">
                <div className="bg-brand-green rounded-3xl p-8 flex flex-col justify-between text-white shadow-md hover:shadow-xl transition-all duration-500 h-[380px] lg:h-[520px] relative overflow-hidden group border border-black/5">
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                  
                  {/* Category Info at the TOP */}
                  <div className="relative z-10">
                    <span className="text-[10px] tracking-widest uppercase text-brand-gold mb-3 block font-bold">
                      {products[0].category}
                    </span>
                    <h2 className="text-3xl font-bold font-serif mb-4 capitalize tracking-tight leading-tight">
                      {subName}
                      <span className="block text-brand-gold font-normal italic text-lg tracking-wide mt-1">
                        Series
                      </span>
                    </h2>
                    <p className="text-xs text-green-50/80 leading-relaxed font-normal mb-6 hidden lg:block">
                      Wholesome {subName} selection carefully curated to preserve clean, pure nutrients.
                    </p>
                  </div>

                  {/* Image – fills the card directly, no white box */}
                  <div className="relative w-full h-40 lg:h-64 flex-shrink-0">
                    <Image
                      src={subCategorySideImages[subName] || "/Cereal.jpeg"}
                      alt={`${subName} Category Visual`}
                      fill
                      unoptimized
                      sizes="300px"
                      className="object-contain drop-shadow-xl"
                      priority
                    />
                  </div>

                </div>
              </div>

              {/* CLEAN PRODUCT GRID */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {products.map((product) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      key={product.id}
                      className="bg-white rounded-3xl p-5 flex flex-col group border border-gray-150/70 hover:border-brand-green/20 hover:shadow-xl transition-all duration-300"
                    >
                      {/* Product Image */}
                      <div className="relative aspect-square bg-transparent rounded-2xl overflow-hidden flex items-center justify-center mb-5">
                        {getProductBadge(product.id) && (
                          <span className="absolute top-3 left-3 z-10 bg-brand-green text-white text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                            {getProductBadge(product.id)}
                          </span>
                        )}
                        {product.image ? (
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 300px"
                            className="object-contain p-1 transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <span className="text-gray-300 font-bold tracking-widest uppercase text-xs">
                            Farmik
                          </span>
                        )}
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col">
                        <h3 className="text-lg md:text-xl font-bold text-brand-black mb-2 group-hover:text-brand-green transition-colors duration-200">
                          {product.name}
                        </h3>
                        <p className="text-xs text-gray-500 line-clamp-2 mb-6 leading-relaxed">
                          {product.desc}
                        </p>

                        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                          {product.amazonLink ? (
                            <button 
                              onClick={() => window.open(product.amazonLink, "_blank")}
                              className="bg-brand-green hover:bg-brand-green-hover text-white font-bold text-[10px] tracking-wider uppercase px-4 py-2 rounded-full cursor-pointer transition-all duration-200 shadow-sm hover:shadow w-full text-center"
                            >
                              BUY ON AMAZON
                            </button>
                          ) : (
                            <button 
                              disabled
                              className="bg-gray-150 text-gray-400 font-bold text-[10px] tracking-wider uppercase px-4 py-2 rounded-full w-full text-center cursor-not-allowed"
                            >
                              COMING SOON
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}

