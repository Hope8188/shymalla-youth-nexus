import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";
import DonateModal from "./DonateModal";
import heroImage from "@/assets/hero-main.jpg";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={heroImage}
          alt="Youth empowerment in Kenya"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-foreground/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent" />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background/20 to-transparent" />
      <motion.div 
        className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-secondary/20 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Tagline with animated line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center justify-center gap-4"
          >
            <motion.span 
              className="h-px w-12 bg-secondary"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
            <span className="text-secondary font-semibold tracking-[0.3em] uppercase text-sm">
              Youth-Led Movement
            </span>
            <motion.span 
              className="h-px w-12 bg-secondary"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </motion.div>

          {/* Main Headline with staggered animation */}
          <motion.h1 
            className="text-display"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="block">Empowering youth</span>
            <span className="block mt-2">
              to build{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-secondary">healthier futures</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 h-3 bg-secondary/30 -z-0"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.6 }}
                />
              </span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-xl md:text-2xl text-white/85 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Health education, mental wellness support, and entrepreneurship 
            opportunities for young people across Kenya.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6"
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="group relative bg-secondary text-secondary-foreground px-10 py-5 rounded-full font-semibold text-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Donate Now</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-secondary-light to-secondary"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.a
              href="#about"
              className="group flex items-center gap-3 text-white/90 hover:text-white px-8 py-5 rounded-full font-medium border border-white/30 hover:border-white/50 hover:bg-white/10 backdrop-blur-sm transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Play size={16} className="ml-0.5" />
              </span>
              Watch Our Story
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/60 hover:text-white transition-colors cursor-pointer"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-medium">Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-8 h-12 rounded-full border-2 border-current flex items-start justify-center pt-2"
        >
          <motion.div 
            className="w-1.5 h-3 rounded-full bg-current"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.a>

      <DonateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
