import { motion } from "framer-motion";
import { Heart, Brain, TrendingUp, ArrowRight } from "lucide-react";
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
      stats: "18,000+ youth reached",
      color: "bg-primary",
    },
    {
      title: "Mental Wellness",
      description:
        "Peer counseling, support groups, and mental health resources helping young people navigate life's challenges.",
      icon: Brain,
      image: wellnessImage,
      stats: "1,024 sessions delivered",
      color: "bg-secondary",
    },
    {
      title: "Youth Entrepreneurship",
      description:
        "Business training, microgrants, and mentorship empowering young entrepreneurs to build sustainable businesses.",
      icon: TrendingUp,
      image: entrepreneurshipImage,
      stats: "560 businesses supported",
      color: "bg-accent",
    },
  ];

  return (
    <section id="programs" className="section-padding bg-muted/30">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="text-headline text-foreground mt-4 mb-4">Our Programs</h2>
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div
                    className={`absolute bottom-4 left-4 ${program.color} text-white px-4 py-1.5 rounded-full text-sm font-medium`}
                  >
                    {program.stats}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${program.color} p-2 rounded-lg`}>
                      <Icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Learn more <ArrowRight size={16} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}