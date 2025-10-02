import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@bettermentshymalla.org",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 700 000 000",
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      color: "text-accent",
      bg: "bg-accent/10",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partner with us, volunteer, or reach out with questions. We respond within 5 business days.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-card border border-border rounded-2xl"
                    >
                      <div className={`${info.bg} p-3 rounded-xl`}>
                        <Icon className={info.color} size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-semibold text-foreground">{info.value}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border border-primary/20 rounded-3xl p-6">
              <h3 className="font-bold text-lg text-foreground mb-3">Ways to Collaborate</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span> Corporate partnerships & sponsorships
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span> Volunteer opportunities & internships
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span> Media inquiries & press requests
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span> Healthcare & education partnerships
                </li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Button size="lg" className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-semibold">
                Volunteer With Us
              </Button>
              <Button size="lg" variant="outline" className="border-2 font-semibold">
                Partner Opportunities
              </Button>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Your Name</label>
                <Input placeholder="Enter your full name" className="h-12" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                <Input type="email" placeholder="your@email.com" className="h-12" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Organization (Optional)</label>
                <Input placeholder="Company or organization name" className="h-12" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <Textarea
                  placeholder="Tell us how we can work together..."
                  rows={6}
                  className="resize-none"
                />
              </div>

              <Button className="w-full h-12 bg-primary hover:bg-primary-light text-primary-foreground font-bold shadow-lg hover:shadow-glow transition-all group">
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy and won't share your details with third parties.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
