import logo from "@/assets/logo.jpg";

export function SiteFooter() {
  return (
    <footer className="bg-gradient-ink text-primary-foreground/90 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="bg-white inline-flex p-2 rounded-lg">
            <img src={logo} alt="Dillon & Bird" className="h-8 w-auto" />
          </div>
          <p className="mt-5 max-w-md text-sm text-primary-foreground/70 leading-relaxed">
            AI, Cloud & Business Automation consultancy. We deploy working systems — from WhatsApp bots to production LLM clusters on OpenShift.
          </p>
          <p className="mt-4 text-xs text-primary-foreground/50">Dubai · Same timezone · Arabic-speaking engineers</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><a href="#automation" className="hover:text-primary-foreground">Business Automation</a></li>
            <li><a href="#ai" className="hover:text-primary-foreground">AI Model Deployment</a></li>
            <li><a href="#mlops" className="hover:text-primary-foreground">OpenShift AI / MLOps</a></li>
            <li><a href="#compliance" className="hover:text-primary-foreground">UAE Compliance</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Get in touch</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><a href="https://dillonbird.com" target="_blank" rel="noreferrer" className="hover:text-primary-foreground">dillonbird.com</a></li>
            <li><a href="mailto:hello@dillonbird.com" className="hover:text-primary-foreground">hello@dillonbird.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-primary-foreground/50 flex justify-between">
          <span>© {new Date().getFullYear()} Dillon & Bird. All rights reserved.</span>
          <span>AI · Cloud · Automation</span>
        </div>
      </div>
    </footer>
  );
}
