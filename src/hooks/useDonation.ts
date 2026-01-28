import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { z } from "zod";

const donationSchema = z.object({
  donorName: z.string().trim().max(100).optional(),
  donorEmail: z.string().trim().email("Invalid email").max(255),
  amount: z.number().min(1, "Amount must be at least 1"),
  paymentMethod: z.string().optional(),
});

export function useDonation() {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const recordDonation = async (
    donorEmail: string,
    amount: number,
    donorName?: string,
    paymentMethod?: string
  ) => {
    setLoading(true);

    try {
      const validated = donationSchema.parse({ donorEmail, amount, donorName, paymentMethod });

      const { error } = await supabase.from("donations").insert({
        user_id: user?.id || null,
        donor_name: validated.donorName || null,
        donor_email: validated.donorEmail,
        amount: validated.amount,
        payment_method: validated.paymentMethod || null,
        payment_status: "pending",
      });

      if (error) throw error;

      toast.success("Thank you for your donation!");
      return { success: true };
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Failed to process donation. Please try again.");
      }
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { recordDonation, loading };
}
