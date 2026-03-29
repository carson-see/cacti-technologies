const credentials = [
  { label: "MBA", detail: "Business Strategy" },
  { label: "A-CSM", detail: "Agile Leadership" },
  { label: "SAFe 5.0", detail: "Enterprise Scaling" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-cactus/20 to-cactus/5" />
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white bg-slate-200 shadow-xl sm:h-80 sm:w-80">
                {/* Placeholder — replace src with actual headshot */}
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                  <svg className="h-32 w-32 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cactus/20 bg-cactus/10 px-4 py-1.5 text-sm font-medium text-cactus-700">
              About the Founder
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Meet Your Local{" "}
              <span className="text-cactus">Tech Partner</span>
            </h2>
            <p className="mt-4 text-lg font-semibold text-slate-700">
              Carson Seeger, MBA
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-500">
              After years leading technology initiatives at Fortune 500
              companies, I saw the same pattern: small businesses in West
              Michigan were being left behind — priced out of the tools and
              strategies that their bigger competitors use every day.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-500">
              I founded Cacti Technologies to change that. We bring
              enterprise-grade web development, AI automation, and systems
              integration to local businesses — at prices that actually make
              sense. No fluff, no jargon, just technology that works.
            </p>

            {/* Credential badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-cactus/10 text-xs font-bold text-cactus">
                    {cred.label.substring(0, 2)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">
                      {cred.label}
                    </div>
                    <div className="text-xs text-slate-500">{cred.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
