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
      className="text-center"
    >
      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="text-primary" size={22} />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 font-sans tabular-nums">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-muted-foreground text-sm">{label}</div>
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
    <section id="stats" className="section-padding bg-muted/50">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-3 block">
            Our Impact
          </span>
          <h2 className="text-headline text-foreground mb-4">
            Real change, measurable results
          </h2>
          <p className="text-body-lg max-w-xl mx-auto">
            Every number represents a life transformed and a community strengthened.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
