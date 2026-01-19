import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import gracePhoto from "@/assets/story-grace.jpg";
import davidPhoto from "@/assets/story-david.jpg";
import faithPhoto from "@/assets/story-faith.jpg";

export default function SuccessStories() {
  const stories = [
    {
      name: "Grace Wanjiku",
      age: 22,
      location: "Nairobi",
      photo: gracePhoto,
      quote:
        "The entrepreneurship bootcamp gave me the skills and confidence to start my own salon. Now I employ three other young people from my community.",
      program: "Entrepreneurship",
      color: "from-accent to-accent/80",
    },
    {
      name: "David Omondi",
      age: 19,
      location: "Kisumu",
      photo: davidPhoto,
      quote:
        "Mental wellness sessions helped me overcome anxiety. I learned I wasn't alone and found peer support that changed my life.",
      program: "Mental Wellness",
      color: "from-secondary to-secondary-light",
    },
    {
      name: "Faith Akinyi",
      age: 24,
      location: "Mombasa",
      photo: faithPhoto,
      quote:
        "Free health screenings caught my condition early. The referral system connected me to treatment I couldn't afford. I'm healthy today.",
      program: "Health Awareness",
      color: "from-primary to-primary-light",
    },
  ];

  return (
    <section id="stories" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-secondary/5 blur-3xl" />
      
      <div className="container-wide relative">
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
            Success Stories
            <span className="w-8 h-px bg-primary" />
          </motion.span>
          <h2 className="text-headline text-foreground mb-6">
            Lives Transformed
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Real stories from young people whose lives have been changed through our programs.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              <div className="bg-card rounded-3xl p-8 relative border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-500 h-full flex flex-col">
                {/* Quote Icon */}
                <div className={`absolute -top-4 right-8 w-12 h-12 rounded-2xl bg-gradient-to-br ${story.color} flex items-center justify-center shadow-md`}>
                  <Quote className="text-white" size={20} />
                </div>

                {/* Photo */}
                <div className="flex items-center gap-4 mb-6 pt-4">
                  <div className="relative">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${story.color} blur-md opacity-40`} />
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-3 border-card shadow-md">
                      <img
                        src={story.photo}
                        alt={story.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{story.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {story.age} • {story.location}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-foreground text-lg leading-relaxed flex-grow mb-6">
                  "{story.quote}"
                </blockquote>

                {/* Program Tag */}
                <div className={`inline-flex self-start px-4 py-2 rounded-full bg-gradient-to-r ${story.color} text-white text-sm font-medium`}>
                  {story.program} Program
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#donate"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-primary-light transition-all group"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            Help create more success stories
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
