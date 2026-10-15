"use server";

export type ContactState = {
  ok: boolean;
  message: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
};

export async function sendEnquiry(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const product = String(formData.get("product") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: ContactState["errors"] = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 10) errors.message = "Please tell us a little more (at least 10 characters).";

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "Please fix the highlighted fields.", errors };
  }

  // TODO: deliver the enquiry — e.g. send an email (Resend, Nodemailer) or save it to a database.
  console.log("New enquiry:", { name, email, phone, company, product, message });

  return { ok: true, message: `Thank you, ${name}! Our team will get back to you within 24 hours.` };
}
