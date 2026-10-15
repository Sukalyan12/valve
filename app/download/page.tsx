import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { downloads, type DownloadItem } from "@/lib/downloads";

export const metadata: Metadata = {
  title: "Download",
  description: "Download product catalogues, datasheets, certificates and manuals.",
};

const groups: { type: DownloadItem["type"]; heading: string }[] = [
  { type: "Catalogue", heading: "Catalogues & Datasheets" },
  { type: "Brochure", heading: "Brochures" },
  { type: "Certificate", heading: "Certificates" },
  { type: "Manual", heading: "Manuals" },
];

export default function DownloadPage() {
  return (
    <>
      <PageHero
        title="Downloads"
        subtitle="Product catalogues, technical datasheets, quality certificates and manuals, free to download."
      />

      <div className="mx-auto max-w-4xl px-4 py-16">
        {groups.map(({ type, heading }) => {
          const items = downloads.filter((d) => d.type === type);
          if (items.length === 0) return null;
          return (
            <section key={type} className="mb-12 last:mb-0">
              <h2 className="text-xl font-bold text-slate-900">{heading}</h2>
              <ul className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
                {items.map((d) => (
                  <li key={d.file} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-50 text-xs font-bold text-red-600">
                      PDF
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">{d.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{d.description}</p>
                    </div>
                    <a
                      href={d.file}
                      download
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M12 4v12m0 0l-5-5m5 5l5-5M4 20h16" />
                      </svg>
                      Download
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}

        <p className="mt-12 rounded-lg bg-slate-50 p-5 text-sm text-slate-600">
          Can&apos;t find the document you need? Contact our sales team for drawings, test certificates or
          project-specific documentation.
        </p>
      </div>
    </>
  );
}
