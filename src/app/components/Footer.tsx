import { Link } from "react-router";
import { Instagram, Twitter, Facebook, Youtube, Mail } from "lucide-react";
import { useState } from "react";
import imgFrame7912 from "figma:asset/5ee35ed470dcbfb536bc41d813dccd4156b7376d.png";

const footerLinks = {
  Collection: [
    { label: "All Fragrances", href: "/shop" },
    { label: "Oriental", href: "/shop?category=Oriental" },
    { label: "Floral", href: "/shop?category=Floral" },
    { label: "Woody", href: "/shop?category=Woody" },
    { label: "Fresh", href: "/shop?category=Fresh" },
    { label: "Limited Edition", href: "/shop?category=Limited" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Story", href: "/about#story" },
    { label: "Sustainability", href: "/about#sustainability" },
    { label: "Careers", href: "/contact" },
    { label: "Press", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ],
  Support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/#faq" },
    { label: "Shipping & Returns", href: "/contact#shipping" },
    { label: "Track Order", href: "/contact" },
    { label: "Gift Wrapping", href: "/shop" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/contact" },
    { label: "Terms of Service", href: "/contact" },
    { label: "Cookie Policy", href: "/contact" },
    { label: "Authenticity", href: "/about" },
  ],
};

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      {/* Newsletter CTA */}
      <div className="border-b border-white/10 py-16 px-6 lg:px-20">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-white text-2xl lg:text-3xl mb-2">
              Stay Ahead of the Scent Curve
            </h3>
            <p className="text-white/50 text-base">
              Exclusive drops, trend forecasts & insider secrets — delivered to your inbox.
            </p>
          </div>
          {subscribed ? (
            <div className="flex items-center gap-3 text-[#C9A87C]">
              <Mail size={20} />
              <span className="tracking-wider">Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-3 w-full max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-white/5 border border-white/15 rounded-full px-5 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-[#C9A87C] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#C9A87C] text-black px-6 py-3 rounded-full text-sm tracking-widest uppercase hover:bg-[#b8956a] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 pt-16 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex flex-col mb-6">
              <span className="text-white tracking-[0.35em] uppercase" style={{ fontSize: "22px", fontWeight: 700 }}>
                TIMELESS
              </span>
              <span className="text-[#C9A87C] tracking-[0.6em] uppercase" style={{ fontSize: "10px", fontWeight: 500 }}>
                LUXURY
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Crafting extraordinary fragrances for those who demand more from every moment. 
              Shipped worldwide from our atelier in Paris.
            </p>
            {/* Big Logo Watermark */}
            <div className="h-10 w-40 relative mb-6 opacity-30">
              <img src={imgFrame7912} alt="Timeless" className="h-full w-auto object-contain" />
            </div>
            <div className="flex items-center gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-[#C9A87C] transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-xs tracking-widest uppercase mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/40 text-sm hover:text-[#C9A87C] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
            {[
              "🌍 Worldwide Shipping",
              "✦ Cruelty Free",
              "♻️ Sustainable Packaging",
              "🔒 Secure Payments",
              "↩ 30-Day Returns",
            ].map((badge) => (
              <span key={badge} className="text-white/30 text-xs tracking-widest uppercase">
                {badge}
              </span>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/25 text-xs tracking-wider">
              © 2026 Timeless Luxury. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-white/25 text-xs">We accept:</span>
              {["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"].map((pay) => (
                <span key={pay} className="text-white/30 text-xs">
                  {pay}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
