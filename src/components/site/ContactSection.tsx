export function ContactSection() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero text-primary-foreground p-10 md:p-16 shadow-glow">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-primary-glow/30 rounded-full blur-3xl" />
          <div className="relative">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-glow">Ready when you are</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.05]">
              Let's deploy your <br/><span className="text-gradient-primary">first working system.</span>
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl">
              Book a 30-minute discovery call. We'll map your tools, surface quick wins, and quote exact deliverables — same day.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="mailto:hello@dillonbird.com" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold shadow-ring-primary hover:scale-[1.02] transition">
                hello@dillonbird.com
              </a>
              <a href="https://dillonbird.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold backdrop-blur hover:bg-white/10 transition">
                Visit dillonbird.com →
              </a>
            </div>
            <div className="mt-10 grid sm:grid-cols-3 gap-6 text-sm">
              {[
                ["Dubai", "Same timezone"],
                ["Arabic + English", "Bilingual engineers"],
                ["AWS · Azure · GCP", "Multi-cloud certified"],
              ].map(([k, v]) => (
                <div key={k} className="border-l border-white/20 pl-4">
                  <div className="font-semibold">{k}</div>
                  <div className="text-primary-foreground/60 text-xs mt-1">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
