import type { Metadata } from "next";
import { CartProvider } from "../context/CartContext";
import { AuthProvider } from "../context/AuthContext";
import { WishlistProvider } from "../context/WishlistContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Celestia | Premium Beauty, Skincare & Cosmetics Store",
  description: "Discover luxury beauty products, custom cosmetics, skincare essentials, and premium fragrance collections at Celestia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              {children}
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
