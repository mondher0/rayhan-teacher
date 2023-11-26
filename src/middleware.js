import createMiddleware from "next-intl/middleware";

import { NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "fr", "ar"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",
});

export async function middleware(request) {
  const token = request.cookies.get("token");
  console.log(
    "----------------------this is nextUrl----------------------",
    request.nextUrl
  );
  console.log(
    "----------------------this is url----------------------",
    request.url
  );
  if (!token && !request.url.includes("/login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return intlMiddleware(request);
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
