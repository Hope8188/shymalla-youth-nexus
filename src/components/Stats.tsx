import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, HeartPulse, Briefcase, MapPin } from "lucide-react";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  delay: number;
}

function StatItem({ value, suffix, label, icon: Icon, delay }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2500;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="text-center p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg">
        {/* Icon */}
        <motion.div 
          className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
          whileHover={{ rotate: 5 }}
        >
          <Icon className="text-primary" size={28} />
        </motion.div>
        
        {/* Number */}
        <div className="text-5xl md:text-6xl font-bold text-foreground mb-3 font-sans tabular-nums">
          {count.toLocaleString()}{suffix}
        </div>
        
        {/* Label */}
        <div className="text-muted-foreground font-medium tracking-wide">{label}</div>
        
        {/* Decorative accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const stats = [
    { value: 18432, suffix: "+", label: "Youth Reached", icon: Users },
    { value: 134, suffix: "", label: "Health Drives", icon: HeartPulse },
    { value: 560, suffix: "+", label: "Businesses Supported", icon: Briefcase },
    { value: 12, suffix: "", label: "Counties Active", icon: MapPin },
  ];

  return (
    <section id="stats" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Impact
          </motion.span>
          <h2 className="text-headline text-foreground mb-6">
            Real change, measurable results
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Every number represents a life transformed, a future brightened, 
            and a community strengthened.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
