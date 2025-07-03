"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setAtTop(currentScrollY < 10);
      if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-30 w-full bg-black text-white transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } ${atTop ? "shadow-none" : "shadow-lg"}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center nav-logo text-white text-xl font-bold">
            Divine
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/#about" className="text-[17.6px] font-poppins text-white transition-colors transform transition duration-200 hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#40ffaa] hover:to-[#4079ff]">About</Link>
            <Link href="/#projects" className="text-[17.6px] font-poppins text-white transition-colors transform transition duration-200 hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#40ffaa] hover:to-[#4079ff]">Projects</Link>
            <Link href="/#contact" className="text-[17.6px] font-poppins text-white transition-colors transform transition duration-200 hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#40ffaa] hover:to-[#4079ff]">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden opacity-70 hover:opacity-100 transition-opacity text-white"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              // X icon
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 mt-4 border-t border-gray-200 bg-black rounded-b-xl shadow-lg">
            <nav className="flex flex-col space-y-4 px-6">
              <Link href="/#about" className="text-sm font-medium text-white transition-colors transform transition duration-200 hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#40ffaa] hover:to-[#4079ff]" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="/#projects" className="text-sm font-medium text-white transition-colors transform transition duration-200 hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#40ffaa] hover:to-[#4079ff]" onClick={() => setIsMenuOpen(false)}>Projects</Link>
              <Link href="/#contact" className="text-sm font-medium text-white transition-colors transform transition duration-200 hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#40ffaa] hover:to-[#4079ff]" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 