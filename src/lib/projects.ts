export const projects = [
  {
    slug: "concierge-portal",
    title: "Global Patient Booking Platform",
    tag: "Web · Next.js · Redux Toolkit",
    year: "2022–Present",
    outcome: "$1M+ annual revenue · Company's primary acquisition channel",
    description:
      "Led the 0→1 build of a multi-region scheduling and concierge coordination platform — covering onboarding, scheduling, payment, and fulfillment in a single cohesive flow.",
    highlights: [
      "Multi-step booking flow with Stripe & PayPal",
      "SMS authentication + compliance workflows",
      "Real-time field-service location tracking",
      "RTK Query migration cut API boilerplate by ~40%",
    ],
    image: "/screenshots/concierge-cover.png",
    color: "from-teal-50 to-cyan-50",
    accent: "bg-teal-500",
  },
{
    slug: "billing-platform",
    title: "Internal Billing & Operations Platform",
    tag: "Full-Stack · Next.js · Node.js · RBAC",
    year: "2023-2026",
    outcome: "10K+ records · Eliminated manual spreadsheet reporting",
    description:
      "A 0→1 full-stack platform centralizing transaction management, provider payouts, financial adjustments, and enterprise reporting — with a multi-tenant permission system scoping data access across finance, operations, and external vendor roles.",
    highlights: [
      "Node.js REST APIs for transaction querying, payouts, adjustments, and reporting",
      "Multi-tenant RBAC preventing cross-tenant data exposure across finance, ops, and vendor roles",
      "TanStack Table with server-side pagination across 10K+ transaction records",
      "Secure XLSX / CSV / PDF export replacing manual spreadsheet-based reporting",
    ],
    image: null,
    confidential: true,
    color: "from-violet-50 to-purple-50",
    accent: "bg-violet-500",
  },
    {
    slug: "phlebotomist-app",
    title: "Phlebotomist Field App",
    tag: "Mobile · React Native · Expo",
    year: "2022–Present",
    outcome: "50% cycle reduction · 100+ field professionals onboarded",
    description:
      "Rebuilt a legacy prototype into a production-grade mobile platform for 20+ healthcare providers — replacing phone-based coordination with real-time operational tracking.",
    highlights: [
      "Per-day query redesign slashed calendar latency",
      "QR barcode scan + manual fallback for reliability",
      "Live map + appointment detail + specimen handling",
      "90%+ automated test coverage with Detox E2E",
    ],
    image: "/screenshots/phlebotomist-cover-v2.png",
    color: "from-blue-50 to-indigo-50",
    accent: "bg-blue-500",
  },
] as const;

export type Project = (typeof projects)[number];
