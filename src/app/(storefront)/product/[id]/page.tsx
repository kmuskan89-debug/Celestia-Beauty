"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { ALL_PRODUCTS } from "../../../../data/products";
import { useCart } from "../../../../context/CartContext";
import { useWishlist } from "../../../../context/WishlistContext";
import { useRouter } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const productId = parseInt(id, 10);
  const product = ALL_PRODUCTS.find((p) => p.id === productId);

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const router = useRouter();

  if (!product) {
    return (
      <div className={styles.container}>
        <div className={styles.notFoundSection}>
          <h1 className={styles.notFoundTitle}>Product Not Found</h1>
          <p className={styles.notFoundSubtitle}>
            We couldn&apos;t find the beauty selection you were looking for. It may have been removed or the link might be incorrect.
          </p>
          <Link href="/category" className={styles.backToCatalogBtn}>
            Explore Products
          </Link>
        </div>
      </div>
    );
  }

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const isWishlisted = product ? isInWishlist(product.id) : false;

  const handleToggleWishlist = () => {
    if (!product) return;
    toggleWishlist({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price * 80,
      rating: product.rating,
      reviews: product.reviews,
      image: product.image,
    });
    if (!isWishlisted) {
      alert(`Added "${product.name}" to your wishlist!`);
    } else {
      alert(`Removed "${product.name}" from your wishlist.`);
    }
  };

  const handleAddToCart = () => {
    // Call addToCart quantity times
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price * 80,
        image: product.image,
      });
    }
    alert(`Added ${quantity} x "${product.name}" to your shopping bag!`);
  };

  const handleBuyNow = () => {
    // Call addToCart quantity times
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price * 80,
        image: product.image,
      });
    }
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
        <Link href={`/category?type=${product.category}`} className={styles.breadcrumbsLink}>
          {product.category}
        </Link>
        <span>&gt;</span>
        <span className={styles.breadcrumbsCurrent}>{product.name}</span>
      </nav>

      <main className={styles.productSection}>
        {/* Left Column: Product Image */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right Column: Product Info */}
        <div className={styles.detailsColumn}>
          <div className={styles.headerInfo}>
            <span className={styles.brandTag}>{product.brand}</span>
            <h1 className={styles.title}>{product.name}</h1>
            <div className={styles.categoryRow}>
              <span className={styles.categoryTag}>{product.category}</span>
            </div>
          </div>

          {/* Star Rating Section */}
          <div className={styles.ratingSection}>
            <div className={styles.stars}>
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={index}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill={index < product.rating ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </div>
            <span className={styles.reviewsText}>
              {product.rating}.0 ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className={styles.price}>₹{product.price * 80}.00</div>

          <div className={styles.divider}></div>

          {/* Description */}
          <p className={styles.description}>
            {product.longDescription || product.details}
          </p>

          <div className={styles.divider}></div>

          {/* Action Group: Quantity & Add to Cart */}
          <div className={styles.actionGroup}>
            <div className={styles.quantityRow}>
              <span className={styles.quantityLabel}>Quantity</span>
              <div className={styles.quantitySelector}>
                <button
                  type="button"
                  onClick={handleDecrement}
                  className={styles.qtyBtn}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className={styles.qtyValue}>{quantity}</span>
                <button
                  type="button"
                  onClick={handleIncrement}
                  className={styles.qtyBtn}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <div className={styles.buttonsRow}>
              <button
                type="button"
                onClick={handleAddToCart}
                className={styles.addToCartBtn}
              >
                Add to Bag
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                className={styles.buyBtn}
              >
                Buy Now
              </button>

              <button
                type="button"
                onClick={handleToggleWishlist}
                className={styles.wishlistBtn}
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <svg
                  className={styles.wishlistIcon}
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill={isWishlisted ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Badges / Trust Info */}
          <div className={styles.badgesList}>
            <div className={styles.badgeItem}>
              <svg
                className={styles.badgeIcon}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
              <span>Free standard delivery on orders over ₹2,000</span>
            </div>

            <div className={styles.badgeItem}>
              <svg
                className={styles.badgeIcon}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>100% Authentic Products guaranteed</span>
            </div>

            <div className={styles.badgeItem}>
              <svg
                className={styles.badgeIcon}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path>
              </svg>
              <span>15-Day Hassle-Free Returns & Exchanges</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
