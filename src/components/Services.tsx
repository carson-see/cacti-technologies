const services = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Web Design & Local SEO",
    description:
      "Custom websites built to rank in Grand Rapids and beyond. Mobile-first design, blazing-fast load times, and local search optimization that puts you on the map.",
    features: [
      "Custom responsive design",
      "Google Business optimization",
      "Local keyword strategy",
      "Performance-tuned hosting",
    ],
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "AI & Automations",
    description:
      "Stop doing repetitive work. We build custom AI chatbots, automated workflows, and smart integrations that save you hours every week.",
    features: [
      "Custom AI chatbots",
      "Workflow automation",
      "CRM & email integration",
      "Smart lead routing",
    ],
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 3v18" />
      </svg>
    ),
    title: "Tech Rescue & Integration",
    description:
      "Inherited a mess? We untangle broken systems, migrate legacy platforms, and connect your tools so everything actually talks to each other.",
    features: [
      "Legacy system migration",
      "API & platform integration",
      "Payment system setup",
      "Technical debt cleanup",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Running a business is hard enough.{" "}
            <span className="text-cactus">Your tech shouldn&apos;t make it harder.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Three ways we help local businesses compete with the big guys — without the big-guy budget.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="card group">
              <div className="mb-4 inline-flex rounded-xl bg-cactus/10 p-3 text-cactus transition-colors group-hover:bg-cactus group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-500">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <svg className="h-4 w-4 flex-shrink-0 text-cactus" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
