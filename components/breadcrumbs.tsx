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
    <nav aria-label="Breadcrumb" className="border-b border-border/60 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2 py-3 text-sm font-medium text-muted-foreground">
          {allItems.map((item, index) => (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight aria-hidden="true" className="size-3.5 text-muted-foreground/50" />
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 transition-colors hover:text-primary"
                >
                  {index === 0 && <Home aria-hidden="true" className="size-3.5" />}
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="font-semibold text-foreground">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
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
