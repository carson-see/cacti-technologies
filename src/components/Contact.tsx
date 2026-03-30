"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left side - info */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cactus/20 bg-cactus/10 px-4 py-1.5 text-sm font-medium text-cactus-700">
              Get In Touch
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Ready to talk?{" "}
              <span className="text-cactus">Let&apos;s go.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              Tell us what you need and we&apos;ll get back to you within 24
              hours with an honest assessment — no sales pitch.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cactus/10 text-cactus">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm text-slate-600">carsonseeger@proton.me</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cactus/10 text-cactus">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm text-slate-600">Grand Rapids, Michigan</span>
              </div>
            </div>
          </div>

          {/* Right side - form */}
          <div>
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-2xl border border-cactus/20 bg-cactus/5 p-8">
                <div className="text-center">
                  <svg className="mx-auto mb-4 h-12 w-12 text-cactus" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-slate-900">Message sent!</h3>
                  <p className="mt-2 text-sm text-slate-500">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/meepayok"
                method="POST"
                onSubmit={() => setTimeout(() => setSubmitted(true), 100)}
                className="space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-cactus focus:outline-none focus:ring-2 focus:ring-cactus/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-cactus focus:outline-none focus:ring-2 focus:ring-cactus/20"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="mb-1 block text-sm font-medium text-slate-700">
                    What do you need?
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-cactus focus:outline-none focus:ring-2 focus:ring-cactus/20"
                  >
                    <option>New Website</option>
                    <option>Local SEO</option>
                    <option>AI Chatbot / Automations</option>
                    <option>Tech Rescue / Fix Something</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
                    Tell us more
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-cactus focus:outline-none focus:ring-2 focus:ring-cactus/20"
                    placeholder="What's going on with your current setup? What would success look like?"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full rounded-xl py-3"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
