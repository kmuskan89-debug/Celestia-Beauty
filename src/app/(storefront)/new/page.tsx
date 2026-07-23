"use client";

import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/WishlistContext";
import { useRouter } from "next/navigation";
import ProductCard from "../../../components/ProductCard";
import { Product as GlobalProduct } from "../../../data/products";

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
          price: "₹1,440",
          rating: 5,
          reviews: 145,
          image: "/product.png",
        },
        {
          id: 102,
          name: "Watermelon SPF 50 Matte Gel",
          details: "Broad-spectrum sunscreen gel with cooling watermelon extracts.",
          price: "₹1,600",
          rating: 5,
          reviews: 94,
          image: "/product.png",
        },
        {
          id: 103,
          name: "Barrier Repair Hydrating Face Wash",
          details: "Sulfate-free creamy cleanser with 5 essential ceramides.",
          price: "₹1,120",
          rating: 4,
          reviews: 82,
          image: "/product.png",
        },
        {
          id: 104,
          name: "10% Niacinamide Clearing Serum",
          details: "Spot correction treatment with cica extracts for clear skin.",
          price: "₹1,760",
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
          price: "₹1,200",
          rating: 5,
          reviews: 110,
          image: "/product.png",
        },
        {
          id: 202,
          name: "Comfy Matte Pro Liquid Lip",
          details: "Transfer-proof liquid color infused with almond oil nourishment.",
          price: "₹960",
          rating: 4,
          reviews: 78,
          image: "/product.png",
        },
        {
          id: 203,
          name: "Magneteyes Liquid Eyeliner",
          details: "Waterproof glossy black eyeliner for a bold dramatic gaze.",
          price: "₹720",
          rating: 5,
          reviews: 230,
          image: "/product.png",
        },
        {
          id: 204,
          name: "Peaches N Cream Tinted Cream",
          details: "Glow-enhancing tinted moisturizer with vitamin E properties.",
          price: "₹1,280",
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
          price: "₹1,120",
          rating: 5,
          reviews: 340,
          image: "/product.png",
        },
        {
          id: 302,
          name: "Lash Sensational Sky High Mascara",
          details: "Infinite length and volume mascara featuring a flexible tower brush.",
          price: "₹1,040",
          rating: 5,
          reviews: 450,
          image: "/product.png",
        },
        {
          id: 303,
          name: "Fit Me Matte Liquid Foundation",
          details: "Pore-minimising natural finish liquid foundation for normal/oily skin.",
          price: "₹880",
          rating: 4,
          reviews: 520,
          image: "/product.png",
        },
        {
          id: 304,
          name: "Instant Age Rewind Concealer",
          details: "Super-concentrated treatment eraser for under-eye circles.",
          price: "₹800",
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
          price: "₹1,920",
          rating: 5,
          reviews: 120,
          image: "/product.png",
        },
        {
          id: 402,
          name: "Hydrating Pore Minimising Primer",
          details: "Water-based grip primer to smooth pores and lock makeup base.",
          price: "₹2,240",
          rating: 4,
          reviews: 85,
          image: "/product.png",
        },
        {
          id: 403,
          name: "Crushed Liquid Shimmer Shadow",
          details: "Metallic pigment liquid eyeshadow for high-intensity chrome eyes.",
          price: "₹1,760",
          rating: 5,
          reviews: 95,
          image: "/product.png",
        },
        {
          id: 404,
          name: "Dewy Multi-Use Highlighter Stick",
          details: "Creamy solid highlighter stick for instant wet-look reflection.",
          price: "₹2,080",
          rating: 5,
          reviews: 72,
          image: "/product.png",
        },
      ],
    },
  ];

  const { toggleWishlist, isInWishlist } = useWishlist();
  const router = useRouter();

  const handleToggleWishlist = (product: Product, brand: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    toggleWishlist({
      id: product.id,
      name: product.name,
      brand: brand,
      price: parseFloat(product.price.replace(/[^\d.]/g, "")),
      rating: product.rating,
      reviews: product.reviews,
      image: product.image,
    });
  };

  const { addToCart } = useCart();

  const handleAddToCart = (product: Product, brand: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      brand: brand,
      price: parseFloat(product.price.replace(/[^\d.]/g, "")),
      image: product.image,
    });
    alert(`Added "${product.name}" to your shopping bag!`);
  };

  const handleBuy = (product: Product, brand: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      brand: brand,
      price: parseFloat(product.price.replace(/[^\d.]/g, "")),
      image: product.image,
    });
    router.push(`/cart?buyNow=${product.id}`);
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
            {section.products.map((product) => {
              const mappedProduct: GlobalProduct = {
                id: product.id,
                name: product.name,
                brand: section.name,
                category: "",
                price: parseFloat(product.price.replace(/[^\d.]/g, "")),
                rating: product.rating,
                reviews: product.reviews,
                details: product.details,
                image: product.image,
              };
              return (
                <ProductCard
                  key={product.id}
                  product={mappedProduct}
                  isWishlisted={isInWishlist(product.id)}
                  onToggleWishlist={(p, e) => handleToggleWishlist(product, section.name, e)}
                  onAddToCart={(p, e) => handleAddToCart(product, section.name, e)}
                  onBuy={(p, e) => handleBuy(product, section.name, e)}
                  href="#"
                  onClick={() => handleCardClick(product.name)}
                />
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
