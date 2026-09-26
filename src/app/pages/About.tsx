import { motion } from "motion/react";
import { Leaf, Award, Globe, Heart } from "lucide-react";
import { Link } from "react-router";
import imgTop100 from "figma:asset/ef2a52ad0d26150d580fcc50b8e5d4423b6bdf18.png";
import imgPureSense2 from "figma:asset/2cb01b5c08e5ae13a6f7b098628982ac6e2c424e.png";
import imgFrame104 from "figma:asset/f0c58fed8b4a358048bb6d588ed5ae44c1b81bc7.png";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "Every bottle is crafted from recycled glass. Our packaging is FSC-certified, plastic-free, and fully compostable. We offset 100% of our shipping emissions.",
  },
  {
    icon: Heart,
    title: "Cruelty-Free",
    desc: "PETA-certified cruelty-free. Every ingredient is ethically sourced. We never test on animals and use only vegan-friendly raw materials.",
  },
  {
    icon: Award,
    title: "Artisanal Quality",
    desc: "Each fragrance is composed by master perfumers in Grasse, France — the world capital of perfume. Small batches, uncompromising quality.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Delivered to 100+ countries with white-glove logistics. Every shipment is fully insured and arrives in our signature luxury gift packaging.",
  },
];

const team = [
  {
    name: "Sophia Laurent",
    role: "Founder & Creative Director",
    bio: "A graduate of ISIPCA (the world's leading perfumery school), Sophia founded Timeless Luxury with a vision to democratise niche perfumery without compromising on craft.",
    image: "https://images.unsplash.com/photo-1543422655-ac1c6ca993ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    name: "Jean-Pierre Moreau",
    role: "Master Perfumer",
    bio: "With 30 years of experience in Grasse, Jean-Pierre is the nose behind our most iconic fragrances. His philosophy: every scent must tell a story.",
    image: "https://images.unsplash.com/photo-1765031089460-0909ddc3835a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    name: "Amara Osei",
    role: "Head of Global Operations",
    bio: "Amara ensures that every Timeless Luxury order — from Tokyo to Toronto — arrives with the same unparalleled care and attention to detail.",
    image: "https://images.unsplash.com/photo-1590580463662-88d585eda98f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
];

const milestones = [
  { year: "2022", event: "Timeless Luxury founded in Paris" },
  { year: "2023", event: "First collection launched — 3 signature scents" },
  { year: "2024", event: "Expansion to 50+ countries, 10,000 customers" },
  { year: "2025", event: "PETA cruelty-free certification, 6 fragrances" },
  { year: "2026", event: "60,000+ units sold across 100+ countries" },
];

export default function About() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={imgTop100} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 to-[#0a0a0a]" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C9A87C] tracking-[0.4em] uppercase text-xs mb-6"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-white mb-6 leading-tight"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Born in Paris, <br />
            <span className="text-[#C9A87C] italic" style={{ fontWeight: 400 }}>
              Made for the World
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/60 text-lg leading-relaxed"
          >
            Timeless Luxury was founded on a single belief: that extraordinary fragrance 
            should be accessible to anyone, anywhere. We create scents that don't just 
            smell beautiful — they define moments.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 px-6 lg:px-20">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden aspect-[4/5]"
          >
            <img src={imgPureSense2} alt="Our Story" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <p className="text-[#C9A87C] text-xs tracking-widest uppercase mb-2">Est. 2022</p>
                <p className="text-white text-lg">
                  "Every great fragrance begins with a story."
                </p>
                <p className="text-white/50 text-sm mt-1">— Sophia Laurent, Founder</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#C9A87C] tracking-[0.4em] uppercase text-xs mb-6">Our Heritage</p>
            <h2
              className="text-white mb-6 leading-[1.2]"
              style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 500 }}
            >
              Crafted in Grasse, Inspired by the World
            </h2>
            <div className="space-y-5 text-white/60 text-base leading-relaxed">
              <p>
                Deep in the hills of Grasse — the world's perfumery capital — our master 
                perfumers spend months composing each fragrance by hand. Every note is 
                intentional. Every accord is balanced. Every bottle tells a story.
              </p>
              <p>
                We source our raw materials with purpose: Bulgarian rose absolute, Madagascan 
                vanilla, Indian oud, and Moroccan orange blossom. Each ingredient is chosen 
                for its purity, its provenance, and its potential.
              </p>
              <p>
                The result? Fragrances that don't just smell extraordinary — they last. 
                Our unique maceration process ensures up to 18 hours of wear on skin, 
                making each bottle a true investment in your personal identity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { value: "60K+", label: "Satisfied Customers" },
                { value: "4.9★", label: "Average Rating" },
                { value: "100+", label: "Countries Served" },
                { value: "2", label: "Years of Excellence" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-[#1a1a1a] rounded-2xl p-5 border border-white/5">
                  <p className="text-[#C9A87C] text-2xl mb-1" style={{ fontWeight: 700 }}>
                    {value}
                  </p>
                  <p className="text-white/50 text-xs tracking-wider uppercase">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-20 bg-[#0f0f0f]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C9A87C] tracking-[0.4em] uppercase text-xs mb-4">What We Stand For</p>
            <h2 className="text-white" style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 500 }}>
              Our Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 hover:border-[#C9A87C]/20 transition-all"
              >
                <div className="w-12 h-12 rounded-full border border-[#C9A87C]/30 bg-[#C9A87C]/5 flex items-center justify-center mb-6">
                  <Icon size={20} className="text-[#C9A87C]" />
                </div>
                <h3 className="text-white mb-3" style={{ fontSize: "18px", fontWeight: 500 }}>
                  {title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C9A87C] tracking-[0.4em] uppercase text-xs mb-4">Our Journey</p>
            <h2 className="text-white" style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 500 }}>
              Milestones
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
            <div className="space-y-12">
              {milestones.map(({ year, event }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <p
                      className="text-[#C9A87C] mb-1"
                      style={{ fontSize: "32px", fontWeight: 700 }}
                    >
                      {year}
                    </p>
                    <p className="text-white/60 text-sm">{event}</p>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#C9A87C] border-4 border-[#0a0a0a] flex-shrink-0" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 lg:px-20 bg-[#0f0f0f]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C9A87C] tracking-[0.4em] uppercase text-xs mb-4">The People</p>
            <h2 className="text-white" style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 500 }}>
              Meet the Team
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map(({ name, role, bio, image }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-2 border-[#C9A87C]/30">
                  <img src={image} alt={name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-white mb-1" style={{ fontSize: "20px", fontWeight: 500 }}>
                  {name}
                </h3>
                <p className="text-[#C9A87C] text-xs tracking-widest uppercase mb-4">{role}</p>
                <p className="text-white/50 text-sm leading-relaxed">{bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="py-24 px-6 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={imgFrame104}
              alt="Sustainability"
              className="w-full h-64 lg:h-96 object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] to-[#0a0a0a]/60 flex items-center">
              <div className="px-10 lg:px-16 max-w-xl">
                <p className="text-[#C9A87C] tracking-[0.4em] uppercase text-xs mb-4">
                  Our Commitment
                </p>
                <h2
                  className="text-white mb-6 leading-tight"
                  style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 500 }}
                >
                  Luxury Should Never Cost the Earth
                </h2>
                <p className="text-white/60 text-base leading-relaxed mb-8">
                  By 2027, we are committed to carbon-neutral operations across our entire 
                  supply chain. From ethical sourcing to fully recyclable packaging, every 
                  decision we make prioritises people and planet.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#C9A87C] text-black px-8 py-3 rounded-full text-sm tracking-widest uppercase hover:bg-[#b8956a] transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
