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
    <section id="stories" className="section-padding bg-muted/50">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-3 block">
            Success Stories
          </span>
          <h2 className="text-headline text-foreground mb-4">Lives Transformed</h2>
          <p className="text-body-lg max-w-xl mx-auto">
            Real stories from young people changed by our programs.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="bg-card rounded-xl p-6 border border-border h-full flex flex-col">
                <Quote className="text-primary/30 mb-4" size={24} />
                
                <blockquote className="text-foreground leading-relaxed flex-grow mb-5">
                  "{story.quote}"
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden">
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
                  <span className="ml-auto px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
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
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors"
            whileHover={{ scale: 1.02 }}
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
