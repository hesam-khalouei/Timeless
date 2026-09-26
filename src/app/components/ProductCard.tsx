import { useState } from "react";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useCart, Product } from "../context/CartContext";
import { Link } from "react-router";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] || product.sizes[0]);
  const [added, setAdded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const isWishlisted = wishlist.includes(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative bg-[#111] rounded-2xl overflow-hidden flex flex-col"
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10 bg-[#C9A87C] text-black text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">
          {product.badge}
        </div>
      )}

      {/* Wishlist */}
      <button
        onClick={() => toggleWishlist(product.id)}
        className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-black/60"
      >
        <Heart
          size={16}
          className={isWishlisted ? "text-[#C9A87C] fill-[#C9A87C]" : "text-white"}
        />
      </button>

      {/* Image */}
      <div className="relative overflow-hidden aspect-square bg-[#1a1a1a]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3"
            >
              <Link
                to={`/shop?product=${product.id}`}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <Eye size={16} />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-[#C9A87C] text-[10px] tracking-widest uppercase mb-1">
          {product.category} · {product.subtitle}
        </p>
        <h3 className="text-white mb-2" style={{ fontSize: "18px", fontWeight: 500 }}>
          {product.name}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
          {product.description}
        </p>

        {/* Size Selector */}
        <div className="flex gap-2 mb-4">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-3 py-1 rounded-full text-xs tracking-wider border transition-all ${
                selectedSize === size
                  ? "border-[#C9A87C] text-[#C9A87C] bg-[#C9A87C]/10"
                  : "border-white/20 text-white/50 hover:border-white/40"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Price + Add */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-white text-xl" style={{ fontWeight: 600 }}>
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-white/30 text-sm line-through">${product.originalPrice}</span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs tracking-widest uppercase transition-all ${
              added
                ? "bg-green-500 text-white"
                : "bg-[#C9A87C] text-black hover:bg-[#b8956a]"
            }`}
          >
            <ShoppingBag size={14} />
            {added ? "Added!" : "Add"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
