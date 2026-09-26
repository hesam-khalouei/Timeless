import { useState, useEffect } from "react";
import { pb, getFileUrl } from "../../lib/pocketbase";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  Star,
  Globe,
  Award,
  Leaf,
  Package,
  ArrowRight,
} from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { products, blogPosts } from "../data/products";
import imgPureSense2 from "figma:asset/2cb01b5c08e5ae13a6f7b098628982ac6e2c424e.png";
import imgTop100 from "figma:asset/ef2a52ad0d26150d580fcc50b8e5d4423b6bdf18.png";
import imgFrame97 from "figma:asset/236d5b6a29fac8003ec06c4dd34cd044cfd7b419.png";
import imgFrame96 from "figma:asset/38c0a8fd1fd6657066caef3781dccb9ea09a9431.png";
import imgFrame100 from "figma:asset/19fcac3f1aa5cdfbaa87a9c99bea8d9ac7c8e53e.png";
import imgFrame104 from "figma:asset/f0c58fed8b4a358048bb6d588ed5ae44c1b81bc7.png";
import imgFrame105 from "figma:asset/9b3b65fe7ddcf4b45115d146c3dc6432700bc236.png";
import { useCart } from "../context/CartContext";

const faqs = [
  {
    q: "What type of perfume do you offer?",
    a: "We offer Eau de Parfum (EDP) concentrations of 20–25%, ensuring long-lasting, rich scent experiences. Our range spans Oriental, Floral, Woody, and Fresh fragrance families.",
  },
  {
    q: "How long does your perfume last?",
    a: "Our Eau de Parfum formulas last 12–18 hours on skin, with sillage that creates a captivating trail throughout the day. Longevity varies by skin type and application.",
  },
  {
    q: "Are your perfumes cruelty-free and vegan?",
    a: "Yes. All Timeless Luxury fragrances are 100% cruelty-free, vegan, and never tested on animals. We are proudly certified by PETA.",
  },
  {
    q: "How should I store my perfume?",
    a: "Store your fragrance away from direct sunlight, heat, and humidity. A cool, dark drawer or closet shelf is ideal. Avoid the bathroom where temperature fluctuates.",
  },
  {
    q: "Where should I apply perfume for best results?",
    a: "Apply to pulse points — wrists, neck, behind ears, inner elbows. For maximum longevity, moisturise skin first with an unscented lotion. Do not rub your wrists together.",
  },
  {
    q: "How long does shipping take?",
    a: "UK & Europe: 2–5 business days. North America: 5–8 business days. Asia-Pacific: 7–12 business days. Express shipping options are available at checkout.",
  },
  {
    q: "Do you offer international shipping?",
    a: "Yes! We ship to 100+ countries worldwide. Orders over $300 enjoy complimentary international shipping. All shipments are fully insured and tracked.",
  },
];

const stats = [
  {
    value: "60K+",
    label: "Units Sold",
    sub: "Our Perfumes have reached over 60,000 satisfied customers",
    icon: Package,
  },
  {
    value: "4.9/5",
    label: "Average Rating",
    sub: "Thousands of reviews praise our unmatched fragrance quality",
    icon: Star,
  },
  {
    value: "100+",
    label: "Countries",
    sub: "Our products are loved and shipped across more than 100 countries",
    icon: Globe,
  },
];



const defaultFeatures = [
  { icon: Leaf, title: "100% Cruelty-Free", desc: "Vegan & PETA certified" },
  { icon: Award, title: "Award-Winning", desc: "Recognised globally" },
  { icon: Globe, title: "Worldwide Shipping", desc: "To 100+ countries" },
  { icon: Package, title: "Luxury Packaging", desc: "Gift-ready by default" },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  

  

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-white/10"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-white/90 text-base pr-4" style={{ fontWeight: 400 }}>
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`text-[#C9A87C] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-white/50 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const iconMap: Record<string, any> = {
  leaf: Leaf,
  award: Award,
  globe: Globe,
  package: Package,
  star: Star,
};

const getFeatureIcon = (name?: string) => {
  if (!name) return Package;
  const key = String(name).toLowerCase().trim();
  return iconMap[key] || Package;
};

export default function Home() {
  const { addToCart } = useCart();
  

  const [heroData, setHeroData] = useState(null);
  const [taglineData, setTaglineData] = useState(null);
  const [featureOneData, setFeatureOneData] = useState(null);
  const [featureTwoData, setFeatureTwoData] = useState(null);
  const [featuresList, setFeaturesList] = useState<any[]>([]);
  const [socialProofSection, setSocialProofSection] = useState<any>(null);
  const [statsList, setStatsList] = useState<any[]>([]);
  const [featuredSectionData, setFeaturedSectionData] = useState<any>(null);
  const [dbFeaturedProducts, setDbFeaturedProducts] = useState<any[]>([]);

  const currentStats = statsList.length > 0
    ? statsList.map(item => ({
        value: item.value,
        label: item.label,
        sub: item.sub,
        Icon: getFeatureIcon(item.icon)
      }))
    : stats.map(s => ({ ...s, Icon: s.icon }));

  const currentFeatures = featuresList.length > 0 
    ? featuresList.map(item => ({
        title: item.title,
        desc: item.desc,
        Icon: iconMap[item.icon?.toLowerCase()] || Package
      }))
    : defaultFeatures.map(f => ({ ...f, Icon: f.icon }));

  

  useEffect(() => {
    pb.collection('hero_section')
      .getFirstListItem('')
      .then((record) => {
        setHeroData(record);
      })
      .catch((err) => {
        console.warn('PocketBase fetch notice:', err.message);
      });
    pb.collection('tagline_section')
      .getFirstListItem('')
      .then((record) => {
        setTaglineData(record);
      })
      .catch((err) => {
        console.warn('Tagline fetch notice:', err.message);
      });
    pb.collection('feature_one')
      .getFirstListItem('')
      .then((record) => {
        setFeatureOneData(record);
      })
      .catch((err) => {
        console.warn('Feature 1 fetch error:', err.status, err.message, err.data);
      });
    pb.collection('feature_two')
      .getFirstListItem('')
      .then((record) => {
        setFeatureTwoData(record);
      })
      .catch((err) => {
        console.warn('Feature 2 fetch notice:', err.message);
      });
    pb.collection('home_features')
      .getFullList({ sort: 'sort_order' })
      .then((records) => {
        if (records.length > 0) setFeaturesList(records);
      })
      .catch((err) => {
        console.warn('Features strip fetch notice:', err.message);
      });

    pb.collection('social_proof_section')
      .getFirstListItem('')
      .then((record) => {
        setSocialProofSection(record);
      })
      .catch((err) => {
        console.warn('Social proof section fetch error:', err.status, err.message);
      });

    pb.collection('social_proof_stats')
      .getFullList({ sort: 'sort_order' })
      .then((records) => {
        if (records && records.length > 0) setStatsList(records);
      })
      .catch((err) => {
        console.warn('Social proof stats fetch error:', err.status, err.message);
      });
    pb.collection('featured_products_section')
      .getFirstListItem('')
      .then((record) => {
        setFeaturedSectionData(record);
      })
      .catch((err) => {
        console.warn('Featured section fetch notice:', err.message);
      });

    pb.collection('products')
      .getList(1, 4, { filter: 'is_featured = true', sort: '-created' })
      .then((res) => {
        if (res.items && res.items.length > 0) {
          // تطبیق فیلدها با مدل Product
          const mapped = res.items.map(p => ({
            id: p.id,
            name: p.name,
            subtitle: p.subtitle,
            price: p.price,
            originalPrice: p.original_price,
            category: p.category,
            badge: p.badge,
            sizes: p.sizes || ["50ml"],
            description: p.description,
            notes: p.notes || { top: [], middle: [], base: [] },
            inStock: p.in_stock,
            image: p.images && p.images.length > 0 
              ? getFileUrl(p, Array.isArray(p.images) ? p.images[0] : p.images)
              : "https://images.unsplash.com/photo-1770301410072-f6ef6dad65b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
          }));
          setDbFeaturedProducts(mapped);
        }
      })
      .catch((err) => {
        console.warn('Featured products fetch notice:', err.message);
      });
  }, []);

    const featuredProducts = (dbFeaturedProducts && dbFeaturedProducts.length > 0)
    ? dbFeaturedProducts 
    : products.slice(0, 4);

return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* ── HERO ─────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={
              heroData?.image 
                ? getFileUrl(heroData, Array.isArray(heroData.image) ? heroData.image[0] : heroData.image) 
                : imgPureSense2
            }
            alt=""
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#C9A87C] tracking-[0.5em] uppercase text-xs mb-6"
          >
            {heroData?.tagline || "Maison de Parfum · Est. 2022"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-white text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.05]"
            style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            {heroData?.title || (
              <>
                Timeless{" "}
                <span className="text-[#C9A87C] italic" style={{ fontWeight: 400 }}>
                  Luxury
                </span>
              </>
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {heroData?.subtitle || `Redefine luxury with groundbreaking fragrance innovation — where cutting-edge 
            perfumery meets timeless resilience. A scent so meticulously engineered, it 
            evolves beautifully yet never fades.`}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to={heroData?.cta_link || "/shop"}
              className="bg-[#C9A87C] text-black px-10 py-4 rounded-full tracking-widest uppercase text-sm hover:bg-[#b8956a] transition-all hover:shadow-lg hover:shadow-[#C9A87C]/30"
            >
              {heroData?.cta_text || "Shop Collection"}
            </Link>
            <Link
              to={heroData?.secondary_cta_link || "/about"}
              className="border border-white/30 text-white px-10 py-4 rounded-full tracking-widest uppercase text-sm hover:border-white/60 transition-all"
            >
              {heroData?.secondary_cta_text || "Our Story"}
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-white/30 text-[10px] tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
            >
              <ChevronDown size={16} className="text-white/30" />
            </motion.div>
          </motion.div>
        </div>

        {/* Features strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/40 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {currentFeatures.map(({ Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-[#C9A87C]/30 flex items-center justify-center flex-shrink-0">
                  <Icon size={14} className="text-[#C9A87C]" />
                </div>
                <div>
                  <p className="text-white text-xs tracking-wider">{title}</p>
                  <p className="text-white/40 text-[10px]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TAGLINE SECTION ─────────────────── */}
      <section className="py-24 px-6 bg-[#f5f0e8]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-[#1a1a1a]/40 tracking-[0.4em] uppercase text-xs mb-8">
            {taglineData?.overline || "The Philosophy"}
          </p>
          <h2
            className="text-[#1a1a1a] leading-[1.2]"
            style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 500 }}
          >
            {taglineData?.title || "Our bold new fragrance merges exquisite scent with unyielding longevity —"}{" "}
            <span className="text-[#8B6A3C] italic">
              {taglineData?.highlighted_text || "luxury that lingers, undiminished."}
            </span>
          </h2>
        </motion.div>
      </section>

      {/* ── PRODUCT FEATURE 1 ────────────────── */}
      <section className="py-24 px-6 lg:px-20 bg-[#f5f0e8]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <p className="text-[#8B6A3C] tracking-[0.4em] uppercase text-xs mb-6">
              {featureOneData?.overline || "✦ The Perfect Fragrance, Anywhere"}
            </p>
            <h2
              className="text-[#1a1a1a] mb-6 leading-[1.2]"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 500 }}
            >
              {featureOneData?.title || "Our fragrance is crafted to envelop you in luxurious, high-definition scent — effortlessly elegant, whether day or night."}
            </h2>
            <p className="text-[#1a1a1a]/50 text-base leading-relaxed mb-8">
              {featureOneData?.description || "Our bold new fragrance merges exquisite scent with unyielding longevity — luxury that lingers, undiminished. Meticulously crafted from the world's finest raw materials."}
            </p>
            <Link
              to={featureOneData?.cta_link || "/shop"}
              className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white px-8 py-4 rounded-full tracking-widest uppercase text-sm hover:bg-[#2a2a2a] transition-all"
            >
              {featureOneData?.cta_text || "Discover More"} <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-h-[600px]">
              <img
                src={
                featureOneData?.image 
                  ? getFileUrl(featureOneData, Array.isArray(featureOneData.image) ? featureOneData.image[0] : featureOneData.image) 
                  : imgPureSense2
              }
                alt="Timeless Perfume"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCT FEATURE 2 (dark) ──────────── */}
      <section className="py-24 px-6 lg:px-20 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden aspect-[3/4] max-h-[650px]"
          >
            <img
              src={
                featureTwoData?.image
                  ? getFileUrl(featureTwoData, Array.isArray(featureTwoData.image) ? featureTwoData.image[0] : featureTwoData.image)
                  : imgTop100
              }
              alt="Luxury Collection"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#C9A87C] tracking-[0.4em] uppercase text-xs mb-6">
              {featureTwoData?.overline || "✦ Smart · Sleek · Immersive"}
            </p>
            <h2
              className="text-white mb-6 leading-[1.2]"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400 }}
            >
              {featureTwoData?.title || "Effortless elegance, magnetic allure, and a modern refined blend — the perfect finishing touch for any moment."}
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-4">
              {featureTwoData?.description_one || "A scent experience so immersive, it transforms every moment into a masterpiece wherever life takes you."}
            </p>
            <p className="text-white/50 text-base leading-relaxed mb-10">
              {featureTwoData?.description_two || "Housed in our signature hand-poured glass bottles with 24k gold accents, each fragrance is a work of art — inside and out."}
            </p>
            <div className="flex gap-4">
              <Link
                to={featureTwoData?.primary_cta_link || "/shop"}
                className="bg-[#C9A87C] text-black px-8 py-4 rounded-full tracking-widest uppercase text-sm hover:bg-[#b8956a] transition-all"
              >
                {featureTwoData?.primary_cta_text || "Buy Now"}
              </Link>
              <Link
                to={featureTwoData?.secondary_cta_link || "/about"}
                className="border border-white/20 text-white px-8 py-4 rounded-full tracking-widest uppercase text-sm hover:border-white/40 transition-all"
              >
                {featureTwoData?.secondary_cta_text || "Our Process"}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ─────────────────────── */}
      <section className="py-20 px-6 lg:px-20 bg-[#0f0f0f] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-16">
            <div className="max-w-sm">
              <p className="text-[#C9A87C] tracking-[0.4em] uppercase text-xs mb-4">
                {socialProofSection?.overline || "Why Us?"}
              </p>
              <h2 className="text-white" style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 500 }}>
                {socialProofSection?.title || "Trusted by Thousands, Curated for Excellence"}
              </h2>
            </div>
            <p className="text-white/50 text-base leading-relaxed max-w-xl lg:text-right">
              {socialProofSection?.description || "Elevate your presence with a captivating fusion of modern elegance and timeless allure. Our perfume embodies sophistication, leaving a trail of unforgettable charm that captivates every room you enter."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {currentStats.map(({ value, label, sub, Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-[#1a1a1a] rounded-3xl p-8 border border-white/5 overflow-hidden group hover:border-[#C9A87C]/30 transition-all"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A87C]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[#C9A87C]/10 transition-all" />
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mb-8">
                  <Icon size={18} className="text-[#C9A87C]" />
                </div>
                <p
                  className="text-white mb-1"
                  style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-0.02em" }}
                >
                  {value}
                </p>
                <p className="text-[#C9A87C] tracking-widest uppercase text-xs mb-4">{label}</p>
                <p className="text-white/40 text-sm leading-relaxed">{sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Star Rating Strip */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 py-6 border-t border-white/5">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} className="text-[#C9A87C] fill-[#C9A87C]" />
              ))}
            </div>
            <p className="text-white/60 text-sm tracking-wider">
              {socialProofSection?.rating_score || "4.9 out of 5"} — based on{" "}
              <span className="text-white">{socialProofSection?.reviews_text || "3,240+ verified reviews"}</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ─────────────────── */}
      <section className="py-24 px-6 lg:px-20 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[#C9A87C] tracking-[0.4em] uppercase text-xs mb-3">
                {featuredSectionData?.overline || "Curated Selection"}
              </p>
              <h2 className="text-white" style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 500 }}>
                {featuredSectionData?.title || "Our Signature Collection"}
              </h2>
            </div>
            <Link
              to={featuredSectionData?.cta_link || "/shop"}
              className="flex items-center gap-2 text-[#C9A87C] text-sm tracking-widest uppercase hover:gap-3 transition-all"
            >
              {featuredSectionData?.cta_text || "View All"} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY / ELEGANCE ───────────────── */}
      <section className="py-24 px-6 lg:px-20 bg-[#111] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-12">
            <div>
              <p className="text-[#C9A87C] tracking-[0.4em] uppercase text-xs mb-3">In Reality</p>
              <h2 className="text-white" style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 400 }}>
                Timeless Elegance
              </h2>
            </div>
            <p className="text-white/50 text-base leading-relaxed max-w-lg lg:text-right">
              Transform every moment into an experience with our exquisite fragrance — a 
              harmonious blend of luxury and warmth, designed to enchant and inspire.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="col-span-2 lg:col-span-2 row-span-2 rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <img
                src={imgTop100}
                alt="Timeless Collection"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            {[imgFrame97, imgFrame96, imgFrame100].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden aspect-square"
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────── */}
      <section className="py-24 px-6 lg:px-20 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C9A87C] tracking-[0.4em] uppercase text-xs mb-3">What They Say</p>
            <h2 className="text-white" style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 500 }}>
              Stories from Our Customers
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Isabelle M.",
                location: "Paris, France",
                review:
                  "Lumière Noire is the most sophisticated perfume I have ever worn. The oud base lasts from morning until evening and the compliments never stop.",
                rating: 5,
                product: "Lumière Noire",
                avatar: "I",
              },
              {
                name: "James A.",
                location: "London, UK",
                review:
                  "Timeless Luxury has redefined what a niche fragrance should be. Velours Noir is dark, complex, and utterly mesmerising. Worth every penny.",
                rating: 5,
                product: "Velours Noir",
                avatar: "J",
              },
              {
                name: "Yuki T.",
                location: "Tokyo, Japan",
                review:
                  "Aurore Blanche is everything I dreamed of — light, feminine, and so elegant. I receive compliments every time I wear it. Global shipping was incredibly fast!",
                rating: 5,
                product: "Aurore Blanche",
                avatar: "Y",
              },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/5 flex flex-col gap-6"
              >
                <div className="flex">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} size={14} className="text-[#C9A87C] fill-[#C9A87C]" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed flex-1">"{t.review}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#C9A87C]/20 border border-[#C9A87C]/30 flex items-center justify-center text-[#C9A87C] text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.location} · {t.product}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────── */}
      <section id="faq" className="py-24 px-6 lg:px-20 bg-[#0f0f0f]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-[#C9A87C] tracking-[0.4em] uppercase text-xs mb-4">FAQ</p>
            <h2
              className="text-white mb-6 leading-[1.2]"
              style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 500 }}
            >
              Everything You Need to Know About Our Fragrance
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              Welcome to Timeless FAQ! Can't find an answer? Our concierge team is available 
              24/7 to assist you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-[#C9A87C]/40 text-[#C9A87C] px-6 py-3 rounded-full text-sm tracking-widest uppercase hover:bg-[#C9A87C]/10 transition-all"
            >
              Contact Us <ArrowRight size={14} />
            </Link>
          </motion.div>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ─────────────────────────────── */}
      <section className="py-24 px-6 lg:px-20 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[#C9A87C] tracking-[0.4em] uppercase text-xs mb-3">
                Blogs
              </p>
              <h2 className="text-white" style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 500 }}>
                Perfume Insights
              </h2>
              <p className="text-white/50 text-base mt-3 max-w-md">
                Discover the future of fragrance — cutting-edge blends, trend forecasts, 
                and insider secrets to curate a scent that evolves with you.
              </p>
            </div>
            <Link
              to="/blog"
              className="flex items-center gap-2 text-[#C9A87C] text-sm tracking-widest uppercase hover:gap-3 transition-all"
            >
              All Articles <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-[#C9A87C]/20 transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#C9A87C] text-[10px] tracking-widest uppercase bg-[#C9A87C]/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-white/30 text-xs">{post.readTime}</span>
                  </div>
                  <h3
                    className="text-white mb-3 group-hover:text-[#C9A87C] transition-colors leading-snug"
                    style={{ fontSize: "17px", fontWeight: 500 }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <p className="text-white/25 text-xs">{post.date}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────── */}
      <section className="py-20 px-6 lg:px-20 bg-[#111]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1400px] mx-auto rounded-3xl overflow-hidden relative"
        >
          <div className="absolute inset-0">
            <img
              src={imgFrame104}
              alt=""
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />
          </div>
          <div className="relative px-10 lg:px-20 py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-lg">
              <p className="text-[#C9A87C] tracking-[0.4em] uppercase text-xs mb-4">
                Limited Time Offer
              </p>
              <h2
                className="text-white mb-4 leading-tight"
                style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800 }}
              >
                Get your perfect perfume now!
              </h2>
              <p className="text-white/60 text-base mb-8">
                Stay ahead of the fragrance curve with the latest scent innovation, 
                perfumery breakthroughs, and exclusive member benefits.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-3 bg-[#C9A87C] text-black px-10 py-4 rounded-full tracking-widest uppercase text-sm hover:bg-[#b8956a] transition-all"
              >
                Get yours — 30% off <ArrowRight size={16} />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="text-right space-y-4">
                <p className="text-white text-xl leading-relaxed">
                  Bring every room together
                </p>
                <p className="text-white/50 text-base max-w-xs">
                  Stay ahead of the fragrance curve with the latest scent innovation, 
                  perfumery breakthroughs.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── QUICK ADD SECOND PRODUCTS ─────────── */}
      <section className="py-24 px-6 lg:px-20 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C9A87C] tracking-[0.4em] uppercase text-xs mb-3">More Scents</p>
            <h2 className="text-white" style={{ fontSize: "clamp(24px, 2.5vw, 36px)", fontWeight: 500 }}>
              Explore the Full Collection
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(3).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 border border-[#C9A87C]/40 text-[#C9A87C] px-10 py-4 rounded-full tracking-widest uppercase text-sm hover:bg-[#C9A87C]/10 transition-all"
            >
              View All Fragrances <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
