import { useState, useEffect } from "react";
import { ModeToggle } from "./mode-toggle";

const navLinks = ["Home", "Services", "About", "Work", "Testimonials"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Banner / Tabbar Line */}
      <div className="bg-zinc-950 py-2 border-b border-white/5 relative z-[60]">
        <div className="container mx-auto px-6 flex justify-center items-center gap-3">
          <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-primary/90">
            Hammering Ideas into Digital Reality
          </span>
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        </div>
      </div>

      <nav
        className={`fixed left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "top-0 bg-background/95 backdrop-blur-md shadow-lg py-3" : "top-9 bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <a href="#home" className="font-heading text-2xl font-bold text-foreground">
            WebForge
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:brightness-110 transition-all group"
            >
              Get Started
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-4 md:hidden">
            <ModeToggle />
            <button
              className="text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm text-center"
              onClick={() => setMenuOpen(false)}
            >
              Get Started →
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
