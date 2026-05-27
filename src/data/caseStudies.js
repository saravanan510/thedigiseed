/**
 * Case study content — add a new entry keyed by slug to publish another project.
 *
 * Required: slug, title, tagline, client, services[], year, heroImage, overview, sections[]
 * Optional: website, stats[], gallery[], testimonial, deliverables[], nextProject
 */
export const caseStudies = {
  "brand-refresh-platform": {
    slug: "brand-refresh-platform",
    title: "Brand Refresh & Digital Platform",
    tagline:
      "Repositioning a growing business with a cohesive brand and a website built to convert.",
    client: "Acme Growth Co.",
    services: ["Branding", "Website Design", "Development"],
    year: "2024",
    website: "https://example.com",
    heroImage: "/banner.png",
    overview:
      "Acme needed a digital presence that matched the quality of their offline work. We partnered on strategy, visual identity, and a performant marketing site launched in under six weeks.",
    stats: [
      { label: "Timeline", value: "6 weeks" },
      { label: "Conversion lift", value: "+42%" },
      { label: "Page speed", value: "98/100" },
    ],
    deliverables: [
      "Brand identity & guidelines",
      "Marketing website (Next.js)",
      "CMS setup & team training",
    ],
    sections: [
      {
        title: "The challenge",
        content:
          "Their legacy site looked dated, loaded slowly on mobile, and failed to explain their offer clearly. Leads were dropping off before contact forms were completed.",
      },
      {
        title: "Our approach",
        content:
          "We ran a short discovery sprint, defined a messaging hierarchy, refreshed the brand system, and built a modular Next.js site with reusable sections for future campaigns.",
      },
      {
        title: "The results",
        content:
          "Within ninety days of launch, qualified inquiries rose sharply, bounce rate fell on mobile, and the team could update landing pages without developer support.",
      },
    ],
    gallery: [
      { src: "/banner.png", alt: "Homepage hero" },
      { src: "/banner.png", alt: "Services page" },
      { src: "/banner.png", alt: "Contact flow" },
    ],
    testimonial: {
      quote:
        "TheDigiSeed understood our goals from day one. The new site finally feels like us — and it performs.",
      author: "Jane Doe",
      role: "Founder, Acme Growth Co.",
    },
    nextProject: {
      slug: "mobile-app-launch",
      title: "Mobile App Launch",
    },
  },
  "mobile-app-launch": {
    slug: "mobile-app-launch",
    title: "Mobile App Launch",
    tagline:
      "From concept to App Store — design, build, and launch for a subscription wellness product.",
    client: "WellNest",
    services: ["Mobile App Development", "UI/UX Design"],
    year: "2025",
    website: null,
    heroImage: "/banner.png",
    overview:
      "WellNest wanted a native-feeling cross-platform experience with onboarding that drove trial sign-ups. We delivered end-to-end product design and development.",
    stats: [
      { label: "Platforms", value: "iOS & Android" },
      { label: "Trial sign-ups", value: "+65%" },
      { label: "App rating", value: "4.8★" },
    ],
    deliverables: [
      "Product UI/UX design",
      "Cross-platform app development",
      "App Store launch support",
    ],
    sections: [
      {
        title: "The challenge",
        content:
          "An MVP existed but retention was weak and the UI felt inconsistent. Users abandoned onboarding before completing their first session.",
      },
      {
        title: "Our approach",
        content:
          "We mapped core user journeys, simplified onboarding to three steps, introduced a design system, and shipped iterative releases with analytics baked in.",
      },
      {
        title: "The results",
        content:
          "Trial completion improved, support tickets dropped, and the app earned strong store reviews within the first month of relaunch.",
      },
    ],
    gallery: [
      { src: "/banner.png", alt: "Onboarding screens" },
      { src: "/banner.png", alt: "Dashboard" },
    ],
    testimonial: {
      quote:
        "Professional, fast, and detail-oriented. They treated our product like their own.",
      author: "Alex Rivera",
      role: "Product Lead, WellNest",
    },
    nextProject: {
      slug: "brand-refresh-platform",
      title: "Brand Refresh & Digital Platform",
    },
  },
};

export const caseStudyList = Object.values(caseStudies);

export function getCaseStudy(slug) {
  return caseStudies[slug] ?? null;
}

export function getAllCaseStudySlugs() {
  return caseStudyList.map((study) => study.slug);
}
