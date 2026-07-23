"use client";

import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { useCart } from "../../../context/CartContext";
import { useWishlist, WishlistItem } from "../../../context/WishlistContext";
import { useRouter } from "next/navigation";
import ProductCard from "../../../components/ProductCard";
import { Product } from "../../../data/products";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = (item: WishlistItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      brand: item.brand,
      price: item.price,
      image: item.image,
    });
    alert(`Added "${item.name}" to your shopping bag!`);
  };

  const handleBuy = (item: WishlistItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      brand: item.brand,
      price: item.price,
      image: item.image,
    });
    router.push(`/cart?buyNow=${item.id}`);
  };

  return (
    <div className={styles.container}>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <Link href="/" className={styles.breadcrumbsLink}>
          Home
        </Link>
        <span>&gt;</span>
        <span>Wishlist</span>
      </nav>

      {/* Header section */}
      <header className={styles.headerSection}>
        <h1 className={styles.pageTitle}>My Wishlist</h1>
        <p className={styles.pageSubtitle}>
          Keep track of your favorite beauty selections. Add them to your shopping bag or remove them at any time.
        </p>
      </header>

      {/* Main Content Area */}
      {wishlist.length > 0 ? (
        <main className={styles.grid}>
          {wishlist.map((item) => {
            const mappedProduct: Product = {
              id: item.id,
              name: item.name,
              brand: item.brand,
              category: "",
              price: item.price,
              rating: item.rating,
              reviews: item.reviews,
              details: "",
              image: item.image,
            };
            return (
              <ProductCard
                key={item.id}
                product={mappedProduct}
                isWishlisted={true}
                onToggleWishlist={() => removeFromWishlist(item.id)}
                onAddToCart={() => handleAddToCart(item)}
                onBuy={() => handleBuy(item)}
              />
            );
          })}
        </main>
      ) : (
        /* Empty State Fallback */
        <main className={styles.emptyState}>
          <div className={styles.emptyIconWrapper}>
            <svg
              width="36"
              height="36"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h2 className={styles.emptyTitle}>Your Wishlist is Empty</h2>
          <p className={styles.emptySubtitle}>
            Explore our curated collections of premium makeup, skincare, and fragrance essentials to add your favorites here.
          </p>
          <Link href="/category" className={styles.shopBtn}>
            Explore Products
          </Link>
        </main>
      )}
    </div>
  );
}
