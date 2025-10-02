import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, Smartphone, CreditCard, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"mpesa" | "card" | "paypal">("mpesa");
  const [copied, setCopied] = useState(false);

  const mpesaNumber = "+254721725958";
  const amounts = [500, 1000, 2500, 5000];

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(mpesaNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getDonationAmount = () => {
    return selectedAmount || parseInt(customAmount) || 0;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-card border border-border rounded-3xl shadow-2xl z-50 max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground">Make a Donation</h2>
                  <p className="text-muted-foreground mt-1">Your support transforms lives</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-xl bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Select Amount (KES)</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {amounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className={`h-14 border-2 rounded-xl font-semibold transition-all ${
                          selectedAmount === amount
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border hover:border-primary/50 hover:bg-primary/5"
                        }`}
                      >
                        {amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div className="mt-3">
                    <Input
                      type="number"
                      placeholder="Or enter custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="h-14 text-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Payment Method</label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("mpesa")}
                      className={`p-4 border-2 rounded-xl transition-all ${
                        paymentMethod === "mpesa"
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Smartphone className={paymentMethod === "mpesa" ? "text-primary" : "text-muted-foreground"} size={24} />
                      <div className="text-sm font-semibold mt-2">M-Pesa</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("card")}
                      className={`p-4 border-2 rounded-xl transition-all ${
                        paymentMethod === "card"
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <CreditCard className={paymentMethod === "card" ? "text-primary" : "text-muted-foreground"} size={24} />
                      <div className="text-sm font-semibold mt-2">Card</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("paypal")}
                      className={`p-4 border-2 rounded-xl transition-all ${
                        paymentMethod === "paypal"
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <DollarSign className={paymentMethod === "paypal" ? "text-primary" : "text-muted-foreground"} size={24} />
                      <div className="text-sm font-semibold mt-2">PayPal</div>
                    </button>
                  </div>
                </div>

                {paymentMethod === "mpesa" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-2xl p-6 space-y-4"
                  >
                    <h3 className="font-bold text-lg text-foreground">M-Pesa Payment Instructions</h3>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-card border border-border rounded-xl p-4">
                        <div>
                          <div className="text-sm text-muted-foreground">Send Money To</div>
                          <div className="text-2xl font-bold text-foreground tracking-wide">{mpesaNumber}</div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={handleCopyNumber}
                          className="gap-2"
                        >
                          {copied ? (
                            <>
                              <Check size={16} />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy size={16} />
                              Copy
                            </>
                          )}
                        </Button>
                      </div>

                      <div className="space-y-2 text-sm">
                        <p className="font-semibold text-foreground">Steps:</p>
                        <ol className="space-y-2 text-muted-foreground pl-4">
                          <li className="flex gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">1</span>
                            <span>Go to M-Pesa menu on your phone</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">2</span>
                            <span>Select "Send Money"</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">3</span>
                            <span>Enter the number: <strong className="text-foreground">{mpesaNumber}</strong></span>
                          </li>
                          <li className="flex gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">4</span>
                            <span>Enter amount: <strong className="text-foreground">KES {getDonationAmount().toLocaleString()}</strong></span>
                          </li>
                          <li className="flex gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold">5</span>
                            <span>Enter your M-Pesa PIN to confirm</span>
                          </li>
                        </ol>
                      </div>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-4">
                      <p className="text-xs text-muted-foreground">
                        After completing the payment, you'll receive an M-Pesa confirmation message.
                        We'll send you a receipt and impact report via email within 24 hours.
                      </p>
                    </div>
                  </motion.div>
                )}

                {paymentMethod === "card" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6 space-y-4"
                  >
                    <h3 className="font-bold text-lg text-foreground">Card Payment</h3>
                    <p className="text-muted-foreground">Secure payment processing via Stripe. All major credit and debit cards accepted.</p>
                    <Button className="w-full h-12 bg-primary hover:bg-primary-light text-primary-foreground font-bold">
                      Proceed to Stripe
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      This will redirect you to our secure payment partner
                    </p>
                  </motion.div>
                )}

                {paymentMethod === "paypal" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-2xl p-6 space-y-4"
                  >
                    <h3 className="font-bold text-lg text-foreground">PayPal Payment</h3>
                    <p className="text-muted-foreground">International donors can use PayPal for easy and secure donations.</p>
                    <Button className="w-full h-12 bg-secondary hover:bg-secondary-light text-secondary-foreground font-bold">
                      Proceed to PayPal
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      You'll be redirected to PayPal to complete your donation
                    </p>
                  </motion.div>
                )}

                <div className="bg-muted/50 rounded-2xl p-4">
                  <p className="text-xs text-muted-foreground text-center">
                    🔒 Your donation is secure and tax-deductible. All donations go directly to supporting our programs.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
