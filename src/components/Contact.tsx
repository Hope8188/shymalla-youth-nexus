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

  const collaborationOptions = [
    "Corporate partnerships & sponsorships",
    "Volunteer opportunities",
    "Media & press inquiries",
    "Healthcare partnerships",
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30 relative">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container-tight">
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
            Get In Touch
            <span className="w-8 h-px bg-primary" />
          </motion.span>
          <h2 className="text-headline text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Partner with us, volunteer, or reach out with questions. We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <method.icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">{method.label}</div>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-foreground font-semibold hover:text-primary transition-colors flex items-center gap-1 group/link"
                      >
                        {method.value}
                        <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <div className="text-foreground font-semibold">{method.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Collaboration Card */}
            <motion.div 
              className="bg-card p-8 rounded-3xl border border-border/60 hover:border-primary/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-xl text-foreground mb-6">Ways to Collaborate</h3>
              <ul className="space-y-4">
                {collaborationOptions.map((option, index) => (
                  <motion.li 
                    key={option}
                    className="flex items-center gap-3 text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <span className="w-2 h-2 rounded-full bg-primary/60" />
                    {option}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-card p-10 rounded-3xl border border-border/60 shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-5 py-4 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-muted/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-5 py-4 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-muted/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="How can we help?"
                    className="w-full px-5 py-4 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-muted/30 resize-none transition-all"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-5 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:bg-primary-light transition-all shadow-md hover:shadow-lg"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Send Message
                  <Send size={18} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
