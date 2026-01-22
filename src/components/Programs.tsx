import { motion } from "framer-motion";
import { Heart, Brain, TrendingUp, ArrowUpRight } from "lucide-react";
import healthImage from "@/assets/programs-health.jpg";
import wellnessImage from "@/assets/programs-wellness.jpg";
import entrepreneurshipImage from "@/assets/programs-entrepreneurship.jpg";

export default function Programs() {
  const programs = [
    {
      title: "Health Awareness",
      description:
        "Free health screenings, vaccination drives, and health education campaigns for youth.",
      icon: Heart,
      image: healthImage,
      stats: "18,000+",
      statsLabel: "youth reached",
    },
    {
      title: "Mental Wellness",
      description:
        "Peer counseling, support groups, and mental health resources for young people.",
      icon: Brain,
      image: wellnessImage,
      stats: "1,024",
      statsLabel: "sessions delivered",
    },
    {
      title: "Youth Entrepreneurship",
      description:
        "Business training, microgrants, and mentorship for aspiring entrepreneurs.",
      icon: TrendingUp,
      image: entrepreneurshipImage,
      stats: "560+",
      statsLabel: "businesses supported",
    },
  ];

  return (
    <section id="programs" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-3 block">
            What We Do
          </span>
          <h2 className="text-headline text-foreground mb-4">Our Programs</h2>
          <p className="text-body-lg max-w-xl mx-auto">
            Three pillars of support for the holistic needs of young people.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.article
                key={program.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="text-2xl font-bold text-white">{program.stats}</div>
                      <div className="text-white/80 text-xs">{program.statsLabel}</div>
                    </div>
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                      <Icon className="text-primary-foreground" size={18} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{program.description}</p>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-primary font-medium text-sm"
                    >
                      Learn more
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
