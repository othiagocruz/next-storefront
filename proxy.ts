import { isDevEnvironment } from "@/lib/utils";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const sessionCookie = request.cookies.get("sessionId");

  const response = NextResponse.next();

  if (!sessionCookie) {
    const sessionId = crypto.randomUUID();
    response.cookies.set({
      name: "sessionId",
      value: sessionId,
      httpOnly: true,
      path: "/",
      secure: !isDevEnvironment,
      sameSite: !isDevEnvironment ? "lax" : "strict",
    });
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
