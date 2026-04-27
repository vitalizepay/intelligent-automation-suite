const tiers = [
  {
    name: "Starter",
    price: "8,000 – 20,000",
    target: "SMEs · Startups",
    features: [
      "WhatsApp bot",
      "Social scheduler",
      "Email reminders",
      "SaaS connectors (3 tools)",
      "Basic support",
    ],
  },
  {
    name: "Professional",
    price: "35,000 – 80,000",
    target: "Mid-market",
    featured: true,
    features: [
      "Everything in Starter",
      "Voice call AI",
      "OpenShift AI on 3-node cluster",
      "2 deployed LLMs",
      "SLA 99.5%",
    ],
  },
  {
    name: "Enterprise",
    price: "100,000 – 300,000",
    target: "Banks · Telcos · Retail",
    features: [
      "Everything in Pro",
      "Full OpenShift AI on ARO/ROSA",
      "Auto-scaling GPU",
      "Air-gap option",
      "24/7 NOC",
    ],
  },
  {
    name: "Government",
    price: "Custom",
    target: "Federal entities",
    features: [
      "NESA compliance",
      "Dedicated H100 cluster",
      "Arabic foundation model fine-tuning",
      "Full sovereign deployment",
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-28 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">07 · Pricing</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Transparent tiers, <span className="text-gradient-primary">all services included</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Pricing in AED per month. Cloud infrastructure (GPU instances, Twilio, WhatsApp API) billed separately to your cloud account.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-7 border transition flex flex-col ${
                tier.featured
                  ? "bg-gradient-ink text-primary-foreground border-primary shadow-glow scale-[1.02]"
                  : "bg-card border-border/70 hover:border-primary/40 hover:shadow-elegant"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full shadow">
                  Most popular
                </span>
              )}
              <h3 className={`text-xl font-bold ${tier.featured ? "" : ""}`}>{tier.name}</h3>
              <p className={`text-xs uppercase tracking-wider mt-1 ${tier.featured ? "text-primary-glow" : "text-muted-foreground"}`}>
                {tier.target}
              </p>
              <div className="mt-6">
                <div className={`text-3xl font-bold font-display ${tier.featured ? "text-primary-glow" : "text-gradient-primary"}`}>
                  {tier.price}
                </div>
                <div className={`text-xs mt-1 ${tier.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>AED / month</div>
              </div>
              <ul className={`mt-6 space-y-2.5 text-sm flex-1 ${tier.featured ? "text-primary-foreground/85" : "text-foreground/80"}`}>
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <svg viewBox="0 0 24 24" className={`size-4 mt-0.5 shrink-0 ${tier.featured ? "text-primary-glow" : "text-primary"}`} fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-7 inline-flex justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  tier.featured
                    ? "bg-primary-foreground text-foreground hover:bg-white"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                {tier.name === "Government" ? "Talk to us" : "Get started"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
