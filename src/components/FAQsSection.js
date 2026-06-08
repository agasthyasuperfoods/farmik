'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Are Farmik products certified organic?',
    answer: 'Yes. All our superfoods are certified under USDA Organic, EU Organic, India Organic (NPOP), and other global standards like BRC, FSSC 22000, and HACCP.',
  },
  {
    question: 'What is the shelf life of your products?',
    answer: 'Most Farmik cereals, bars, and beverages have a shelf life of 9–24 months under recommended storage conditions. Details are listed on each pack.',
  },
  {
    question: 'Are your products suitable for children?',
    answer: 'Absolutely! We offer kid-friendly, maida-free products like Multi-Millet Chocos, Choco Fills, and Nutri Fusion drinks made with clean ingredients.',
  },
  {
    question: 'Do you deliver across India?',
    answer: 'Yes, Farmik delivers pan-India. We\'re also export-ready with compliant packaging and documentation for global markets.',
  },
  {
    question: 'What makes Farmik bars different?',
    answer: 'Our energy and meal replacement bars are rich in protein, packed with clean ingredients like dates, millet crisps, seeds, and nuts — with no added sugar or fillers.',
  },
  {
    question: 'Do your snacks contain palm oil or preservatives?',
    answer: 'No harmful preservatives are used. We follow clean-label practices. Palm oil, where used, is sustainably sourced and limited to specific product categories.',
  },
];

export default function FAQsSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => setActiveIndex(index === activeIndex ? null : index);

  return (
    <section className="bg-[var(--main-bg)] py-20 px-4 md:px-8 lg:px-16 w-full" id="faqs">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#345A2B] bg-[#EBF7E3] px-4 py-1.5 rounded-full border border-[#DCEFD0] shadow-sm mb-4">
            <Leaf size={12} /> FAQs
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] font-satoshi">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Everything you need to know about Farmik superfoods.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#DCEFD0] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center py-4 px-5 text-left cursor-pointer group"
              >
                <span className="font-semibold text-[var(--text-primary)] text-sm pr-4 group-hover:text-[#345A2B] transition-colors">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-[#345A2B] transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-[#EBF7E3] pt-3">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
