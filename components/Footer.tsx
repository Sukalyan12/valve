import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { products } from "@/lib/products";
import { ValveIcon } from "./ValveIcon";

async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getYear();

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-white">
            <ValveIcon className="h-7 w-7 text-orange-500" />
            <span className="text-lg font-bold">{site.name}</span>
          </div>
          <p className="mt-4 text-sm leading-6">{site.description}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-orange-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Products</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} className="hover:text-orange-400">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>{site.address}</li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-orange-400">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-orange-400">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6 text-center text-xs">
        © {year} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
