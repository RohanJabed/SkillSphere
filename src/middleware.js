import { NextResponse } from 'next/server'

export function middleware(request) {
  const sessionCookie =
    request.cookies.get('better-auth.session_token')?.value ||
    request.cookies.get('__Secure-better-auth.session_token')?.value;

  if (!sessionCookie) {
    return NextResponse.redirect(new URL('/logIn', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/course/:path*',
    '/catagory/:path*',
    '/profile/:path*',
  ],
};