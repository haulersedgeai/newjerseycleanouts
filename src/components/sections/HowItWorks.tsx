const STEPS = [
  {
    n: "01",
    title: "Tell us what you've got",
    body: "Call, text, or fill out the quote form with a few photos. Two minutes is enough — we'll handle the rest.",
  },
  {
    n: "02",
    title: "We give you an upfront price",
    body: "On-site walkthrough or video estimate. You get a flat number — no hourly clock, no surprise dump fees.",
  },
  {
    n: "03",
    title: "Same-day or next-day pickup",
    body: "We bring the trucks, the dollies, and the crew. You point, we load — even from third-floor walk-ups.",
  },
  {
    n: "04",
    title: "Broom-clean finish",
    body: "Donations dropped off, metals recycled, your space swept. We text photos so you can see the finish.",
  },
];

export function HowItWorks() {
  return (
    <div>
      <h2 className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
        How It Works
      </h2>
      <p className="mt-3 max-w-2xl text-ink-600">
        Booking a cleanout should not be harder than the cleanout itself.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s) => (
          <div key={s.n} className="relative rounded-2xl border border-ink-200 bg-white p-6">
            <div className="font-display text-5xl font-extrabold text-brand-100">{s.n}</div>
            <div className="mt-2 font-display text-lg font-bold text-ink-900">{s.title}</div>
            <p className="mt-2 text-sm text-ink-600">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
