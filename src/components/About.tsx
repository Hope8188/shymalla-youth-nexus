import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              About Us
            </span>
            <h2 className="text-headline text-foreground">
              A movement built by youth, for youth
            </h2>
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
            <div className="pt-4">
              <a
                href="#programs"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Explore our programs
                <span>→</span>
              </a>
            </div>
          </motion.div>

          {/* Right - Vision & Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-primary-foreground/90 text-lg">
                A healthy, resilient, and entrepreneurial generation of Kenyan youth 
                leading transformative change in their communities.
              </p>
            </div>
            <div className="bg-muted p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-lg">
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