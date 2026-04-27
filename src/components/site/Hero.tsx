import heroImg from "@/assets/hero-ai.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-glow pointer-events-none" />
      <img
        src={heroImg}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 lg:pt-32 lg:pb-40">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-primary-foreground/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary-glow animate-pulse" />
            Comprehensive Proposal · 2025
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
            AI + Cloud +<br />
            <span className="text-gradient-primary">Business Automation</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
            Low-code automation for daily operations + enterprise-grade AI on Kubernetes — all on your cloud account.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#automation" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition">
              Explore the plan →
            </a>
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-white/10 transition backdrop-blur">
              View pricing
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl">
            {[
              { k: "3 days", v: "WhatsApp bot live" },
              { k: "99.5%", v: "SLA on Pro tier" },
              { k: "24/7", v: "Dubai-based NOC" },
            ].map((s) => (
              <div key={s.k} className="border-l-2 border-primary-glow/60 pl-4">
                <div className="text-3xl font-bold font-display">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Three-layer banner */}
      <div className="relative -mb-16 mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-4 rounded-2xl bg-card text-card-foreground p-2 shadow-lg border border-border/60">
          {[
            { t: "Business Automation", d: "Social, voice, WhatsApp, reminders, SaaS" },
            { t: "AI Model Deployment", d: "Llama 3, Mistral on cloud with auto-scaling" },
            { t: "MLOps Infrastructure", d: "OpenShift AI on AWS · Azure · GCP" },
          ].map((l, i) => (
            <div key={l.t} className="rounded-xl p-6 hover:bg-secondary/60 transition group">
              <div className="flex items-center gap-3">
                <span className="size-8 rounded-lg bg-gradient-primary text-primary-foreground grid place-items-center text-sm font-bold">{i + 1}</span>
                <h3 className="font-semibold">{l.t}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{l.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
