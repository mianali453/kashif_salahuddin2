import svgPaths from "./svg-nqxmzi76e1";
import imgImage171 from "./ca543d5264aebf5d9426e80142bbcd568c1ecb00.png";
import imgImage9 from "./8e73b8238d14bf31948a8351675520eb6e955c13.png";

function ArrowRightSvg() {
  return (
    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" style={{ display: "inline-block", verticalAlign: "middle" }}>
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
      style={{ background: "#10245f", minHeight: "100vh" }}
      data-name="Herosection"
    >
      {/* ── Background texture image ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          alt=""
          src={imgImage171}
          className="w-full h-full object-cover"
          style={{ opacity: 0.6 }}
        />
      </div>

      {/* ── Glow orb (desktop only) ── */}
      <div
        className="absolute hidden md:block pointer-events-none z-0"
        style={{
          width: 370,
          height: 370,
          right: 80,
          top: 200,
          background: "rgba(255,255,255,0.08)",
          filter: "blur(160px)",
          borderRadius: "50%",
        }}
      />

      {/* ── NAVBAR ── */}
      <nav
        className="relative z-20 w-full flex items-center justify-between"
        style={{
          padding: "20px 40px",
          borderBottom: "1px solid rgba(237,237,237,0.25)",
        }}
      >
        <div
          className="italic text-[#eee9e9]"
          style={{ fontSize: 24 }}
        >
          <span style={{ fontFamily: "'IBM Plex Serif', serif", fontWeight: 500 }}>KASHIF </span>
          <span style={{ fontFamily: "'IBM Plex Serif', serif", fontWeight: 200 }}>SALAHUDDIN</span>
        </div>
        {/* Hamburger */}
        <a href="#" className="cursor-pointer shrink-0 z-20">
          <svg width="30" height="20" viewBox="0 0 30 19.7142" fill="none">
            <path d={svgPaths.p3d742900} fill="white" />
          </svg>
        </a>
      </nav>

      {/* ── MAIN CONTENT ── */}
      <div
        className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center"
        style={{ minHeight: "calc(100vh - 62px)" }}
      >
        {/* ── Person image ── desktop: left column | mobile: top ── */}
        <div
          className="block md:hidden w-full relative overflow-hidden"
          style={{ height: 380 }}
        >
          <img
            alt="Kashif Salahuddin"
            src={imgImage9}
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "auto",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              maxWidth: "none",
            }}
          />
        </div>

        {/* Desktop image — left column */}
        <div
          className="hidden md:block shrink-0 relative"
          style={{ width: "47%", height: "calc(100vh - 62px)", maxHeight: 820 }}
        >
          <img
            alt="Kashif Salahuddin"
            src={imgImage9}
            style={{
              position: "absolute",
              bottom: 0,
              left: "-8%",
              width: "115%",
              height: "108%",
              objectFit: "cover",
              objectPosition: "top center",
              maxWidth: "none",
            }}
          />
        </div>

        {/* ── Text content ── */}
        <div
          className="flex flex-col gap-6 md:gap-7 flex-1 px-6 pb-[60px] pt-8 md:px-10 md:pt-10"
        >
          {/* Badge pill */}
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              background: "rgba(255,255,255,0.18)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 48,
              padding: "12px 22px",
              backdropFilter: "blur(6px)",
            }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: "white",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              CEO Coach. 20+ Organizations. 5x Revenue Growth.
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              fontFamily: "'IBM Plex Serif', serif",
              fontStyle: "italic",
              fontWeight: 500,
              color: "white",
              fontSize: "clamp(32px, 4.5vw, 54px)",
              lineHeight: 1.2,
            }}
          >
            <p>One structured mind.</p>
            <p>Total control. Zero</p>
            <p>firefighting.</p>
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              color: "white",
              fontSize: "clamp(14px, 1.5vw, 16px)",
              lineHeight: 1.6,
              maxWidth: 520,
              margin: 0,
            }}
          >
            {`Whether you're stuck in daily operations, losing decisions to chaos, or building a team that still depends on you, you're likely one structural fix away. Kashif helps you find it and build it.`}
          </p>

          {/* CTA Button */}
          <div>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#efac25",
                color: "#02103f",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: 16,
                borderRadius: 40,
                padding: "16px 36px",
                textDecoration: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
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