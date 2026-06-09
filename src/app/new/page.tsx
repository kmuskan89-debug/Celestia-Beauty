"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

interface Product {
  id: number;
  name: string;
  details: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
}

interface BrandSection {
  id: string;
  name: string;
  tagline: string;
  products: Product[];
}

export default function NewLaunchesPage() {
  const brandSections: BrandSection[] = [
    {
      id: "dot-key",
      name: "Dot & Key",
      tagline: "Fruit-forward skincare formulas designed for ultimate skin health.",
      products: [
        {
          id: 101,
          name: "Vitamin C + E Glow Moisturizer",
          details: "Lightweight cream loaded with triple vitamin C and hydration lock.",
          price: "$18.00",
          rating: 5,
          reviews: 145,
          image: "/product.png",
        },
        {
          id: 102,
          name: "Watermelon SPF 50 Matte Gel",
          details: "Broad-spectrum sunscreen gel with cooling watermelon extracts.",
          price: "$20.00",
          rating: 5,
          reviews: 94,
          image: "/product.png",
        },
        {
          id: 103,
          name: "Barrier Repair Hydrating Face Wash",
          details: "Sulfate-free creamy cleanser with 5 essential ceramides.",
          price: "$14.00",
          rating: 4,
          reviews: 82,
          image: "/product.png",
        },
        {
          id: 104,
          name: "10% Niacinamide Clearing Serum",
          details: "Spot correction treatment with cica extracts for clear skin.",
          price: "$22.00",
          rating: 5,
          reviews: 105,
          image: "/product.png",
        },
      ],
    },
    {
      id: "faces-canada",
      name: "Faces Canada",
      tagline: "Premium makeup and cosmetic products handcrafted in Canada.",
      products: [
        {
          id: 201,
          name: "Ultime Pro HD Matte Lipstick",
          details: "High-definition velvet smooth matte lipstick with 12hr wear.",
          price: "$15.00",
          rating: 5,
          reviews: 110,
          image: "/product.png",
        },
        {
          id: 202,
          name: "Comfy Matte Pro Liquid Lip",
          details: "Transfer-proof liquid color infused with almond oil nourishment.",
          price: "$12.00",
          rating: 4,
          reviews: 78,
          image: "/product.png",
        },
        {
          id: 203,
          name: "Magneteyes Liquid Eyeliner",
          details: "Waterproof glossy black eyeliner for a bold dramatic gaze.",
          price: "$9.00",
          rating: 5,
          reviews: 230,
          image: "/product.png",
        },
        {
          id: 204,
          name: "Peaches N Cream Tinted Cream",
          details: "Glow-enhancing tinted moisturizer with vitamin E properties.",
          price: "$16.00",
          rating: 4,
          reviews: 64,
          image: "/product.png",
        },
      ],
    },
    {
      id: "maybelline",
      name: "Maybelline New York",
      tagline: "Trendsetting cosmetics straight from New York runway trends.",
      products: [
        {
          id: 301,
          name: "Super Stay Vinyl Ink Liquid Lip",
          details: "Shine-finish liquid lipstick with longwear transfer-proof technology.",
          price: "$14.00",
          rating: 5,
          reviews: 340,
          image: "/product.png",
        },
        {
          id: 302,
          name: "Lash Sensational Sky High Mascara",
          details: "Infinite length and volume mascara featuring a flexible tower brush.",
          price: "$13.00",
          rating: 5,
          reviews: 450,
          image: "/product.png",
        },
        {
          id: 303,
          name: "Fit Me Matte Liquid Foundation",
          details: "Pore-minimising natural finish liquid foundation for normal/oily skin.",
          price: "$11.00",
          rating: 4,
          reviews: 520,
          image: "/product.png",
        },
        {
          id: 304,
          name: "Instant Age Rewind Concealer",
          details: "Super-concentrated treatment eraser for under-eye circles.",
          price: "$10.00",
          rating: 5,
          reviews: 280,
          image: "/product.png",
        },
      ],
    },
    {
      id: "k-beauty",
      name: "K-Beauty",
      tagline: "High-performance clean makeup products designed to spotlight your glow.",
      products: [
        {
          id: 401,
          name: "Matte Drama Luxury Lipstick",
          details: "Weightless velvet feel matte lipstick in premium couture shades.",
          price: "$24.00",
          rating: 5,
          reviews: 120,
          image: "/product.png",
        },
        {
          id: 402,
          name: "Hydrating Pore Minimising Primer",
          details: "Water-based grip primer to smooth pores and lock makeup base.",
          price: "$28.00",
          rating: 4,
          reviews: 85,
          image: "/product.png",
        },
        {
          id: 403,
          name: "Crushed Liquid Shimmer Shadow",
          details: "Metallic pigment liquid eyeshadow for high-intensity chrome eyes.",
          price: "$22.00",
          rating: 5,
          reviews: 95,
          image: "/product.png",
        },
        {
          id: 404,
          name: "Dewy Multi-Use Highlighter Stick",
          details: "Creamy solid highlighter stick for instant wet-look reflection.",
          price: "$26.00",
          rating: 5,
          reviews: 72,
          image: "/product.png",
        },
      ],
    },
  ];

  // Wishlist state
  const [wishlist, setWishlist] = useState<Record<number, boolean>>({});

  const toggleWishlist = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddToCart = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`Added "${name}" to your shopping bag!`);
  };

  const handleCardClick = (name: string) => {
    alert(`Redirecting to details of ${name}!`);
  };

  return (
    <main className={styles.container}>
      {/* Hero Banner Section */}
      <div className={styles.heroContainer}>
        <Image
          src="/hero.png"
          alt="Celestia New Launches Banner"
          fill
          priority
          sizes="(max-width: 1400px) 100vw, 1400px"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <h1 className={styles.heroHeading}>New Launches at Celestia</h1>
      </div>

      {/* Brand Product Sections */}
      {brandSections.map((section) => (
        <section key={section.id} id={section.id} className={styles.section}>
          <div className={styles.brandHeader}>
            <h2 className={styles.brandTitle}>{section.name}</h2>
            <span className={styles.brandSubtitle}>{section.tagline}</span>
          </div>

          <div className={styles.grid}>
            {section.products.map((product) => (
              <div
                key={product.id}
                className={styles.card}
                onClick={() => handleCardClick(product.name)}
              >
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

                {/* Product Image */}
                <div className={styles.imageWrapper}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>

                {/* Product Info */}
                <div className={styles.info}>
                  {/* Star Rating */}
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
                  <div className={styles.cardFooter}>
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
      ))}
    </main>
  );
}
