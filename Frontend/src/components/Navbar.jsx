import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/urlLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-black/60">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-7 w-7 items-center justify-center ">
            <img src={logo}></img>
          </span>
          <span className="text-[#F69D25] text-2xl font-orbitron"><Link to="/">MANTHAN'25</Link></span>
        </a>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <ul className="flex items-center gap-4">
            <li className="text-slate-300 font-semibold hover:text-[#FAC918]"><a href="about">About</a></li>
            <li className="text-slate-300 font-semibold hover:text-[#FAC918]"><a href="#">Gallery</a></li>
            <li className="text-slate-300 font-semibold hover:text-[#FAC918]"><a href="#faq">FAQ</a></li>
            <li className="text-slate-300 font-semibold hover:text-[#FAC918]"><a href="#contact">Contact</a></li>
            <li className="text-slate-300 font-semibold hover:text-[#FAC918]"><a href="#">Sponsors</a></li>
            <li className="ml-2 px-3 py-1.5 rounded-2xl bg-indigo-600 text-white"><Link to={"/events"}>Explore</Link></li>
          </ul>
        </nav>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="/events"
            className="px-3 py-1.5 rounded-2xl bg-indigo-600 text-white text-sm"
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
          {["About", "Gallery", "FAQ", "Contact", "Sponsors"].map(
            (item, index) => {
              return (
                <li key={index} className="text-lg font-semibold border-2 p-2 rounded-xl border-[#FAC918] text-center text-[#FAC918] hover:text-[#FAC918]">
                  <a href={`#${item.toLowerCase()}`} onClick={toggleMenu}>{item}</a>
                </li>
              )
            }
          )}
          <li className="p-2 rounded-xl text-center bg-indigo-600">
            <Link to="/events" onClick={toggleMenu} className="text-lg font-semibold text-slate-300 hover:text-[#FAC918]">Explore</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
