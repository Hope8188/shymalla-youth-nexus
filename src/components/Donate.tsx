import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Heart, Shield, Sparkles } from "lucide-react";
import DonateModal from "./DonateModal";

export default function Donate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(2500);

  const amounts = [500, 1000, 2500, 5000];

  const impactItems = [
    { amount: 500, impact: "Mental health resources for 5 youth", icon: Heart },
    { amount: 1000, impact: "Health screening for 4 people", icon: Shield },
    { amount: 2500, impact: "Complete health drive for 10 youth", icon: Sparkles },
    { amount: 5000, impact: "Microgrant for an aspiring entrepreneur", icon: Heart },
  ];

  return (
    <section id="donate" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
      </div>
      
      <div className="container-tight relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-primary-foreground space-y-8"
          >
            <div>
              <motion.span 
                className="inline-flex items-center gap-2 text-secondary font-semibold text-sm uppercase tracking-[0.2em] mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="w-8 h-px bg-secondary" />
                Make an Impact
              </motion.span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your donation creates{" "}
                <span className="text-secondary">lasting change</span>
              </h2>
            </div>
            
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Every shilling directly funds health screenings, mental wellness sessions, 
              and entrepreneurship grants for young people across Kenya.
            </p>

            {/* Impact List */}
            <div className="space-y-4">
              {impactItems.map((item, index) => (
                <motion.div 
                  key={item.amount} 
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Check className="text-secondary-foreground" size={16} />
                  </div>
                  <span className="text-primary-foreground/90 text-lg">
                    <strong className="text-primary-foreground font-semibold">KES {item.amount.toLocaleString()}</strong>{" "}
                    provides {item.impact}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Donation Card */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-white/20 rounded-3xl blur-2xl" />
            
            <div className="relative bg-background text-foreground rounded-3xl p-10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8">Make a Donation</h3>

              {/* Amount Selection */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {amounts.map((amount) => (
                  <motion.button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`relative py-5 rounded-2xl font-bold text-lg transition-all overflow-hidden ${
                      selectedAmount === amount
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {selectedAmount === amount && (
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary"
                        layoutId="selectedAmount"
                      />
                    )}
                    <span className="relative">KES {amount.toLocaleString()}</span>
                  </motion.button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-muted-foreground mb-3">
                  Or enter custom amount (KES)
                </label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full px-5 py-4 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-muted/30"
                  onChange={(e) => setSelectedAmount(Number(e.target.value))}
                />
              </div>

              {/* Donate Button */}
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-gradient-to-r from-secondary to-secondary-light text-secondary-foreground py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-warm transition-all"
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
              >
                Donate{selectedAmount ? ` KES ${selectedAmount.toLocaleString()}` : ""}
              </motion.button>

              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Shield size={14} />
                  Secure payment
                </span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                <span>Tax receipt provided</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <DonateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
