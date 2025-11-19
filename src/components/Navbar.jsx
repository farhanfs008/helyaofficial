import { useState, useEffect } from "react";
import logo from "../assets/logo-transparent.png"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white text-black ${ isScrolled || isOpen ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-opacity-100 shadow-sm"} `}
    >
      {/* Kontainer Konten Navbar */}
      <div className="flex items-center justify-between h-20 max-w-7xl mx-auto px-8 md:px-12">
        {/* Logo */}
        <div className="logo z-50 shrink-0">
          <a href="#beranda"><img src={logo} alt="helya logo" className="h-40 w-auto" /></a>
        </div>
        {/* 🍔 Hamburger Icon Button (Mobile Only) */}
        <button className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 relative" onClick={toggleMenu} aria-label="Toggle Menu">
          <span className={`bg-black block w-6 h-0.5 my-0.5 transition-all duration-300 ease-in-out absolute ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}`}
          ></span>
          <span className={`bg-black block w-6 h-0.5 my-0.5 transition-all duration-300 ease-in-out ${ isOpen ? "opacity-0" : "" }`}></span>
          <span className={`bg-black block w-6 h-0.5 my-0.5 transition-all duration-300 ease-in-out absolute ${ isOpen ? "-rotate-45 translate-y-0" : "translate-y-2" }`}></span>
        </button>

        {/* 2. Navigation Menu */}
        <ul className={`menu flex flex-col md:flex-row items-center gap-6 md:gap-x-10 absolute md:static top-0 right-0 w-full h-screen md:h-auto bg-white/95 md:bg-transparent pt-24 md:pt-0 pb-6 md:pb-0 transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"} md:static md:h-auto md:w-auto md:p-0 md:bg-transparent md:translate-x-0 md:opacity-100 `}>
          <li>
            <a href="#beranda" className="text-xl md:text-lg font-normal hover:text-rose-600 transition-colors" onClick={closeMenu}>Beranda</a>
          </li>
          <li>
            <a href="#produk" className="text-xl md:text-lg font-normal hover:text-rose-600 transition-colors" onClick={closeMenu}>Produk</a>
          </li>
          <li>
            <a href="#kontak" className="text-xl md:text-lg font-normal hover:text-rose-600 transition-colors" onClick={closeMenu}>Kontak</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;