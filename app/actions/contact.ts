"use server";

// NOTE: files marked "use server" may only export async functions — the
// schema/types live in lib/contact-schema.ts and are re-exported for
// convenience so existing imports of `contactSchema` / `ContactFormData`
// from "@/app/actions/contact" keep working.
import { contactSchema, type ContactFormData, type ContactActionResult } from "@/lib/contact-schema";

export async function submitContact(data: ContactFormData): Promise<ContactActionResult> {
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactFormData;
      if (key) fieldErrors[key] = issue.message;
    }
    return { success: false, message: "Please fix the errors below.", fieldErrors };
  }

  // TODO: wire submission to email, Slack, CRM, or database.
  console.log("[contact] submission received", {
    firstName: parsed.data.firstName,
    lastName: parsed.data.lastName,
    email: parsed.data.email,
    phone: parsed.data.phone,
  });

  return { success: true, message: "Thanks — we will reply within one business day." };
}
