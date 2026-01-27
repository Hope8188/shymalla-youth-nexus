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
        "The entrepreneurship bootcamp gave me the skills to start my own salon. Now I employ three others.",
      program: "Entrepreneurship",
    },
    {
      name: "David Omondi",
      age: 19,
      location: "Kisumu",
      photo: davidPhoto,
      quote:
        "Mental wellness sessions helped me overcome anxiety. I learned I wasn't alone.",
      program: "Mental Wellness",
    },
    {
      name: "Faith Akinyi",
      age: 24,
      location: "Mombasa",
      photo: faithPhoto,
      quote:
        "Free health screenings caught my condition early. I'm healthy today because of it.",
      program: "Health Awareness",
    },
  ];

  return (
    <section id="stories" className="py-16 md:py-20 bg-muted/30">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-widest mb-4">
            Success Stories
          </span>
          <h2 className="text-headline text-foreground mb-3">Lives Transformed</h2>
          <p className="text-body-lg max-w-lg mx-auto">
            Real stories from young people changed by our programs.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="bg-card rounded-2xl p-6 border border-border/80 h-full flex flex-col hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                <Quote className="text-primary/20 mb-4 group-hover:text-primary/40 transition-colors" size={28} />
                
                <blockquote className="text-foreground leading-relaxed flex-grow mb-5 italic">
                  "{story.quote}"
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                    <img
                      src={story.photo}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{story.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {story.age} • {story.location}
                    </div>
                  </div>
                  <span className="ml-auto px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-xs font-semibold">
                    {story.program}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <motion.a
            href="#donate"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light text-primary-foreground px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Help create more success stories
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
