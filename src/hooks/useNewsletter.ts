import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";

const emailSchema = z.string().trim().email("Invalid email").max(255);

export function useNewsletter() {
  const [loading, setLoading] = useState(false);

  const subscribe = async (email: string) => {
    setLoading(true);

    try {
      const validatedEmail = emailSchema.parse(email);

      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({ email: validatedEmail });

      if (error) {
        if (error.code === "23505") {
          toast.info("You're already subscribed!");
        } else {
          throw error;
        }
      } else {
        toast.success("Thanks for subscribing!");
      }

      return { success: true };
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Failed to subscribe. Please try again.");
      }
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { subscribe, loading };
}
