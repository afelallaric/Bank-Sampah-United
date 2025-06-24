import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  const isProtectedRoute = request.nextUrl.pathname.startsWith('/my_banks') ||
                           request.nextUrl.pathname.startsWith('/mybs')

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL('/Login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/my_banks/:path*', '/mybs/:path*'],
}
