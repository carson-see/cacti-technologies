const caseStudies = [
  {
    industry: "Restaurant",
    title: "Local Bistro Goes From Page 5 to Page 1",
    metric: "312%",
    metricLabel: "increase in organic traffic",
    description:
      "A Grand Rapids restaurant was invisible on Google. We rebuilt their site for speed, optimized their Google Business profile, and implemented local SEO — they now rank #1 for their top 5 keywords.",
    tags: ["Web Design", "Local SEO", "Google Business"],
  },
  {
    industry: "Home Services",
    title: "Plumber Saves 15 Hours/Week with AI",
    metric: "15hrs",
    metricLabel: "saved per week",
    description:
      "Manual quote follow-ups were eating this contractor's evenings. We built an AI chatbot that qualifies leads, schedules estimates, and sends follow-up emails automatically.",
    tags: ["AI Chatbot", "Automation", "CRM Integration"],
  },
  {
    industry: "Retail",
    title: "Boutique Untangles 3 Broken Systems",
    metric: "3→1",
    metricLabel: "systems consolidated",
    description:
      "Their POS, website, and inventory were on three different platforms that didn't talk to each other. We integrated everything into one seamless system with real-time sync.",
    tags: ["Tech Rescue", "Integration", "Migration"],
  },
];

export default function Results() {
  return (
    <section id="results" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cactus/20 bg-cactus/10 px-4 py-1.5 text-sm font-medium text-cactus-700">
            Real Results
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            What happens when local businesses{" "}
            <span className="text-cactus">get enterprise-grade tech</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {caseStudies.map((study) => (
            <div key={study.title} className="card flex flex-col">
              <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-cactus">
                {study.industry}
              </div>
              <h3 className="mb-4 text-lg font-bold text-slate-900">
                {study.title}
              </h3>

              {/* Big metric */}
              <div className="mb-4 rounded-xl bg-slate-50 p-4 text-center">
                <div className="text-4xl font-extrabold text-cactus">
                  {study.metric}
                </div>
                <div className="mt-1 text-xs font-medium text-slate-500">
                  {study.metricLabel}
                </div>
              </div>

              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-500">
                {study.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
