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
        "Free health screenings, vaccination drives, and health education campaigns reaching youth in underserved communities.",
      icon: Heart,
      image: healthImage,
      stats: "18,000+",
      statsLabel: "youth reached",
      gradient: "from-primary to-primary-light",
    },
    {
      title: "Mental Wellness",
      description:
        "Peer counseling, support groups, and mental health resources helping young people navigate life's challenges.",
      icon: Brain,
      image: wellnessImage,
      stats: "1,024",
      statsLabel: "sessions delivered",
      gradient: "from-secondary to-secondary-light",
    },
    {
      title: "Youth Entrepreneurship",
      description:
        "Business training, microgrants, and mentorship empowering young entrepreneurs to build sustainable businesses.",
      icon: TrendingUp,
      image: entrepreneurshipImage,
      stats: "560+",
      statsLabel: "businesses supported",
      gradient: "from-accent to-accent/80",
    },
  ];

  return (
    <section id="programs" className="section-padding bg-muted/30 relative">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="w-8 h-px bg-primary" />
            What We Do
            <span className="w-8 h-px bg-primary" />
          </motion.span>
          <h2 className="text-headline text-foreground mb-6">Our Programs</h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Three pillars of support designed to address the holistic needs of young people.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.article
                key={program.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative"
              >
                <div className="bg-card rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-primary/20">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                    
                    {/* Stats badge */}
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-4xl font-bold text-white mb-1">{program.stats}</div>
                          <div className="text-white/80 text-sm font-medium">{program.statsLabel}</div>
                        </div>
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${program.gradient} flex items-center justify-center shadow-lg`}>
                          <Icon className="text-white" size={24} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{program.description}</p>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link"
                    >
                      <span className="border-b border-primary/30 group-hover/link:border-primary transition-colors">
                        Learn more
                      </span>
                      <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
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
