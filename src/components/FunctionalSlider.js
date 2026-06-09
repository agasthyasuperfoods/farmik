"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

import { useRouter } from "next/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const banners = [
  {
    name: "Millet Muesli",
    img: "/Banners/Millet Muesli Banner.png",
    link: "/product?category=Muesli",
  },
  {
    name: "Milk Mixes",
    img: "/Banners/Milk Mixes Banner.png",
    link: "/product?category=Milk Mixes",
  },
  {
    name: "Quinoa",
    img: "/Banners/Quinoa Banner.png",
    link: "/product?category=Cereals",
  },
  {
    name: "Snacks",
    img: "/Banners/SNACKS Banner.png",
    link: "/product?category=Snacks",
  },
  {
    name: "Bars",
    img: "/Banners/Bars Banner.png",
    link: "/product?category=Bars",
  },
];

export default function FunctionalSlider() {
  const router = useRouter();

  return (
    <section className="w-full bg-[var(--main-bg)] pt-12 lg:pt-16 pb-12 md:pb-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <span className="text-xs text-[var(--button-primary)] bg-green-50 px-3 py-1 rounded-full font-medium shadow-sm border border-green-100">
            Premium Range
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-3 font-satoshi">
            Our Premium Superfoods
          </h2>
          <p className="text-sm text-[var(--text-primary)] opacity-75 mt-1 max-w-xl mx-auto font-satoshi">
            Formulated by combining nutritional science with traditional wellness.
          </p>
        </div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white"
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            style={{
              "--swiper-navigation-color": "#345A2B",
              "--swiper-pagination-color": "#345A2B",
              "--swiper-navigation-size": "28px",
              width: "100%",
              height: "100%",
            }}
          >
            {banners.map((banner, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="relative w-full cursor-pointer group" 
                  style={{ paddingBottom: "35%" }}
                  onClick={() => router.push(banner.link)}
                >
                  <Image
                    src={banner.img}
                    alt={banner.name}
                    fill
                    priority={index === 0}
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.015]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
