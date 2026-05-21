"use client";

import { useActionState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitQuote, type QuoteFormState } from "@/app/actions/quote";

const QUOTE_SERVICES = [
  "Whole-House Cleanout",
  "Hoarder Cleanout",
  "Estate Cleanout",
  "Garage Cleanout",
  "Basement Cleanout",
  "Apartment / Move-Out Cleanout",
  "Office / Commercial Cleanout",
  "Foreclosure / Eviction",
  "Furniture Removal",
  "Appliance Removal",
  "Mattress Removal",
  "Hot Tub Removal",
  "Shed / Deck / Fence Demolition",
  "Dumpster Rental",
  "Construction Debris",
  "Something Else",
];

const initialState: QuoteFormState = { ok: false };

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [state, formAction, pending] = useActionState(submitQuote, initialState);

  if (state.ok && state.message) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-green-600" />
        <h3 className="mt-3 font-display text-xl font-bold text-green-900">Request received</h3>
        <p className="mt-2 text-sm text-green-800">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <input type="text" name="website" autoComplete="off" tabIndex={-1} className="hidden" aria-hidden="true" />

      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field label="Your name" name="name" required placeholder="First & last" />
        <Field label="Phone" name="phone" type="tel" required placeholder="(201) 555-0100" />
      </div>

      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field label="Email" name="email" type="email" placeholder="you@email.com" />
        <Field label="Town / city" name="town" placeholder="Hoboken, Toms River, etc." />
      </div>

      <Field
        label="Service address"
        name="address"
        placeholder="Street address (optional)"
      />

      <div>
        <Label>What do you need?</Label>
        <select
          name="service"
          required
          className="block w-full rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          defaultValue=""
        >
          <option value="" disabled>
            Choose a service…
          </option>
          {QUOTE_SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Label>Tell us about the project</Label>
        <textarea
          name="description"
          rows={4}
          placeholder="What needs to go, where it is in the home, any access notes (basement, stairs, parking)…"
          className="block w-full rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          required
        />
      </div>

      <Field
        label="Preferred date (optional)"
        name="preferredDate"
        type="date"
      />

      {state.error && (
        <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{state.error}</span>
        </div>
      )}

      <Button type="submit" size="lg" disabled={pending} className="w-full">
        {pending ? "Sending…" : "Get My Free Quote"}
      </Button>
      <p className="text-center text-xs text-ink-500">
        We respond fast — usually same day. No spam, no robocalls.
      </p>
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="mb-1.5 block text-sm font-semibold text-ink-800">{children}</label>;
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <Label>
        {label} {required && <span className="text-accent">*</span>}
      </Label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="block w-full rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
      />
    </div>
  );
}
