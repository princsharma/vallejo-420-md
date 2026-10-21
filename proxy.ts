
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isGoneUrl } from "@/lib/gone";

const GONE_PAGE_PATH = "/gone/";

function withTrailingSlash(pathname: string): string {
  if (pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function goneResponse(request: NextRequest) {
  const url = request.nextUrl.clone();

  url.pathname = GONE_PAGE_PATH;
  url.search = "";

  const response = NextResponse.rewrite(url, {
    status: 410,
    statusText: "Gone",
  });

  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  response.headers.set("Cache-Control", "no-store");

  return response;
}

export function proxy(request: NextRequest) {
  const pathname = withTrailingSlash(request.nextUrl.pathname);

  // The /gone/ route is only a render target and must never be served as 200.
  if (pathname === GONE_PAGE_PATH || isGoneUrl(pathname)) {
    return goneResponse(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|media/|favicon.ico|site.webmanifest|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map|txt|xml|woff2?)$).*)",
  ],
};
