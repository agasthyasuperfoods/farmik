import FAQsSection from '@/components/FAQsSection'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import NewsletterHero from '@/components/NewsletterHero'
import ProductPage from '@/components/Productpage'
import React from 'react'

function product() {
  return (
    <div>
      <Menu />
      <ProductPage />
      {/* <FAQsSection /> */}
      <NewsletterHero />
      <Footer />
    </div>
  );
}

export default product