import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
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
    <section id="donate" className="section-padding bg-primary text-primary-foreground">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Your donation creates lasting change
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Every shilling directly funds health screenings, mental wellness sessions, 
              and entrepreneurship grants for young people across Kenya.
            </p>

            {/* Impact List */}
            <div className="space-y-4 pt-4">
              {impactItems.map((item) => (
                <div key={item.amount} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-secondary-foreground" size={14} />
                  </div>
                  <span className="text-primary-foreground/90">
                    <strong className="text-primary-foreground">KES {item.amount.toLocaleString()}</strong> provides {item.impact}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Donation Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background text-foreground rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Make a Donation</h3>

            {/* Amount Selection */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`py-4 rounded-xl font-bold text-lg transition-all ${
                    selectedAmount === amount
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  KES {amount.toLocaleString()}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Or enter custom amount (KES)
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                onChange={(e) => setSelectedAmount(Number(e.target.value))}
              />
            </div>

            {/* Donate Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-secondary text-secondary-foreground py-4 rounded-xl font-bold text-lg hover:bg-secondary-light transition-colors"
            >
              Donate{selectedAmount ? ` KES ${selectedAmount.toLocaleString()}` : ""}
            </button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Secure payment • Tax receipt provided
            </p>
          </motion.div>
        </div>
      </div>

      <DonateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}