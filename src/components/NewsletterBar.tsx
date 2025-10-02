import { useState } from "react";
import { X, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const NewsletterBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call - replace with actual newsletter service integration
    setTimeout(() => {
      toast({
        title: "Success! 🎉",
        description: "You're now subscribed to our impact updates",
      });
      setEmail("");
      setIsLoading(false);
      setIsVisible(false);
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg border-t border-primary-light/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5" />
            <div>
              <div className="font-bold text-sm">Get Impact Stories & Updates</div>
              <div className="text-xs opacity-90">
                Join 2,000+ supporters receiving monthly stories from the field
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 w-64"
                disabled={isLoading}
              />
              <Button
                type="submit"
                variant="secondary"
                disabled={isLoading}
                className="bg-white text-primary hover:bg-white/90"
              >
                {isLoading ? "..." : "Subscribe"}
              </Button>
            </form>

            <button
              onClick={() => setIsVisible(false)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close newsletter bar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBar;
