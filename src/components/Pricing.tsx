const plans = [
  {
    name: "Single Page",
    price: "$300",
    period: "one-time",
    description: "A sharp, fast, mobile-ready single-page site. Additional pages just $200 each.",
    features: [
      "Custom single-page design",
      "Mobile-responsive & fast",
      "Basic SEO setup",
      "Contact form & analytics",
      "Google Business optimization",
      "$200 per additional page",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$149",
    period: "per month",
    description: "Website + ongoing SEO + AI chatbot. Everything a local business needs to grow online.",
    features: [
      "Custom multi-page website included",
      "Local SEO & Google rankings",
      "AI chatbot (lead qualification)",
      "CRM & email automation",
      "Monthly performance reports",
      "Priority support",
    ],
    cta: "Most Popular",
    highlighted: true,
  },
  {
    name: "Tech Rescue",
    price: "$75",
    period: "per hour",
    description: "Broken site? Tangled systems? We fix what others left behind.",
    features: [
      "Bug fixes & site recovery",
      "Legacy system migration",
      "API & platform integration",
      "Payment system setup",
      "No minimum hours",
      "Free 30-min diagnostic call",
    ],
    cta: "Let's Talk",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Transparent Pricing.{" "}
            <span className="text-cactus">No Surprises.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Cacti Technologies pricing starts at $300 for a custom single-page
            website, $149/month for the Growth plan (website + local SEO + AI
            chatbot + CRM automation), and $75/hour for tech rescue and legacy
            system work. Every engagement begins with a free consultation. No
            hidden fees, no long-term contracts, no minimum hours for hourly
            work.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-cactus bg-white shadow-xl shadow-cactus/10 ring-1 ring-cactus"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cactus px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}

              <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">
                  {plan.price}
                </span>
                <span className="text-sm text-slate-500">/ {plan.period}</span>
              </div>
              <p className="mt-3 text-sm text-slate-500">{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-cactus" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#audit"
                className={`mt-8 block w-full rounded-xl py-3 text-center text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-cactus text-white shadow-lg shadow-cactus/25 hover:bg-cactus-600"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
