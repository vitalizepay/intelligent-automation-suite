export function MLOpsSection() {
  const features = [
    { t: "Model serving", d: "KServe + ModelMesh — 1000s of models per cluster" },
    { t: "Pipelines", d: "Tekton-based CI/CD for models" },
    { t: "Auto-scaling", d: "0 to 100+ GPUs based on request rate" },
    { t: "Model registry", d: "Internal catalog + versioning" },
    { t: "Drift monitoring", d: "Prometheus + accuracy-drop alerts" },
    { t: "Multi-tenancy", d: "Namespace isolation per team / client" },
  ];
  return (
    <section id="mlops" className="relative py-28 bg-gradient-ink text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-glow">04 · Layer Three</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            OpenShift AI — <span className="text-gradient-primary">Kubernetes-native MLOps</span>
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/75">
            Red Hat enterprise stack with the same architecture across any cloud or on-prem. Built-in security & auditing, UAE compliance ready.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={f.t} className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition group">
              <div className="text-5xl font-bold font-display text-primary-glow/40 group-hover:text-primary-glow/70 transition">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h4 className="mt-3 text-lg font-semibold">{f.t}</h4>
              <p className="mt-1 text-sm text-primary-foreground/70">{f.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-primary-glow/30 bg-primary/10 p-6 md:p-8 backdrop-blur">
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            <span className="text-primary-glow font-bold">"</span>
            We don't just consult. We deploy working systems — from a WhatsApp reminder bot to a production LLM cluster on OpenShift.
            <span className="text-primary-glow font-bold">"</span>
          </p>
        </div>
      </div>
    </section>
  );
}
