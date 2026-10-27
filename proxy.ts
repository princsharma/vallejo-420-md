
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isGoneUrl } from "@/lib/gone";

/** Internal route that renders the 410 UI (not shown for gone-url list hits). */
const GONE_PAGE_PATH = "/410-error/";

function withTrailingSlash(pathname: string): string {
  if (pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function applyGoneHeaders(response: NextResponse) {
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  response.headers.set("Cache-Control", "no-store");
  return response;
}

/** Serve 410 page while keeping the requested URL in the browser. */
function goneResponse(request: NextRequest) {
  const url = request.nextUrl.clone();

  url.pathname = GONE_PAGE_PATH;
  url.search = "";

  const response = NextResponse.rewrite(url, {
    status: 410,
    statusText: "Gone",
  });

  return applyGoneHeaders(response);
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

  if (pathname === GONE_PAGE_PATH) {
    return gonePageResponse();
  }

  if (isGoneUrl(pathname)) {
    return goneResponse(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|media/|favicon.ico|site.webmanifest|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map|txt|xml|woff2?)$).*)",
  ],
};
