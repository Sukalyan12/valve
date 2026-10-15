// Shared banner used at the top of inner pages.
export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">{subtitle}</p>
      </div>
    </section>
  );
}
