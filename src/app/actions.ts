"use server";

// ── Types ──────────────────────────────────────────────────────────────────────

export type AuditResult = {
  id: string;
  websiteUrl: string;
  performanceScore: number | null;
  seoScore: number | null;
  accessibilityScore: number | null;
  teaserText: string;
};

// ── Helpers ────────────────────────────────────────────────────────────────────

function generateTeaser(perf: number | null, seo: number | null): string {
  if (perf === null && seo === null) {
    return "We couldn't fully analyze your site, but our team can still help. Let us take a closer look.";
  }

  const perfScore = perf ?? 50;
  const seoScore = seo ?? 50;

  if (perfScore < 50 && seoScore < 50) {
    return `Your site scores ${perfScore}/100 on speed and ${seoScore}/100 on SEO — that's costing you real customers. We can fix both fast.`;
  }
  if (perfScore < 50) {
    return `Your site loads slowly (${perfScore}/100 performance), which means mobile visitors are bouncing before they ever see your offer.`;
  }
  if (seoScore < 50) {
    return `Your SEO score of ${seoScore}/100 means Google isn't showing your site to local searchers. We can change that.`;
  }
  if (perfScore < 80 || seoScore < 80) {
    return `Not bad — ${perfScore}/100 speed and ${seoScore}/100 SEO — but there's easy headroom to outrank your local competitors.`;
  }
  return `Solid scores (${perfScore}/100 speed, ${seoScore}/100 SEO)! Let's fine-tune the details that separate good from dominant.`;
}

async function getPrisma() {
  try {
    const { prisma } = await import("@/lib/prisma");
    return prisma;
  } catch {
    return null;
  }
}

// ── Server Actions ─────────────────────────────────────────────────────────────

export async function runSeoAudit(url: string): Promise<AuditResult> {
  // Normalize URL
  let targetUrl = url.trim();
  if (!targetUrl.startsWith("http")) {
    targetUrl = `https://${targetUrl}`;
  }

  let performanceScore: number | null = null;
  let seoScore: number | null = null;
  let accessibilityScore: number | null = null;

  try {
    const apiKey = process.env.PAGESPEED_API_KEY;
    const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
      targetUrl
    )}&strategy=mobile&category=performance&category=seo&category=accessibility${
      apiKey ? `&key=${apiKey}` : ""
    }`;

    const res = await fetch(endpoint, { next: { revalidate: 0 } });

    if (res.ok) {
      const data = await res.json();
      const categories = data.lighthouseResult?.categories;

      performanceScore = categories?.performance?.score
        ? Math.round(categories.performance.score * 100)
        : null;
      seoScore = categories?.seo?.score
        ? Math.round(categories.seo.score * 100)
        : null;
      accessibilityScore = categories?.accessibility?.score
        ? Math.round(categories.accessibility.score * 100)
        : null;
    }
  } catch {
    // API failure — continue with null scores
  }

  const teaserText = generateTeaser(performanceScore, seoScore);

  // Try to save to DB; if no database configured, still return results
  let leadId = crypto.randomUUID();
  try {
    const prisma = await getPrisma();
    if (prisma) {
      const lead = await prisma.auditLead.create({
        data: {
          websiteUrl: targetUrl,
          performanceScore,
          seoScore,
          accessibilityScore,
          teaserText,
          status: "Scanned",
        },
      });
      leadId = lead.id;
    }
  } catch {
    // DB not connected — audit still works for the user
  }

  return {
    id: leadId,
    websiteUrl: targetUrl,
    performanceScore,
    seoScore,
    accessibilityScore,
    teaserText,
  };
}

export async function captureAuditEmail(
  id: string,
  email: string
): Promise<{ success: boolean }> {
  try {
    const prisma = await getPrisma();
    if (prisma) {
      await prisma.auditLead.update({
        where: { id },
        data: { email, status: "Email Captured" },
      });
    }
  } catch {
    // DB not connected — still acknowledge to user
  }
  return { success: true };
}

export async function saveChatLead(
  service: string,
  email: string,
  message?: string
): Promise<{ success: boolean }> {
  try {
    const prisma = await getPrisma();
    if (prisma) {
      await prisma.chatLead.create({
        data: {
          email,
          requestedService: service,
          message: message ?? null,
          status: "New",
        },
      });
    }
  } catch {
    // DB not connected — still acknowledge to user
  }
  return { success: true };
}
