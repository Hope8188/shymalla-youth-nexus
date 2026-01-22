import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "bettermentshymalla@gmail.com",
      href: "mailto:bettermentshymalla@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 743 481 715",
      href: "tel:+254743481715",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-tight">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-headline text-foreground mb-4">Let's Work Together</h2>
          <p className="text-body-lg max-w-xl mx-auto">
            Partner with us, volunteer, or reach out with questions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center">
                    <method.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-0.5">{method.label}</div>
                    {method.href ? (
                      <a href={method.href} className="text-foreground font-medium text-sm hover:text-primary transition-colors">
                        {method.value}
                      </a>
                    ) : (
                      <div className="text-foreground font-medium text-sm">{method.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Collaboration */}
            <div className="bg-muted/50 p-5 rounded-xl">
              <h3 className="font-bold text-foreground mb-3 text-sm">Ways to Collaborate</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Corporate partnerships & sponsorships
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Volunteer opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Media & press inquiries
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Healthcare partnerships
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-lg font-bold text-foreground mb-5">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-muted/30 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-muted/30 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-muted/30 resize-none text-sm"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-primary-light transition-colors"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Send Message
                  <Send size={14} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
