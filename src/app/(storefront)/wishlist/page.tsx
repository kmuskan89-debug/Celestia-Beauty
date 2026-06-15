"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useCart } from "../../../context/CartContext";
import { useWishlist, WishlistItem } from "../../../context/WishlistContext";
import { useRouter } from "next/navigation";

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
    router.push("/cart");
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
          {wishlist.map((item) => (
            <div key={item.id} className={styles.card}>
              {/* Image and Remove button */}
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className={styles.removeBtn}
                  aria-label={`Remove ${item.name} from Wishlist`}
                >
                  <svg
                    className={styles.removeIcon}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>

              {/* Product Info details */}
              <div className={styles.info}>
                <span className={styles.brand}>{item.brand}</span>
                <h2 className={styles.name}>{item.name}</h2>

                {/* Rating blocks */}
                <div className={styles.ratingContainer}>
                  <div className={styles.stars}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg
                        key={index}
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill={index < item.rating ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                  <span className={styles.reviewsCount}>({item.reviews})</span>
                </div>

                {/* Footer price and CTA */}
                <div className={styles.cardFooter}>
                  <span className={styles.price}>₹{item.price}.00</span>
                  <div className={styles.actionButtons}>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className={styles.addToCartBtn}
                    >
                      Add
                    </button>
                    <button
                      onClick={() => handleBuy(item)}
                      className={styles.buyBtn}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
