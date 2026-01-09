import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gracePhoto from "@/assets/story-grace.jpg";
import davidPhoto from "@/assets/story-david.jpg";
import faithPhoto from "@/assets/story-faith.jpg";

const SuccessStories = () => {
const stories = [
    {
      name: "Grace Wanjiku",
      age: 22,
      location: "Nairobi",
      photo: gracePhoto,
      quote: "The entrepreneurship bootcamp gave me the skills and confidence to start my own salon. Now I employ three other young people from my community.",
      before: "Unemployed",
      after: "Business Owner",
      metric: "3 jobs created",
    },
    {
      name: "David Omondi",
      age: 19,
      location: "Kisumu",
      photo: davidPhoto,
      quote: "Mental wellness sessions helped me overcome anxiety and depression. I learned I wasn't alone and found peer support that changed my life.",
      before: "Struggling with anxiety",
      after: "Peer counselor",
      metric: "20+ youth supported",
    },
    {
      name: "Faith Akinyi",
      age: 24,
      location: "Mombasa",
      photo: faithPhoto,
      quote: "Free health screenings caught my condition early. The referral system connected me to treatment I couldn't afford. I'm healthy and working today.",
      before: "Undiagnosed condition",
      after: "Healthy & employed",
      metric: "Early intervention",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-foreground">Real Stories, Real Change</h2>
        <p className="mt-2 text-muted-foreground">
          Meet the youth whose lives were transformed through our programs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <motion.div
            key={story.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-card to-muted/20 border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                <img
                  src={story.photo}
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-foreground">{story.name}</div>
                <div className="text-sm text-muted-foreground">
                  {story.age} • {story.location}
                </div>
              </div>
            </div>

            <blockquote className="text-sm text-foreground/90 italic mb-4 leading-relaxed">
              "{story.quote}"
            </blockquote>

            <div className="bg-background/50 rounded-lg p-3 border border-border/50">
              <div className="flex items-center justify-between text-xs">
                <div className="text-muted-foreground">{story.before}</div>
                <ArrowRight className="w-4 h-4 text-primary" />
                <div className="text-primary font-semibold">{story.after}</div>
              </div>
              <div className="mt-2 text-center text-xs font-semibold text-accent-foreground bg-accent/20 rounded px-2 py-1">
                {story.metric}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="#blog"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
        >
          Read More Success Stories
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default SuccessStories;
