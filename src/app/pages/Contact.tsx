import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@timelessluxury.com",
    sub: "Response within 24 hours",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 20 7946 0958",
    sub: "Mon–Fri, 9am–6pm GMT",
  },
  {
    icon: MapPin,
    label: "Atelier",
    value: "12 Rue du Parfumeur, Grasse, France",
    sub: "By appointment only",
  },
];

const topics = [
  "General Enquiry",
  "Order Support",
  "Shipping & Returns",
  "Wholesale / B2B",
  "Press & Media",
  "Collaboration",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "General Enquiry",
    message: "",
    country: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-24">
      {/* Header */}
      <section className="py-20 px-6 lg:px-20 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C9A87C] tracking-[0.4em] uppercase text-xs mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/50 text-base max-w-xl"
          >
            Our dedicated concierge team is here to help with anything you need — 
            from fragrance advice to order support.
          </motion.p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="mb-10">
              <h2 className="text-white mb-3" style={{ fontSize: "22px", fontWeight: 500 }}>
                Our Concierge Service
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">
                At Timeless Luxury, customer experience is paramount. Whether you have a 
                fragrance question or need order assistance, our team responds within 24 hours.
              </p>
            </div>

            {contactInfo.map(({ icon: Icon, label, value, sub }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-4 p-5 bg-[#111] rounded-2xl border border-white/5 hover:border-[#C9A87C]/20 transition-all"
              >
                <div className="w-10 h-10 rounded-full border border-[#C9A87C]/30 bg-[#C9A87C]/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={16} className="text-[#C9A87C]" />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] tracking-widest uppercase mb-1">
                    {label}
                  </p>
                  <p className="text-white text-sm">{value}</p>
                  <p className="text-white/30 text-xs mt-0.5">{sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Shipping info */}
            <div id="shipping" className="p-6 bg-[#111] rounded-2xl border border-white/5 mt-8">
              <h3 className="text-white mb-4" style={{ fontSize: "16px", fontWeight: 500 }}>
                Shipping & Returns
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: "UK & Europe", value: "2–5 business days" },
                  { label: "North America", value: "5–8 business days" },
                  { label: "Asia-Pacific", value: "7–12 business days" },
                  { label: "Free Shipping", value: "Orders over $300" },
                  { label: "Returns", value: "30-day money-back guarantee" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-white/40">{label}</span>
                    <span className="text-white/70">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
              <h3 className="text-white mb-3" style={{ fontSize: "16px", fontWeight: 500 }}>
                Follow Our Journey
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { platform: "Instagram", handle: "@timelessluxury" },
                  { platform: "TikTok", handle: "@timelessluxury" },
                  { platform: "Twitter/X", handle: "@timelesslux" },
                  { platform: "YouTube", handle: "Timeless Luxury" },
                ].map(({ platform, handle }) => (
                  <a
                    key={platform}
                    href="#"
                    className="flex flex-col p-3 rounded-xl bg-white/5 hover:bg-[#C9A87C]/10 transition-colors"
                  >
                    <span className="text-white/40 text-[10px] tracking-wider uppercase">
                      {platform}
                    </span>
                    <span className="text-[#C9A87C] text-xs mt-0.5">{handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-6 p-12 bg-[#111] rounded-3xl border border-[#C9A87C]/20"
              >
                <CheckCircle size={60} className="text-[#C9A87C]" />
                <div>
                  <h3
                    className="text-white mb-3"
                    style={{ fontSize: "28px", fontWeight: 500 }}
                  >
                    Message Received!
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed max-w-md">
                    Thank you for reaching out. A member of our concierge team will 
                    respond within 24 hours. In the meantime, explore our collection.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="border border-white/20 text-white/60 px-8 py-3 rounded-full text-sm tracking-widest uppercase hover:border-white/40 transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="bg-[#111] rounded-3xl border border-white/5 p-8 lg:p-12 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-white/50 text-xs tracking-widest uppercase block mb-2">
                      Full Name *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm outline-none focus:border-[#C9A87C]/50 placeholder-white/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs tracking-widest uppercase block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="hello@example.com"
                      className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm outline-none focus:border-[#C9A87C]/50 placeholder-white/20 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-white/50 text-xs tracking-widest uppercase block mb-2">
                      Topic
                    </label>
                    <select
                      value={form.topic}
                      onChange={(e) => setForm({ ...form, topic: e.target.value })}
                      className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm outline-none focus:border-[#C9A87C]/50 transition-colors cursor-pointer"
                    >
                      {topics.map((t) => (
                        <option key={t} value={t} className="bg-[#1a1a1a]">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-white/50 text-xs tracking-widest uppercase block mb-2">
                      Country
                    </label>
                    <input
                      value={form.country}
                      onChange={(e) => setForm({ ...form, country: e.target.value })}
                      placeholder="Your country"
                      className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm outline-none focus:border-[#C9A87C]/50 placeholder-white/20 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/50 text-xs tracking-widest uppercase block mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us how we can help you..."
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm outline-none focus:border-[#C9A87C]/50 placeholder-white/20 transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <p className="text-white/30 text-xs leading-relaxed max-w-xs">
                    By submitting, you agree to our Privacy Policy. We never share your 
                    personal information with third parties.
                  </p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-3 bg-[#C9A87C] text-black px-10 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-[#b8956a] transition-all disabled:opacity-60 whitespace-nowrap"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={14} />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
