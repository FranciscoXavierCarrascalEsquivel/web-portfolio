import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "./i18n";


export function middleware(request: NextRequest) {
const { pathname } = request.nextUrl;
const isMissingLocale = locales.every((loc) => !pathname.startsWith(`/${loc}`));
if (isMissingLocale && !pathname.startsWith("/_next") && !pathname.startsWith("/api") && pathname !== "/favicon.ico") {
return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
}
return NextResponse.next();
}


export const config = {
    matcher: ["/:path*"],
};