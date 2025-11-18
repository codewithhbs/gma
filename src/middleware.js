
// import { NextResponse } from "next/server";
// import { jwtVerify } from "jose";

// export async function middleware(req) {
//   const { pathname } = req.nextUrl;
//   const method = req.method;

//   if (!pathname.startsWith("/api")) return NextResponse.next();
//   if (pathname.startsWith("/api/auth/login")) return NextResponse.next();
//   if (pathname.startsWith("/api/auth/logout")) return NextResponse.next();
//   if (method === "GET") return NextResponse.next();

//   const token =
//     req.headers.get("x-admin-token")?.trim() ||
//     req.headers.get("authorization")?.replace("Bearer ", "").trim();

//   if (!token) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   try {
//     const secret = new TextEncoder().encode(process.env.JWT_SECRET);
//     await jwtVerify(token, secret);
//     return NextResponse.next();
//   } catch (err) {
//     return NextResponse.json({ error: "Invalid token" }, { status: 401 });
//   }
// }

// export const config = {
//   matcher: ["/api/:path*"],
// };



import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // ---- Public routes ----
  const publicRoutes = [
    "/admin/login",
    "/api/auth/login",
    "/api/auth/logout",
  ];

  if (publicRoutes.some((pr) => pathname.startsWith(pr))) {
    return NextResponse.next();
  }

  // ---- Check token (from cookies) ----
  const token = req.cookies.get("adminToken")?.value;

  // ---- Protect Admin Pages ----
  if (pathname.startsWith("/admin")) {
    if (!token) {
      const loginUrl = new URL("/admin/login", req.url);
      return NextResponse.redirect(loginUrl);
    }

    try {
      await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
      return NextResponse.next();
    } catch (err) {
      const loginUrl = new URL("/admin/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // ---- Protect API Routes ----
  if (pathname.startsWith("/api")) {
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
      await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
      return NextResponse.next();
    } catch (err) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
