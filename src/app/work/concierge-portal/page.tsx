import { CaseStudyHero } from "@/components/work/CaseStudyHero";
import { CaseStudySection, DecisionCard } from "@/components/work/CaseStudySection";
import { BackToWork } from "@/components/work/BackToWork";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Pre-check",
    image: "/screenshots/concierge-step1.png",
    description: "Kit eligibility gate — built in response to a real logistics failure.",
    technical: [
      "Origin: patients were discarding the foam shipping box or failing to freeze ice packs, causing blood samples to be unusable and shipments to be delayed. This screen was added to force acknowledgement before any appointment could be booked.",
      "Conditional branching: \"No kit\" path surfaces a kit request link and blocks progression until a kit is confirmed in-hand",
      "Accessory checklist (foam cooler, ice packs) and tube details rendered dynamically from the order — patients must confirm each item is present and in good condition",
      "Fasting notice pulled from lab order metadata — shown only when the provider requires it for this specific test",
    ],
  },
  {
    number: "02",
    title: "Agreement",
    image: "/screenshots/concierge-step2.png",
    description: "CLIA-compliant acknowledgement that creates a documented paper trail.",
    technical: [
      "Added alongside the pre-check after ops incidents — a legal acknowledgement ensures patients can't claim they were unaware of handling requirements",
      "Agreement copy is versioned server-side; the frontend always renders the latest content without a deploy",
      "\"Acknowledged and Agreed\" is a hard gate: step 1 completion state is validated server-side before this step is accessible",
      "Scroll position is tracked — the confirm CTA stays disabled until the patient has scrolled through the full document",
    ],
  },
  {
    number: "03",
    title: "Calendar",
    image: "/screenshots/concierge-step3.png",
    description: "Time slot selection with layered availability constraints.",
    technical: [
      "Max 2 slots per day enforced client-side with selection state tracking",
      "Mon–Thu only — Fri, Sat, and Sun disabled per ops policy",
      "48 business-hour minimum lead time: the earliest bookable date skips weekends and non-working days, so the greyed-out range adjusts dynamically based on when the patient is booking",
      "Holiday blocklist and day-before-holiday exclusions derived from a holidays package and enforced client-side — no API call needed per date interaction",
      "Right-hand summary panel shows ranked selections in real time; minimum 3 required to confirm",
    ],
  },
  {
    number: "04",
    title: "Contact & Payment",
    image: "/screenshots/concierge-step4.png",
    description: "User info collection with timezone intelligence and service area validation.",
    technical: [
      "Pre-fills name, phone, and address from existing patient records if a prior booking exists",
      "On address entry or change: geocodes the input and cross-checks against our serviceable zip code list — surfaces an inline error if the area isn't covered",
      "Derives the timezone from the appointment address, not the patient's browser — selected times are submitted as local time at the service location, ensuring the field tech and backend always see the correct local appointment time regardless of where the patient is booking from",
      "Conditional payment section: Stripe or PayPal block renders only when the order requires payment",
      "SMS OTP via Twilio authenticates the phone number before final submission",
    ],
  },
  {
    number: "05",
    title: "Confirmation",
    image: "/screenshots/concierge-step5.png",
    description: "Submission receipt with timezone-normalized slot display.",
    technical: [
      "Confirmed time slots shown with the patient's local timezone label (e.g. Pacific Daylight Time)",
      "Triggers a confirmation email with appointment details, preparation instructions, and support contacts",
      "Clears booking state from Redux on success to prevent stale data on re-entry",
    ],
  },
  {
    number: "06",
    title: "Appointment Management",
    image: "/screenshots/concierge-step6.png",
    description: "Post-booking dashboard for patients to view and manage their requests.",
    technical: [
      "The booking link is state-aware: returning patients who already have an active appointment are redirected here automatically instead of re-entering the booking flow — one link serves both new and existing patients",
      "Displays accession ID, appointment type, status (Pending / Confirmed / Completed), and all requested time slots",
      "Cancel and Reschedule actions gated by appointment status — disabled once a slot is confirmed by ops",
      "Address and contact info surfaced for quick reference; email sent on any status change",
    ],
  },
];

export default function ConciergePortalPage() {
  return (
    <main>
      <CaseStudyHero
        tag="Web · Next.js · Redux Toolkit · Stripe"
        title="Global Patient Booking Platform"
        description="A 0→1 multi-region scheduling and concierge coordination platform that became the company's primary patient acquisition channel — generating over $1M in annual revenue."
        gradient="from-teal-50/60"
        stats={[
          { label: "Revenue generated", value: "$1M+" },
          { label: "Role", value: "Solo FE lead" },
          { label: "Timeline", value: "0 → 1" },
          { label: "Platform", value: "Web (Next.js)" },
        ]}
      />

      <CaseStudySection label="01 — Problem" title="Patients couldn't book without calling">
        <div className="flex flex-col gap-4 text-neutral-500 leading-relaxed">
          <p>
            Vibrant Wellness offered concierge phlebotomy services but had no patient-facing
            booking system. Every appointment was coordinated manually over the phone — creating
            friction for patients, bottlenecks for staff, and a ceiling on revenue growth.
          </p>
          <p>
            The company needed a self-service platform where patients could complete the entire
            service lifecycle independently: verify eligibility, agree to compliance terms, choose
            time slots, pay, and receive real-time status updates — with minimal operational intervention.
          </p>
        </div>
      </CaseStudySection>

      {/* Flow — full width step-by-step */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-16 border-t border-neutral-100">
        <p className="text-xs font-medium text-neutral-400 tracking-widest uppercase mb-3">02 — Flow</p>
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
          Six steps. Zero phone calls.
        </h2>
        <p className="text-neutral-500 leading-relaxed mb-14">
          Each step has distinct validation logic, conditional rendering, and business rules.
          The flow was designed so patients can complete it independently — and ops never need to intervene.
        </p>

        <div className="flex flex-col gap-20">
          {steps.map((step, i) => (
            <div key={step.number} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              {/* Screenshot */}
              <div className="rounded-xl overflow-hidden border border-neutral-100">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={0}
                  height={0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-neutral-300">{step.number}</span>
                  <span className="w-px h-3 bg-neutral-200" />
                  <span className="text-xs font-medium text-neutral-400 tracking-widest uppercase">{step.title}</span>
                </div>
                <p className="text-neutral-500 leading-relaxed">{step.description}</p>
                <ul className="flex flex-col gap-2.5 mt-1">
                  {step.technical.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-500 leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-teal-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CaseStudySection label="03 — Key Decisions" title="Engineering choices that shaped the product">
        <div className="grid md:grid-cols-2 gap-4">
          <DecisionCard
            decision="Multi-step wizard over a single long form"
            why="Each step has distinct validation and conditional branching — the pre-check result changes which fields appear downstream. A wizard keeps errors local to one step and makes the compliance gate hard to skip."
            tradeoff="Adds navigation complexity and back-button state management — handled with a persistent Redux slice that survives re-renders."
          />
          <DecisionCard
            decision="Address-driven timezone resolution"
            why="Patients often book from a different timezone than where the appointment takes place. By deriving timezone from the service address rather than the browser, selected times are submitted as local time at the appointment location — the field tech always sees the correct local time regardless of where the patient booked from."
            tradeoff="Requires a geocoding call on address entry, adding a small latency to that step. The UI deliberately keeps displayed times unchanged to avoid confusing patients mid-flow."
          />
          <DecisionCard
            decision="Calendar constraints enforced client-side"
            why="48 business-hour lead time, Mon–Thu only, no holidays, max 2 slots per day — these rules change infrequently but affect every date interaction. Enforcing them in UI state gives instant feedback without a round-trip per click."
            tradeoff="Business rule changes require a frontend deploy; mitigated by sourcing the holiday list from a package so only the scheduling logic itself is hardcoded."
          />
          <DecisionCard
            decision="RTK Query instead of Redux + Axios"
            why="The legacy codebase had duplicated fetch logic and stale-cache bugs across multiple components. RTK Query gave normalized caching, automatic re-fetching, and eliminated ~40% of API boilerplate."
            tradeoff="Required a migration pass and team ramp-up on the new mental model, but paid off immediately in fewer race conditions."
          />
        </div>
      </CaseStudySection>

      <CaseStudySection label="04 — Testing & CI/CD" title="Automated coverage across the full booking flow">
        <div className="flex flex-col gap-4 text-neutral-500 leading-relaxed">
          <p>
            Given the compliance requirements and payment integrations, automated test coverage was essential
            — a broken booking flow directly impacts revenue. Tests were added incrementally as each step was built.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-2">
            {[
              {
                title: "Jest — unit & integration",
                detail: "Calendar constraint logic, timezone resolution, and Redux state transitions are all unit-tested. These rules have zero tolerance for regression — a wrong date or timezone silently breaks the booking.",
              },
              {
                title: "Playwright — E2E",
                detail: "5+ end-to-end scenarios cover the critical paths: full booking flow, payment submission, SMS OTP, and appointment management. Run against a staging environment on every PR.",
              },
              {
                title: "GitHub Actions CI",
                detail: "Tests gate every pull request. A failing test blocks the merge — preventing broken booking flows from reaching production where they would directly impact patient acquisition.",
              },
              {
                title: "Lighthouse CI",
                detail: "Performance budgets enforced on every deploy. The booking flow is patient-facing and revenue-critical — load time regressions are caught before they ship.",
              },
            ].map(({ title, detail }) => (
              <div key={title} className="rounded-xl border border-neutral-100 p-5 flex flex-col gap-2">
                <p className="text-sm font-semibold text-neutral-900">{title}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection label="05 — Outcome" title="$1M+ in annual revenue">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { value: "$1M+", label: "Annual revenue generated" },
              { value: "Primary", label: "Patient acquisition channel" },
              { value: "0 calls", label: "Required from ops to complete a booking" },
            ].map(({ value, label }) => (
              <div key={label} className="rounded-xl bg-teal-50 border border-teal-100 p-6 flex flex-col gap-1">
                <p className="text-3xl font-semibold text-teal-700">{value}</p>
                <p className="text-sm text-teal-600">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-neutral-500 leading-relaxed">
            The platform launched as the company&apos;s first digital acquisition channel and quickly
            became its primary revenue driver — enabling patients to independently complete the
            full service lifecycle without any manual coordination from the operations team.
          </p>
        </div>
      </CaseStudySection>
      <BackToWork currentSlug="concierge-portal" />
    </main>
  );
}
