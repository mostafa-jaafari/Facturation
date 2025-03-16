import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { auth } from "./auth";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isAuth = await auth();

    //  ------------ Protected Routes ------------
  const protectedRoutes = ["/dashboard", "/myprofile"];
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));


    //  --- If the user not loged in and he want to redirect to protected route ---
  if (!isAuth && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }


    //  --- If the user loged in and he want to redirect to a not protected route ---

  if (isAuth && !isProtectedRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}


export const config = {
  matcher: ["/dashboard/:path*", "/myprofile/:path*", "/login", "/register"],
};