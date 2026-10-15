import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Ball, gate, globe, butterfly, check and control valves for industrial applications.",
};

const categories = ["Isolation", "Regulation", "Non-Return"] as const;

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="Industrial valves in a wide range of sizes, pressure classes and materials, built to international standards."
      />

      <div className="mx-auto max-w-6xl px-4 py-16">
        {categories.map((category) => {
          const items = products.filter((p) => p.category === category);
          return (
            <section key={category} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-slate-900">{category} Valves</h2>
              <div className="mt-2 h-1 w-16 rounded bg-orange-600" />
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
