const PROJECTS = [
  "American Dream Mall",
  "Garden State Plaza",
  "Paramus Park Mall",
  "Amazon Fresh — Paramus",
  "MoMA — NYC",
  "Journal Square — Jersey City",
];

export function TrustBar() {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white px-6 py-7 sm:px-10">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
        Crews who&apos;ve worked with us on large-scale debris and cleanout projects:
      </div>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink-700">
        {PROJECTS.map((p) => (
          <span key={p}>{p}</span>
        ))}
      </div>
    </div>
  );
}
