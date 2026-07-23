"use server";

// NOTE: files marked "use server" may only export async functions — the
// schema/types live in lib/contact-schema.ts and are re-exported for
// convenience so existing imports of `contactSchema` / `ContactFormData`
// from "@/app/actions/contact" keep working.
import { contactSchema, type ContactFormData, type ContactActionResult } from "@/lib/contact-schema";

// HubSpot form this page submits into.
// Extracted from the share.hsforms.com embed link:
//   _hsPortalId=50824762
//   _hsFormId=4331c0e5-dd21-493f-8b32-a692976a3104
//   _hsHublet=na1
const HUBSPOT_PORTAL_ID = "50824762";
const HUBSPOT_FORM_ID = "4331c0e5-dd21-493f-8b32-a692976a3104";
const HUBSPOT_HUBLET: string = "na1"; // na1 | eu1 — matches the account region

// HubSpot's internal property name for the free-text message field varies by
// portal (it's whatever the form was built with — often "message" or a
// custom property). Update this if HubSpot rejects the submission with an
// "invalid fields" error naming a different property.
const HUBSPOT_MESSAGE_FIELD = "message";

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

  const { firstName, lastName, email, phone, message } = parsed.data;

  const endpoint = `https://api${HUBSPOT_HUBLET === "eu1" ? "-eu1" : ""}.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: [
          { name: "firstname", value: firstName },
          { name: "lastname", value: lastName },
          { name: "email", value: email },
          { name: "phone", value: phone },
          { name: HUBSPOT_MESSAGE_FIELD, value: message },
        ],
        context: {
          pageUri: "https://revlyn.io/contact",
          pageName: "Contact",
        },
      }),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => null);
      console.error("[contact] HubSpot rejected the submission", res.status, body);
      return {
        success: false,
        message: "Something went wrong. Please try again or email us directly.",
      };
    }

    return { success: true, message: "Thanks — we will reply within one business day." };
  } catch (err) {
    console.error("[contact] failed to reach HubSpot", err);
    return {
      success: false,
      message: "Something went wrong. Please try again or email us directly.",
    };
  }
}
