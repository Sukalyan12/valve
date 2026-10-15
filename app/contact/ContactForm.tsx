"use client";

import { useActionState } from "react";
import { products } from "@/lib/products";
import { sendEnquiry, type ContactState } from "./actions";

const initialState: ContactState = { ok: false, message: "" };

const inputClass =
  "mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200";

export function ContactForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [state, formAction, pending] = useActionState(sendEnquiry, initialState);

  if (state.ok) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <h3 className="text-xl font-semibold text-green-800">Message sent</h3>
        <p className="mt-2 text-green-700">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {state.message && (
        <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">{state.message}</p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-slate-700">Full name *</label>
          <input id="name" name="name" type="text" required className={inputClass} />
          {state.errors?.name && <p className="mt-1 text-sm text-red-600">{state.errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-slate-700">Email *</label>
          <input id="email" name="email" type="email" required className={inputClass} />
          {state.errors?.email && <p className="mt-1 text-sm text-red-600">{state.errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone</label>
          <input id="phone" name="phone" type="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium text-slate-700">Company</label>
          <input id="company" name="company" type="text" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="product" className="text-sm font-medium text-slate-700">Product of interest</label>
        <select id="product" name="product" defaultValue={defaultProduct} className={inputClass}>
          <option value="">General enquiry</option>
          {products.map((p) => (
            <option key={p.slug} value={p.slug}>{p.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-slate-700">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Size, pressure class, material, quantity…"
          className={inputClass}
        />
        {state.errors?.message && <p className="mt-1 text-sm text-red-600">{state.errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700 disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
