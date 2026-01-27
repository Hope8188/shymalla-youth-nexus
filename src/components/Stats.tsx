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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center group"
    >
      <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
        <Icon className="text-primary" size={24} />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-1 font-sans tabular-nums tracking-tight">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-muted-foreground text-sm font-medium">{label}</div>
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
    <section id="stats" className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-widest mb-4">
            Our Impact
          </span>
          <h2 className="text-headline text-foreground mb-3">
            Real change, measurable results
          </h2>
          <p className="text-body-lg max-w-lg mx-auto">
            Every number represents a life transformed.
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
