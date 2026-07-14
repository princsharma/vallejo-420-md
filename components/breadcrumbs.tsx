import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

import { siteConfig } from "@/lib/site-data";

export type Crumb = {
  label: string;
  href?: string;
};

/**
 * Visible breadcrumb trail plus a matching BreadcrumbList JSON-LD script,
 * built from the same `items` prop so the two can never drift apart.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const allItems: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href
        ? { item: `${siteConfig.url}${item.href === "/" ? "" : item.href}` }
        : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="w-full pt-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-fit rounded-2xl bg-accent/40 px-4 sm:px-6">
          <ol className="flex flex-wrap items-center gap-1.5 py-3.5 text-sm font-medium">
            {allItems.map((item, index) => (
              <li key={item.label} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight aria-hidden="true" className="size-3.5 text-muted-foreground/40" />
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-muted-foreground transition-colors hover:bg-background hover:text-primary"
                  >
                    {index === 0 ? (
                      <Home aria-hidden="true" className="size-3.5" />
                    ) : null}
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current="page"
                    className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </nav>
  );
}
