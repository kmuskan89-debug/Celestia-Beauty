"use client";

import React, { useState, useEffect } from "react";
import styles from "./ProductSection.module.css";
import { Product, ALL_PRODUCTS } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useRouter } from "next/navigation";
import ProductCard from "./ProductCard";

const TRENDING_IDS = [6, 7, 46, 14, 47, 48, 18, 49];

export default function ProductSection() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem("celestia_admin_products");
    let allProds = ALL_PRODUCTS;
    if (savedProducts) {
      try {
        const parsedSaved: Product[] = JSON.parse(savedProducts);
        const originalIds = new Set(ALL_PRODUCTS.map((p) => p.id));
        const adminAdded = parsedSaved.filter((p) => !originalIds.has(p.id));
        allProds = [...ALL_PRODUCTS, ...adminAdded];
      } catch (e) {
        console.error("Error parsing saved products:", e);
      }
    }

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
    router.push(`/cart?buyNow=${product.id}`);
  };

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionSubtitle}>Trending Collections</span>
        <h2 className={styles.sectionTitle}>Shop Best Sellers</h2>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isWishlisted={isInWishlist(product.id)}
            onToggleWishlist={handleToggleWishlist}
            onAddToCart={handleAddToCart}
            onBuy={handleBuy}
          />
        ))}
      </div>
    </section>
  );
}
