import { motion } from "framer-motion";

const MediaFeatured = () => {
  const mediaOutlets = [
    { name: "Daily Nation", type: "Print" },
    { name: "Standard Media", type: "Print" },
    { name: "Citizen TV", type: "Television" },
    { name: "NTV Kenya", type: "Television" },
    { name: "Capital FM", type: "Radio" },
    { name: "Radio Jambo", type: "Radio" },
    { name: "The Star Kenya", type: "Print" },
    { name: "KBC Channel 1", type: "Television" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-8 border-t border-border">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-foreground">As Featured In</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Our impact recognized by leading media outlets
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {mediaOutlets.map((outlet, index) => (
          <motion.div
            key={outlet.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-card border border-border rounded-lg p-3 h-20 flex flex-col items-center justify-center text-center transition-all hover:border-primary/50 hover:shadow-sm">
              <div className="font-semibold text-xs text-muted-foreground group-hover:text-primary transition-colors">
                {outlet.name}
              </div>
              <div className="text-[10px] text-muted-foreground/60 mt-1">
                {outlet.type}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MediaFeatured;
