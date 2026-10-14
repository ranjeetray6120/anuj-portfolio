"use client";

import React from "react";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  scrollProgress: number;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, scrollProgress }) => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md transition-colors duration-200">
      <div className="wrap flex items-center justify-between h-16">
        <div className="brand font-extrabold text-[19px] tracking-tight">
          Anuj bharti<span>.</span>
        </div>

        <div className="navlinks hidden md:flex items-center gap-[26px]">
          <a href="#about" className="text-[14px] font-medium opacity-75 hover:opacity-100 hover:text-[var(--orange)] transition-colors">
            About
          </a>
          <a href="#services" className="text-[14px] font-medium opacity-75 hover:opacity-100 hover:text-[var(--orange)] transition-colors">
            What I do
          </a>
          <a href="#work" className="text-[14px] font-medium opacity-75 hover:opacity-100 hover:text-[var(--orange)] transition-colors">
            Case studies
          </a>
          <a href="#clients" className="text-[14px] font-medium opacity-75 hover:opacity-100 hover:text-[var(--orange)] transition-colors">
            Clients
          </a>
          <a href="#experience" className="text-[14px] font-medium opacity-75 hover:opacity-100 hover:text-[var(--orange)] transition-colors">
            Experience
          </a>
          <a href="#contact" className="text-[14px] font-medium opacity-75 hover:opacity-100 hover:text-[var(--orange)] transition-colors">
            Contact
          </a>
        </div>

        <div
          className="scrollbar"
          id="scrollbar"
          style={{ transform: `scaleX(${scrollProgress})`, transformOrigin: "left center" }}
          aria-hidden="true"
        />

        <button
          className="themetoggle"
          type="button"
          id="themebtn"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          aria-pressed={theme === "dark"}
        >
          <svg className="sun w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4.2"></circle>
            <path d="M12 2.5v2.6M12 18.9v2.6M2.5 12h2.6M18.9 12h2.6M5.2 5.2l1.9 1.9M16.9 16.9l1.9 1.9M18.8 5.2l-1.9 1.9M7.1 16.9l-1.9 1.9"></path>
          </svg>
          <svg className="moon w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.5 14.6A8.6 8.6 0 019.4 3.5a8.6 8.6 0 1011.1 11.1z"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};
