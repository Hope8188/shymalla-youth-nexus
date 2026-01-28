import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Users, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useVolunteerForm, VolunteerFormData } from "@/hooks/useVolunteerForm";
import { useAuth } from "@/contexts/AuthContext";

export default function VolunteerForm() {
  const { user } = useAuth();
  const { submitVolunteerForm, isSubmitting, isSuccess, resetForm, interestOptions } = useVolunteerForm();
  
  const [formData, setFormData] = useState<VolunteerFormData>({
    fullName: "",
    email: "",
    phone: "",
    interests: [],
  });

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, interest]
        : prev.interests.filter((i) => i !== interest),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitVolunteerForm(formData);
    if (success) {
      setFormData({ fullName: "", email: "", phone: "", interests: [] });
    }
  };

  if (isSuccess) {
    return (
      <section id="volunteer" className="py-16 md:py-20 bg-muted/30">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center bg-card border border-border rounded-2xl p-10"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Application Received!
            </h3>
            <p className="text-muted-foreground mb-6">
              Thank you for your interest in volunteering with us. Our team will review your application and reach out soon.
            </p>
            <Button onClick={resetForm} variant="outline">
              Submit Another Application
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="volunteer" className="py-16 md:py-20 bg-muted/30">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-widest mb-4">
                Join Our Team
              </span>
              <h2 className="text-headline text-foreground">
                Become a <span className="text-primary">Volunteer</span>
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Join our community of passionate volunteers making a real difference in the lives of Kenyan youth. Whether you have a few hours or a few days, your contribution matters.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Make an Impact</h4>
                  <p className="text-sm text-muted-foreground">
                    Directly contribute to programs that transform young lives
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Join a Community</h4>
                  <p className="text-sm text-muted-foreground">
                    Connect with like-minded youth passionate about change
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-5"
            >
              <div className="space-y-2">
                <Label htmlFor="volunteer-name">Full Name *</Label>
                <Input
                  id="volunteer-name"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="volunteer-email">Email Address *</Label>
                <Input
                  id="volunteer-email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="volunteer-phone">Phone Number (Optional)</Label>
                <Input
                  id="volunteer-phone"
                  type="tel"
                  placeholder="+254 700 000 000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-3">
                <Label>Areas of Interest *</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {interestOptions.map((interest) => (
                    <label
                      key={interest}
                      className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/30 hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <Checkbox
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={(checked) =>
                          handleInterestChange(interest, checked as boolean)
                        }
                        disabled={isSubmitting}
                      />
                      <span className="text-sm text-foreground">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting || formData.interests.length === 0}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Apply to Volunteer"
                )}
              </Button>

              {user && (
                <p className="text-xs text-muted-foreground text-center">
                  Your profile will be updated with your volunteer preferences
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
