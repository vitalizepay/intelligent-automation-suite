import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/site/Hero";
import { AutomationSection } from "@/components/site/AutomationSection";
import { AISection } from "@/components/site/AISection";
import { MLOpsSection } from "@/components/site/MLOpsSection";
import { ComplianceSection } from "@/components/site/ComplianceSection";
import { GuaranteesSection } from "@/components/site/GuaranteesSection";
import { PricingSection } from "@/components/site/PricingSection";
import { RoadmapSection } from "@/components/site/RoadmapSection";
import { ContactSection } from "@/components/site/ContactSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <AutomationSection />
        <AISection />
        <MLOpsSection />
        <ComplianceSection />
        <GuaranteesSection />
        <PricingSection />
        <RoadmapSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
