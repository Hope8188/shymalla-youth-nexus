import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "From Peer to Founder: A Youth Microgrant Story",
      excerpt: "How 22-year-old Sarah turned a KES 50,000 grant into a thriving agribusiness in Nakuru.",
      category: "Entrepreneurship",
      date: "Oct 28, 2025",
      readTime: "5 min read",
      color: "bg-accent/10 text-accent",
    },
    {
      id: 2,
      title: "5 Quick Mental Wellness Tips You Can Try Today",
      excerpt: "Simple, science-backed strategies for managing stress and anxiety as a young person in Kenya.",
      category: "Mental Health",
      date: "Oct 22, 2025",
      readTime: "3 min read",
      color: "bg-secondary/10 text-secondary",
    },
    {
      id: 3,
      title: "How We Ran a Successful Vaccination Pop-Up",
      excerpt: "Behind the scenes of our mobile clinic that reached 800+ youth in Nairobi's informal settlements.",
      category: "Health",
      date: "Oct 15, 2025",
      readTime: "6 min read",
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <section id="blog" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Stories & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Health tips, entrepreneurship stories, and community wins from the movement.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 group-hover:scale-110 transition-transform duration-500" />
                  <span className="text-4xl opacity-20 group-hover:opacity-30 transition-opacity">📖</span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`${post.color} text-xs font-bold px-3 py-1 rounded-full`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <div className="flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
