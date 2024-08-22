import { NextResponse } from "next/server";

export function middleware(request) {
  const loginToken = request.cookies?.get(
    "__Secure-next-auth.session-token"
    // "next-auth.session-token"
  )?.value;

  const loggedUserNotAccessPaths =
    request.nextUrl.pathname == "/auth/sign-in" ||
    request.nextUrl.pathname == "/auth/sign-up";
  if (loggedUserNotAccessPaths) {
    if (loginToken) {
      return NextResponse.redirect(
        new URL("/dashboard/buy-diamonds", request.url)
      );
    }
  } else {
    if (!loginToken) {
      return NextResponse.redirect(new URL("/auth/sign-in", request.url));
    }
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};
