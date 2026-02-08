// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-white/10 shadow-lg border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex justify-between items-center py-4`}>
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 rounded-full shadow-md hover:scale-105 transition-transform"
          />
          <p className="text-white font-semibold text-[20px] tracking-wide">
            MD Kaif
            <span className="ml-2 hidden sm:inline opacity-70">| Developer</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              onClick={() => setActive(nav.title)}
              className="relative text-white/80 hover:text-white transition-all cursor-pointer text-[17px] font-medium"
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-white transition-all duration-300 ${
                  active === nav.title ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              />
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex items-center justify-end">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Animated dropdown */}
          <div
            className={`absolute top-20 right-4 p-6 rounded-2xl min-w-[160px] shadow-xl border border-white/10 backdrop-blur-xl bg-black/40 transition-all duration-300 origin-top-right ${
              toggle ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`text-[16px] cursor-pointer ${
                    active === nav.title ? "text-white" : "text-gray-300"
                  }`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false);
                    const element = document.getElementById(nav.id);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
