import AuditTool from "./AuditTool";

export default function Hero() {
  return (
    <section
      id="audit"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/80 to-slate-950" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-cactus/10 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-cactus/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cactus/20 bg-cactus/10 px-4 py-1.5 text-sm font-medium text-cactus-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cactus animate-pulse" />
            Now serving West Michigan businesses
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Enterprise-Grade Tech.{" "}
            <span className="bg-gradient-to-r from-cactus-400 to-cactus bg-clip-text text-transparent">
              Scaled for Local Success.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Stop losing customers to a slow site and invisible search presence.
            Get a free audit in 30 seconds — see exactly what&apos;s holding your
            business back online.
          </p>
        </div>

        {/* Audit tool */}
        <div className="mx-auto mt-12 max-w-2xl">
          <AuditTool />
        </div>

        {/* Social proof */}
        <div className="mx-auto mt-16 flex max-w-lg flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-cactus" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-cactus" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Results in 30 seconds
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-cactus" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            100% free
          </span>
        </div>
      </div>
    </section>
  );
}
