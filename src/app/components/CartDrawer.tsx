import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, totalPrice, totalItems } =
    useCart();

  const freeShippingThreshold = 300;
  const remaining = freeShippingThreshold - totalPrice;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-[#0f0f0f] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-[#C9A87C]" />
                <span className="text-white tracking-widest uppercase text-sm">
                  Your Cart ({totalItems})
                </span>
              </div>
              <button
                onClick={closeCart}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            {/* Free Shipping Banner */}
            {totalPrice < freeShippingThreshold && totalItems > 0 && (
              <div className="px-6 py-3 bg-[#C9A87C]/10 border-b border-[#C9A87C]/20">
                <p className="text-[#C9A87C] text-xs tracking-wider">
                  Add <strong>${remaining.toFixed(0)}</strong> more for free worldwide shipping
                </p>
                <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#C9A87C] rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((totalPrice / freeShippingThreshold) * 100, 100)}%` }}
                  />
                </div>
              </div>
            )}
            {totalPrice >= freeShippingThreshold && totalItems > 0 && (
              <div className="px-6 py-3 bg-green-500/10 border-b border-green-500/20">
                <p className="text-green-400 text-xs tracking-wider">
                  ✓ You qualify for <strong>free worldwide shipping</strong>!
                </p>
              </div>
            )}

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-6 text-center">
                  <ShoppingBag size={48} className="text-white/20" />
                  <div>
                    <p className="text-white/60 text-lg mb-2">Your cart is empty</p>
                    <p className="text-white/30 text-sm">Discover our luxury fragrances</p>
                  </div>
                  <Link
                    to="/shop"
                    onClick={closeCart}
                    className="bg-[#C9A87C] text-black px-8 py-3 rounded-full text-sm tracking-widest uppercase hover:bg-[#b8956a] transition-colors"
                  >
                    Explore Collection
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <motion.div
                      key={`${item.product.id}-${item.size}`}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex gap-4 py-4 border-b border-white/10"
                    >
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-white/5">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">
                          {item.product.name}
                        </p>
                        <p className="text-[#C9A87C] text-xs tracking-wider mt-0.5">
                          {item.size} · {item.product.subtitle}
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-1">
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.size, item.quantity - 1)
                              }
                              className="text-white/60 hover:text-white transition-colors"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-white text-sm w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.size, item.quantity + 1)
                              }
                              className="text-white/60 hover:text-white transition-colors"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-white text-sm">
                              ${(item.product.price * item.quantity).toFixed(0)}
                            </span>
                            <button
                              onClick={() => removeFromCart(item.product.id, item.size)}
                              className="text-white/30 hover:text-red-400 transition-colors"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm tracking-wider">Subtotal</span>
                  <span className="text-white font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm tracking-wider">Shipping</span>
                  <span className={totalPrice >= freeShippingThreshold ? "text-green-400 text-sm" : "text-white/60 text-sm"}>
                    {totalPrice >= freeShippingThreshold ? "Free" : "Calculated at checkout"}
                  </span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center justify-between">
                  <span className="text-white tracking-wider">Total</span>
                  <span className="text-[#C9A87C] text-xl font-medium">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-[#C9A87C] text-black py-4 rounded-full text-sm tracking-widest uppercase hover:bg-[#b8956a] transition-colors">
                  Proceed to Checkout
                </button>
                <button
                  onClick={closeCart}
                  className="w-full border border-white/20 text-white/60 py-3 rounded-full text-sm tracking-widest uppercase hover:border-white/40 hover:text-white transition-all"
                >
                  Continue Shopping
                </button>
                <p className="text-center text-white/30 text-xs tracking-wider">
                  Secure checkout · 30-day returns · Worldwide shipping
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
