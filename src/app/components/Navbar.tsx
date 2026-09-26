import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { ShoppingBag, Search, Menu, X, Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems, openCart, wishlist } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex flex-col leading-none">
              <span className="text-white tracking-[0.35em] uppercase" style={{ fontSize: "20px", fontWeight: 700 }}>
                TIMELESS
              </span>
              <span className="text-[#C9A87C] tracking-[0.6em] uppercase" style={{ fontSize: "9px", fontWeight: 500 }}>
                LUXURY
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm tracking-widest uppercase transition-colors duration-200 relative group ${
                  location.pathname === link.href
                    ? "text-[#C9A87C]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#C9A87C] transition-all duration-300 ${
                    location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="text-white/80 hover:text-white transition-colors p-2"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link
              to="/shop"
              className="relative text-white/80 hover:text-white transition-colors p-2"
              aria-label="Wishlist"
            >
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#C9A87C] text-black text-[9px] font-bold rounded-full size-4 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <button
              onClick={openCart}
              className="relative text-white/80 hover:text-white transition-colors p-2"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 bg-[#C9A87C] text-black text-[9px] font-bold rounded-full size-4 flex items-center justify-center"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            <Link
              to="/shop"
              className="hidden lg:flex items-center gap-2 bg-[#C9A87C] text-black px-5 py-2.5 rounded-full text-sm tracking-widest uppercase hover:bg-[#b8956a] transition-colors"
            >
              Shop Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={link.href}
                  className={`text-3xl tracking-widest uppercase font-light transition-colors ${
                    location.pathname === link.href
                      ? "text-[#C9A87C]"
                      : "text-white hover:text-[#C9A87C]"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/shop"
                className="mt-4 bg-[#C9A87C] text-black px-10 py-3 rounded-full text-sm tracking-widest uppercase"
              >
                Shop Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-start justify-center pt-32 px-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSearchOpen(false);
            }}
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              className="w-full max-w-2xl"
            >
              <div className="flex items-center gap-4 border-b-2 border-[#C9A87C] pb-4">
                <Search size={24} className="text-[#C9A87C]" />
                <input
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search fragrances..."
                  className="flex-1 bg-transparent text-white text-2xl outline-none placeholder-white/30"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-white/60 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
              <p className="text-white/40 mt-4 text-sm tracking-widest uppercase">
                Popular: Oud, Floral, Woody, Oriental
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
