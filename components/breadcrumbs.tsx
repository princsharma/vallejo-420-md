import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

import { siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export type Crumb = {
  label: string;
  href?: string;
};

/**
 * Visible breadcrumb trail plus a matching BreadcrumbList JSON-LD script,
 * built from the same `items` prop so the two can never drift apart.
 */
export function Breadcrumbs({
  items,
  className,
  alignWithPage = false,
  compact = false,
}: {
  items: Crumb[];
  className?: string;
  /** Use ds-container gutters instead of max-w-7xl + extra horizontal padding. */
  alignWithPage?: boolean;
  /** Tighter padding inside the breadcrumb pill. */
  compact?: boolean;
}) {
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
    <nav aria-label="Breadcrumb" className={cn("w-full pt-4 pb-6", className)}>
      <div
        className={cn(
          "flex justify-center",
          alignWithPage
            ? "w-full"
            : "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        )}
      >
        <div
          className={cn(
            "w-fit rounded-2xl bg-accent/40",
            compact ? "px-3 sm:px-4" : "px-4 sm:px-6"
          )}
        >
          <ol
            className={cn(
              "flex flex-wrap items-center gap-1.5",
              compact ? "py-2.5 sm:py-3" : "py-3.5"
            )}
          >
            {allItems.map((item, index) => (
              <li key={item.label} className="flex items-center gap-1.5 ds-h3 text-primary">
                {index > 0 && (
                  <ChevronRight aria-hidden="true" className="size-3.5 text-primary" />
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="ds-body flex items-center gap-1.5 rounded-full px-2.5 py-1 text-black/90 transition-colors hover:bg-background hover:text-primary"
                  >
                    {index === 0 ? (
                      <Home aria-hidden="true" className="size-3.5" />
                    ) : null}
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current="page"
                    className="ds-body rounded-full px-2.5 py-1 font-semibold text-dark-green"
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
