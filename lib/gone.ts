
import goneUrl from "@/lib/gone-url.json";

type GoneUrlData = {
  paths: string[];
};

const data = goneUrl as GoneUrlData;

/**
 * Normalize a URL path to a lowercase, leading- and trailing-slash form so
 * `/Foo`, `/foo/` and `/foo?x=1` all resolve to the same key.
 */
function normalizePath(path: string): string {
  let pathname = path.split("?")[0].split("#")[0].trim().toLowerCase();

  try {
    pathname = decodeURIComponent(pathname);
  } catch {
    // Malformed escape sequences are matched as-is.
  }

  if (!pathname.startsWith("/")) pathname = `/${pathname}`;
  if (!pathname.endsWith("/")) pathname = `${pathname}/`;

  return pathname;
}

const goneSet = new Set(data.paths.map(normalizePath));

/**
 * Check whether the requested URL exists in the gone URL list.
 */
export function isGoneUrl(path: string): boolean {
  return goneSet.has(normalizePath(path));
}

/**
 * Get all configured gone URLs.
 */
export function getGoneUrls(): string[] {
  return data.paths;
}
