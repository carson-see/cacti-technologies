const projects = [
  {
    name: "Arkova",
    url: "https://arkova.ai",
    appUrl: "https://app.arkova.ai/dashboard",
    description:
      "Enterprise credential verification platform with Bitcoin-anchored document integrity, AI-powered extraction, and real-time compliance dashboards.",
    tags: ["Full-Stack App", "AI Integration", "Bitcoin Anchoring", "Supabase"],
    stats: [
      { label: "Records Secured", value: "166K+" },
      { label: "Public Records", value: "320K+" },
      { label: "Bitcoin TXs", value: "116" },
    ],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cactus/20 bg-cactus/10 px-4 py-1.5 text-sm font-medium text-cactus-700">
            Our Work
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Real projects.{" "}
            <span className="text-cactus">Real results.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            We don&apos;t show mockups or hypotheticals. Here&apos;s what we&apos;ve actually built.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
            >
              <div className="p-8 lg:p-10">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-500">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-cactus/10 px-3 py-1 text-xs font-medium text-cactus-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-6 lg:gap-8">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-2xl font-extrabold text-cactus">
                          {stat.value}
                        </div>
                        <div className="mt-1 text-xs text-slate-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 text-sm"
                  >
                    Visit Site
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={project.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-cactus hover:text-cactus"
                  >
                    View Dashboard
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
