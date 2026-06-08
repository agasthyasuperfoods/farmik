import Band from '@/components/Band'
import CategorySlider from '@/components/CategorySlider'
import FAQsSection from '@/components/FAQsSection'
import CertifiedMarquee from '@/components/CertifiedMarquee'
import Footer from '@/components/Footer'
import FunctionalSlider from '@/components/FunctionalSlider'
import HeroShowcase from '@/components/HeroShowcase'
import LatestLaunch from '@/components/LatestLaunch'
import Menu from '@/components/Menu'
import NewsletterHero from '@/components/NewsletterHero'
import Organic from '@/components/Organic'
import ProductCard from '@/components/ProductCard'
import React from 'react'

function index() {
  return (
    <div className="bg-[#F9F8F4] min-h-screen flex flex-col">
      {/* Navigation */}
      <Menu />

      {/* Hero – overflow visible so fan cards aren't clipped */}
      <div className="w-full">
        <HeroShowcase />
      </div>

      {/* Rest of page – clip horizontal overflow to prevent scrollbar */}
      <div className="overflow-x-hidden flex flex-col">
        <div className="w-full">
          <FunctionalSlider />
        </div>

        {/* 2. VALUE DELIVERY & DISCOVERY */}
        <div className="w-full bg-[#F9F8F4]">
          <CategorySlider />
        </div>

        <div className="w-full border-t border-gray-100/50">
          <LatestLaunch />
        </div>

        <div className="w-full bg-[#FFFDF7] border-t border-b border-[var(--border-warm)]">
          <ProductCard />
        </div>

        <Band />

        {/* 3. REASSURANCE & TRUST BUILDERS */}
        <div className="w-full bg-white border-t border-b border-gray-100">
          <Organic />
        </div>

        <div className="w-full bg-[#F9F8F4]">
          <CertifiedMarquee />
        </div>

        {/* 4. FRICTION REMOVAL & FINAL ACTIONS */}
        <div className="w-full bg-[#FFFDF7] border-t border-gray-100">
          <FAQsSection />
        </div>

        <NewsletterHero />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default index
