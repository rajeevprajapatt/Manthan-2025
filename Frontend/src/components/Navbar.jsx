import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_sbss.png"

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const isEvent = props.isEvent;

  // Smooth scroll and close menu for anchor links
  const handleMobileAnchorClick = (e, hash) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        const yOffset = -70; // adjust for sticky navbar height
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        window.location.hash = hash;
      }
    }, 400); // wait longer for menu to close
  };

  return (
    <>
      {isEvent ? (
        <header className="sticky top-0 z-40 backdrop-blur-lg bg-black/60">
          <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2 font-semibold">
              <span className="inline-flex h-7 w-7 items-center justify-center ">
                <img src={logo}></img>
              </span>
              <span className="text-[#F69D25] text-lg md:text-2xl font-orbitron"><Link to="/">MANTHAN'25</Link></span>
            </a>

            {/* Desktop Navbar */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <ul className="flex items-center gap-4">
                <li className="text-slate-300 font-semibold hover:text-[#F69D25]"><Link to="/">Home</Link></li>
                <li className="text-slate-300 font-semibold hover:text-[#F69D25]"><a href="#events">Events</a></li>
                <li className="text-slate-300 font-semibold hover:text-[#F69D25]"><Link to="https://manthanca.vercel.app/" target="_blank" rel="noopener noreferrer">CA Portal</Link></li>
                <li className="text-slate-300 font-semibold hover:text-[#F69D25]"><a href="#">Gallery</a></li>
                <li className="p-2 px-3 rounded-2xl bg-black/30 border-2 border-[#F69D25] text-[#F69D25]"><Link to={"/events"}>Explore</Link></li>
              </ul>
            </nav>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-3">
              <a
                href="/events"
                className="px-3 py-1.5 rounded-2xl bg-black/30 border-2 border-[#F69D25] text-[#F69D25] text-sm"
              >
                Explore
              </a>
              <button onClick={toggleMenu} className="text-white">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu with Transition */}
          <div
            className={`md:hidden fixed top-0 right-0 h-screen w-2/3 bg-black/90 backdrop-blur-xl border-l border-slate-700 z-50 flex flex-col gap-5 p-6 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <button
              onClick={toggleMenu}
              className="self-end text-slate-300 hover:text-[#FAC918]"
            >
              <X size={28} />
            </button>
            <ul className="flex flex-col gap-4 mt-4">
              <li className="text-lg font-semibold border-2 p-2 rounded-xl border-slate-300 text-center text-slate-300 hover:text-[#F69D25]" onClick={toggleMenu}>
                <Link to="/">Home</Link>
              </li>
              <li className="text-lg font-semibold border-2 p-2 rounded-xl border-slate-300 text-center text-slate-300 hover:text-[#F69D25]">
                <a href="#events" onClick={e => handleMobileAnchorClick(e, '#events')}>Events</a>
              </li>
              <li className="text-lg font-semibold border-2 p-2 rounded-xl border-slate-300 text-center text-slate-300 hover:text-[#F69D25]">
                <Link to="https://manthanca.vercel.app/" target="_blank" rel="noopener noreferrer">CA Portal</Link>
              </li>
              <li className="text-lg font-semibold border-2 p-2 rounded-xl border-slate-300 text-center text-slate-300 hover:text-[#F69D25]">
                <a href="#" onClick={toggleMenu}>Gallery</a>
              </li>
              <li className="p-2 rounded-xl text-center bg-black/30 border-2 border-[#F69D25]">
                <Link to="/events" onClick={toggleMenu} className="text-lg font-semibold text-[#F69D25] hover:text-[#FAC918]">Explore</Link>
              </li>
            </ul>
          </div>
        </header>
      ) : (
        <header className="sticky top-0 z-40 backdrop-blur-lg bg-black/60">
          <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 font-semibold">
              <span className="inline-flex h-7 w-7 items-center justify-center ">
                <img src={logo}></img>
              </span>
              <span className="text-[#F69D25] text-lg md:text-2xl font-orbitron"><Link to="/">MANTHAN'25</Link></span>
            </a>

            {/* Desktop Navbar */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <ul className="flex items-center gap-4">
                <li className="text-slate-300 font-semibold hover:text-[#F69D25]"><a href="#home">Home</a></li>
                <li className="text-slate-300 font-semibold hover:text-[#F69D25]"><a href="#about">About</a></li>
                <li className="text-slate-300 font-semibold hover:text-[#F69D25]"><a href="#events">Events</a></li>
                <li className="text-slate-300 font-semibold hover:text-[#F69D25]"><a href="#team">Team</a></li>
                <li className="text-slate-300 font-semibold hover:text-[#F69D25]"><Link to="https://manthanca.vercel.app/" target="_blank" rel="noopener noreferrer">CA Portal</Link></li>
                <li className="text-slate-300 font-semibold hover:text-[#F69D25]"><a href="#">Gallery</a></li>
                <li className="p-2 px-3 rounded-2xl bg-black/30 border-2 border-[#F69D25] text-[#F69D25]"><Link to={"/events"}>Explore</Link></li>
              </ul>
            </nav>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-3">
              <a
                href="/events"
                className="px-3 py-1.5 rounded-2xl bg-black/30 border-2 border-[#F69D25] text-[#F69D25] text-sm"
              >
                Explore
              </a>
              <button onClick={toggleMenu} className="text-white">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu with Transition */}
          <div
            className={`md:hidden fixed top-0 right-0 h-screen w-2/3 bg-black/90 backdrop-blur-xl border-l border-slate-700 z-50 flex flex-col gap-5 p-6 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <button
              onClick={toggleMenu}
              className="self-end text-slate-300 hover:text-[#FAC918]"
            >
              <X size={28} />
            </button>
            <ul className="flex flex-col gap-4 mt-4">
              <li className="text-lg font-semibold border-2 p-2 rounded-xl border-slate-300 text-center text-slate-300 hover:text-[#F69D25]">
                <a href="#home" onClick={e => handleMobileAnchorClick(e, '#home')}>Home</a>
              </li>
              <li className="text-lg font-semibold border-2 p-2 rounded-xl border-slate-300 text-center text-slate-300 hover:text-[#F69D25]">
                <a href="#about" onClick={e => handleMobileAnchorClick(e, '#about')}>About</a>
              </li>
              <li className="text-lg font-semibold border-2 p-2 rounded-xl border-slate-300 text-center text-slate-300 hover:text-[#F69D25]">
                <a href="#events" onClick={e => handleMobileAnchorClick(e, '#events')}>Events</a>
              </li>
              <li className="text-lg font-semibold border-2 p-2 rounded-xl border-slate-300 text-center text-slate-300 hover:text-[#F69D25]">
                <a href="#team" onClick={e => handleMobileAnchorClick(e, '#team')}>Team</a>
              </li>
              <li className="text-lg font-semibold border-2 p-2 rounded-xl border-slate-300 text-center text-slate-300 hover:text-[#F69D25]">
                <a href="#gallery" onClick={e => handleMobileAnchorClick(e, '#gallery')}>Gallery</a>
              </li>
              <li className="text-lg font-semibold border-2 p-2 rounded-xl border-slate-300 text-center text-slate-300 hover:text-[#F69D25]">
                <Link to="https://manthanca.vercel.app/" target="_blank" rel="noopener noreferrer">CA Portal</Link>
              </li>
              {/* Gallery anchor updated above, remove this duplicate if present */}
              <li className="p-2 rounded-xl text-center bg-black/30 border-2 border-[#F69D25]">
                <Link to="/events" onClick={toggleMenu} className="text-lg font-semibold text-[#F69D25] hover:text-[#FAC918]">Explore</Link>
              </li>
            </ul>
          </div>
        </header>
      )
      }
    </>);
};

export default Navbar;
