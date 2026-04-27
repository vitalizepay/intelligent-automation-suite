import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpg";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Dillon & Bird" className="h-8 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#automation" className="hover:text-foreground transition-colors">Automation</a>
          <a href="#ai" className="hover:text-foreground transition-colors">AI Deployment</a>
          <a href="#mlops" className="hover:text-foreground transition-colors">MLOps</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-gradient-primary text-primary-foreground px-5 py-2 text-sm font-semibold shadow-ring-primary hover:opacity-95 transition"
        >
          Book Discovery
        </a>
      </div>
    </header>
  );
}
