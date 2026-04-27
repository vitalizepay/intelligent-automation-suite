const guarantees = [
  "Working WhatsApp bot — integrated with your CRM, live in 3 days",
  "Voice call reminder system — phone number active, calls start same week",
  "Social media scheduler — connected to your accounts, posts on schedule",
  "SaaS integration layer — no more copy-paste between tools",
  "OpenShift AI cluster — deployed on your cloud account, serving a real model",
  "Auto-scaling GPU inference — from zero to production load",
  "UAE data compliance — legal-ready documentation",
  "24/7 support — Dubai-based, Arabic-speaking engineers",
];

export function GuaranteesSection() {
  return (
    <section className="py-28 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">06 · Guarantees</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Working systems. <br/><span className="text-gradient-primary">Not slides.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Concrete deliverables your team can verify on day one — no vague roadmaps, no PowerPoint warfare.
            </p>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
            {guarantees.map((g) => (
              <div key={g} className="flex gap-3 items-start rounded-xl bg-secondary/50 border border-border/60 p-4">
                <div className="mt-0.5 size-6 rounded-md bg-gradient-primary grid place-items-center shrink-0">
                  <svg viewBox="0 0 24 24" className="size-3.5 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="3.5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm leading-relaxed">{g}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
