export default function Thumbnail1920() {
  const perfumeImg1 =
    "https://images.unsplash.com/photo-1772191399367-91ed8d95664b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlJTIwZGFyayUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyODAwOTU2fDA&ixlib=rb-4.1.0&q=80&w=1080";
  const perfumeImg2 =
    "https://images.unsplash.com/photo-1723391962154-8a2b6299bc09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwZnJhZ3JhbmNlJTIwZ29sZGVuJTIwbHV4dXJ5JTIwYmxhY2slMjJiYWNrZ3JvdW5kfGVufDF8fHx8MTc3Mjg2MDg5Nnww&ixlib=rb-4.1.0&q=80&w=1080";
  const perfumeImg3 =
    "https://images.unsplash.com/photo-1622952750650-6b7be2d9f37c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwZ29sZCUyMG9ybmF0ZSUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzcyODYwODk5fDA&ixlib=rb-4.1.0&q=80&w=1080";

  const products = [
    { name: "Noir Absolu", price: "$320", category: "EAU DE PARFUM", img: perfumeImg1 },
    { name: "Or Céleste", price: "$285", category: "EAU DE PARFUM", img: perfumeImg2 },
    { name: "Oud Impérial", price: "$410", category: "EXTRAIT", img: perfumeImg3 },
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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@200;300;400;500;600;700&display=swap');
        .tl-serif { font-family: 'Cormorant Garamond', serif; }
        .tl-sans  { font-family: 'Montserrat', sans-serif; }
        @keyframes shimmer {
          0% { opacity: 0.4; } 50% { opacity: 1; } 100% { opacity: 0.4; }
        }
        .shimmer { animation: shimmer 3s ease-in-out infinite; }
      `}</style>

      {/* ── CANVAS: EXACTLY 1920 × 1080 px ── */}
      <div
        style={{
          width: "1920px",
          height: "1080px",
          flexShrink: 0,
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #070707 0%, #111008 40%, #0d0c07 100%)",
          boxShadow: "0 0 120px rgba(201,169,110,0.07)",
        }}
      >
        {/* ── BACKGROUND RADIAL GLOWS ── */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <div style={{
            position: "absolute", top: "10%", left: "25%",
            width: "45%", height: "80%",
            background: "radial-gradient(ellipse, rgba(201,169,110,0.08) 0%, transparent 70%)",
          }} />
          <div style={{
            position: "absolute", bottom: 0, right: 0,
            width: "35%", height: "55%",
            background: "radial-gradient(ellipse at bottom right, rgba(201,169,110,0.06) 0%, transparent 70%)",
          }} />
        </div>

        {/* ── FINE GRID OVERLAY ── */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0, opacity: 0.035,
          backgroundImage: "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />

        {/* ══════════════════════════════════════
            LEFT PANEL  — Brand Identity + Hero
        ══════════════════════════════════════ */}
        <div style={{
          position: "absolute", top: 0, left: 0, bottom: 0,
          width: "54%", zIndex: 2,
          display: "flex", flexDirection: "column",
          padding: "60px 44px 54px 80px",
        }}>
          {/* Top bar */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="#C9A96E" strokeWidth="1.2" />
              <path d="M16 6 L16 26 M6 16 L26 16" stroke="#C9A96E" strokeWidth="0.8" opacity="0.6" />
              <circle cx="16" cy="16" r="4" fill="none" stroke="#C9A96E" strokeWidth="1" />
            </svg>
            <span className="tl-sans" style={{ color: "#C9A96E", fontSize: "11px", letterSpacing: "4px", fontWeight: 500 }}>
              TIMELESS LUXURY
            </span>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(201,169,110,0.5) 0%, transparent 100%)" }} />
            <span className="tl-sans" style={{ color: "rgba(201,169,110,0.45)", fontSize: "9px", letterSpacing: "3px" }}>
              EST. MMXXV
            </span>
          </div>

          {/* Decorative divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "52px 0 36px" }}>
            <div style={{ width: "40px", height: "1px", background: "#C9A96E", opacity: 0.7 }} />
            <div style={{ width: "5px", height: "5px", border: "1px solid #C9A96E", transform: "rotate(45deg)", opacity: 0.7 }} />
          </div>

          {/* Eyebrow */}
          <div className="tl-sans" style={{
            color: "rgba(201,169,110,0.65)", fontSize: "12px",
            letterSpacing: "6px", fontWeight: 300, marginBottom: "20px",
          }}>
            THE ART OF SCENT
          </div>

          {/* Main headline */}
          <h1 className="tl-serif" style={{
            color: "#F5EDD9", fontSize: "108px", fontWeight: 300,
            lineHeight: 1.0, margin: "0 0 28px", letterSpacing: "-1px",
          }}>
            Timeless<br />
            <span style={{ color: "#C9A96E", fontStyle: "italic" }}>Luxury</span>
          </h1>

          {/* Tagline */}
          <p className="tl-sans" style={{
            color: "rgba(245,237,217,0.55)", fontSize: "13px",
            fontWeight: 300, letterSpacing: "2px", lineHeight: 1.9,
            maxWidth: "400px", marginBottom: "52px",
          }}>
            A global destination for rare and extraordinary fragrances,
            curated for the discerning few who seek beauty beyond the ordinary.
          </p>

          {/* CTA row */}
          <div style={{ display: "flex", alignItems: "center", gap: "28px", marginBottom: "auto" }}>
            <div style={{
              padding: "14px 38px",
              border: "1px solid #C9A96E",
              color: "#C9A96E", fontSize: "10px",
              letterSpacing: "3px",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
            }}>
              EXPLORE COLLECTION
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "28px", height: "1px", background: "rgba(245,237,217,0.3)" }} />
              <span className="tl-sans" style={{
                color: "rgba(245,237,217,0.4)", fontSize: "9px", letterSpacing: "2px", fontWeight: 300,
              }}>
                DISCOVER MORE
              </span>
            </div>
          </div>

          {/* Stats row */}
          <div style={{
            display: "flex", gap: "52px", paddingTop: "40px",
            borderTop: "1px solid rgba(201,169,110,0.15)",
          }}>
            {[
              { num: "120+", label: "FRAGRANCES" },
              { num: "40+",  label: "COUNTRIES" },
              { num: "50K+", label: "CLIENTS" },
            ].map((s) => (
              <div key={s.label}>
                <div className="tl-serif" style={{
                  color: "#C9A96E", fontSize: "48px", fontWeight: 300, lineHeight: 1,
                }}>
                  {s.num}
                </div>
                <div className="tl-sans" style={{
                  color: "rgba(201,169,110,0.5)", fontSize: "8px",
                  letterSpacing: "3px", fontWeight: 400, marginTop: "6px",
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── HERO PERFUME IMAGE ── */}
        <div style={{
          position: "absolute", top: "5%", left: "28%", bottom: "5%",
          width: "28%", zIndex: 3,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{
            position: "absolute", inset: "-5%",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(201,169,110,0.12) 0%, transparent 65%)",
          }} className="shimmer" />
          <img src={perfumeImg1} alt="Hero perfume"
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center",
              mixBlendMode: "luminosity",
              filter: "contrast(1.05) brightness(0.9) sepia(0.15)",
            }}
          />
          <div style={{
            position: "absolute", top: "10%", bottom: "10%", right: "-1px",
            width: "1px",
            background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.6) 30%, rgba(201,169,110,0.6) 70%, transparent)",
          }} />
        </div>

        {/* ══════════════════════════════════════
            RIGHT PANEL — Website UI Preview
        ══════════════════════════════════════ */}
        <div style={{
          position: "absolute", top: 0, right: 0, bottom: 0,
          width: "46%", zIndex: 2,
          display: "flex", flexDirection: "column",
          padding: "52px 60px 40px 36px",
          gap: "18px",
        }}>

          {/* ── Navbar Mockup ── */}
          <div style={{
            background: "rgba(10,9,6,0.9)",
            border: "1px solid rgba(201,169,110,0.2)",
            borderRadius: "4px",
            padding: "14px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}>
            <span className="tl-sans" style={{ color: "#C9A96E", fontSize: "9px", letterSpacing: "3px" }}>TIMELESS LUXURY</span>
            <div style={{ display: "flex", gap: "24px" }}>
              {["HOME", "SHOP", "ABOUT", "BLOG"].map((n) => (
                <span key={n} className="tl-sans" style={{
                  color: n === "SHOP" ? "#C9A96E" : "rgba(245,237,217,0.45)",
                  fontSize: "8px", letterSpacing: "2px",
                  borderBottom: n === "SHOP" ? "1px solid #C9A96E" : "none",
                  paddingBottom: "2px",
                }}>
                  {n}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(201,169,110,0.7)" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(201,169,110,0.7)" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(201,169,110,0.7)" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </div>
          </div>

          {/* ── Hero banner mockup ── */}
          <div style={{
            position: "relative",
            borderRadius: "4px",
            overflow: "hidden",
            border: "1px solid rgba(201,169,110,0.15)",
            height: "200px",
            flexShrink: 0,
          }}>
            <img src={perfumeImg2} alt="Hero banner"
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.35) sepia(0.2)" }} />
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: "10px",
            }}>
              <div className="tl-sans" style={{ color: "rgba(201,169,110,0.7)", fontSize: "8px", letterSpacing: "5px" }}>
                LUXURY FRAGRANCE HOUSE
              </div>
              <div className="tl-serif" style={{ color: "#F5EDD9", fontSize: "34px", fontWeight: 300, textAlign: "center" }}>
                The <span style={{ color: "#C9A96E", fontStyle: "italic" }}>Essence</span> of Elegance
              </div>
              <div style={{
                marginTop: "4px", padding: "6px 20px",
                border: "1px solid rgba(201,169,110,0.5)",
                fontSize: "7px", color: "#C9A96E", letterSpacing: "3px",
                fontFamily: "'Montserrat', sans-serif",
              }}>
                SHOP NOW
              </div>
            </div>
          </div>

          {/* ── Product Cards Row ── */}
          <div style={{ display: "flex", gap: "16px", flex: 1 }}>
            {products.map((p, i) => (
              <div key={p.name} style={{
                flex: 1,
                background: "rgba(14,12,8,0.95)",
                border: "1px solid rgba(201,169,110,0.18)",
                borderRadius: "4px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}>
                <div style={{ height: "55%", position: "relative", overflow: "hidden" }}>
                  <img src={p.img} alt={p.name}
                    style={{
                      width: "100%", height: "100%", objectFit: "cover",
                      filter: "brightness(0.75) sepia(0.1) contrast(1.05)",
                    }}
                  />
                  {i === 0 && (
                    <div style={{
                      position: "absolute", top: "10px", left: "10px",
                      background: "#C9A96E", padding: "3px 8px",
                      fontSize: "6px", color: "#070707",
                      letterSpacing: "2px",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                    }}>
                      BESTSELLER
                    </div>
                  )}
                  <div style={{
                    position: "absolute", top: "10px", right: "10px",
                    width: "24px", height: "24px",
                    background: "rgba(7,7,7,0.6)", borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(201,169,110,0.8)" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </div>
                </div>
                <div style={{ padding: "14px", flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div className="tl-sans" style={{ color: "rgba(201,169,110,0.55)", fontSize: "7px", letterSpacing: "2px" }}>
                    {p.category}
                  </div>
                  <div className="tl-serif" style={{ color: "#F5EDD9", fontSize: "18px", fontWeight: 400 }}>
                    {p.name}
                  </div>
                  <div style={{ flex: 1 }} />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="tl-serif" style={{ color: "#C9A96E", fontSize: "18px", fontWeight: 400 }}>
                      {p.price}
                    </span>
                    <div style={{
                      width: "28px", height: "28px",
                      border: "1px solid rgba(201,169,110,0.4)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(201,169,110,0.8)" strokeWidth="2">
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <path d="M16 10a4 4 0 0 1-8 0"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Bottom accent ── */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            paddingTop: "16px", borderTop: "1px solid rgba(201,169,110,0.12)",
            flexShrink: 0,
          }}>
            {["HOME", "SHOP", "ABOUT", "BLOG", "CONTACT"].map((p) => (
              <span key={p} className="tl-sans" style={{
                color: "rgba(201,169,110,0.4)", fontSize: "7px", letterSpacing: "2px",
              }}>
                {p}
              </span>
            ))}
            <div style={{ display: "flex", gap: "8px" }}>
              {["IG", "FB", "TW"].map((s) => (
                <div key={s} style={{
                  width: "20px", height: "20px",
                  border: "1px solid rgba(201,169,110,0.25)", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span className="tl-sans" style={{ color: "rgba(201,169,110,0.5)", fontSize: "5px" }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CORNER ORNAMENTS ── */}
        {[
          { top: "20px", left: "20px",   rotate: "0deg" },
          { top: "20px", right: "20px",  rotate: "90deg" },
          { bottom: "20px", left: "20px",  rotate: "270deg" },
          { bottom: "20px", right: "20px", rotate: "180deg" },
        ].map((pos, i) => (
          <svg key={i} width="28" height="28" viewBox="0 0 28 28" fill="none"
            style={{ position: "absolute", opacity: 0.4, zIndex: 10, ...pos, transform: `rotate(${pos.rotate})` }}>
            <path d="M2 2 L10 2 M2 2 L2 10" stroke="#C9A96E" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ))}

        {/* ── BOTTOM INFO BAR ── */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "36px",
          background: "rgba(201,169,110,0.05)",
          borderTop: "1px solid rgba(201,169,110,0.12)",
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          zIndex: 10,
        }}>
          <span className="tl-sans" style={{ color: "rgba(201,169,110,0.4)", fontSize: "8px", letterSpacing: "3px" }}>
            TIMELESS LUXURY — GLOBAL E-COMMERCE
          </span>
          <div style={{ display: "flex", gap: "28px" }}>
            {["MULTI-PAGE SPA", "REACT + TAILWIND CSS", "DARK LUXURY AESTHETIC"].map((t) => (
              <span key={t} className="tl-sans" style={{ color: "rgba(201,169,110,0.28)", fontSize: "7px", letterSpacing: "2px" }}>
                {t}
              </span>
            ))}
          </div>
          <span className="tl-sans" style={{ color: "rgba(201,169,110,0.4)", fontSize: "8px", letterSpacing: "2px" }}>
            1920 × 1080 px
          </span>
        </div>
      </div>
    </div>
  );
}
