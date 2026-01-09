import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, TrendingUp, Sparkles } from "lucide-react";
import DonateModal from "./DonateModal";
import heroImage from "@/assets/hero-main.jpg";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const impactStats = [
    { icon: Users, label: "Youth Reached", value: "18,432+", color: "text-primary" },
    { icon: Heart, label: "Health Drives", value: "134", color: "text-secondary" },
    { icon: TrendingUp, label: "Businesses Supported", value: "560", color: "text-accent" },
    { icon: Sparkles, label: "Wellness Sessions", value: "1,024", color: "text-primary-light" },
  ];

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-cyan-400/10 to-orange-400/20">
        <div className="absolute inset-0 opacity-50">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, -80, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                  Youth-Led Movement 🇰🇪
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Health. Hope. Hustle.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Empowering Kenyan youth to thrive physically, mentally, and economically.
              </p>

              <p className="text-lg text-foreground/80 max-w-2xl">
                We run health awareness drives, mental wellness programs, lifestyle-change campaigns,
                and entrepreneurship support. Led by youth, for youth.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary-light text-primary-foreground font-semibold shadow-lg hover:shadow-glow transition-all group">
                <a href="#join">
                  Join Us <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </Button>
              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              >
                Donate Now
              </Button>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-semibold">
                <a href="#partner">Partner With Us</a>
              </Button>
            </motion.div>

            {/* Impact Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6"
            >
              {impactStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="bg-card border border-border rounded-2xl p-4 shadow-md hover:shadow-lg transition-all"
                  >
                    <Icon className={`${stat.color} mb-2`} size={24} />
                    <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Youth empowerment and health awareness in Kenya"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-overlay" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 right-6 left-6 lg:left-auto lg:w-80 bg-card border border-border rounded-2xl p-5 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Heart className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <div className="font-bold text-foreground">Upcoming Event</div>
                  <div className="text-xs text-muted-foreground">Join us in making a difference</div>
                </div>
              </div>
              <div className="text-sm font-semibold text-foreground mt-2">Community Health Caravan</div>
              <div className="text-xs text-muted-foreground">Free screenings • Nov 15 • Nairobi</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <DonateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
