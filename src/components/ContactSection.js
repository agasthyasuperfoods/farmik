'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Leaf, ChevronRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const contactMethods = [
  {
    icon: <FaWhatsapp size={22} />,
    label: 'WhatsApp',
    value: '+91 98765 43210',
    desc: 'Chat with us instantly',
    href: 'https://wa.me/919876543210',
  },
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'support@farmik.com',
    desc: 'Drop us a note anytime',
    href: 'mailto:support@farmik.com',
  },
  {
    icon: <Phone size={22} />,
    label: 'Call Us',
    value: '+91 98765 43210',
    desc: 'Mon–Sat, 9am–6pm IST',
    href: 'tel:+919876543210',
  },
  {
    icon: <MapPin size={22} />,
    label: 'Visit Us',
    value: 'Hyderabad, India',
    desc: 'Agasthya Superfoods HQ',
    href: 'https://maps.google.com',
  },
];

const inquiryTypes = [
  '🌾 Wholesale / Bulk Order',
  '🤝 Distribution Partnership',
  '📦 Product Information',
  '🏪 Retail Tie-up',
  '💬 General Inquiry',
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', inquiry: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', inquiry: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[var(--main-bg)] overflow-x-hidden">

      {/* ── HERO BANNER ── */}
      <section className="relative pt-28 pb-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        {/* Organic background blobs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#345A2B]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-16 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#345A2B] bg-[#EBF7E3] px-4 py-1.5 rounded-full border border-[#DCEFD0] shadow-sm mb-6"
          >
            <Leaf size={13} /> Get In Touch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] leading-tight font-satoshi mb-5"
          >
            Let&apos;s{' '}
            <span className="text-[#345A2B] italic font-serif font-normal">Grow Together</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Whether you&apos;re a retailer, distributor, or health enthusiast — we&apos;d love to hear from you.
            Farmik is built on partnerships that nourish communities.
          </motion.p>
        </div>
      </section>

      {/* ── CONTACT METHOD CARDS ── */}
      <section className="px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {contactMethods.map((m, i) => (
            <motion.a
              key={i}
              href={m.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-[#EBF7E3] border border-[#DCEFD0] rounded-2xl p-5 flex flex-col gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-[#345A2B]">
                {m.icon}
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">{m.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{m.desc}</p>
              </div>
              <p className="text-xs font-semibold text-gray-700 mt-auto">{m.value}</p>
              <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#345A2B] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Connect <ChevronRight size={11} />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── MAIN FORM SECTION ── */}
      <section className="px-4 md:px-8 lg:px-16 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">

            {/* Left: Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 bg-[#345A2B] rounded-3xl p-8 text-white relative overflow-hidden"
            >
              {/* Dot pattern */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/5 rounded-full" />

              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-widest text-amber-300 font-bold">Contact Info</span>
                <h2 className="text-2xl font-bold mt-2 mb-3 font-satoshi leading-snug">
                  We&apos;re here for <span className="italic font-serif font-normal text-amber-200">every inquiry</span>
                </h2>
                <p className="text-sm text-green-100/80 leading-relaxed mb-8">
                  From bulk wholesale inquiries to retail partnerships and press — our team responds within 24 hours.
                </p>

                <div className="space-y-5">
                  <a href="mailto:support@farmik.com" className="flex items-start gap-3 group">
                    <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-white/25 transition-colors">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-green-200/70 font-semibold">Email</p>
                      <p className="text-sm font-semibold">support@farmik.com</p>
                    </div>
                  </a>

                  <a href="https://wa.me/919876543210" className="flex items-start gap-3 group">
                    <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-white/25 transition-colors">
                      <FaWhatsapp size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-green-200/70 font-semibold">WhatsApp</p>
                      <p className="text-sm font-semibold">+91 98765 43210</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-green-200/70 font-semibold">Location</p>
                      <p className="text-sm font-semibold">Hyderabad, Telangana, India</p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/15 my-8" />

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-green-200/70 font-semibold mb-3">Office Hours</p>
                  <p className="text-sm font-semibold">Monday – Saturday</p>
                  <p className="text-xs text-green-100/70 mt-0.5">10:00 AM – 6:00 PM IST</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-1">Send us a message</h3>
              <p className="text-sm text-gray-500 mb-7">We&apos;ll get back to you within one business day.</p>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 flex items-center gap-3 bg-[#EBF7E3] border border-[#DCEFD0] rounded-2xl px-5 py-4"
                >
                  <Leaf size={18} className="text-[#345A2B] shrink-0" />
                  <p className="text-sm font-semibold text-[#345A2B]">Message sent! We&apos;ll be in touch soon. 🌿</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Your Name</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Rahul Sharma"
                      className="w-full bg-[#F9F8F4] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#345A2B]/30 focus:border-[#345A2B] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="rahul@company.com"
                      className="w-full bg-[#F9F8F4] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#345A2B]/30 focus:border-[#345A2B] transition-all"
                    />
                  </div>
                </div>

                {/* Inquiry Type Pills */}
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-3">What&apos;s this about?</label>
                  <div className="flex flex-wrap gap-2">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setForm({ ...form, inquiry: type })}
                        className={`text-xs px-3.5 py-1.5 rounded-full border font-semibold transition-all duration-200 cursor-pointer ${
                          form.inquiry === type
                            ? 'bg-[#345A2B] text-white border-[#345A2B]'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-[#345A2B] hover:text-[#345A2B]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your requirements, quantities, or any questions you have..."
                    className="w-full bg-[#F9F8F4] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#345A2B]/30 focus:border-[#345A2B] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#345A2B] hover:bg-[#25421F] text-white font-bold py-4 rounded-full flex items-center justify-center gap-2.5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer text-sm tracking-wide"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}