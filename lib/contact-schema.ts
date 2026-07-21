import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be under 255 characters"),
  company: z.string().trim().max(100, "Company must be under 100 characters").optional().or(z.literal("")),
  role: z.enum(["Founder", "Head of Sales", "Head of Marketing", "Head of Revenue", "Head of GTM", "Other"], {
    message: "Please select a role",
  }),
  message: z.string().trim().min(10, "Tell us a bit more about what you need").max(2000, "Message must be under 2000 characters"),
  source: z.string().trim().max(100).optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactActionResult =
  | { success: true; message: string }
  | { success: false; message: string; fieldErrors?: Partial<Record<keyof ContactFormData, string>> };
