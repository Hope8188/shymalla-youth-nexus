import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Heart, Shield, Sparkles } from "lucide-react";
import DonateModal from "./DonateModal";

export default function Donate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(2500);

  const amounts = [500, 1000, 2500, 5000];

  const impactItems = [
    { amount: 500, impact: "Mental health resources for 5 youth" },
    { amount: 1000, impact: "Health screening for 4 people" },
    { amount: 2500, impact: "Complete health drive for 10 youth" },
    { amount: 5000, impact: "Microgrant for an aspiring entrepreneur" },
  ];

  return (
    <section id="donate" className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary to-primary-light text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>
      
      <div className="container-tight relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-semibold text-xs uppercase tracking-widest mb-4">
                Make an Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Your donation creates <span className="text-accent">lasting change</span>
              </h2>
            </div>
            
            <p className="text-primary-foreground/85 leading-relaxed">
              Every shilling directly funds health screenings, mental wellness sessions, 
              and entrepreneurship grants for young people across Kenya.
            </p>

            {/* Impact List */}
            <div className="space-y-3">
              {impactItems.map((item, index) => (
                <motion.div 
                  key={item.amount} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="w-7 h-7 bg-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent/30">
                    <Check className="text-accent-foreground" size={14} />
                  </div>
                  <span className="text-primary-foreground/90 text-sm">
                    <strong className="text-primary-foreground">KES {item.amount.toLocaleString()}</strong>{" "}
                    — {item.impact}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Donation Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-background text-foreground rounded-2xl p-6 shadow-2xl">
              <h3 className="text-lg font-bold mb-5">Make a Donation</h3>

              {/* Amount Selection */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`py-3.5 rounded-xl font-semibold text-sm transition-all ${
                      selectedAmount === amount
                        ? "bg-gradient-to-r from-primary to-primary-light text-primary-foreground shadow-md"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    KES {amount.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-5">
                <label className="block text-xs font-medium text-muted-foreground mb-2">
                  Or enter custom amount (KES)
                </label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-muted/30"
                  onChange={(e) => setSelectedAmount(Number(e.target.value))}
                />
              </div>

              {/* Donate Button */}
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-accent text-accent-foreground py-4 rounded-xl font-semibold"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                Donate{selectedAmount ? ` KES ${selectedAmount.toLocaleString()}` : ""}
              </motion.button>

              <div className="flex items-center justify-center gap-3 mt-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Shield size={12} />
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
