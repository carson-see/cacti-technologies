import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cacti Technologies | Enterprise-Grade Tech for Local Business",
  description:
    "Grand Rapids tech agency specializing in web design, local SEO, AI automations, and tech rescue for small businesses. Fortune 500 experience, Main Street focus.",
  keywords: [
    "Grand Rapids web design",
    "local SEO Michigan",
    "AI automations small business",
    "tech rescue",
    "Cacti Technologies",
    "web design Grand Rapids MI",
    "small business technology",
    "AI chatbot Grand Rapids",
  ],
  openGraph: {
    title: "Cacti Technologies | Enterprise-Grade Tech for Local Business",
    description:
      "Grand Rapids tech agency: web design, local SEO, AI automations, and tech rescue.",
    url: "https://cactitechnologies.com",
    siteName: "Cacti Technologies",
    type: "website",
  },
  alternates: {
    canonical: "https://cactitechnologies.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://cactitechnologies.com/#business",
      name: "Cacti Technologies",
      url: "https://cactitechnologies.com",
      description:
        "Grand Rapids tech agency specializing in web design, local SEO, AI automations, and tech rescue for small businesses.",
      founder: {
        "@type": "Person",
        name: "Carson Seeger",
        jobTitle: "Founder & Lead Developer",
        hasCredential: [
          { "@type": "EducationalOccupationalCredential", credentialCategory: "MBA", name: "Master of Business Administration" },
          { "@type": "EducationalOccupationalCredential", credentialCategory: "Certification", name: "Advanced Certified ScrumMaster (A-CSM)" },
          { "@type": "EducationalOccupationalCredential", credentialCategory: "Certification", name: "SAFe 5.0 Certified" },
        ],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Grand Rapids",
        addressRegion: "MI",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 42.9634,
          longitude: -85.6681,
        },
        geoRadius: "80000",
      },
      priceRange: "$$",
      knowsAbout: [
        "Web Design",
        "Local SEO",
        "AI Chatbots",
        "Business Automation",
        "Legacy System Migration",
        "API Integration",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://cactitechnologies.com/#website",
      url: "https://cactitechnologies.com",
      name: "Cacti Technologies",
      publisher: { "@id": "https://cactitechnologies.com/#business" },
    },
    {
      "@type": "Service",
      name: "Web Design & Local SEO",
      provider: { "@id": "https://cactitechnologies.com/#business" },
      description:
        "Custom responsive websites starting at $300 per page with mobile-first design, local SEO setup, and Google Business optimization.",
      offers: {
        "@type": "Offer",
        price: "300",
        priceCurrency: "USD",
        description: "Single page website, $200 per additional page",
      },
      areaServed: {
        "@type": "City",
        name: "Grand Rapids",
        containedInPlace: { "@type": "State", name: "Michigan" },
      },
    },
    {
      "@type": "Service",
      name: "Growth Package - SEO & AI Automation",
      provider: { "@id": "https://cactitechnologies.com/#business" },
      description:
        "Full website plus ongoing local SEO, AI chatbot for lead qualification, CRM and email automation, and monthly performance reports.",
      offers: {
        "@type": "Offer",
        price: "149",
        priceCurrency: "USD",
        description: "Per month, includes website + SEO + AI chatbot + CRM automation",
      },
    },
    {
      "@type": "Service",
      name: "Tech Rescue & Integration",
      provider: { "@id": "https://cactitechnologies.com/#business" },
      description:
        "Bug fixes, legacy system migration, API and platform integration, payment system setup. Free 30-minute diagnostic call.",
      offers: {
        "@type": "Offer",
        price: "75",
        priceCurrency: "USD",
        description: "Per hour, no minimum hours",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does a website cost in Grand Rapids, MI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cacti Technologies offers custom single-page websites starting at $300, with additional pages at $200 each. For businesses that need ongoing local SEO, AI chatbot, and CRM automation, the Growth plan is $149 per month. All projects begin with a free consultation.",
          },
        },
        {
          "@type": "Question",
          name: "What does Cacti Technologies do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cacti Technologies is a Grand Rapids, MI tech agency that provides web design, local SEO, AI automation, and tech rescue services for small businesses. Founded by Carson Seeger, MBA, the agency brings Fortune 500 methodology to local businesses at accessible price points.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build a website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most single-page websites are delivered within 1 to 2 weeks. Larger projects with integrations and AI automations typically take 2 to 4 weeks. Every project starts within one week of approval.",
          },
        },
        {
          "@type": "Question",
          name: "Do you only work with businesses in Grand Rapids?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cacti Technologies is based in Grand Rapids, Michigan and primarily serves small businesses in West Michigan. However, we work with clients anywhere in the US who need web development, AI automation, or tech rescue services.",
          },
        },
        {
          "@type": "Question",
          name: "What is an AI chatbot and how can it help my business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An AI chatbot is an automated assistant on your website that answers customer questions, qualifies leads, and schedules appointments 24/7. Cacti Technologies builds custom AI chatbots that integrate with your existing tools and can save small businesses 10 to 15 hours per week on routine customer interactions.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to sign a long-term contract?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Cacti Technologies does not require long-term contracts. One-time projects like websites have a fixed price with no recurring fees. The Growth plan is month-to-month and can be cancelled at any time. Tech rescue work is billed hourly at $75/hour with no minimum hours.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
