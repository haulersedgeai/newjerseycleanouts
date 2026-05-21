"use server";

import { Resend } from "resend";
import { promises as fs } from "fs";
import path from "path";
import { SITE } from "@/lib/site";

export interface QuoteFormState {
  ok: boolean;
  error?: string;
  message?: string;
}

export async function submitQuote(_prev: QuoteFormState, formData: FormData): Promise<QuoteFormState> {
  // Honeypot
  if (formData.get("website")) {
    return { ok: true, message: "Thanks! We'll be in touch shortly." };
  }

  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const address = String(formData.get("address") || "").trim();
  const town = String(formData.get("town") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const preferredDate = String(formData.get("preferredDate") || "").trim();

  if (!name || !phone || (!email && !phone)) {
    return { ok: false, error: "Please add your name and a phone or email so we can reach you." };
  }
  if (!description && !service) {
    return { ok: false, error: "Please tell us a little about what you need cleared out." };
  }

  const submittedAt = new Date().toISOString();
  const subject = `New quote request — ${service || "Cleanout"} · ${town || "NJ"} · ${name}`;
  const lines = [
    `New quote request from newjerseycleanouts.com`,
    `Submitted: ${submittedAt}`,
    ``,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email || "—"}`,
    `Service address: ${address || "—"}`,
    `Town: ${town || "—"}`,
    `Service requested: ${service || "—"}`,
    `Preferred date: ${preferredDate || "—"}`,
    ``,
    `Project description:`,
    description || "—",
  ];
  const text = lines.join("\n");
  const html = `
    <h2 style="font-family:Manrope,system-ui;color:#0b1320">New quote request</h2>
    <p style="color:#5d6678">Submitted: ${submittedAt}</p>
    <table style="font-family:Inter,system-ui;border-collapse:collapse">
      <tr><td style="padding:6px 12px;color:#5d6678">Name</td><td style="padding:6px 12px">${escapeHtml(name)}</td></tr>
      <tr><td style="padding:6px 12px;color:#5d6678">Phone</td><td style="padding:6px 12px">${escapeHtml(phone)}</td></tr>
      <tr><td style="padding:6px 12px;color:#5d6678">Email</td><td style="padding:6px 12px">${escapeHtml(email)}</td></tr>
      <tr><td style="padding:6px 12px;color:#5d6678">Address</td><td style="padding:6px 12px">${escapeHtml(address)}</td></tr>
      <tr><td style="padding:6px 12px;color:#5d6678">Town</td><td style="padding:6px 12px">${escapeHtml(town)}</td></tr>
      <tr><td style="padding:6px 12px;color:#5d6678">Service</td><td style="padding:6px 12px">${escapeHtml(service)}</td></tr>
      <tr><td style="padding:6px 12px;color:#5d6678">Preferred date</td><td style="padding:6px 12px">${escapeHtml(preferredDate)}</td></tr>
    </table>
    <h3 style="font-family:Manrope,system-ui;margin-top:18px;color:#0b1320">Project description</h3>
    <p style="font-family:Inter,system-ui;white-space:pre-wrap">${escapeHtml(description)}</p>
  `;

  const key = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL || SITE.email;
  const from = process.env.QUOTE_FROM_EMAIL || "onboarding@resend.dev";

  if (key) {
    try {
      const resend = new Resend(key);
      const { error } = await resend.emails.send({
        from: `${SITE.name} <${from}>`,
        to: [to],
        replyTo: email || undefined,
        subject,
        text,
        html,
      });
      if (error) {
        await fallbackLog(text);
        return { ok: false, error: "We had trouble sending that — please call us at " + SITE.phone.display };
      }
      return { ok: true, message: "Thanks! We received your request and will text or call you shortly." };
    } catch {
      await fallbackLog(text);
      return { ok: false, error: "We had trouble sending that — please call us at " + SITE.phone.display };
    }
  }

  await fallbackLog(text);
  return {
    ok: true,
    message: "Thanks! We received your request and will be in touch shortly.",
  };
}

async function fallbackLog(text: string) {
  try {
    const file = path.join("/tmp", "njc-quotes.log");
    await fs.appendFile(file, `\n\n========\n${text}\n`, "utf8");
  } catch {
    // ignore
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
