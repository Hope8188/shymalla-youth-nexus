import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard, Smartphone, DollarSign, Heart } from "lucide-react";
import DonateModal from "./DonateModal";

export default function Donate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const paymentMethods = [
    {
      icon: Smartphone,
      name: "M-Pesa",
      description: "Pay via Paybill or Till Number using your mobile phone",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: CreditCard,
      name: "Card Payment",
      description: "Secure payment via Stripe - all major cards accepted",
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
    {
      icon: DollarSign,
      name: "PayPal",
      description: "International donors can use PayPal for easy donations",
      color: "text-accent",
      bg: "bg-accent/10",
    },
  ];

  const amounts = ["KES 500", "KES 1,000", "KES 2,500", "KES 5,000"];

  return (
    <section id="donate" className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block p-3 bg-primary/10 rounded-2xl mb-4">
                <Heart className="text-primary" size={32} />
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
                Support the Movement
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your contribution directly funds health screenings, mental wellness sessions, and entrepreneurship grants
                for young people across Kenya. Every shilling makes a difference.
              </p>
            </div>

            {/* Impact Statement */}
            <div className="bg-card border border-border rounded-3xl p-6 shadow-lg">
              <h3 className="font-bold text-lg text-foreground mb-4">Your Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                  <span className="text-muted-foreground"><strong className="text-foreground">KES 500</strong> provides mental health resources for 5 youth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                  <span className="text-muted-foreground"><strong className="text-foreground">KES 2,500</strong> covers health screenings for 10 people</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                  <span className="text-muted-foreground"><strong className="text-foreground">KES 5,000</strong> funds a microgrant for an aspiring entrepreneur</span>
                </li>
              </ul>
            </div>

            {/* Payment Methods */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-foreground">Payment Options</h3>
              <div className="space-y-3">
                {paymentMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.div
                      key={method.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-card border border-border rounded-2xl"
                    >
                      <div className={`${method.bg} p-3 rounded-xl`}>
                        <Icon className={method.color} size={24} />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{method.name}</div>
                        <div className="text-sm text-muted-foreground">{method.description}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Make a Donation</h3>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                <Input placeholder="Enter your name" className="h-12" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                <Input type="email" placeholder="your@email.com" className="h-12" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Donation Amount</label>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className="h-12 border-2 border-border rounded-xl font-semibold hover:border-primary hover:bg-primary/5 transition-all"
                    >
                      {amount}
                    </button>
                  ))}
                </div>
                <Input type="number" placeholder="Or enter custom amount" className="h-12" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Payment Method</label>
                <select className="w-full h-12 px-4 border border-input rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>M-Pesa</option>
                  <option>Credit/Debit Card (Stripe)</option>
                  <option>PayPal</option>
                </select>
              </div>

              <Button
                onClick={() => setIsModalOpen(true)}
                className="w-full h-12 bg-primary hover:bg-primary-light text-primary-foreground font-bold text-lg shadow-lg hover:shadow-glow transition-all"
              >
                Donate Now
              </Button>

              <p className="text-xs text-muted-foreground text-center pt-2">
                🔒 Secure payment processing. You'll receive a receipt and impact report via email.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <DonateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
