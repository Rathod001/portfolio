import React, { useState } from "react";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="sticky top-0 z-50 bg-blue-500 md:bg-white shadow-md" id="navbar">
          <nav className="sticky top-0 z-50 bg-blue-500 md:bg-white shadow-md">
      
      {/* Navbar Content */}
      <div className="flex justify-between items-center h-[70px] px-5 text-white md:text-black">

        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer md:text-blue-500 hover:scale-105 transition">
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-bold text-blue-950">
          <a href="#navbar" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#certifications" className="hover:text-blue-500">Certifications</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>

        {/* Resume Button (Desktop) */}
        <a
          href="/Meghavath_Mahender_Rathod.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={32} className="text-white" />
          ) : (
            <Menu size={32} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-[70px] left-0 w-full bg-blue-500 text-white flex flex-col items-center gap-4 py-6 z-50 md:hidden">

          <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
          <a href="#certifications" onClick={() => setMobileMenuOpen(false)}>Certifications</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>

          <a
            href="/Meghavath_Mahender_Rathod.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-white text-blue-500 px-4 py-2 rounded"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
    </section>
  );
}