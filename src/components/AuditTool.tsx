"use client";

import { useState } from "react";
import { runSeoAudit, captureAuditEmail, type AuditResult } from "@/app/actions";

function ScoreRing({ score, label, color }: { score: number | null; label: string; color: string }) {
  const value = score ?? 0;
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (value / 100) * circumference;

  const ringColor =
    value >= 80 ? "stroke-cactus" : value >= 50 ? "stroke-amber-400" : "stroke-red-400";

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-24 w-24">
        <svg className="h-24 w-24 -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50" cy="50" r="40"
            className="fill-none stroke-slate-100"
            strokeWidth="8"
          />
          <circle
            cx="50" cy="50" r="40"
            className={`score-ring fill-none ${ringColor}`}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-slate-800">
            {score !== null ? score : "—"}
          </span>
        </div>
      </div>
      <span className="text-xs font-medium text-slate-500">{label}</span>
    </div>
  );
}

export default function AuditTool() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");

  async function handleScan(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const data = await runSeoAudit(url);
      setResult(data);
    } catch {
      setError("Something went wrong. Please check the URL and try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleEmailCapture(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !result) return;

    try {
      await captureAuditEmail(result.id, email);
      setEmailSent(true);
    } catch {
      setError("Couldn't save your email. Please try again.");
    }
  }

  // Initial scan form
  if (!result) {
    return (
      <form onSubmit={handleScan} className="relative">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your website URL..."
              className="w-full rounded-xl border border-slate-700 bg-slate-800/50 py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:border-cactus focus:outline-none focus:ring-2 focus:ring-cactus/20"
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            disabled={loading || !url.trim()}
            className="btn-primary rounded-xl px-8 py-4 text-base disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Scanning...
              </span>
            ) : (
              "Scan My Site"
            )}
          </button>
        </div>
        {error && (
          <p className="mt-3 text-sm text-red-400">{error}</p>
        )}
      </form>
    );
  }

  // Results view
  return (
    <div className="rounded-2xl border border-slate-700/50 bg-slate-800/50 p-6 backdrop-blur-sm sm:p-8">
      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-cactus">
        Audit Results
      </div>
      <p className="mb-1 text-sm text-slate-400 truncate">
        {result.websiteUrl}
      </p>

      {/* Score rings */}
      <div className="my-8 flex justify-center gap-6 sm:gap-10">
        <ScoreRing score={result.performanceScore} label="Performance" color="cactus" />
        <ScoreRing score={result.seoScore} label="SEO" color="cactus" />
        <ScoreRing score={result.accessibilityScore} label="Accessibility" color="cactus" />
      </div>

      {/* Teaser text */}
      <div className="mb-8 rounded-xl border border-slate-700/50 bg-slate-900/50 p-4">
        <p className="text-sm leading-relaxed text-slate-300">
          {result.teaserText}
        </p>
      </div>

      {/* Email capture or success */}
      {emailSent ? (
        <div className="rounded-xl border border-cactus/20 bg-cactus/10 p-4 text-center">
          <svg className="mx-auto mb-2 h-8 w-8 text-cactus" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm font-medium text-cactus-300">
            Your full report is on the way! Check your inbox shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleEmailCapture}>
          <p className="mb-3 text-center text-sm font-medium text-white">
            Want the full breakdown with action items?
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cactus focus:outline-none focus:ring-2 focus:ring-cactus/20"
            />
            <button
              type="submit"
              className="btn-primary rounded-xl px-6 py-3"
            >
              Unlock Full Report
            </button>
          </div>
          {error && (
            <p className="mt-3 text-sm text-red-400">{error}</p>
          )}
        </form>
      )}

      {/* Scan another */}
      <button
        onClick={() => {
          setResult(null);
          setUrl("");
          setEmail("");
          setEmailSent(false);
        }}
        className="mt-4 block w-full text-center text-xs text-slate-500 hover:text-slate-300"
      >
        Scan a different site
      </button>
    </div>
  );
}
