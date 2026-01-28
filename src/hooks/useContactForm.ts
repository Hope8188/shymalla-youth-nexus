import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export function useContactForm() {
  const [loading, setLoading] = useState(false);

  const submitContact = async (name: string, email: string, message: string) => {
    setLoading(true);

    try {
      const validated = contactSchema.parse({ name, email, message });

      const { error } = await supabase
        .from("contact_submissions")
        .insert({
          name: validated.name,
          email: validated.email,
          message: validated.message,
        });

      if (error) throw error;

      toast.success("Message sent successfully! We'll get back to you soon.");
      return { success: true };
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { submitContact, loading };
}
