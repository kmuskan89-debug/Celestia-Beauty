"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProductSection.module.css";
import { Product, ALL_PRODUCTS } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useRouter } from "next/navigation";

const TRENDING_IDS = [6, 7, 46, 14, 47, 48, 18, 49];

export default function ProductSection() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem("celestia_admin_products");
    const allProds: Product[] = savedProducts ? JSON.parse(savedProducts) : ALL_PRODUCTS;

    // Find newly added products (whose ID is not in the original list)
    const originalIds = new Set(ALL_PRODUCTS.map((p) => p.id));
    const newProducts = allProds.filter((p) => !originalIds.has(p.id));

    // Get the trending products from the updated list (in case any was deleted or updated)
    const trendingProducts = allProds
      .filter((p) => TRENDING_IDS.includes(p.id))
      .sort((a, b) => TRENDING_IDS.indexOf(a.id) - TRENDING_IDS.indexOf(b.id));

    const updated = [...newProducts, ...trendingProducts];

    const timer = setTimeout(() => {
      setProducts(updated);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const { toggleWishlist, isInWishlist } = useWishlist();
  const router = useRouter();

  const handleToggleWishlist = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card navigation click
    e.preventDefault();
    toggleWishlist({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price * 80,
      rating: product.rating,
      reviews: product.reviews,
      image: product.image,
    });
  };

  const { addToCart } = useCart();

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price * 80,
      image: product.image,
    });
    alert(`Added "${product.name}" to your shopping bag!`);
  };

  const handleBuy = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price * 80,
      image: product.image,
    });
    router.push("/cart");
  };

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionSubtitle}>Trending Collections</span>
        <h2 className={styles.sectionTitle}>Shop Best Sellers</h2>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            {/* Wishlist Button Overlay */}
            <button
              className={styles.wishlistBtn}
              onClick={(e) => handleToggleWishlist(product, e)}
              aria-label="Add to Wishlist"
            >
              <svg
                className={styles.wishlistIcon}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill={isInWishlist(product.id) ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>

            {/* Link wrapper for product details page navigation */}
            <Link href={`/product/${product.id}`} className={styles.cardLink}>
              {/* Product Card Image Container */}
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>

              {/* Product Card Info */}
              <div className={styles.info}>
                {/* Star Rating Block */}
                <div className={styles.ratingContainer}>
                  <div className={styles.stars}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg
                        key={index}
                        width="12"
                        height="12"
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
                  <span className={styles.reviewsCount}>({product.reviews})</span>
                </div>

                {/* Product Details */}
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.details}>{product.details}</p>

                {/* Card Footer: Price & Add-To-Cart */}
                <div className={styles.footer}>
                  <span className={styles.price}>₹{product.price * 80}.00</span>
                  <div className={styles.actionButtons}>
                    <button
                      className={styles.addToCartBtn}
                      onClick={(e) => handleAddToCart(product, e)}
                    >
                      Add
                    </button>
                    <button
                      className={styles.buyBtn}
                      onClick={(e) => handleBuy(product, e)}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
