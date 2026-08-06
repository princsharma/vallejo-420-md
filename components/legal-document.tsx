import type { ReactNode } from "react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";

export function LegalDocument({
  title,
  crumb,
  lastUpdated,
  children,
}: {
  title: string;
  crumb: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Breadcrumbs items={[{ label: crumb }]} />
      <main className="flex-1 bg-background">
        <article className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <header className="border-b border-border/60 pb-8">
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </header>
          <div className="legal-prose mt-10 space-y-8 text-base leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-primary [&_a]:underline-offset-2 hover:[&_a]:underline [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_li]:leading-relaxed [&_p]:text-pretty [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
            {children}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
