import React from "react";
import svgPaths from "./svg-nqxmzi76e1";
import imgImage171 from "./ca543d5264aebf5d9426e80142bbcd568c1ecb00.png";
import imgImage9 from "./8e73b8238d14bf31948a8351675520eb6e955c13.png";

function ArrowRightSvg() {
  return (
    <svg
      width="14"
      height="11"
      viewBox="0 0 14 11"
      fill="none"
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
    >
      <path d="M0 5.5H12" stroke="#342646" strokeWidth="1.65" />
      <path d="M7.5 0.5L13 5.5" stroke="#342646" strokeWidth="1.65" />
      <path d="M7.5 10.5L13 5.5" stroke="#342646" strokeWidth="1.65" />
    </svg>
  );
}

export default function Herosection() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ background: "#10245f", minHeight: "100svh" }}
      data-name="Herosection"
    >
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          alt=""
          src={imgImage171}
          className="w-full h-full object-cover"
          style={{ opacity: 0.55 }}
        />
      </div>

      {/* Decorative glow — visible on md+ only */}
      <div
        className="absolute hidden md:block pointer-events-none z-0"
        style={{
          width: 420,
          height: 420,
          right: "5%",
          top: "20%",
          background: "rgba(255,255,255,0.07)",
          filter: "blur(180px)",
          borderRadius: "50%",
        }}
      />

      {/* ── NAVBAR ── */}
      <nav
        className="relative z-20 flex w-full items-center justify-between border-b border-[rgba(237,237,237,0.22)] py-[18px] px-6 md:px-[40px] min-[1101px]:!px-[144px]"
      >
        <div
          className="italic tracking-wide select-none"
          style={{ color: "#eee9e9", fontSize: "clamp(17px, 2.5vw, 24px)" }}
        >
          <span style={{ fontFamily: "'IBM Plex Serif', serif", fontWeight: 500 }}>
            KASHIF{" "}
          </span>
          <span style={{ fontFamily: "'IBM Plex Serif', serif", fontWeight: 200 }}>
            SALAHUDDIN
          </span>
        </div>

        <a href="#" className="cursor-pointer shrink-0 z-20 p-1">
          <svg width="28" height="19" viewBox="0 0 30 19.7142" fill="none">
            <path d={svgPaths.p3d742900} fill="white" />
          </svg>
        </a>
      </nav>

      {/* ── HERO BODY ── */}
      {/*
        Mobile  : single column — image on top, text block below
        Tablet  : two columns — image left (45%), text right (55%)
        Desktop : two columns — image left (48%), text right (52%)
      */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-61px)] w-full max-w-[1440px] flex-col md:flex-row md:items-stretch min-[769px]:max-[1000px]:px-[40px]">

        {/* ── PERSON IMAGE ── */}
        {/*
          Mobile  : full width, fixed height so text stays visible below
          md+     : fills left column, full remaining height
        */}
        <div className="w-full h-full  md:max-h-none md:h-auto md:w-[45%] lg:w-[48%] overflow-hidden flex-shrink-0">
          <img
            alt="Kashif Salahuddin"
            src={imgImage9}
            className="w-full h-full object-cover object-top"
            style={{ objectPosition: "center top" }}
          />
        </div>

        {/* ── TEXT CONTENT ── */}
        <div className="flex flex-col justify-center gap-5 md:gap-6 lg:gap-8 flex-1 px-8 pb-10 md:px-8 md:pb-14 lg:px-14 lg:pb-16">

          {/* Badge pill */}
          <div
            className="self-center md:self-start"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.28)",
              borderRadius: 48,
              padding: "10px 18px",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(10px, 1.8vw, 13px)",
                color: "white",
                letterSpacing: "0.9px",
                textTransform: "uppercase",
                lineHeight: 1.4,
              }}
            >
              CEO Coach. 20+ Organizations. 5x Revenue Growth.
            </span>
          </div>

          {/* Headline */}
          <h1
            className="m-0 p-0"
            style={{
              fontFamily: "'IBM Plex Serif', serif",
              fontStyle: "italic",
              fontWeight: 500,
              color: "white",
              fontSize: "clamp(28px, 5.5vw, 58px)",
              lineHeight: 1.18,
            }}
          >
            One structured mind.
            <br />
            Total control. Zero
            <br />
            firefighting.
          </h1>

          {/* Description */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              color: "rgba(255,255,255,0.88)",
              fontSize: "clamp(13px, 1.6vw, 16px)",
              lineHeight: 1.65,
              maxWidth: 520,
              margin: 0,
            }}
          >
            {`Whether you're stuck in daily operations, losing decisions to chaos, or building a team that still depends on you, you're likely one structural fix away. Kashif helps you find it and build it.`}
          </p>

          {/* CTA Button */}
          <div className="pt-1">
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#efac25",
                color: "#02103f",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(14px, 1.5vw, 16px)",
                borderRadius: 40,
                padding: "15px 32px",
                textDecoration: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Book a Coaching session
              <ArrowRightSvg />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
