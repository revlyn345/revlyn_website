"use server";

// Follows the exact same pattern as app/actions/contact.ts (HubSpot Forms
// Submission API), reusing the same portal.
//
// ⚠️ ACTION NEEDED BEFORE THIS GOES LIVE:
// HUBSPOT_NEWSLETTER_FORM_ID below is a placeholder. The contact page's
// form ID can't be reused here — it expects firstname/lastname/message
// fields a newsletter signup doesn't have, so submissions would be
// rejected. In HubSpot: Marketing → Forms → create a simple one-field
// (email only) form for "Field notes" signups, then paste its form ID in
// below. Until that's done, this action will return a clear error rather
// than silently failing or pretending to succeed.

const HUBSPOT_PORTAL_ID = "50824762";
const HUBSPOT_NEWSLETTER_FORM_ID = "TODO_REPLACE_WITH_REAL_NEWSLETTER_FORM_ID";
const HUBSPOT_HUBLET: string = "na1";

export type NewsletterActionResult = {
  success: boolean;
  message: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function subscribeToNewsletter(email: string): Promise<NewsletterActionResult> {
  if (!isValidEmail(email)) {
    return { success: false, message: "Enter a valid email address." };
  }

  if (HUBSPOT_NEWSLETTER_FORM_ID === "TODO_REPLACE_WITH_REAL_NEWSLETTER_FORM_ID") {
    console.error(
      "[newsletter] HUBSPOT_NEWSLETTER_FORM_ID is still a placeholder — create a " +
        "newsletter form in HubSpot and set its form ID in app/actions/newsletter.ts",
    );
    return {
      success: false,
      message: "Signups aren't connected yet — check back soon.",
    };
  }

  const endpoint = `https://api${HUBSPOT_HUBLET === "eu1" ? "-eu1" : ""}.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_NEWSLETTER_FORM_ID}`;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: [{ name: "email", value: email }],
        context: {
          pageUri: "https://revlyn.io/blog",
          pageName: "Blog — Field notes",
        },
      }),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => null);
      console.error("[newsletter] HubSpot rejected the submission", res.status, body);
      return { success: false, message: "Something went wrong. Please try again." };
    }

    return { success: true, message: "You're in. One note a month, unsubscribe any time." };
  } catch (err) {
    console.error("[newsletter] failed to reach HubSpot", err);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}
