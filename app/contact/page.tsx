import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with our sales team for quotations and technical support.",
};

const details = [
  { label: "Address", value: site.address },
  { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Business Hours", value: site.hours },
];

// Reads ?product= (set by "Request a Quote" on product pages) to preselect the dropdown.
async function PrefilledContactForm({ searchParams }: { searchParams: PageProps<"/contact">["searchParams"] }) {
  const { product } = await searchParams;
  return <ContactForm defaultProduct={typeof product === "string" ? product : ""} />;
}

export default function ContactPage(props: PageProps<"/contact">) {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have a requirement or a technical question? Send us a message and our team will respond within one business day."
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-3">
        <aside className="space-y-6">
          {details.map((d) => (
            <div key={d.label} className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-orange-600">{d.label}</h2>
              {d.href ? (
                <a href={d.href} className="mt-2 block text-slate-900 hover:text-orange-600">{d.value}</a>
              ) : (
                <p className="mt-2 text-slate-900">{d.value}</p>
              )}
            </div>
          ))}
        </aside>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-2">
          <h2 className="text-2xl font-bold text-slate-900">Send an Enquiry</h2>
          <p className="mt-1 mb-6 text-sm text-slate-600">Fields marked * are required.</p>
          <Suspense fallback={<ContactForm />}>
            <PrefilledContactForm searchParams={props.searchParams} />
          </Suspense>
        </section>
      </div>
    </>
  );
}
