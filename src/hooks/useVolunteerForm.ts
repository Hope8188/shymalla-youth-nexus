import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";

const volunteerSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20).optional().or(z.literal("")),
  interests: z.array(z.string()).min(1, "Please select at least one area of interest"),
});

export type VolunteerFormData = z.infer<typeof volunteerSchema>;

const interestOptions = [
  "Health Education",
  "Mental Wellness",
  "Youth Mentorship",
  "Entrepreneurship Training",
  "Community Outreach",
  "Event Planning",
  "Social Media & Communications",
  "Fundraising",
];

export function useVolunteerForm() {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const submitVolunteerForm = async (data: VolunteerFormData) => {
    const validation = volunteerSchema.safeParse(data);
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return false;
    }

    setIsSubmitting(true);

    try {
      if (user) {
        // Update existing profile
        const { error } = await supabase
          .from("profiles")
          .update({
            full_name: data.fullName,
            phone: data.phone || null,
            is_volunteer: true,
            volunteer_interests: data.interests.join(", "),
          })
          .eq("user_id", user.id);

        if (error) throw error;
      } else {
        // For non-authenticated users, we'll store in contact_submissions with a volunteer tag
        const { error } = await supabase
          .from("contact_submissions")
          .insert({
            name: data.fullName,
            email: data.email,
            message: `VOLUNTEER APPLICATION\n\nPhone: ${data.phone || "Not provided"}\nInterests: ${data.interests.join(", ")}`,
            status: "volunteer_application",
          });

        if (error) throw error;
      }

      setIsSuccess(true);
      toast.success("Thank you for applying to volunteer! We'll be in touch soon.");
      return true;
    } catch (error: any) {
      console.error("Volunteer form error:", error);
      toast.error("Something went wrong. Please try again.");
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
  };

  return {
    submitVolunteerForm,
    isSubmitting,
    isSuccess,
    resetForm,
    interestOptions,
  };
}
