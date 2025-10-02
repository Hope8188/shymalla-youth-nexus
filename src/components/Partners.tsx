import { motion } from "framer-motion";

const Partners = () => {
  const partners = [
    { name: "Ministry of Health Kenya", category: "Government" },
    { name: "Safaricom Foundation", category: "Corporate" },
    { name: "Kenya Community Development Foundation", category: "NGO" },
    { name: "University of Nairobi", category: "Academic" },
    { name: "Kenya Red Cross", category: "NGO" },
    { name: "Equity Bank Foundation", category: "Corporate" },
    { name: "AMREF Health Africa", category: "International NGO" },
    { name: "Youth Fund Kenya", category: "Government" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 border-t border-border">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-foreground">Trusted By</h2>
        <p className="mt-2 text-muted-foreground">
          Working alongside leading organizations to create lasting impact
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-card border border-border rounded-xl p-6 h-24 flex items-center justify-center transition-all hover:shadow-md hover:border-primary/50">
              <div className="text-center">
                <div className="font-semibold text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {partner.name}
                </div>
                <div className="text-xs text-muted-foreground/60 mt-1">
                  {partner.category}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Become a Partner
        </a>
      </div>
    </section>
  );
};

export default Partners;
