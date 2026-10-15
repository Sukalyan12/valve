import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ValveIcon } from "@/components/ValveIcon";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProduct(slug);
  return product ? { title: product.name, description: product.summary } : {};
}

export default async function ProductDetailPage(props: PageProps<"/products/[slug]">) {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) notFound();

  const specs = [
    { label: "Category", value: product.category },
    { label: "Size Range", value: product.sizes },
    { label: "Pressure Rating", value: product.pressure },
    { label: "End Connections", value: product.endConnections.join(", ") },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-orange-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-orange-600">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200">
          <ValveIcon className="h-1/2 w-1/2 text-slate-700" />
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            {product.category} Valve
          </span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">{product.name}</h1>
          <p className="mt-4 text-lg text-slate-600">{product.summary}</p>
          <p className="mt-4 leading-7 text-slate-600">{product.description}</p>

          <dl className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200">
            {specs.map((s) => (
              <div key={s.label} className="grid grid-cols-3 gap-4 px-5 py-3 text-sm">
                <dt className="font-medium text-slate-500">{s.label}</dt>
                <dd className="col-span-2 text-slate-900">{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h2 className="font-semibold text-slate-900">Materials</h2>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                {product.materials.map((m) => <li key={m}>• {m}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-slate-900">Applications</h2>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                {product.applications.map((a) => <li key={a}>• {a}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/contact?product=${product.slug}`}
              className="rounded-md bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700"
            >
              Request a Quote
            </Link>
            <Link
              href="/download"
              className="rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100"
            >
              Download Datasheet
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
