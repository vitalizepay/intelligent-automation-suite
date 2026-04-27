import uaeImg from "@/assets/uae-compliance.jpg";

export function ComplianceSection() {
  const items = [
    ["Data residency", "All cloud resources in AWS me-south-1 / Azure UAE North"],
    ["PDPL / NESA compliance", "Audit logs, encryption at rest & in transit, access controls"],
    ["Air-gapped option", "Fully offline OpenShift cluster for government / critical workloads"],
    ["Arabic LLM support", "Fine-tuned Llama 3 or Jais on OpenShift"],
  ];
  return (
    <section id="compliance" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-3xl overflow-hidden">
          <img src={uaeImg} alt="UAE compliant cloud infrastructure" className="w-full h-full object-cover" loading="lazy" width={1280} height={800} />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
            <div className="text-xs uppercase tracking-widest text-primary-glow font-semibold">Dubai · UAE</div>
            <div className="mt-1 text-2xl font-bold font-display">Sovereign by design</div>
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">05 · UAE Focus</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Private & compliant <span className="text-gradient-primary">infrastructure</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            We build for PDPL, NESA, and Arabic voice/text. Your data stays where it should — and audits stay simple.
          </p>
          <div className="mt-8 space-y-3">
            {items.map(([t, d]) => (
              <div key={t} className="flex gap-4 rounded-xl border border-border/70 bg-card p-5">
                <div className="size-9 rounded-lg bg-gradient-primary grid place-items-center text-primary-foreground shrink-0">
                  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">{t}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
