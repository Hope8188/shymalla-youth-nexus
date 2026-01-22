import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-3 block">
                About Us
              </span>
              <h2 className="text-headline text-foreground">
                A movement built by youth, <span className="text-primary">for youth</span>
              </h2>
            </div>
            
            <div className="space-y-4 text-body-lg">
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
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm"
              whileHover={{ x: 3 }}
            >
              Explore our programs
              <ArrowRight size={16} />
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
            <div className="bg-primary text-primary-foreground p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center">
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
            <div className="bg-card border border-border p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
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
