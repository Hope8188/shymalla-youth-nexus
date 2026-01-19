import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="container-tight relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <motion.span 
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="w-8 h-px bg-primary" />
                About Us
              </motion.span>
              <h2 className="text-headline text-foreground leading-tight">
                A movement built by youth,{" "}
                <span className="text-primary">for youth</span>
              </h2>
            </div>
            
            <div className="space-y-5 text-body-lg">
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
              className="inline-flex items-center gap-3 text-foreground font-semibold group"
              whileHover={{ x: 5 }}
            >
              <span className="border-b-2 border-primary pb-1">Explore our programs</span>
              <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right - Vision & Mission Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Vision Card */}
            <motion.div 
              className="relative group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-gradient-to-br from-primary to-primary-light text-primary-foreground p-10 rounded-3xl overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/10" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <Sparkles size={20} />
                    </div>
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-primary-foreground/90 text-lg leading-relaxed">
                    A healthy, resilient, and entrepreneurial generation of Kenyan youth 
                    leading transformative change in their communities.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Mission Card */}
            <motion.div 
              className="relative group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-card border border-border/60 p-10 rounded-3xl hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target size={20} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To deliver accessible health education, mental wellness support, and 
                  entrepreneurship opportunities, driven by youth for youth.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
