import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { ValveIcon } from "@/components/ValveIcon";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

const stats = [
  { value: "25+", label: "Years of experience" },
  { value: "40+", label: "Countries served" },
  { value: "500K+", label: "Valves delivered" },
  { value: "100%", label: "Pressure tested" },
];

const features = [
  {
    title: "Precision Engineering",
    text: "In-house design, CNC machining and assembly to API, ASME and ISO standards.",
  },
  {
    title: "Tested for Every Order",
    text: "Hydrostatic and pneumatic testing of every valve before dispatch, with full test reports.",
  },
  {
    title: "Custom Solutions",
    text: "Special materials, trims and actuation packages built to your project data sheets.",
  },
  {
    title: "Fast Delivery",
    text: "Ready stock of standard sizes and dependable lead times for project orders.",
  },
];

const industries = [
  "Oil & Gas",
  "Water & Wastewater",
  "Power Generation",
  "Chemical & Petrochemical",
  "Pharmaceutical",
  "Marine & Shipbuilding",
  "HVAC",
  "Mining",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <ValveIcon className="pointer-events-none absolute -right-24 -top-10 h-[28rem] w-[28rem] text-slate-800" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
            {site.name}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{site.description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-md bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700"
            >
              Explore Products
            </Link>
            <Link
              href="/download"
              className="rounded-md border border-slate-500 px-6 py-3 font-semibold text-white hover:bg-white hover:text-slate-900"
            >
              Download Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-orange-600 sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our Products</h2>
              <p className="mt-2 text-slate-600">
                A complete range of industrial valves for isolation, regulation and non-return service.
              </p>
            </div>
            <Link href="/products" className="font-semibold text-orange-600 hover:text-orange-700">
              View all products →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
            Why Choose {site.name}
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div key={f.title} className="rounded-xl border border-slate-200 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-bold tracking-tight">Industries We Serve</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {industries.map((name) => (
              <div
                key={name}
                className="rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-5 text-center font-medium"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-14 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Need a valve for your project?</h2>
            <p className="mt-2 text-orange-100">
              Send us your requirements and our engineers will reply with a quotation within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-md bg-white px-6 py-3 font-semibold text-orange-700 hover:bg-orange-50"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
