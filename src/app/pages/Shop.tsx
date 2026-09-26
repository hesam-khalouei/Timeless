import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { SlidersHorizontal, Search, X } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { products, categories } from "../data/products";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "asc" },
  { label: "Price: High to Low", value: "desc" },
  { label: "Name: A–Z", value: "name" },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [search, setSearch] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [priceMax, setPriceMax] = useState(500);

  const filtered = useMemo(() => {
    let list = [...products];

    if (search) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(search.toLowerCase()) ||
          p.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (activeCategory !== "All") {
      list = list.filter((p) => p.category === activeCategory);
    }

    list = list.filter((p) => p.price <= priceMax);

    switch (sortBy) {
      case "asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "name":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return list;
  }, [activeCategory, sortBy, search, priceMax]);

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-24">
      {/* Header */}
      <div className="relative py-20 px-6 lg:px-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]" />
        <div className="relative max-w-[1400px] mx-auto">
          <p className="text-[#C9A87C] tracking-[0.4em] uppercase text-xs mb-4">
            Our Collection
          </p>
          <h1
            className="text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Shop All Fragrances
          </h1>
          <p className="text-white/50 text-base max-w-xl">
            Discover your signature scent from our curated collection of luxury fragrances, 
            crafted for the discerning connoisseur.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-12">
        {/* Filter Bar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10">
          {/* Search */}
          <div className="relative w-full max-w-sm">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search fragrances..."
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-full pl-10 pr-10 py-3 text-white text-sm outline-none focus:border-[#C9A87C]/50 transition-colors placeholder-white/30"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
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

          {/* Sort + Filters */}
          <div className="flex items-center gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#1a1a1a] border border-white/10 text-white/70 text-xs rounded-full px-4 py-3 outline-none focus:border-[#C9A87C]/50 transition-colors cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-[#1a1a1a]">
                  {opt.label}
                </option>
              ))}
            </select>
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className={`flex items-center gap-2 border rounded-full px-4 py-3 text-xs tracking-widest uppercase transition-all ${
                filtersOpen
                  ? "border-[#C9A87C] text-[#C9A87C]"
                  : "border-white/20 text-white/60 hover:border-white/40"
              }`}
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
          </div>
        </div>

        {/* Extended Filters */}
        {filtersOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 p-6 bg-[#1a1a1a] rounded-2xl border border-white/10"
          >
            <div className="flex flex-col sm:flex-row items-start gap-8">
              <div className="flex-1">
                <label className="text-white/60 text-xs tracking-widest uppercase block mb-3">
                  Max Price: <span className="text-[#C9A87C]">${priceMax}</span>
                </label>
                <input
                  type="range"
                  min={100}
                  max={500}
                  step={25}
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  className="w-full accent-[#C9A87C]"
                />
                <div className="flex justify-between text-white/30 text-xs mt-1">
                  <span>$100</span>
                  <span>$500</span>
                </div>
              </div>
              <div>
                <label className="text-white/60 text-xs tracking-widest uppercase block mb-3">
                  Quick Filters
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Bestseller", "New", "Limited", "Exclusive"].map((badge) => (
                    <button
                      key={badge}
                      className="px-4 py-1.5 rounded-full border border-white/20 text-white/50 text-xs hover:border-[#C9A87C]/40 hover:text-[#C9A87C] transition-all"
                    >
                      {badge}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Results count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-white/40 text-sm">
            Showing <span className="text-white">{filtered.length}</span> fragrance{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All" && (
              <span> in <span className="text-[#C9A87C]">{activeCategory}</span></span>
            )}
          </p>
        </div>

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="text-white/30 text-xl mb-4">No fragrances found</p>
            <p className="text-white/20 text-sm mb-8">Try adjusting your filters</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearch("");
                setPriceMax(500);
              }}
              className="border border-white/20 text-white/60 px-8 py-3 rounded-full text-sm tracking-widest uppercase hover:border-white/40 transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Sample Sets Promo */}
        <div className="mt-20 p-8 lg:p-12 bg-[#1a1a1a] rounded-3xl border border-white/5 text-center">
          <p className="text-[#C9A87C] tracking-[0.4em] uppercase text-xs mb-4">
            Not sure where to start?
          </p>
          <h3 className="text-white mb-4" style={{ fontSize: "clamp(24px, 2.5vw, 36px)", fontWeight: 500 }}>
            Try Our Discovery Set
          </h3>
          <p className="text-white/50 text-base mb-8 max-w-xl mx-auto">
            Experience 6 of our most-loved fragrances in elegant 2ml vials. Find your signature 
            scent before committing to a full bottle.
          </p>
          <button className="bg-[#C9A87C] text-black px-10 py-4 rounded-full tracking-widest uppercase text-sm hover:bg-[#b8956a] transition-all">
            Add Discovery Set — $45
          </button>
        </div>
      </div>
    </div>
  );
}
