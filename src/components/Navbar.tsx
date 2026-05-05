import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/website-development-agency" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed left-0 w-full z-[70] transition-all duration-300 ${
          scrolled || !isHome ? "top-0 bg-background/95 backdrop-blur-md shadow-lg" : "top-0 bg-transparent"
        }`}
      >
        {isHome && (
          <div className={`bg-zinc-950 py-1.5 border-b border-white/5 transition-all duration-300 ${scrolled ? "h-0 py-0 opacity-0 overflow-hidden" : "opacity-100"}`}>
            <div className="container mx-auto px-6 flex justify-center items-center gap-2 md:gap-3">
              <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-[0.2em] md:tracking-[0.4em] text-primary/90 text-center">
                Hammering Ideas into Digital Reality
              </span>
              <div className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
            </div>
          </div>
        )}
        <div className={`container mx-auto flex items-center justify-between px-6 transition-all duration-300 ${scrolled || !isHome ? "py-2.5" : "py-3.5"}`}>
          <Link to="/" className="font-heading text-2xl font-bold text-foreground">
            WebForge
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors text-sm font-medium ${
                  location.pathname === link.path ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:brightness-110 transition-all group"
            >
              Get Started
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
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
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors text-sm ${
                  location.pathname === link.path ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm text-center"
            >
              Get Started →
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
