const faqs = [
  {
    q: "How much does a website cost in Grand Rapids, MI?",
    a: "Cacti Technologies offers custom single-page websites starting at $300, with additional pages at $200 each. For businesses that need ongoing local SEO, AI chatbot, and CRM automation, the Growth plan is $149 per month. All projects begin with a free consultation.",
  },
  {
    q: "What does Cacti Technologies do?",
    a: "Cacti Technologies is a Grand Rapids, MI tech agency that provides web design, local SEO, AI automation, and tech rescue services for small businesses. Founded by Carson Seeger, MBA, the agency brings Fortune 500 methodology to local businesses at accessible price points.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most single-page websites are delivered within 1 to 2 weeks. Larger projects with integrations and AI automations typically take 2 to 4 weeks. Every project starts within one week of approval.",
  },
  {
    q: "Do you only work with businesses in Grand Rapids?",
    a: "Cacti Technologies is based in Grand Rapids, Michigan and primarily serves small businesses in West Michigan. However, we work with clients anywhere in the US who need web development, AI automation, or tech rescue services.",
  },
  {
    q: "What is an AI chatbot and how can it help my business?",
    a: "An AI chatbot is an automated assistant on your website that answers customer questions, qualifies leads, and schedules appointments 24/7. Cacti Technologies builds custom AI chatbots that integrate with your existing tools and can save small businesses 10 to 15 hours per week on routine customer interactions.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "No. Cacti Technologies does not require long-term contracts. One-time projects like websites have a fixed price with no recurring fees. The Growth plan is month-to-month and can be cancelled at any time. Tech rescue work is billed hourly at $75/hour with no minimum hours.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cactus/20 bg-cactus/10 px-4 py-1.5 text-sm font-medium text-cactus-700">
            FAQ
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Common questions,{" "}
            <span className="text-cactus">straight answers.</span>
          </h2>
        </div>

        <div className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-base font-bold text-slate-900">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
