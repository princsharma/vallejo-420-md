
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isGoneUrl } from "@/lib/gone";

/** Public URL shown in the browser for all permanently removed pages. */
const GONE_PAGE_PATH = "/410-error/";

const LEGACY_GONE_PAGE_PATH = "/gone/";

function withTrailingSlash(pathname: string): string {
  if (pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function applyGoneHeaders(response: NextResponse) {
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  response.headers.set("Cache-Control", "no-store");
  return response;
}

function redirectToGonePage(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = GONE_PAGE_PATH;
  url.search = "";

  return applyGoneHeaders(NextResponse.redirect(url, 308));
}

function gonePageResponse() {
  const response = NextResponse.next({
    status: 410,
    statusText: "Gone",
  });

  return applyGoneHeaders(response);
}

export function proxy(request: NextRequest) {
  const pathname = withTrailingSlash(request.nextUrl.pathname);

  if (pathname === LEGACY_GONE_PAGE_PATH) {
    return redirectToGonePage(request);
  }

  if (pathname === GONE_PAGE_PATH) {
    return gonePageResponse();
  }

  if (isGoneUrl(pathname)) {
    return redirectToGonePage(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|media/|favicon.ico|site.webmanifest|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map|txt|xml|woff2?)$).*)",
  ],
};
