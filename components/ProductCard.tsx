import Link from "next/link";
import type { Product } from "@/lib/products";
import { ValveIcon } from "./ValveIcon";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white">
        <ValveIcon className="h-8 w-8" />
      </div>
      <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-orange-600">
        {product.category}
      </span>
      <h3 className="mt-1 text-xl font-semibold text-slate-900">{product.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{product.summary}</p>
      <dl className="mt-4 space-y-1 border-t border-slate-100 pt-4 text-xs text-slate-500">
        <div className="flex justify-between gap-4">
          <dt>Sizes</dt>
          <dd className="text-right font-medium text-slate-700">{product.sizes}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt>Pressure</dt>
          <dd className="text-right font-medium text-slate-700">{product.pressure}</dd>
        </div>
      </dl>
      <span className="mt-5 text-sm font-semibold text-slate-900 group-hover:text-orange-600">
        View details →
      </span>
    </Link>
  );
}
