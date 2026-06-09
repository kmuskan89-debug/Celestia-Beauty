"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ProductSection.module.css";

interface Product {
  id: number;
  name: string;
  details: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
}

export default function ProductSection() {
  const products: Product[] = [
    {
      id: 1,
      name: "Sunset Radiance Serum",
      details: "Revitalizing and hydrating facial serum for an ultimate golden hour glow.",
      price: "$48.00",
      rating: 5,
      reviews: 124,
      image: "/product.png",
    },
    {
      id: 2,
      name: "Amber Glow Moisturizer",
      details: "Deeply nourishing hydration cream packed with botanical orange blossoms.",
      price: "$36.00",
      rating: 4,
      reviews: 98,
      image: "/product.png",
    },
    {
      id: 3,
      name: "Desert Rose Lip Oil",
      details: "Sheer tint oil infused with natural seed oils for high shine and hydration.",
      price: "$22.00",
      rating: 5,
      reviews: 156,
      image: "/product.png",
    },
    {
      id: 4,
      name: "Citrus Infused Body Wash",
      details: "Invigorating shower gel with essential oils of sweet mandarin and lime.",
      price: "$28.00",
      rating: 5,
      reviews: 82,
      image: "/product.png",
    },
    {
      id: 5,
      name: "Gilded Honey Eyeshadow",
      details: "Shimmering loose pigment eyeshadow for a warm metallic finish.",
      price: "$24.00",
      rating: 4,
      reviews: 43,
      image: "/product.png",
    },
    {
      id: 6,
      name: "Coral Glow Blush Stick",
      details: "Multi-use cream color stick for cheeks and lips with a dewy finish.",
      price: "$32.00",
      rating: 5,
      reviews: 74,
      image: "/product.png",
    },
    {
      id: 7,
      name: "Sandalwood & Mandarin Mist",
      details: "Warm and sophisticated fragrance spray with bright citrus accents.",
      price: "$65.00",
      rating: 5,
      reviews: 112,
      image: "/product.png",
    },
    {
      id: 8,
      name: "Vitamin C Brightening Mask",
      details: "Clarifying face mask designed to restore clarity and even skin tones.",
      price: "$42.00",
      rating: 4,
      reviews: 89,
      image: "/product.png",
    },
  ];

  // Client state to track wishlisted items
  const [wishlist, setWishlist] = useState<Record<number, boolean>>({});

  const toggleWishlist = (id: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card navigation click
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddToCart = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`Added "${name}" to your shopping bag!`);
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
              onClick={(e) => toggleWishlist(product.id, e)}
              aria-label="Add to Wishlist"
            >
              <svg
                className={styles.wishlistIcon}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill={wishlist[product.id] ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>

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
                <span className={styles.price}>{product.price}</span>
                <button
                  className={styles.addToCartBtn}
                  onClick={(e) => handleAddToCart(product.name, e)}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
