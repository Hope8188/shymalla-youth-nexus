import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-background">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-widest mb-4">
                About Us
              </span>
              <h2 className="text-headline text-foreground">
                A movement built by youth, <span className="text-primary">for youth</span>
              </h2>
            </div>
            
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                The Betterment Shymalla Movement is a youth-led Kenyan organization 
                transforming how young people access health, wellness, and economic opportunities.
              </p>
              <p>
                We believe every young person deserves the tools to thrive. Through 
                community-driven programs, we create pathways to healthier, more prosperous futures.
              </p>
            </div>
            
            <motion.a
              href="#programs"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm group"
              whileHover={{ x: 3 }}
            >
              Explore our programs
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right - Vision & Mission Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {/* Vision Card */}
            <div className="bg-gradient-to-br from-primary to-primary-light text-primary-foreground p-6 rounded-2xl shadow-lg shadow-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Sparkles size={18} />
                </div>
                <h3 className="text-xl font-bold">Our Vision</h3>
              </div>
              <p className="text-primary-foreground/90 leading-relaxed">
                A healthy, resilient, and entrepreneurial generation of Kenyan youth 
                leading transformative change in their communities.
              </p>
            </div>
            
            {/* Mission Card */}
            <div className="bg-card border border-border/80 p-6 rounded-2xl hover:border-primary/30 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center">
                  <Target size={18} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To deliver accessible health education, mental wellness support, and 
                entrepreneurship opportunities, driven by youth for youth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
