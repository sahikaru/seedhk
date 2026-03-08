"use client";

import { useState, useEffect } from "react";
import { navLinks, ctaLink } from "@/data/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-8 transition-colors duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {/* Left: Logo */}
      <a href="/" className="flex items-center gap-2 shrink-0">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          {/* Jellyfish-style icon */}
          <defs>
            <linearGradient
              id="logoGrad"
              x1="4"
              y1="4"
              x2="28"
              y2="28"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6366f1" />
              <stop offset="0.5" stopColor="#8b5cf6" />
              <stop offset="1" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          {/* Dome / head */}
          <ellipse cx="16" cy="12" rx="10" ry="8" fill="url(#logoGrad)" />
          {/* Tentacles */}
          <path
            d="M8 14 C8 20, 6 26, 7 28"
            stroke="url(#logoGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M12 16 C12 22, 11 26, 12 29"
            stroke="url(#logoGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M16 17 C16 22, 16 26, 16 30"
            stroke="url(#logoGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M20 16 C20 22, 21 26, 20 29"
            stroke="url(#logoGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M24 14 C24 20, 26 26, 25 28"
            stroke="url(#logoGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Inner glow spots */}
          <circle cx="12" cy="10" r="1.5" fill="white" opacity="0.6" />
          <circle cx="18" cy="9" r="1" fill="white" opacity="0.4" />
        </svg>
        <span className="text-white text-lg font-semibold tracking-wide">
          即梦AI
        </span>
      </a>

      {/* Center: Navigation */}
      <nav className="flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-white/80 text-sm hover:text-white transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-center"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Right: CTA Button */}
      <a
        href={ctaLink}
        className="shrink-0 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium hover:from-blue-500 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-blue-500/25"
      >
        开启即梦
      </a>
    </header>
  );
}
