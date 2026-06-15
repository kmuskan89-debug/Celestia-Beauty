import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Helper to verify HS256 JWT signatures in Next.js Edge Runtime (no Node.js dependencies)
async function verifyJWT(token: string, secret: string): Promise<any> {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const [headerB64, payloadB64, signatureB64] = parts;

    // Base64URL decode payload
    const payloadJson = atob(payloadB64.replace(/-/g, "+").replace(/_/g, "/"));
    const payload = JSON.parse(payloadJson);

    // Verify expiration timestamp
    if (payload.exp && Date.now() >= payload.exp * 1000) {
      return null;
    }

    // Verify signature using Web Crypto API (supported in Edge)
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"]
    );

    const data = encoder.encode(`${headerB64}.${payloadB64}`);

    // Base64URL decode signature
    const sigStr = atob(signatureB64.replace(/-/g, "+").replace(/_/g, "/"));
    const sigBuf = new Uint8Array(sigStr.length);
    for (let i = 0; i < sigStr.length; i++) {
      sigBuf[i] = sigStr.charCodeAt(i);
    }

    const isValid = await crypto.subtle.verify("HMAC", key, sigBuf, data);
    if (!isValid) return null;

    return payload;
  } catch (err) {
    return null;
  }
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const jwtSecret = process.env.JWT_SECRET || "super_secret_celestia_token_key_123!";

  // 1. Admin Routing Guards
  if (pathname.startsWith("/admin")) {
    // Exclude the login view from routing checks to avoid circular redirects
    if (pathname === "/admin/login") {
      // If they already have a valid admin session, redirect them to dashboard
      const token = request.cookies.get("celestia_admin_token")?.value;
      if (token) {
        const payload = await verifyJWT(token, jwtSecret);
        if (payload && payload.role === "admin") {
          const dashboardUrl = new URL("/admin", request.url);
          return NextResponse.redirect(dashboardUrl);
        }
      }
      return NextResponse.next();
    }

    // Protect all other admin pages
    const token = request.cookies.get("celestia_admin_token")?.value;
    if (!token) {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }

    const payload = await verifyJWT(token, jwtSecret);
    if (!payload || payload.role !== "admin") {
      // Clear invalid cookie and redirect to login
      const response = NextResponse.redirect(new URL("/admin/login", request.url));
      response.cookies.delete("celestia_admin_token");
      return response;
    }

    return NextResponse.next();
  }

  // 2. Storefront Protected Paths
  const storefrontToken = request.cookies.get("celestia_token")?.value;
  const protectedStorefrontPaths = ["/cart", "/wishlist"];
  const isProtectedStorefront = protectedStorefrontPaths.some((path) =>
    pathname.startsWith(path)
  );

  if (isProtectedStorefront && !storefrontToken) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/cart/:path*",
    "/wishlist/:path*",
    "/admin/:path*",
  ],
};
