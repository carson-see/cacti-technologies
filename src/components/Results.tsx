const steps = [
  {
    number: "01",
    title: "Free Diagnostic Call",
    description:
      "We start with a 30-minute call to understand your business, your goals, and what's not working. No sales pitch — just an honest assessment of where you stand.",
    detail: "You'll walk away with a clear picture of your options, whether you hire us or not.",
  },
  {
    number: "02",
    title: "Strategy & Scope",
    description:
      "We map out exactly what needs to happen — which pages, which integrations, which automations. You'll see a fixed quote with no hidden fees before any work begins.",
    detail: "Most projects start within 1 week of approval.",
  },
  {
    number: "03",
    title: "Build & Launch",
    description:
      "We build fast without cutting corners. You get progress updates and can give feedback at every stage. When it's ready, we launch and make sure everything works.",
    detail: "Average turnaround: 1-2 weeks for websites, 2-4 weeks for integrations.",
  },
];

export default function Results() {
  return (
    <section id="results" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cactus/20 bg-cactus/10 px-4 py-1.5 text-sm font-medium text-cactus-700">
            How We Work
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Simple process.{" "}
            <span className="text-cactus">No surprises.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            We&apos;re a new agency built on years of Fortune 500 experience.
            Here&apos;s how every project works.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="card flex flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cactus/10 text-lg font-extrabold text-cactus">
                {step.number}
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mb-3 flex-1 text-sm leading-relaxed text-slate-500">
                {step.description}
              </p>
              <p className="text-xs font-medium text-cactus-700">
                {step.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Honest CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <p className="text-lg font-semibold text-slate-900">
            We&apos;re building our portfolio — and that means you get our best
            work at our best prices.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Early clients help shape what we become. In return, you get
            enterprise-quality work at a fraction of what agencies charge.
          </p>
          <a
            href="#audit"
            className="btn-primary mt-6 inline-block"
          >
            Start With a Free Audit
          </a>
        </div>
      </div>
    </section>
  );
}
