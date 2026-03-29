"use client";

import { useState } from "react";
import { saveChatLead } from "@/app/actions";

type Step = "closed" | "greeting" | "service" | "email" | "done";

const serviceOptions = [
  { label: "New Website", value: "New Website" },
  { label: "AI Automations", value: "AI Automations" },
  { label: "Fix Tech", value: "Fix Tech" },
];

export default function ChatbotWidget() {
  const [step, setStep] = useState<Step>("closed");
  const [service, setService] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function open() {
    setStep("greeting");
    setTimeout(() => setStep("service"), 1500);
  }

  async function handleSubmit() {
    if (!email.trim()) return;
    setError("");
    try {
      await saveChatLead(service, email);
      setStep("done");
    } catch {
      setError("Something went wrong. Please try again.");
    }
  }

  function reset() {
    setStep("closed");
    setService("");
    setEmail("");
    setError("");
  }

  // Closed state — floating button
  if (step === "closed") {
    return (
      <button
        onClick={open}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-cactus shadow-lg shadow-cactus/30 text-white transition-all hover:scale-110 hover:shadow-xl hover:shadow-cactus/40"
        aria-label="Open chat"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96">
      <div className="chat-window overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between bg-slate-900 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cactus">
              <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M12 2v20M8 6v12M16 4v16" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">CactiTech</div>
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-cactus" />
                Online now
              </div>
            </div>
          </div>
          <button
            onClick={reset}
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
            aria-label="Close chat"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chat body */}
        <div className="p-4">
          {/* Greeting */}
          {step === "greeting" && (
            <div className="flex gap-2">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-cactus/10 text-xs font-bold text-cactus">
                CT
              </div>
              <div className="rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: "0ms" }} />
                  <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: "150ms" }} />
                  <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}

          {/* Service selection */}
          {step === "service" && (
            <div className="space-y-3">
              <div className="flex gap-2">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-cactus/10 text-xs font-bold text-cactus">
                  CT
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-2.5 text-sm text-slate-700">
                  Hey! What can we help you with today?
                </div>
              </div>
              <div className="ml-9 flex flex-col gap-2">
                {serviceOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setService(opt.value);
                      setStep("email");
                    }}
                    className="rounded-xl border border-slate-200 px-4 py-2.5 text-left text-sm font-medium text-slate-700 transition-all hover:border-cactus hover:bg-cactus/5 hover:text-cactus"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Email capture */}
          {step === "email" && (
            <div className="space-y-3">
              <div className="flex gap-2">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-cactus/10 text-xs font-bold text-cactus">
                  CT
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-2.5 text-sm text-slate-700">
                  Great choice! Drop your email and we&apos;ll reach out within 24 hours
                  with a custom plan for <strong>{service}</strong>.
                </div>
              </div>
              <div className="ml-9">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-cactus focus:outline-none focus:ring-2 focus:ring-cactus/20"
                  autoFocus
                />
                <button
                  onClick={handleSubmit}
                  disabled={!email.trim()}
                  className="btn-primary mt-2 w-full rounded-xl py-2.5 text-sm disabled:opacity-50"
                >
                  Send
                </button>
                {error && (
                  <p className="mt-2 text-xs text-red-500">{error}</p>
                )}
              </div>
            </div>
          )}

          {/* Done */}
          {step === "done" && (
            <div className="space-y-3">
              <div className="flex gap-2">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-cactus/10 text-xs font-bold text-cactus">
                  CT
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-2.5 text-sm text-slate-700">
                  You&apos;re all set! We&apos;ll be in touch within 24 hours. In the
                  meantime, try our{" "}
                  <a href="#audit" onClick={reset} className="font-medium text-cactus hover:underline">
                    free site audit
                  </a>{" "}
                  to see where you stand.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
