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
        "Custom responsive websites starting at \ per page with mobile-first design, local SEO setup, and Google Business optimization.",
      offers: {
        "@type": "Offer",
        price: "300",
        priceCurrency: "USD",
        description: "Single page website, \ per additional page",
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
          name: "How much does a website cost in Grand Rapids?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At Cacti Technologies, a custom single-page website starts at \, with additional pages at \ each. Most Grand Rapids agencies charge \,500-\,000 for similar work.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in the Growth package?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Growth package (\/month) includes a custom multi-page website, ongoing local SEO and Google rankings optimization, an AI chatbot for lead qualification, CRM and email automation, monthly performance reports, and priority support.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer AI chatbots for small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our Growth package includes a custom AI chatbot that qualifies leads, answers common questions, and routes inquiries automatically. Most competitors charge \,000-\,000 just for the chatbot build.",
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
