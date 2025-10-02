import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#impact", label: "Impact" },
    { href: "#programs", label: "Programs" },
    { href: "#events", label: "Events" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-lg group-hover:shadow-glow transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-hero animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="font-extrabold text-xl text-foreground">Betterment Shymalla</div>
              <div className="text-xs text-muted-foreground -mt-0.5">Youth • Health • Entrepreneurship</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-md">
              <a href="#donate">Donate</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-4 rounded-lg hover:bg-muted transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-full">
                <a href="#donate" onClick={() => setMobileMenuOpen(false)}>Donate</a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
