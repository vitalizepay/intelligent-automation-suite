import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dillon & Bird — AI, Cloud & Business Automation" },
      { name: "description", content: "Comprehensive AI + Cloud + Business Automation: WhatsApp CRM, voice bots, OpenShift AI on AWS/Azure/GCP, UAE-compliant deployments." },
      { name: "author", content: "Dillon & Bird" },
      { property: "og:title", content: "Dillon & Bird — AI, Cloud & Business Automation" },
      { property: "og:description", content: "Comprehensive AI + Cloud + Business Automation: WhatsApp CRM, voice bots, OpenShift AI on AWS/Azure/GCP, UAE-compliant deployments." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dillon & Bird — AI, Cloud & Business Automation" },
      { name: "twitter:description", content: "Comprehensive AI + Cloud + Business Automation: WhatsApp CRM, voice bots, OpenShift AI on AWS/Azure/GCP, UAE-compliant deployments." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1b85e3e6-c913-4503-9edd-0df41f7065fd/id-preview-b899a634--787916cd-58be-4fe6-8154-919e30ef4d45.lovable.app-1777374316647.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1b85e3e6-c913-4503-9edd-0df41f7065fd/id-preview-b899a634--787916cd-58be-4fe6-8154-919e30ef4d45.lovable.app-1777374316647.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
