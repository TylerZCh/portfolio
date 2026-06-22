import { CaseStudyHero } from "@/components/work/CaseStudyHero";
import { CaseStudySection, DecisionCard } from "@/components/work/CaseStudySection";
import { BackToWork } from "@/components/work/BackToWork";
import Image from "next/image";

// Mobile screenshot displayed in phone-frame style
function MobileShot({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="flex flex-col items-center gap-2">
      <div className="relative w-[160px] aspect-[9/19.5] rounded-[2rem] overflow-hidden border border-neutral-200 shadow-sm">
        <Image src={src} alt={caption} fill className="object-cover object-top" sizes="160px" />
      </div>
      <figcaption className="text-xs text-neutral-400 text-center w-[160px]">{caption}</figcaption>
    </figure>
  );
}

function MobileRow({ shots }: { shots: { src: string; caption: string }[] }) {
  return (
    <div className="flex flex-wrap gap-6 justify-start">
      {shots.map((s) => <MobileShot key={s.src} {...s} />)}
    </div>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <p className="text-xs font-medium text-neutral-400 tracking-widest uppercase mb-2">{label}</p>
  );
}

function TechList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2 mt-8">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-500 leading-relaxed">
          <span className="mt-2 w-1 h-1 rounded-full bg-blue-400 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PhlebotomistAppPage() {
  return (
    <main>
      <CaseStudyHero
        tag="Mobile · React Native · Expo · Detox"
        title="Phlebotomist Field App"
        description="A production-grade mobile platform that replaced phone-based coordination for 20+ healthcare providers — reducing operational cycle times by 50% and onboarding 100+ field professionals."
        gradient="from-blue-50/60"
        stats={[
          { label: "Cycle time reduction", value: "50%" },
          { label: "Field professionals", value: "100+" },
          { label: "Providers served", value: "20+" },
          { label: "Test coverage", value: "90%+" },
        ]}
      />

      <CaseStudySection label="01 — Problem" title="Field ops ran entirely on phone calls">
        <div className="flex flex-col gap-4 text-neutral-500 leading-relaxed">
          <p>
            Before this app, phlebotomists managed their entire workday through phone calls and paper notes.
            Dispatchers manually called each technician to assign appointments, confirm arrivals, and track
            specimen shipments — creating cascading delays whenever a single handoff was missed.
          </p>
          <p>
            There was a legacy React Native prototype but it was unmaintainable: a monolithic component tree
            with no reuse, bulk API calls that loaded the entire appointment history on every launch, and no
            real-time status updates. It needed a full rebuild — with a clear mental model for the field worker&apos;s actual workflow.
          </p>
        </div>
      </CaseStudySection>

      {/* Step 1: Dashboard */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 py-16 border-t border-neutral-100">
        <SectionLabel label="02 — Dashboard" />
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-2">
          Four numbers. Full situational awareness.
        </h2>
        <p className="text-neutral-500 leading-relaxed mb-8">
          The dashboard was my proposal — the previous app opened directly to a calendar list. I wanted
          phlebotomists to feel in control of their day from the moment they open the app.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <MobileRow shots={[{ src: "/screenshots/phleo-step1.png", caption: "Home dashboard" }]} />
          <TechList items={[
            "4 entry points: Today's Upcoming, In Progress, Missed, and All Appointments — each is a tap-through shortcut, not just a label",
            "Progress ring shows Successful / Total ratio, giving phlebotomists a sense of achievement and daily progress at a glance",
            "Counts derived from filtered queries — no extra API calls, computed from the cached appointment list on mount",
            "Bottom tab bar mirrors the same 3 main sections (Home, Calendar, Appointments) to reinforce navigation across multiple entry points and reduce the learning curve",
          ]} />
        </div>
      </section>

      {/* Step 2: Calendar + Appointment detail */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 py-16 border-t border-neutral-100">
        <SectionLabel label="03 — Calendar & Appointment Flow" />
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-2">
          From today&apos;s schedule to specimen shipped — one flow.
        </h2>
        <p className="text-neutral-500 leading-relaxed mb-10">
          The calendar is the operational core of the app. Every step in fulfilling an appointment
          — viewing, navigating, collecting, and shipping — is reachable from here.
        </p>

        {/* Calendar */}
        <div className="mb-12">
          <p className="text-sm font-medium text-neutral-700 mb-4">Calendar view</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <MobileRow shots={[{ src: "/screenshots/phleo-step2-1.png", caption: "Calendar (Agenda)" }]} />
            <TechList items={[
              "Uses react-native-calendar Agenda component — evaluated multiple libraries and this best matched our need for a time-grouped, day-scoped layout",
              "Filters to today's active appointments only: in-progress and upcoming — reducing visual noise so phlebotomists aren't scrolling through completed or unrelated records during a busy shift",
              "Appointments within 1 hour of each other are grouped into a continuous time block — each appointment remains its own card, but the left-side timestamps run together so a visible gap in the timeline immediately signals a break in the schedule",
              "Per-day query architecture: calendar loads only the selected day's data, keeping memory usage flat regardless of history size",
            ]} />
          </div>
        </div>

        {/* Appointment detail */}
        <div className="mb-12">
          <p className="text-sm font-medium text-neutral-700 mb-4">Appointment detail — map & instructions</p>
          <MobileRow shots={[
            { src: "/screenshots/phleo-step2-2.png", caption: "Detail (WalkIn)" },
            { src: "/screenshots/phleo-step2-3.png", caption: "Detail (Mobile + map)" },
            { src: "/screenshots/phleo-step2-4.png", caption: "Accession ID & instructions" },
            { src: "/screenshots/phleo-step2-5.png", caption: "Tube list & collection steps" },
          ]} />
          <TechList items={[
            "Mobile appointments show a live map tracking the phlebotomist's current location and ETA to the patient's address — added post-launch to help field staff navigate without switching apps",
            "Tapping the map deep-links to Apple Maps or Google Maps with the patient address pre-filled",
            "\"Share Location\" toggle lets the patient see a similar live map on their confirmation page — real-time field location streamed via background location API",
            "\"See Instructions\" expands the full tube list, collection protocol, and return shipping checklist fetched from the lab order — phlebotomists no longer need to reference a paper manual, and can get up to speed on newly added kits without any extra training",
            "Accession ID is tappable — copies to clipboard for downstream scanning and data entry",
            "Note field supports two modes: private note to self, or a message sent directly to the lab",
          ]} />
        </div>

        {/* Fulfill flow */}
        <div className="mb-12">
          <p className="text-sm font-medium text-neutral-700 mb-4">Fulfill — photo upload & shipping</p>
          <MobileRow shots={[
            { src: "/screenshots/phleo-step2-6.png", caption: "Fulfill checklist" },
            { src: "/screenshots/phleo-step2-7.png", caption: "Upload sample photos" },
            { src: "/screenshots/phleo-step2-8.png", caption: "Photo picker" },
            { src: "/screenshots/phleo-step2-9.png", caption: "Collected ✓" },
            { src: "/screenshots/phleo-step2-10.png", caption: "Scan barcode" },
            { src: "/screenshots/phleo-step2-11.png", caption: "Upload package photo" },
            { src: "/screenshots/phleo-step2-12.png", caption: "Shipped ✓" },
          ]} />
          <TechList items={[
            "Fulfill flow is a two-stage checklist: upload sample photos first, then add shipping info — each stage gates the next",
            "Photo upload caused repeated app crashes in early versions due to image size: iterated through multiple compression strategies (resize before upload, quality reduction, format conversion) until large-image uploads became stable",
            "Shipping: phlebotomist can scan the FedEx barcode directly with the camera instead of typing — reduces input errors and speeds up the handoff step significantly",
            "Status transitions are visual: Confirmed → Collected (teal) → Shipped (green badge) — color and label change on the detail card immediately after each upload",
            "Each status change triggers a server update and a push notification to the ops team",
          ]} />
        </div>
      </section>

      {/* Step 3: Appointments list */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 py-16 border-t border-neutral-100">
        <SectionLabel label="04 — Appointments History" />
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-2">
          Full history with lab-facing search.
        </h2>
        <MobileRow shots={[
          { src: "/screenshots/phleo-step3-1.png", caption: "List with filters" },
          { src: "/screenshots/phleo-step3-2.png", caption: "Status filter active" },
        ]} />
        <TechList items={[
          "Searchable by Accession ID or patient name — the primary use case is the lab calling to report a failed sample, phlebotomist needs to find the record instantly",
          "Date range picker + multi-select status filter (Confirmed / Collected / Shipped) — lets phlebotomists cross-reference their own history against lab result timelines",
          "Sort by start time ascending/descending; filter state persists across tab switches",
          "Infinite scroll with cursor-based pagination: triggers the next page request as the user reaches the bottom of the list — avoids loading the full appointment history upfront",
        ]} />
      </section>

      {/* Step 4: Menu + Profile */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 py-16 border-t border-neutral-100">
        <SectionLabel label="05 — Navigation & Profile" />
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-2">
          Multiple entry points. Minimal learning curve.
        </h2>
        <MobileRow shots={[
          { src: "/screenshots/phleo-step4-1.png", caption: "Side drawer" },
          { src: "/screenshots/phleo-step4-2.png", caption: "Profile" },
          { src: "/screenshots/phleo-step4-3.png", caption: "Settings" },
        ]} />
        <TechList items={[
          "Side drawer offloads secondary actions (Scan, Tutorial, Logout) that would otherwise crowd the bottom tab bar — keeps the main navigation minimal while still surfacing utility functions within one swipe",
          "Scan shortcut in the drawer gives direct camera access for quick barcode scans without navigating into an appointment first",
          "Profile shows patient reviews received, allows phlebotomists to update their info for ops records, and surfaces camera/location permission states",
          "Settings controls notification preferences and system permissions — built to reduce support tickets about the app 'not working' when permissions were silently denied by iOS/Android",
        ]} />
      </section>

      {/* Step 5: Bug report */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 py-16 border-t border-neutral-100">
        <SectionLabel label="06 — Error Reporting" />
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-2">
          In-app bug reports for instant hotfixes.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <MobileRow shots={[{ src: "/screenshots/phleo-step5.png", caption: "Error Report screen" }]} />
          <TechList items={[
            "Added after repeated delays in diagnosing field bugs — phlebotomists couldn't articulate errors over the phone clearly enough for developers to reproduce them",
            "Submitting an error report sends a structured email to the dev team: description, optional video link, and up to 3 screenshot attachments",
            "Direct feedback loop enabled same-day hotfixes for critical field issues without waiting for a support ticket cycle",
            "Screenshot upload uses the same compression pipeline as the sample photo upload — no extra infrastructure needed",
          ]} />
        </div>
      </section>

      <CaseStudySection label="07 — Key Decisions" title="Engineering choices that shaped reliability">
        <div className="grid md:grid-cols-2 gap-4">
          <DecisionCard
            decision="Per-day queries instead of bulk-loading"
            why="The original app fetched all appointments on launch — causing 3–5s load times and excessive memory usage as history grew. Switching to per-day queries made the calendar instant regardless of total record count."
            tradeoff="Required a query param redesign on the API side and cache invalidation logic when appointments update intraday."
          />
          <DecisionCard
            decision="react-native-calendar Agenda over custom implementation"
            why="Evaluated several calendar libraries against our display requirements (time-grouped, day-scoped, collapsible consecutive slots). Agenda matched our data shape best and reduced the custom rendering code needed."
            tradeoff="Library constraints meant the 'collapse consecutive slots' logic had to be implemented as a data transformation pre-render rather than a display-layer concern."
          />
          <DecisionCard
            decision="Multi-round image compression for sample photo uploads"
            why="Early versions crashed on large photos from modern iPhone cameras. Iterating through resize → quality reduction → format conversion resolved stability without sacrificing image legibility for lab review."
            tradeoff="Compression adds ~300ms latency per photo — acceptable for the use case, and visually covered by a progress indicator."
          />
          <DecisionCard
            decision="In-app error reporting instead of third-party crash tools"
            why="Standard crash tools like Sentry capture stack traces but field phlebotomists couldn't reliably reproduce bugs verbally. Structured in-app reports with screenshots gave enough context for same-day hotfixes."
            tradeoff="Manual submission means bugs only get reported when users notice them — silent failures still require monitoring."
          />
        </div>
      </CaseStudySection>

      <CaseStudySection label="08 — Testing Infrastructure" title="90%+ coverage built after shipping">
        <div className="flex flex-col gap-4 text-neutral-500 leading-relaxed">
          <p>
            The testing infrastructure was added after the core product shipped — not as an afterthought,
            but because meaningful coverage requires understanding where the real failure modes are.
            Building the app first revealed which flows were genuinely critical and hard to manually verify.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-2">
            {[
              {
                title: "RNTL — component & integration tests",
                detail: "React Native Testing Library covers individual components and data flow — appointment rendering, status transitions, filter logic, and navigation state across the mobile app.",
              },
              {
                title: "Detox — E2E on device",
                detail: "5+ end-to-end scenarios run on a real device simulator: full appointment fulfill flow, barcode scan, photo upload, and status update — the exact sequence a phlebotomist runs in the field.",
              },
              {
                title: "Expo EAS — OTA updates without store review",
                detail: "The app ships via Expo EAS Build and over-the-air updates, bypassing App Store / Play Store review cycles. Critical fixes reach field phlebotomists the same day they're merged.",
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

      <CaseStudySection label="09 — Outcome" title="Real-time ops for 100+ field professionals">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { value: "50%", label: "Operational cycle time reduction" },
              { value: "100+", label: "Field professionals onboarded" },
              { value: "20+", label: "Healthcare providers served" },
            ].map(({ value, label }) => (
              <div key={label} className="rounded-xl bg-blue-50 border border-blue-100 p-6 flex flex-col gap-1">
                <p className="text-3xl font-semibold text-blue-700">{value}</p>
                <p className="text-sm text-blue-600">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-neutral-500 leading-relaxed">
            A complete rebuild of an unmaintainable legacy app became the daily operational
            tool for 100+ field professionals across 20+ healthcare providers. Phone-based
            coordination was replaced by real-time mobile workflows — giving the ops team
            visibility into every appointment, collection, and shipment in the field.
          </p>
        </div>
      </CaseStudySection>
      <BackToWork />
    </main>
  );
}
