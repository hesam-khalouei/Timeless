import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "../data/products";

const allPosts = [
  ...blogPosts,
  {
    id: "b4",
    title: "The Oud Renaissance: Why Ancient Resin is Dominating Modern Perfumery",
    excerpt:
      "From the souks of Dubai to the salons of Paris, oud has become the defining ingredient of luxury perfumery. We explore why.",
    date: "May 2, 2026",
    category: "Trend",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1770301410072-f6ef6dad65b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
  {
    id: "b5",
    title: "How to Build a Fragrance Wardrobe for Every Season",
    excerpt:
      "Just as you dress for the weather, your scent should evolve with the seasons. Here's how to curate the perfect fragrance wardrobe.",
    date: "May 20, 2026",
    category: "Guide",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1713998525908-69c60daae07d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
  {
    id: "b6",
    title: "Behind the Bottle: Inside Our Grasse Atelier",
    excerpt:
      "We open the doors to our perfumery in Grasse, France — the birthplace of modern perfumery — for an exclusive behind-the-scenes look.",
    date: "June 5, 2026",
    category: "Heritage",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1759563874665-ffa9dfbd0205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
];

const blogCategories = ["All", "Heritage", "Guide", "Tips", "Trend"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? allPosts
      : allPosts.filter((p) => p.category === activeCategory);

  const featured = allPosts[0];
  const rest = allPosts.slice(1);

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
            Insights & Stories
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Perfume Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/50 text-base max-w-xl"
          >
            Discover the future of fragrance — cutting-edge blends, trend forecasts, and 
            insider secrets to curate a scent that evolves with you.
          </motion.p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-16">
        {/* Featured Post */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="group relative rounded-3xl overflow-hidden mb-16 cursor-pointer"
        >
          <div className="absolute inset-0">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          </div>
          <div className="relative px-10 lg:px-16 py-20 lg:py-28 max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#C9A87C] text-black text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">
                {featured.category}
              </span>
              <span className="text-white/50 text-xs flex items-center gap-1">
                <Clock size={12} /> {featured.readTime}
              </span>
            </div>
            <h2
              className="text-white mb-4 leading-tight group-hover:text-[#C9A87C] transition-colors"
              style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 600 }}
            >
              {featured.title}
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8">{featured.excerpt}</p>
            <div className="flex items-center gap-2 text-[#C9A87C] text-sm tracking-widest uppercase">
              Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-white/30 text-xs mt-4">{featured.date}</p>
          </div>
        </motion.article>

        {/* Category Filter */}
        <div className="flex items-center gap-3 mb-10 flex-wrap">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs tracking-widest uppercase transition-all ${
                activeCategory === cat
                  ? "bg-[#C9A87C] text-black"
                  : "border border-white/20 text-white/60 hover:border-white/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeCategory === "All" ? rest : filtered).map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-[#C9A87C]/20 transition-all cursor-pointer"
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
                  <span className="text-white/30 text-xs flex items-center gap-1">
                    <Clock size={11} /> {post.readTime}
                  </span>
                </div>
                <h3
                  className="text-white mb-3 group-hover:text-[#C9A87C] transition-colors leading-snug"
                  style={{ fontSize: "18px", fontWeight: 500 }}
                >
                  {post.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-white/25 text-xs">{post.date}</p>
                  <span className="flex items-center gap-1 text-[#C9A87C] text-xs group-hover:gap-2 transition-all">
                    Read <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center p-12 bg-[#1a1a1a] rounded-3xl border border-white/5"
        >
          <p className="text-[#C9A87C] tracking-[0.4em] uppercase text-xs mb-4">
            Never Miss a Story
          </p>
          <h3 className="text-white mb-3" style={{ fontSize: "clamp(24px, 2.5vw, 36px)", fontWeight: 500 }}>
            Subscribe to Perfume Insights
          </h3>
          <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
            Get the latest fragrance trends, brand stories, and exclusive content delivered 
            directly to your inbox.
          </p>
          <div className="flex gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-[#111] border border-white/15 rounded-full px-5 py-3 text-white text-sm outline-none focus:border-[#C9A87C]/50 placeholder-white/30"
            />
            <button className="bg-[#C9A87C] text-black px-6 py-3 rounded-full text-sm tracking-widest uppercase hover:bg-[#b8956a] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
