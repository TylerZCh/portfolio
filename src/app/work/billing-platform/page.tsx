import { CaseStudyHero } from "@/components/work/CaseStudyHero";
import { CaseStudySection, DecisionCard } from "@/components/work/CaseStudySection";
import { BackToWork } from "@/components/work/BackToWork";

function ConfidentialBanner() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 mb-12">
      <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-4 flex items-start gap-4">
        <span className="text-xs font-medium tracking-widest uppercase text-neutral-400 mt-0.5">Confidential</span>
        <p className="text-sm text-neutral-500 leading-relaxed">
          This platform handles sensitive financial and operational data. Screenshots have been omitted.
          Architecture, decisions, and technical details are available to discuss in interview.
        </p>
      </div>
    </div>
  );
}

const roles = [
  {
    name: "Finance (AP)",
    access: "Internal",
    capabilities: [
      "Review and pay outstanding invoices across all service providers",
      "Adjust transaction records and add audit notes",
      "Access full financial history for analysis and reconciliation",
      "Export any data view as XLSX, CSV, or PDF",
    ],
  },
  {
    name: "Operations Manager",
    access: "Internal",
    capabilities: [
      "Add, edit, or update appointment completion time and status",
      "Monitor service delivery across all providers in real time",
      "Run cross-company queries for operational research and reporting",
      "Export any data view as XLSX, CSV, or PDF",
    ],
  },
  {
    name: "Vendor (Phlebotomy Company)",
    access: "External",
    capabilities: [
      "Search and filter their own appointments by date, status, and patient",
      "View payout history and financial summaries scoped to their organization",
      "Export their own data as XLSX, CSV, or PDF",
    ],
  },
];

export default function BillingPlatformPage() {
  return (
    <main>
      <CaseStudyHero
        tag="Web · Next.js · TanStack Table · RBAC"
        title="Internal Billing & Operations Platform"
        description="A 0→1 internal platform centralizing financial workflows, payout management, and enterprise reporting — with a multi-tenant permission system scoping data access across three distinct roles."
        gradient="from-violet-50/60"
        stats={[
          { label: "Records managed", value: "10K+" },
          { label: "Role", value: "Solo FE lead" },
          { label: "Timeline", value: "0 → 1" },
          { label: "Platform", value: "Web (Next.js)" },
        ]}
      />

      <div className="mt-12" />
      <ConfidentialBanner />

      <CaseStudySection label="01 — Problem" title="Finance and ops ran on spreadsheets">
        <div className="flex flex-col gap-4 text-neutral-500 leading-relaxed">
          <p>
            Before this platform, the finance team managed payouts and invoices manually across
            spreadsheets, while ops coordinators tracked appointment statuses through direct
            database queries and ad-hoc tooling. Cross-company reporting required assembling
            data from multiple sources by hand.
          </p>
          <p>
            The company needed a single internal tool where finance, operations, and external
            service providers could each access the data relevant to their role — without
            exposing sensitive cross-company information to vendors, or requiring developers
            to run one-off queries for every reporting request.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection label="02 — Roles & Access" title="Three roles. One codebase. Isolated data.">
        <div className="flex flex-col gap-6">
          <p className="text-neutral-500 leading-relaxed">
            The permission model was the core design challenge. Internal roles (Finance and Ops)
            need visibility across all companies for analysis and coordination — but vendor
            organizations must be strictly scoped to their own data. All roles share the same
            UI surface with access enforced at both the API and UI layer.
          </p>
          <div className="flex flex-col gap-4">
            {roles.map((role) => (
              <div key={role.name} className="rounded-xl border border-neutral-100 p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-neutral-900">{role.name}</span>
                  <span className="text-xs font-medium text-neutral-400 border border-neutral-200 rounded-full px-2.5 py-0.5">
                    {role.access}
                  </span>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {role.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-sm text-neutral-500">
                      <span className="mt-2 w-1 h-1 rounded-full bg-violet-400 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection label="03 — Key Technical Work" title="High-performance tables and auditable workflows">
        <div className="flex flex-col gap-3">
          {[
            {
              title: "TanStack Table with server-side data",
              detail: "Financial dashboards handle 10K+ transaction records. Pagination, filtering, and multi-column sorting are all server-driven — the client never loads more than one page of data at a time, keeping performance consistent regardless of dataset size.",
            },
            {
              title: "Multi-tenant RBAC",
              detail: "Designed a role-based access control system with three permission tiers. Internal roles (Finance, Ops) see aggregate cross-company data; vendor organizations are scoped to their own records at the API level — not just hidden in the UI.",
            },
            {
              title: "Appointment management for ops",
              detail: "Operations managers can add or modify appointment completion times and status directly in the platform, replacing a workflow that previously required developer access to the database.",
            },
            {
              title: "Universal data export",
              detail: "Every data view — filtered or not — can be exported as XLSX, CSV, or client-side PDF. Eliminated manual report preparation that previously took the finance team hours per reporting cycle.",
            },
          ].map(({ title, detail }) => (
            <div key={title} className="rounded-xl border border-neutral-100 p-6 flex flex-col gap-2">
              <p className="text-sm font-semibold text-neutral-900">{title}</p>
              <p className="text-sm text-neutral-500 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection label="04 — Key Decisions" title="Engineering choices that shaped the platform">
        <div className="grid md:grid-cols-2 gap-4">
          <DecisionCard
            decision="TanStack Table over a simple list"
            why="Financial data requires flexible filtering, sorting, and export across thousands of records. TanStack Table's headless architecture let us add server-side data control without sacrificing UI flexibility."
            tradeoff="Steeper setup than a basic table, but paid off immediately in performance and the ability to add new column types without refactoring."
          />
          <DecisionCard
            decision="Shared UI, role-scoped API responses"
            why="Building separate UIs per role would have tripled maintenance cost. A single interface with role-aware data fetching keeps the codebase lean while enforcing access at the source."
            tradeoff="Requires careful coordination between frontend permission checks and backend scoping — both must agree, since UI-only gating is not sufficient for sensitive financial data."
          />
          <DecisionCard
            decision="Client-side PDF generation"
            why="Finance teams needed to produce reports on demand without a server round-trip or file storage dependency. Client-side generation keeps exports instant and stateless."
            tradeoff="Large exports can briefly block the main thread — mitigated by chunking the render and showing a progress indicator."
          />
        </div>
      </CaseStudySection>

      <CaseStudySection label="05 — Testing & CI/CD" title="Automated coverage on financial workflows">
        <div className="flex flex-col gap-4 text-neutral-500 leading-relaxed">
          <p>
            Financial data requires a high bar for correctness — a mis-scoped query exposing one vendor's
            data to another, or a broken export, is a serious incident. Tests were added alongside each feature.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-2">
            {[
              {
                title: "Jest — unit & integration",
                detail: "RBAC permission logic, filter state, and export formatting are all unit-tested. Role-scoping in particular must never regress — wrong data visibility is a compliance issue, not just a bug.",
              },
              {
                title: "Playwright — E2E",
                detail: "5+ end-to-end scenarios cover role-based login flows, data visibility boundaries, transaction adjustments, and export generation across all three permission tiers.",
              },
              {
                title: "GitHub Actions CI",
                detail: "Tests run on every PR via self-hosted runners. Blocking merges on failure ensures no permission or data-access regression reaches the internal team.",
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

      <CaseStudySection label="06 — Outcome" title="Operational finance, self-serve">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { value: "10K+", label: "Transaction records managed" },
              { value: "3 roles", label: "With isolated, scoped access" },
              { value: "0 queries", label: "Manual developer queries needed for reporting" },
            ].map(({ value, label }) => (
              <div key={label} className="rounded-xl bg-violet-50 border border-violet-100 p-6 flex flex-col gap-1">
                <p className="text-3xl font-semibold text-violet-700">{value}</p>
                <p className="text-sm text-violet-600">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-neutral-500 leading-relaxed">
            Finance and operations teams went from manual spreadsheet workflows to a self-serve
            platform where every role has the access they need — and only that. Developer
            intervention for reporting and data queries was eliminated entirely.
          </p>
        </div>
      </CaseStudySection>

      <BackToWork currentSlug="billing-platform" />
    </main>
  );
}
