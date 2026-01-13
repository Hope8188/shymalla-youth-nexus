import { motion } from "framer-motion";
import { Quote } from "lucide-react";
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
    },
    {
      name: "David Omondi",
      age: 19,
      location: "Kisumu",
      photo: davidPhoto,
      quote:
        "Mental wellness sessions helped me overcome anxiety. I learned I wasn't alone and found peer support that changed my life.",
      program: "Mental Wellness",
    },
    {
      name: "Faith Akinyi",
      age: 24,
      location: "Mombasa",
      photo: faithPhoto,
      quote:
        "Free health screenings caught my condition early. The referral system connected me to treatment I couldn't afford. I'm healthy today.",
      program: "Health Awareness",
    },
  ];

  return (
    <section id="stories" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Success Stories
          </span>
          <h2 className="text-headline text-foreground mt-4 mb-4">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-muted/50 rounded-2xl p-8 relative"
            >
              {/* Quote Icon */}
              <Quote className="text-primary/20 absolute top-6 right-6" size={48} />

              {/* Photo */}
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-background shadow-lg">
                <img
                  src={story.photo}
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote */}
              <blockquote className="text-foreground text-lg mb-6 leading-relaxed">
                "{story.quote}"
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-border pt-4">
                <div className="font-bold text-foreground">{story.name}</div>
                <div className="text-sm text-muted-foreground">
                  {story.age} years old • {story.location}
                </div>
                <div className="text-sm text-primary font-medium mt-1">
                  {story.program} Program
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#donate"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary-light transition-all"
          >
            Help create more success stories
          </a>
        </motion.div>
      </div>
    </section>
  );
}