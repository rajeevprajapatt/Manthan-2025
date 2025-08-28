import React, { useMemo, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Mail, Phone } from "lucide-react";
import logo from "../assets/urlLogo.png";
import Footer from "../components/Footer";
import mainImage from "../assets/danger_20250825_204323_0000_page-0001.jpg";

const homeEvents = {
  img1: {
    src: "src/assets/DSC05692.JPG",
    title: "Celebrity Night",
  },
  img2: "src/assets/DSC05692.JPG",
  img3: "src/assets/DSC05692.JPG",
  img4: "src/assets/DSC05692.JPG",
  img5: "src/assets/DSC05692.JPG"
}

const team = [
  {
    title: "Head Organizer",
    members: ["Ms Poonam Poonia"],
  },
  {
    title: "Conveners",
    members: ["Mr J.P Bhamaniya", "Ms Divya Mam"],
  },
  {
    title: "Technical Coordinators",
    members: ["Rajeev Prajapat", "Kishan Singh Tanwar", "Anurag Kumawat"],
  },
  {
    title: "Ryhthm Club",
    members: ["Aakash Jangid", "Priyanshi Sharma"],
  },
  {
    title: "Sports Coordinators",
    members: ["Vinita Choudhary", "Ankit"],
  },
  {
    title: "Media Coordinators",
    members: ["Sumit Singh", "Tanmay Mahawar"],
  },
  {
    title: "Innovation Club",
    members: ["Nisha", "Akshay"],
  },
  {
    title: "Eco-Friendly Club",
    members: ["Sakshi Verma", "Himani Mishra"],
  },
];

export default function Manthan() {

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

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-10-12T00:00:00").getTime(); // change date here

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home min-h-screen text-slate-900 backdrop-blur-sm bg-black/30">
      <Navbar />
      <div className=" h-full w-full overflow-hidden bg-black/30">
        <div ref={layerRef} className="pointer-events-none absolute inset-0 [transform:translate(var(--parallax-x,0),var(--parallax-y,0))]">
          <Planet className="left-[5%] top-[10%] h-24 w-24" hue={210} delay={0} ring />
          <Planet className="right-[20%] top-[3%] h-32 w-32" hue={320} delay={1.5} ring />
          <Astronaut className="left-2/3 top-[10%] h-28 w-28 -translate-x-1/2" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20 grid md:grid-cols-1 gap-10 items-center relative">
          <div className="flex flex-col justify-center items-center text-center">
            <p className="mt-1 text-[#F69D25] text-2xl shadow-sm md:text-4xl font-orbitron">Sri Balaji Shiksha Samiti <br /> present's</p>
            <h1 className="mt-4 text-7xl md:text-[170px] font-bold metal-mania bg-gradient-to-br from-[#F69D25] to-[#9529B1] 
  bg-clip-text text-transparent leading-[1.1] shadow-md">MANTHAN 2K25</h1>
            <p className="mt-4 text-[#F69D25] md:text-lg">Tech • Culture • Sports • Workshops • Talks</p>
            <p className="mt-4 text-[#F69D25] md:text-lg">Discover events, register in seconds, and track all your passes in one place.</p>
            <div className="mt-6 flex items-center gap-3">
              <BouncyCircle href="/events">Explore Events</BouncyCircle>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-300 font-semibold">
              <div>🎯 Curated Tracks</div>
              <div>🏆 Prizes & Swag</div>
              <div>🧾 E‑tickets</div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl border p-5 shadow-sm border-[#F69D25]">
              <img alt="festival poster" className="rounded-2xl w-full" src={mainImage} />
              <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
                <Stat k="50+" v="Events" />
                <Stat k="2000+" v="Participants" />
                <Stat k="₹2L+" v="Prizes" />
              </div>
            </div>
            <div className="absolute bottom-6 -left-6 h-20 w-20 rounded-3xl bg-white/40 blur-2xl" />
            <div className="absolute -top-6 -right-6 h-20 w-20 rounded-3xl bg-white/40 blur-2xl" />
          </div>
        </div>

        <style>{`
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

      {/* ABOUT */}
      <section id="about" className="py-12 md:py-12 bg-black/30">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center bg-gradient-to-br from-[#F69D25] to-[#9529B1] bg-clip-text text-transparent leading-[1.1]">About Manthan</h2>
          <p className="mt-8 text-slate-300 md:text-2xl">Manthan is a multi‑disciplinary college fest featuring technology, culture, design, sports, and more. The platform enables online discovery, easy registrations, e‑tickets, and smooth on‑ground ops.</p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm md:text-lg text-slate-300 list-disc list-inside">
            <li>Unified registrations with OTP/email verification</li>
            <li>Team & individual formats supported</li>
            <li>QR‑based check‑in and results publishing</li>
            <li>Flexible admin CMS for events, slots, judges</li>
          </ul>
        </div>
      </section>

      {/* COUNTDOWN */}
      <div className="flex flex-col items-center justify-center text-white px-6 pt-12 bg-black/30">
        <div className="rounded-2xl shadow-[0_0_25px_rgba(255,200,0,0.3)] p-8 md:p-12 w-full max-w-6xl backdrop-blur-sm">
          <h1 className="text-2xl md:text-5xl font-orbitron font-bold text-center mb-10 bg-gradient-to-br from-[#F69D25] to-[#9529B1] bg-clip-text text-transparent leading-[1.1]">
            Time Until Manthan 2k25
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <TimeBox label="Days" value={timeLeft.days} />
            <TimeBox label="Hours" value={timeLeft.hours} />
            <TimeBox label="Minutes" value={timeLeft.minutes} />
            <TimeBox label="Seconds" value={timeLeft.seconds} />
          </div>
        </div>
      </div>

      {/* FILTERS + EVENTS */}
      <section id="events" className="py-12 md:pt-24 bg-black/30">
        <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-2 bg-gradient-to-br from-[#F69D25] to-[#9529B1] bg-clip-text text-transparent leading-[1.1]">Events</h2>
        <div className="mx-auto max-w-7xl px-4 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Poster Row (full row span but centered content) */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex justify-center py-8">
              <div className="lg:col-span-2 w-full lg:w-3/4 xl:w-2/3 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(255,200,0,0.3)] bg-black/30">
                <div className="aspect-[3/2] w-full">
                  <img
                    src={homeEvents.img1.src}// apna poster
                    alt="Main Event Poster"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="py-3 border-t border-[#F69D25] bg-black/70">
                  <p className="text-2xl text-center text-[#F69D25] font-semibold font-orbitron">{homeEvents.img1.title}</p>
                </div>
              </div>
            </div>
            {/* 🔹 4 Events (2nd row) */}
            {Object.keys(homeEvents).slice(1, 5).map((event, index) => {
              return (
                <EventCard key={index} e={homeEvents[event]} />
              )
            })}

          </div>
        </div>
        <div className="mt-6 flex justify-center items-center gap-3">
          <BouncyCircle href="/events">View All Events</BouncyCircle>
        </div>
      </section>

      {/* TEAM */}
      <section className="p-6 w-full bg-black/30">
        <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-10 bg-gradient-to-br from-[#F69D25] to-[#9529B1] bg-clip-text text-transparent leading-[1.1]">Our Team</h2>
        <div className="space-y-6 max-w-7xl mx-auto">
          <div className="w-full bg-black/30 rounded-2xl shadow-[0_0_25px_rgba(255,200,0,0.3)] p-6 flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold mb-2 text-[#F69D25]">{team[0].title}</h3>
            <ul className="list-disc pl-6 text-slate-300">
              {team[0].members.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-black/30 rounded-2xl shadow-[0_0_25px_rgba(255,200,0,0.3)] p-6 flex flex-col justify-center items-center">
              <h3 className="text-xl font-semibold mb-2 text-[#F69D25]">{team[1].title}</h3>
              <ul className="list-disc flex justify-center items-center text-slate-300 gap-7 pl-8 md:pl-0">
                {team[1].members.map((m, i) => (
                  <li className="" key={i}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.slice(2).map((category, idx) => (
              <div
                key={idx}
                className="bg-black/30 shadow-[0_0_25px_rgba(255,200,0,0.3)] rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#F69D25]">{category.title}</h3>
                <ul className="list-disc pl-6 text-slate-300">
                  {category.members.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 bg-black/30">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-10 bg-gradient-to-br from-[#F69D25] to-[#9529B1] bg-clip-text text-transparent leading-[1.1]">FAQ</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <Faq q="Is registration free?" a="Most events are free or low‑cost. Paid events show a fee on the card." />
            <Faq q="Team size?" a="Varies by event. See the detail modal for exact rules." />
            <Faq q="Do I get an e‑ticket?" a="Yes. You’ll receive an email with a QR pass after registration." />
            <Faq q="How do I pay?" a="UPI/cards supported via your chosen gateway on the register flow." />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function EventCard({ e }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(255,200,0,0.3)] bg-black/30 transition-shadow">
      <div className="aspect-[16/16] bg-slate-100 overflow-hidden">
        <img src={e} alt={e} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

function Stat({ k, v }) {
  return (
    <div className="rounded-xl border border-[#F69D25] p-3">
      <div className="text-2xl font-bold text-[#F69D25]">{k}</div>
      <div className="text-slate-300 text-sm">{v}</div>
    </div>
  );
}

function Faq({ q, a }) {
  return (
    <div className="rounded-2xl p-5 bg-black/10 shadow-[0_0_25px_rgba(255,200,0,0.3)]">
      <div className="font-medium text-lg text-[#F69D25]">{q}</div>
      <p className="text-sm text-slate-600 mt-1">{a}</p>
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
        <div className="absolute inset-0 rounded-full bg-purple-800" />
        <div className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/70" />
        <div className="absolute -bottom-3 left-1/2 h-6 w-8 -translate-x-1/2 rounded-xl bg-black/70" />
      </div>
    </div>
  );
}

function BouncyCircle({ children, href }) {
  return (
    <a href={href}
      className="bouncy relative mt-8 inline-flex text-center items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-[#F69D25] shadow-lg bg-black/40 border border-[#F69D25] backdrop-blur-md"
    >
      {children}
    </a>
  );
}


function TimeBox({ label, value }) {
  return (
    <div className="rounded-2xl p-6 shadow-[0_0_15px_rgba(255,200,0,0.15)]">
      <div className="text-4xl font-bold bg-gradient-to-b from-orange-400 to-yellow-300 bg-clip-text text-transparent">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-sm md:text-base text-gray-300 mt-2">{label}</div>
    </div>
  );
}