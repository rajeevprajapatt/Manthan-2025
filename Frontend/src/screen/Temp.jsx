import React, { useEffect, useRef } from "react";

export default function HeroSpaceBackground() {
  const layerRef = useRef(null);

  useEffect(() => {
    const el = layerRef.current;
    if (!el) return;
    const handler = (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX / w - 0.5) * 20;
      const y = (e.clientY / h - 0.5) * 20;
      el.style.setProperty("--parallax-x", `${x}px`);
      el.style.setProperty("--parallax-y", `${y}px`);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />

      {/* Stars (pure CSS, no images) */}
      <div className="absolute inset-0" aria-hidden>
        <div className="stars stars--sm" />
        <div className="stars stars--md" />
        <div className="stars stars--lg" />
      </div>

      {/* Floating planets & astronaut layer with slight parallax */}
      <div ref={layerRef} className="pointer-events-none absolute inset-0 [transform:translate(var(--parallax-x,0),var(--parallax-y,0))]">
        <Planet className="left-[5%] top-[18%] h-24 w-24" hue={210} delay={0} />
        <Planet className="right-[10%] top-[30%] h-32 w-32" hue={320} delay={1.5} ring />
        <Astronaut className="left-1/2 top-[45%] h-28 w-28 -translate-x-1/2" />
      </div>

      {/* Text content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow">LAKSHYA'25 vibe</h1>
        <p className="mt-3 max-w-xl text-base md:text-lg opacity-90">
          Euphoria: Orbit of Wonder — animated hero built with pure CSS.
        </p>

        {/* Bouncing circle button */}
        <BouncyCircle>
          Explore Events
        </BouncyCircle>
      </div>

      <style>{`
        .stars::before, .stars::after { content: ""; position: absolute; inset: 0; }
        .stars { position: absolute; inset: 0; background: transparent; }
        .stars--sm::before { box-shadow: ${Array.from({length: 200}).map(() => `${Math.random()*100}vw ${Math.random()*100}vh 0 .5px rgba(255,255,255,.6)`).join(',')}; }
        .stars--md::before { box-shadow: ${Array.from({length: 120}).map(() => `${Math.random()*100}vw ${Math.random()*100}vh 1px 0 rgba(255,255,255,.4)`).join(',')}; }
        .stars--lg::before { box-shadow: ${Array.from({length: 60}).map(() => `${Math.random()*100}vw ${Math.random()*100}vh 2px 0 rgba(255,255,255,.35)`).join(',')}; }
        .stars--sm, .stars--md, .stars--lg { animation: drift 120s linear infinite; }
        .stars--md { animation-duration: 180s; }
        .stars--lg { animation-duration: 240s; }
        @keyframes drift { from { transform: translateY(0); } to { transform: translateY(-10vh); } }

        @keyframes floaty { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-14px) rotate(1.5deg); } }
        .floaty { animation: floaty 6s ease-in-out infinite; }

        @keyframes bounce { 0%, 100% { transform: translateY(0) scale(1); filter: drop-shadow(0 12px 16px rgba(0,0,0,.45)); }
                             50% { transform: translateY(-18px) scale(1.02); filter: drop-shadow(0 24px 28px rgba(0,0,0,.35)); } }
        .bouncy { animation: bounce 1.6s cubic-bezier(.2,.8,.2,1) infinite; }
        .bouncy:active { transform: translateY(2px) scale(.98); }

        .ring::after { content: ""; position: absolute; inset: -20%; border-radius: 999px; border: 2px solid rgba(255,255,255,.35); transform: rotate(-18deg); }
      `}</style>
    </div>
  );
}

function Planet({ className = "", hue = 240, delay = 0, ring = false }) {
  return (
    <div
      className={`absolute floaty ${ring ? "ring" : ""} ${className}`}
      style={{
        animationDelay: `${delay}s`,
        background: `radial-gradient(circle at 30% 30%, hsl(${hue} 90% 70%), hsl(${hue} 80% 45%) 60%, hsl(${hue} 80% 30%))`,
        borderRadius: "999px",
        filter: "drop-shadow(0 10px 30px rgba(0,0,0,.6))",
      }}
    />
  );
}

function Astronaut({ className = "" }) {
  return (
    <div className={`absolute floaty ${className}`} style={{ animationDuration: "7.5s" }}>
      <div className="relative h-full w-full">
        <div className="absolute inset-0 rounded-full bg-white/95" />
        <div className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/70" />
        <div className="absolute -bottom-3 left-1/2 h-6 w-8 -translate-x-1/2 rounded-xl bg-white/90" />
      </div>
    </div>
  );
}

function BouncyCircle({ children }) {
  return (
    <button
      className="bouncy relative mt-8 inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-white shadow-lg"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(255,255,255,.2), rgba(99,102,241,.9) 60%, rgba(79,70,229,.95))",
      }}
      onClick={() => alert("You clicked the bouncing circle! 😄")}
    >
      {children}
    </button>
  );
}
