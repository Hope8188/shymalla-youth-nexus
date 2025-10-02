import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Community Health Caravan — Nairobi",
      date: "Nov 15, 2025",
      location: "Nairobi CBD",
      attendees: "500+ expected",
      summary: "Free health screenings, HIV testing, counseling, and referral services for young people. Partner clinics on-site.",
      category: "Health",
      color: "bg-primary",
    },
    {
      id: 2,
      title: "Youth Entrepreneurship Bootcamp",
      date: "Dec 03, 2025",
      location: "Mombasa",
      attendees: "120 participants",
      summary: "3-day intensive on ideation, business models, M-Pesa business integration, and pitch preparation.",
      category: "Entrepreneurship",
      color: "bg-accent",
    },
    {
      id: 3,
      title: "Mental Wellness Workshop Series",
      date: "Nov 28, 2025",
      location: "Online & Kisumu",
      attendees: "200+ registered",
      summary: "Interactive sessions on stress management, mindfulness, and peer support techniques led by certified counselors.",
      category: "Mental Health",
      color: "bg-secondary",
    },
  ];

  return (
    <section id="events" className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Events & Updates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us at upcoming events, workshops, and community activations across Kenya.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all group"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`${event.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {event.category}
                </span>
                <Button size="sm" variant="ghost" className="text-primary hover:text-primary-light group-hover:translate-x-1 transition-transform">
                  Register <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>

              {/* Event Title */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {event.title}
              </h3>

              {/* Event Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} className="text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} className="text-secondary" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users size={16} className="text-accent" />
                  <span>{event.attendees}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {event.summary}
              </p>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-semibold shadow-lg">
            <a href="#all-events">View All Events</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
