import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(60, "First name must be under 60 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(60, "Last name must be under 60 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be under 255 characters"),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(30, "Phone number must be under 30 characters"),
  message: z.string().trim().min(10, "Tell us a bit more about what you need").max(2000, "Message must be under 2000 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactActionResult =
  | { success: true; message: string }
  | { success: false; message: string; fieldErrors?: Partial<Record<keyof ContactFormData, string>> };