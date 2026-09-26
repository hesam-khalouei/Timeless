export default function Thumbnail1500() {
  const perfumeImg1 =
    "https://images.unsplash.com/photo-1772191399367-91ed8d95664b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlJTIwZGFyayUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyODAwOTU2fDA&ixlib=rb-4.1.0&q=80&w=1080";
  const perfumeImg2 =
    "https://images.unsplash.com/photo-1723391962154-8a2b6299bc09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwZnJhZ3JhbmNlJTIwZ29sZGVuJTIwbHV4dXJ5JTIwYmxhY2slMjJiYWNrZ3JvdW5kfGVufDF8fHx8MTc3Mjg2MDg5Nnww&ixlib=rb-4.1.0&q=80&w=1080";
  const perfumeImg3 =
    "https://images.unsplash.com/photo-1622952750650-6b7be2d9f37c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwZ29sZCUyMG9ybmF0ZSUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzcyODYwODk5fDA&ixlib=rb-4.1.0&q=80&w=1080";

  const pages = [
    { label: "HOME",  sub: "Hero & Featured",  img: perfumeImg1 },
    { label: "SHOP",  sub: "Collection Grid",  img: perfumeImg2 },
    { label: "ABOUT", sub: "Brand Story",      img: perfumeImg3 },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#070707",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        fontFamily: "'Montserrat', sans-serif",
        overflow: "auto",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Montserrat:wght@200;300;400;500;600;700&display=swap');
        .tl2-serif { font-family: 'Cormorant Garamond', serif; }
        .tl2-sans  { font-family: 'Montserrat', sans-serif; }
        @keyframes pulse-gold {
          0%, 100% { opacity: 0.5; } 50% { opacity: 1; }
        }
        .pulse-gold { animation: pulse-gold 4s ease-in-out infinite; }
        @keyframes rotate-slow {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to   { transform: translate(-50%,-50%) rotate(360deg); }
        }
        .rotate-ring {
          animation: rotate-slow 20s linear infinite;
          transform-origin: center center;
        }
      `}</style>

      {/* ── CANVAS: EXACTLY 1500 × 1500 px ── */}
      <div
        style={{
          width: "1500px",
          height: "1500px",
          flexShrink: 0,
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(160deg, #070707 0%, #0e0c07 45%, #080807 100%)",
          boxShadow: "0 0 120px rgba(201,169,110,0.1)",
        }}
      >
        {/* ── BACKGROUND RADIAL ── */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          background: "radial-gradient(circle at 50% 45%, rgba(201,169,110,0.1) 0%, rgba(201,169,110,0.02) 40%, transparent 65%)",
        }} />

        {/* ── DOT GRID ── */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0, opacity: 0.06,
          backgroundImage: "radial-gradient(circle, rgba(201,169,110,0.8) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }} />

        {/* ── ROTATING OUTER RING ── */}
        <div style={{
          position: "absolute",
          top: "50%", left: "50%",
          width: "1260px", height: "1260px",
          marginLeft: "-630px", marginTop: "-630px",
          zIndex: 1,
          borderRadius: "50%",
          border: "1px solid rgba(201,169,110,0.08)",
          boxSizing: "border-box",
          animation: "rotate-slow 20s linear infinite",
        }}>
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} style={{
              position: "absolute",
              top: "50%", left: "50%",
              width: "100%", height: "1px",
              transformOrigin: "left center",
              transform: `translate(0, 0) rotate(${i * 7.5}deg)`,
              marginTop: "-0.5px",
            }}>
              <div style={{
                position: "absolute", right: 0,
                width: i % 4 === 0 ? "12px" : i % 2 === 0 ? "6px" : "3px",
                height: "1px",
                background: `rgba(201,169,110,${i % 4 === 0 ? 0.45 : i % 2 === 0 ? 0.2 : 0.1})`,
              }} />
            </div>
          ))}
        </div>

        {/* ── STATIC INNER CIRCLE ── */}
        <div style={{
          position: "absolute",
          top: "50%", left: "50%",
          width: "980px", height: "980px",
          marginLeft: "-490px", marginTop: "-490px",
          zIndex: 1,
          borderRadius: "50%",
          border: "1px solid rgba(201,169,110,0.14)",
          boxSizing: "border-box",
        }} />

        {/* ── SECOND INNER CIRCLE ── */}
        <div style={{
          position: "absolute",
          top: "50%", left: "50%",
          width: "700px", height: "700px",
          marginLeft: "-350px", marginTop: "-350px",
          zIndex: 1,
          borderRadius: "50%",
          border: "1px solid rgba(201,169,110,0.07)",
          boxSizing: "border-box",
        }} />

        {/* ══════════════════════════════════
            HERO IMAGE — centre oval
        ══════════════════════════════════ */}
        <div style={{
          position: "absolute",
          top: "50%", left: "50%",
          width: "560px", height: "800px",
          marginLeft: "-280px", marginTop: "-400px",
          zIndex: 3,
          overflow: "hidden",
          borderRadius: "50%",
          border: "1px solid rgba(201,169,110,0.3)",
          boxShadow: "0 0 80px rgba(201,169,110,0.1), inset 0 0 40px rgba(0,0,0,0.6)",
        }}>
          <img src={perfumeImg1} alt="Hero"
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center 20%",
              filter: "brightness(0.82) sepia(0.12) contrast(1.05)",
              mixBlendMode: "luminosity",
            }}
          />
          {/* Bottom fade */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "35%",
            background: "linear-gradient(to top, rgba(7,7,7,0.95) 0%, transparent 100%)",
          }} />
          {/* Top fade */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "20%",
            background: "linear-gradient(to bottom, rgba(7,7,7,0.6) 0%, transparent 100%)",
          }} />
        </div>

        {/* ── GOLD GLOW BEHIND IMAGE ── */}
        <div className="pulse-gold" style={{
          position: "absolute",
          top: "50%", left: "50%",
          width: "600px", height: "680px",
          marginLeft: "-300px", marginTop: "-390px",
          zIndex: 2,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(201,169,110,0.14) 0%, transparent 65%)",
        }} />

        {/* ══════════════════════════════════
            TOP — Brand Header
        ══════════════════════════════════ */}
        <div style={{
          position: "absolute",
          top: "52px", left: "50%",
          transform: "translateX(-50%)",
          zIndex: 5, textAlign: "center",
          width: "900px",
        }}>
          {/* Decorative line + emblem */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", marginBottom: "24px" }}>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,169,110,0.5))" }} />
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="15" stroke="#C9A96E" strokeWidth="1"/>
              <path d="M18 6 L18 30 M6 18 L30 18" stroke="#C9A96E" strokeWidth="0.7" opacity="0.4"/>
              <circle cx="18" cy="18" r="5" fill="none" stroke="#C9A96E" strokeWidth="0.8" opacity="0.8"/>
            </svg>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(201,169,110,0.5))" }} />
          </div>

          <div className="tl2-sans" style={{
            color: "rgba(201,169,110,0.65)",
            fontSize: "15px", letterSpacing: "10px", fontWeight: 300,
            marginBottom: "14px",
          }}>
            T I M E L E S S &nbsp;&nbsp; L U X U R Y
          </div>
          <div className="tl2-sans" style={{
            color: "rgba(201,169,110,0.3)",
            fontSize: "9px", letterSpacing: "5px", fontWeight: 300,
          }}>
            MAISON DE PARFUM &nbsp;·&nbsp; EST. MMXXV &nbsp;·&nbsp; LUXURY E-COMMERCE
          </div>
        </div>

        {/* ══════════════════════════════════
            BOTTOM — Title + Pages Strip
        ══════════════════════════════════ */}
        <div style={{
          position: "absolute",
          bottom: "48px", left: "50%",
          transform: "translateX(-50%)",
          zIndex: 5, textAlign: "center",
          width: "1100px",
        }}>
          {/* Main title */}
          <h1 className="tl2-serif" style={{
            color: "#F5EDD9", fontSize: "96px",
            fontWeight: 300, lineHeight: 1.0,
            margin: "0 0 20px", letterSpacing: "-1px",
          }}>
            The <span style={{ color: "#C9A96E", fontStyle: "italic" }}>Essence</span> of Elegance
          </h1>

          {/* Divider with diamond */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", margin: "24px 0" }}>
            <div style={{ width: "200px", height: "1px", background: "rgba(201,169,110,0.35)" }} />
            <div style={{ width: "7px", height: "7px", border: "1px solid rgba(201,169,110,0.6)", transform: "rotate(45deg)" }} />
            <div style={{ width: "200px", height: "1px", background: "rgba(201,169,110,0.35)" }} />
          </div>

          {/* Pages strip */}
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginBottom: "32px" }}>
            {pages.map((pg) => (
              <div key={pg.label} style={{
                width: "280px",
                background: "rgba(14,12,8,0.88)",
                border: "1px solid rgba(201,169,110,0.2)",
                borderRadius: "4px",
                overflow: "hidden",
              }}>
                {/* Mini preview image */}
                <div style={{ height: "120px", position: "relative", overflow: "hidden" }}>
                  <img src={pg.img} alt={pg.label}
                    style={{
                      width: "100%", height: "100%", objectFit: "cover",
                      filter: "brightness(0.4) sepia(0.2)",
                    }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span className="tl2-sans" style={{
                      color: "#C9A96E", fontSize: "10px", letterSpacing: "4px", fontWeight: 500,
                    }}>
                      {pg.label}
                    </span>
                  </div>
                </div>
                <div style={{ padding: "12px 16px" }}>
                  <div className="tl2-sans" style={{
                    color: "rgba(245,237,217,0.38)", fontSize: "7px", letterSpacing: "2px",
                  }}>
                    {pg.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech tags */}
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            {["REACT", "TAILWIND CSS", "REACT ROUTER", "RADIX UI", "LUCIDE REACT", "MOTION"].map((t) => (
              <span key={t} className="tl2-sans" style={{
                border: "1px solid rgba(201,169,110,0.18)",
                padding: "5px 14px",
                color: "rgba(201,169,110,0.38)",
                fontSize: "7px", letterSpacing: "2px",
                borderRadius: "2px",
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── LEFT SIDE LABEL ── */}
        <div style={{
          position: "absolute",
          left: "44px", top: "50%",
          zIndex: 5,
          transform: "translateY(-50%) rotate(-90deg)",
          transformOrigin: "center center",
        }}>
          <span className="tl2-sans" style={{
            color: "rgba(201,169,110,0.22)", fontSize: "8px", letterSpacing: "5px",
            whiteSpace: "nowrap",
          }}>
            LUXURY E-COMMERCE · GLOBAL MARKET
          </span>
        </div>

        {/* ── RIGHT SIDE LABEL ── */}
        <div style={{
          position: "absolute",
          right: "44px", top: "50%",
          zIndex: 5,
          transform: "translateY(-50%) rotate(90deg)",
          transformOrigin: "center center",
        }}>
          <span className="tl2-sans" style={{
            color: "rgba(201,169,110,0.22)", fontSize: "8px", letterSpacing: "5px",
            whiteSpace: "nowrap",
          }}>
            WEB DESIGN · 1500 × 1500 px
          </span>
        </div>

        {/* ── CORNER ORNAMENTS ── */}
        {[
          { top: "24px",    left: "24px",   rotate: "0deg" },
          { top: "24px",    right: "24px",  rotate: "90deg" },
          { bottom: "24px", left: "24px",   rotate: "270deg" },
          { bottom: "24px", right: "24px",  rotate: "180deg" },
        ].map((pos, i) => (
          <svg key={i} width="32" height="32" viewBox="0 0 32 32" fill="none"
            style={{
              position: "absolute", zIndex: 10, opacity: 0.4,
              top: pos.top, right: pos.right, bottom: pos.bottom, left: pos.left,
              transform: `rotate(${pos.rotate})`,
            }}>
            <path d="M2 2 L12 2 M2 2 L2 12" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ))}

        {/* ── CROSSHAIR (very faint) ── */}
        <div style={{
          position: "absolute", top: 0, left: "749px",
          width: "1px", height: "100%",
          background: "rgba(201,169,110,1)",
          opacity: 0.03, zIndex: 1,
        }} />
        <div style={{
          position: "absolute", left: 0, top: "749px",
          height: "1px", width: "100%",
          background: "rgba(201,169,110,1)",
          opacity: 0.03, zIndex: 1,
        }} />
      </div>
    </div>
  );
}
