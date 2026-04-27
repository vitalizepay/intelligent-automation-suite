import automationImg from "@/assets/automation.jpg";

const services = [
  {
    title: "Social Media Automation",
    items: [
      ["Cross-platform scheduling", "LinkedIn, X, Instagram, Facebook", "Buffer · Make · n8n"],
      ["AI content generation", "Posts, carousels, threads from keywords", "GPT-4 · Canva · DALL·E"],
      ["Auto-reply to comments/DMs", "Sentiment + template replies", "ManyChat · OpenAI"],
      ["Hashtag & trend analysis", "Daily report of trending topics", "Apify · GPT · Trends"],
      ["Social listening alerts", "Slack/email when brand mentioned", "Brand24 · Zapier"],
    ],
  },
  {
    title: "Voice Calls — AI Phone Agents",
    items: [
      ["Outbound reminders", "Appointment & payment confirmations", "Twilio · 11Labs"],
      ["Inbound FAQ bot", "Hours, location, services + handoff", "Vapi · Retell · Twilio Studio"],
      ["Survey & feedback calls", "Post-call IVR with voice recognition", "11Labs Conversational AI"],
      ["Arabic / English bilingual", "Detect language, route accordingly", "Multilingual TTS"],
    ],
  },
  {
    title: "WhatsApp CRM Automation",
    items: [
      ["Two-way messaging", "Orders, balance, documents on WhatsApp", "WA Business API"],
      ["CRM sync", "HubSpot, Pipedrive, Zoho", "Auto contact create/update"],
      ["Broadcast & segmentation", "Offers to active customers (opt-out)", "Compliant flows"],
      ["Order tracking", "“Order 1234” → Shopify/Odoo lookup", "Real-time sync"],
      ["Lead qualification", "Bot asks → pushes to sales", "Flow builder"],
    ],
  },
  {
    title: "Multi-Channel Reminders",
    items: [
      ["WhatsApp", "Payment, delivery, appointment", "WA Cloud API"],
      ["SMS", "OTP, critical alerts, maintenance", "Twilio SMS"],
      ["Email", "Reports, abandoned cart, renewals", "SendGrid"],
      ["Slack / Teams", "Internal tasks & approvals", "Native bots"],
      ["Telegram", "Broadcasts to staff groups", "Bot API"],
    ],
  },
];

export function AutomationSection() {
  return (
    <section id="automation" className="relative py-28 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">02 · Layer One</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Business Automation <span className="text-gradient-primary">that ships in days</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
              Ready-to-deploy solutions for SMEs and mid-market — no AI PhD required. We integrate best-of-breed SaaS so you stop copy-pasting between tools.
            </p>
          </div>
          <div className="lg:col-span-5">
            <img src={automationImg} alt="Automation workflow visualization" className="rounded-2xl shadow-elegant border border-border/60" loading="lazy" width={1280} height={960} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-card border border-border/70 p-7 shadow-sm hover:shadow-elegant transition">
              <h3 className="text-xl font-bold mb-5 flex items-center gap-3">
                <span className="size-2 rounded-full bg-gradient-primary" />
                {s.title}
              </h3>
              <ul className="divide-y divide-border/60">
                {s.items.map((row) => (
                  <li key={row[0]} className="py-3 grid grid-cols-12 gap-3 text-sm">
                    <span className="col-span-4 font-semibold text-foreground">{row[0]}</span>
                    <span className="col-span-5 text-muted-foreground">{row[1]}</span>
                    <span className="col-span-3 text-xs text-primary font-medium text-right">{row[2]}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SaaS Stack */}
        <div className="mt-16 rounded-3xl bg-gradient-ink text-primary-foreground p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 dot-bg opacity-30" />
          <div className="relative grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-glow">SaaS Stack Setup</span>
              <h3 className="mt-3 text-3xl md:text-4xl font-bold">We don't rebuild what already exists.</h3>
              <p className="mt-4 text-primary-foreground/75 leading-relaxed">
                We integrate the best-of-breed tools your business already pays for, with SSO and automated data flows — eliminating manual data entry across your stack.
              </p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
              {[
                ["CRM", "HubSpot · Pipedrive · Odoo"],
                ["Marketing", "Mailchimp · Klaviyo · Brevo"],
                ["Support", "Zendesk · Freshdesk · Gorgias"],
                ["Accounting", "Xero · QuickBooks · Zoho Books"],
                ["E-commerce", "Shopify · WooCommerce · Magento"],
                ["Internal", "Slack · Teams · Discord"],
              ].map(([cat, tools]) => (
                <div key={cat} className="rounded-xl bg-white/5 backdrop-blur border border-white/10 p-4">
                  <div className="text-xs uppercase tracking-wider text-primary-glow font-semibold">{cat}</div>
                  <div className="mt-1 text-sm text-primary-foreground/90">{tools}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
