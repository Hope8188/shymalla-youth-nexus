import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eye, Target, Lightbulb, Users, Stethoscope, Briefcase, BookOpen } from "lucide-react";

export default function About() {
  const features = [
    { icon: Users, label: "Peer Counselors", color: "bg-primary/10 text-primary" },
    { icon: Stethoscope, label: "Mobile Clinics", color: "bg-secondary/10 text-secondary" },
    { icon: Briefcase, label: "Startup Grants", color: "bg-accent/10 text-accent" },
    { icon: BookOpen, label: "Digital Learning", color: "bg-primary-light/10 text-primary-light" },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Betterment Shymalla Movement is a youth-led Kenyan organization focusing on health awareness,
                mental wellness, lifestyle change, and youth entrepreneurship. We combine digital outreach,
                on-the-ground activations, and peer-led mentorship to create measurable community change.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Our Vision</h3>
                  <p className="text-muted-foreground">
                    A healthy, resilient, and entrepreneurial generation of Kenyan youth.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To deliver accessible health education, mental wellness support, and entrepreneurship opportunities,
                    driven by youth for youth.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button asChild variant="default" size="lg" className="bg-primary hover:bg-primary-light font-semibold">
                <a href="#programs">Our Programs</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 font-semibold">
                <a href="#impact">See Impact</a>
              </Button>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-card to-muted/50 p-8 rounded-3xl border border-border shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="text-accent" size={32} />
                <h3 className="font-bold text-2xl text-foreground">Why We Exist</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Because too often young people lack access to trusted health information, mental wellness support,
                and practical pathways to earn. We create local solutions that scale.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className={`p-4 ${feature.color} rounded-xl font-semibold text-sm text-center flex flex-col items-center gap-2`}
                    >
                      <Icon size={24} />
                      {feature.label}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <div className="text-sm font-semibold text-primary mb-2">💡 Did You Know?</div>
              <p className="text-foreground/80">
                Over 70% of Kenya's population is under 30 years old. We're ensuring they have the tools,
                knowledge, and support to build healthier, more prosperous futures.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
