// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token && request.nextUrl.pathname.startsWith('/my_banks')) {
    return NextResponse.redirect(new URL('/Login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/my_banks'],
}
