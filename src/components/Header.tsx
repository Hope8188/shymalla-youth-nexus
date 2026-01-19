import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#programs", label: "Programs" },
    { href: "#stories", label: "Stories" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-xl shadow-sm border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-20 md:h-24">
          <a href="#" className={`flex items-center gap-3 group transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${scrolled ? "bg-primary" : "bg-white/20 backdrop-blur-sm"}`}>
              <Heart size={20} className={scrolled ? "text-primary-foreground" : "text-white"} />
            </div>
            <span className="font-bold text-lg hidden sm:block">Betterment Shymalla</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={`relative font-medium transition-colors py-2 group ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"}`}>
                {link.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? "bg-primary" : "bg-white"}`} />
              </a>
            ))}
            <a href="#donate" className={`px-6 py-3 rounded-full font-semibold transition-all ${scrolled ? "bg-primary text-primary-foreground hover:bg-primary-light" : "bg-white text-foreground hover:bg-white/90"}`}>
              Donate
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden w-11 h-11 rounded-xl flex items-center justify-center ${scrolled ? "text-foreground bg-muted" : "text-white bg-white/20"}`}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-background border-t border-border overflow-hidden">
            <div className="container-wide py-6 space-y-2">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block py-4 text-lg font-medium text-foreground hover:text-primary border-b border-border/50">
                  {link.label}
                </a>
              ))}
              <a href="#donate" onClick={() => setIsOpen(false)} className="block w-full text-center bg-primary text-primary-foreground py-4 rounded-2xl font-semibold mt-6">
                Donate Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}