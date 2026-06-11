"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import styles from "./BrandDeals.module.css";

interface Product {
  id: number;
  name: string;
  brand: string;
  priceDeal: number;
  priceOriginal: number;
  discount: string;
  rating: number;
  reviews: number;
  image: string;
}

export default function BrandDeals() {
  const { addToCart } = useCart();

  const products: Product[] = [
    {
      id: 501,
      name: "Vitamin C Glow Moisturizer",
      brand: "Dot & Key",
      priceDeal: 14,
      priceOriginal: 18,
      discount: "22% OFF",
      rating: 5,
      reviews: 145,
      image: "/product.png",
    },
    {
      id: 502,
      name: "Vinyl Ink Liquid Lipstick",
      brand: "Maybelline New York",
      priceDeal: 11,
      priceOriginal: 14,
      discount: "21% OFF",
      rating: 5,
      reviews: 340,
      image: "/product.png",
    },
    {
      id: 503,
      name: "No. 3 Hair Perfector Mask",
      brand: "Olaplex",
      priceDeal: 24,
      priceOriginal: 30,
      discount: "20% OFF",
      rating: 5,
      reviews: 412,
      image: "/product.png",
    },
    {
      id: 504,
      name: "Neem Purifying Face Wash",
      brand: "Biotique",
      priceDeal: 8,
      priceOriginal: 12,
      discount: "33% OFF",
      rating: 4,
      reviews: 210,
      image: "/product.png",
    },
    {
      id: 505,
      name: "Advanced Génifique Serum",
      brand: "Lancôme",
      priceDeal: 68,
      priceOriginal: 85,
      discount: "20% OFF",
      rating: 5,
      reviews: 198,
      image: "/product.png",
    },
    {
      id: 506,
      name: "Double Wear Foundation",
      brand: "Estée Lauder",
      priceDeal: 39,
      priceOriginal: 49,
      discount: "20% OFF",
      rating: 5,
      reviews: 320,
      image: "/product.png",
    },
    {
      id: 507,
      name: "Hydrating Facial Cleanser",
      brand: "CeraVe",
      priceDeal: 12,
      priceOriginal: 16,
      discount: "25% OFF",
      rating: 5,
      reviews: 540,
      image: "/product.png",
    },
    {
      id: 508,
      name: "Moisture Surge 100H Gel",
      brand: "Clinique",
      priceDeal: 34,
      priceOriginal: 42,
      discount: "19% OFF",
      rating: 4,
      reviews: 180,
      image: "/product.png",
    },
    {
      id: 509,
      name: "Matte Lipstick - Ruby Woo",
      brand: "M.A.C Cosmetics",
      priceDeal: 18,
      priceOriginal: 23,
      discount: "21% OFF",
      rating: 5,
      reviews: 460,
      image: "/product.png",
    },
    {
      id: 510,
      name: "Pure Seduction Body Mist",
      brand: "Victoria's Secret",
      priceDeal: 15,
      priceOriginal: 20,
      discount: "25% OFF",
      rating: 5,
      reviews: 290,
      image: "/product.png",
    },
    {
      id: 511,
      name: "Hyaluronic Acid Face Serum",
      brand: "L'Oréal Paris",
      priceDeal: 20,
      priceOriginal: 26,
      discount: "23% OFF",
      rating: 4,
      reviews: 175,
      image: "/product.png",
    },
    {
      id: 512,
      name: "Cocoa Butter Body Lotion",
      brand: "Nivea",
      priceDeal: 7,
      priceOriginal: 10,
      discount: "30% OFF",
      rating: 5,
      reviews: 380,
      image: "/product.png",
    },
    {
      id: 513,
      name: "Gentle Skin Cleanser Gel",
      brand: "Cetaphil",
      priceDeal: 11,
      priceOriginal: 15,
      discount: "26% OFF",
      rating: 5,
      reviews: 610,
      image: "/product.png",
    },
    {
      id: 514,
      name: "Niacinamide 10% + Zinc 1%",
      brand: "The Ordinary",
      priceDeal: 6,
      priceOriginal: 8,
      discount: "25% OFF",
      rating: 5,
      reviews: 890,
      image: "/product.png",
    },
    {
      id: 515,
      name: "Matte Finish Setting Spray",
      brand: "NYX Professional Makeup",
      priceDeal: 8,
      priceOriginal: 11,
      discount: "27% OFF",
      rating: 5,
      reviews: 420,
      image: "/product.png",
    },
    {
      id: 516,
      name: "Liquid Matte Lipstick Lip",
      brand: "Huda Beauty",
      priceDeal: 18,
      priceOriginal: 24,
      discount: "25% OFF",
      rating: 5,
      reviews: 215,
      image: "/product.png",
    },
    {
      id: 517,
      name: "Lip Sleeping Recovery Mask",
      brand: "Laneige",
      priceDeal: 17,
      priceOriginal: 22,
      discount: "22% OFF",
      rating: 5,
      reviews: 680,
      image: "/product.png",
    },
    {
      id: 518,
      name: "Green Tea Seed Hydration Serum",
      brand: "Innisfree",
      priceDeal: 21,
      priceOriginal: 28,
      discount: "25% OFF",
      rating: 5,
      reviews: 340,
      image: "/product.png",
    },
    {
      id: 519,
      name: "Pure Himalayan Rose Water",
      brand: "Kama Ayurveda",
      priceDeal: 22,
      priceOriginal: 30,
      discount: "26% OFF",
      rating: 4,
      reviews: 115,
      image: "/product.png",
    },
    {
      id: 520,
      name: "Green Tea Pore Cleanser Wash",
      brand: "Plum",
      priceDeal: 9,
      priceOriginal: 13,
      discount: "30% OFF",
      rating: 4,
      reviews: 195,
      image: "/product.png",
    },
    {
      id: 521,
      name: "Luxury Silk Sugar Soap",
      brand: "Forest Essentials",
      priceDeal: 14,
      priceOriginal: 18,
      discount: "22% OFF",
      rating: 5,
      reviews: 92,
      image: "/product.png",
    },
    {
      id: 522,
      name: "Hydro Boost Hydrating Water Gel",
      brand: "Neutrogena",
      priceDeal: 16,
      priceOriginal: 22,
      discount: "27% OFF",
      rating: 5,
      reviews: 720,
      image: "/product.png",
    },
    {
      id: 523,
      name: "Matte As Hell Crayon Lip",
      brand: "Sugar Cosmetics",
      priceDeal: 12,
      priceOriginal: 16,
      discount: "25% OFF",
      rating: 4,
      reviews: 240,
      image: "/product.png",
    },
    {
      id: 524,
      name: "Salicylic Acid Face Serum",
      brand: "Pilgrim",
      priceDeal: 10,
      priceOriginal: 14,
      discount: "28% OFF",
      rating: 4,
      reviews: 155,
      image: "/product.png",
    },
    {
      id: 525,
      name: "Onion Hair Fall Control Shampoo",
      brand: "Mamaearth",
      priceDeal: 9,
      priceOriginal: 12,
      discount: "25% OFF",
      rating: 4,
      reviews: 310,
      image: "/product.png",
    },
    {
      id: 526,
      name: "Magneteyes Eyeliner Kajal",
      brand: "Faces Canada",
      priceDeal: 5,
      priceOriginal: 8,
      discount: "37% OFF",
      rating: 5,
      reviews: 185,
      image: "/product.png",
    },
    {
      id: 527,
      name: "Velvet Matte Moisture Lipstick",
      brand: "Colorbar",
      priceDeal: 10,
      priceOriginal: 14,
      discount: "28% OFF",
      rating: 4,
      reviews: 140,
      image: "/product.png",
    },
    {
      id: 528,
      name: "Super Lustrous Lipstick Gloss",
      brand: "Revlon",
      priceDeal: 8,
      priceOriginal: 11,
      discount: "27% OFF",
      rating: 5,
      reviews: 295,
      image: "/product.png",
    },
  ];

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.priceDeal * 80,
      image: product.image,
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionSubtitle}>Exclusive Deals</span>
        <h2 className={styles.sectionTitle}>Amazing deals on best brands</h2>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            {/* Product Image */}
            <div className={styles.imageWrapper}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className={styles.image}
              />
            </div>

            {/* Details */}
            <div className={styles.info}>
              <span className={styles.brand}>{product.brand}</span>
              <h3 className={styles.name}>{product.name}</h3>

              {/* Rating block */}
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

              {/* Pricing & Add */}
              <div className={styles.footer}>
                <div className={styles.priceContainer}>
                  <div className={styles.priceRow}>
                    <span className={styles.priceDeal}>₹{product.priceDeal * 80}.00</span>
                    <span className={styles.priceOriginal}>₹{product.priceOriginal * 80}.00</span>
                  </div>
                  <span className={styles.discountTag}>{product.discount}</span>
                </div>
                <button
                  className={styles.addToCartBtn}
                  onClick={() => handleAddToCart(product)}
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
