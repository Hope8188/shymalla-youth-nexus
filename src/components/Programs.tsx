import { motion } from "framer-motion";
import { Heart, Brain, TrendingUp } from "lucide-react";

const healthImage = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80";
const wellnessImage = "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80";
const entrepreneurshipImage = "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80";

export default function Programs() {
  const programs = [
    {
      title: "Health Awareness",
      description: "Campaigns, screenings, vaccination drives, and partnerships with local clinics to ensure youth have access to essential healthcare.",
      icon: Heart,
      image: healthImage,
      color: "from-primary to-primary-light",
      stats: ["134 Health Drives", "18K+ Youth Reached"],
    },
    {
      title: "Mental Wellness",
      description: "Peer support groups, counseling referrals, and digital resources for stress, anxiety, and mental health challenges.",
      icon: Brain,
      image: wellnessImage,
      color: "from-secondary to-secondary-light",
      stats: ["1,024 Sessions", "24/7 Support Line"],
    },
    {
      title: "Youth Entrepreneurship",
      description: "Bootcamps, microgrants, mentorship, and market access for young founders building sustainable businesses.",
      icon: TrendingUp,
      image: entrepreneurshipImage,
      color: "from-accent to-orange-400",
      stats: ["560 Businesses", "KES 12M+ Funded"],
    },
  ];

  return (
    <section id="programs" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Programs & Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Focused, evidence-backed programs that reach youth where they are and create lasting change.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-40 group-hover:opacity-30 transition-opacity`} />
                    <div className="absolute top-4 left-4 w-14 h-14 bg-white/95 rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon className={`bg-gradient-to-br ${program.color} bg-clip-text text-transparent`} size={28} strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{program.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                      {program.description}
                    </p>

                    {/* Stats */}
                    <div className="flex gap-2 flex-wrap">
                      {program.stats.map((stat) => (
                        <span
                          key={stat}
                          className={`px-3 py-1 bg-gradient-to-r ${program.color} text-white text-xs font-semibold rounded-full`}
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
