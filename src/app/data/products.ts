import { Product } from "../context/CartContext";

export const products: Product[] = [
  {
    id: "p1",
    name: "Lumière Noire",
    subtitle: "Oud & Amber",
    price: 285,
    originalPrice: 340,
    image: "https://images.unsplash.com/photo-1770301410072-f6ef6dad65b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    category: "Oriental",
    sizes: ["30ml", "50ml", "100ml"],
    description:
      "A dark, mesmerising journey through smoky oud, rich amber, and velvety musk. Lumière Noire commands every room it enters.",
    notes: {
      top: ["Bergamot", "Saffron"],
      middle: ["Rose", "Oud"],
      base: ["Amber", "Musk", "Sandalwood"],
    },
    inStock: true,
    badge: "Bestseller",
  },
  {
    id: "p2",
    name: "Aurore Blanche",
    subtitle: "Floral & Musky",
    price: 195,
    image: "https://images.unsplash.com/photo-1590580463662-88d585eda98f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    category: "Floral",
    sizes: ["30ml", "50ml", "100ml"],
    description:
      "A luminous, ethereal floral with delicate petals of jasmine and peony, kissed by warm vanilla and white musk.",
    notes: {
      top: ["Neroli", "Lemon"],
      middle: ["Jasmine", "Peony", "Rose"],
      base: ["Vanilla", "White Musk", "Cedar"],
    },
    inStock: true,
    badge: "New",
  },
  {
    id: "p3",
    name: "Velours Noir",
    subtitle: "Woody & Dark",
    price: 320,
    image: "https://images.unsplash.com/photo-1765572354938-b88b9d7244cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    category: "Woody",
    sizes: ["50ml", "100ml"],
    description:
      "An intense, velvety composition of dark woods, leather, and smoked vetiver — crafted for those who dare to be different.",
    notes: {
      top: ["Black Pepper", "Cardamom"],
      middle: ["Leather", "Iris"],
      base: ["Vetiver", "Patchouli", "Dark Musk"],
    },
    inStock: true,
    badge: "Limited",
  },
  {
    id: "p4",
    name: "Soleil d'Or",
    subtitle: "Citrus & Warm",
    price: 175,
    image: "https://images.unsplash.com/photo-1765031089460-0909ddc3835a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    category: "Fresh",
    sizes: ["30ml", "50ml", "100ml"],
    description:
      "A sun-drenched burst of golden citrus, white flowers, and warm cedarwood — effortless elegance from dawn to dusk.",
    notes: {
      top: ["Grapefruit", "Bergamot", "Mandarin"],
      middle: ["Ylang-Ylang", "Jasmine"],
      base: ["Cedar", "Amber", "Tonka Bean"],
    },
    inStock: true,
  },
  {
    id: "p5",
    name: "Minuit Rose",
    subtitle: "Rose & Oud",
    price: 260,
    image: "https://images.unsplash.com/photo-1713998525908-69c60daae07d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    category: "Oriental",
    sizes: ["30ml", "50ml", "100ml"],
    description:
      "Midnight in a Moroccan garden — deep Bulgarian rose entwined with precious oud and exotic spices.",
    notes: {
      top: ["Turkish Rose", "Saffron"],
      middle: ["Rose Absolute", "Incense"],
      base: ["Oud", "Amber", "Benzoin"],
    },
    inStock: true,
    badge: "Exclusive",
  },
  {
    id: "p6",
    name: "Cristal Blanc",
    subtitle: "Aquatic & Fresh",
    price: 155,
    image: "https://images.unsplash.com/photo-1759563874665-ffa9dfbd0205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    category: "Fresh",
    sizes: ["30ml", "50ml", "100ml"],
    description:
      "Crisp, clean, and utterly modern. Cristal Blanc is the fragrance of clarity — pure water, light musks, and cool green leaves.",
    notes: {
      top: ["Sea Salt", "Mint", "Grapefruit"],
      middle: ["Violet Leaf", "Lotus"],
      base: ["White Musk", "Ambergris", "Driftwood"],
    },
    inStock: true,
  },
];

export const categories = ["All", "Oriental", "Floral", "Woody", "Fresh"];

export const blogPosts = [
  {
    id: "b1",
    title: "The Evolution of Luxury Perfumery",
    excerpt:
      "From ancient Egypt's sacred incense to the modern niche fragrance house, explore how luxury perfumery has shaped culture across millennia.",
    date: "February 1, 2026",
    category: "Heritage",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1543422655-ac1c6ca993ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
  {
    id: "b2",
    title: "Effortless Elegance: Choosing Your Signature Scent",
    excerpt:
      "Your perfume is the invisible part of your identity. Learn how to find the fragrance that speaks your language without saying a word.",
    date: "March 13, 2026",
    category: "Guide",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1765022295046-f116d74d45a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
  {
    id: "b3",
    title: "The Art of Layering Fragrances",
    excerpt:
      "Master the technique of fragrance layering to create a completely unique and personal scent that evolves throughout the day.",
    date: "April 18, 2026",
    category: "Tips",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1765031089460-0909ddc3835a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
];
