const steps = [
  { n: "01", t: "Discovery Workshop", d: "1-day deep-dive into your current tools, pain points, and automation opportunities.", time: "Day 1" },
  { n: "02", t: "Quick Wins", d: "Deploy WhatsApp CRM + social scheduler + reminder system. Fixed setup fee: AED 5,000.", time: "Week 1" },
  { n: "03", t: "Proof of Value", d: "Deploy one LLM on OpenShift AI on a small cloud cluster — you only pay cloud cost.", time: "Week 2" },
  { n: "04", t: "Full Rollout", d: "OpenShift AI, all automations, integrations, and team training delivered.", time: "Week 3 – 6" },
  { n: "05", t: "Ongoing Retainer", d: "Support, model retraining, and cost optimization on a monthly basis.", time: "Continuous" },
];

export function RoadmapSection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">08 · Next Steps</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            From discovery to <span className="text-gradient-primary">production in six weeks</span>
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
          <div className="space-y-10">
            {steps.map((s, i) => (
              <div key={s.n} className={`relative grid md:grid-cols-2 gap-6 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                  <div className="text-xs font-semibold uppercase tracking-widest text-primary">{s.time}</div>
                  <h3 className="mt-2 text-2xl font-bold">{s.t}</h3>
                  <p className="mt-2 text-muted-foreground">{s.d}</p>
                </div>
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 size-9 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center font-bold text-sm shadow-ring-primary">
                  {s.n}
                </div>
                <div />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
