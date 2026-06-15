"use client";

import React, { useState, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import BrandSlider from "../../../components/BrandSlider";
import SubNavbar from "../../../components/SubNavbar";
import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/WishlistContext";
import styles from "./page.module.css";

import { Product, ALL_PRODUCTS } from "../../../data/products";

function CategoryPageContent() {
  const searchParams = useSearchParams();
  const rawType = searchParams ? searchParams.get("type") : null;
  const currentCategory = rawType || "Makeup";
  const { addToCart } = useCart();
  const router = useRouter();

  // Filter States
  const [maxPrice, setMaxPrice] = useState<number>(8000);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number | null>(null);
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Get brands unique to the active category
  const categoryBrands = useMemo(() => {
    const brands = ALL_PRODUCTS.filter(
      (p) => p.category.toLowerCase() === currentCategory.toLowerCase()
    ).map((p) => p.brand);
    return Array.from(new Set(brands));
  }, [currentCategory]);

  // Handle wishlist click
  const handleToggleWishlist = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
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

  // Handle brand selection
  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  // Filter Products
  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      // 1. Category check
      if (product.category.toLowerCase() !== currentCategory.toLowerCase()) {
        return false;
      }
      // 2. Price check
      if (product.price * 80 > maxPrice) {
        return false;
      }
      // 3. Brand check
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }
      // 4. Rating check
      if (minRating !== null && product.rating < minRating) {
        return false;
      }
      return true;
    });
  }, [currentCategory, maxPrice, selectedBrands, minRating]);

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
    <div className={styles.layout}>
      {/* Brand Slider Carousel */}
      <BrandSlider />

      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/" className={styles.breadcrumbsLink}>
          Home
        </Link>
        <span>&gt;</span>
        <span>Category</span>
        <span>&gt;</span>
        <span className="capitalize">{currentCategory}</span>
      </div>

      {/* Title block */}
      <div className={styles.titleSection}>
        <h1 className={styles.pageTitle + " capitalize"}>{currentCategory}</h1>
      </div>

      {/* Category Sub-Navbar */}
      <SubNavbar />

      {/* Main content split */}
      <div className={styles.mainContent}>
        {/* Left Sidebar Filters */}
        <aside className={styles.sidebar}>
          {/* Price Range Filter */}
          <div className={styles.filterGroup}>
            <h3 className={styles.filterTitle}>Filter By Price</h3>
            <div className={styles.priceRangeContainer}>
              <input
                type="range"
                min="0"
                max="8000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className={styles.rangeInput}
              />
              <span className={styles.priceLabel}>Up to ₹{maxPrice}.00</span>
            </div>
          </div>

          {/* Brand Checklist Filter */}
          {categoryBrands.length > 0 && (
            <div className={styles.filterGroup}>
              <h3 className={styles.filterTitle}>Filter By Brand</h3>
              <div className="flex flex-col gap-2">
                {categoryBrands.map((brand) => (
                  <label key={brand} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                      className={styles.checkboxInput}
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Rating Filters */}
          <div className={styles.filterGroup}>
            <h3 className={styles.filterTitle}>Customer Rating</h3>
            <div className="flex flex-col gap-2">
              <label className={styles.checkboxLabel}>
                <input
                  type="radio"
                  name="ratingFilter"
                  checked={minRating === null}
                  onChange={() => setMinRating(null)}
                  className={styles.checkboxInput}
                />
                Show All
              </label>
              <label className={styles.checkboxLabel}>
                <input
                  type="radio"
                  name="ratingFilter"
                  checked={minRating === 5}
                  onChange={() => setMinRating(5)}
                  className={styles.checkboxInput}
                />
                5 Stars Only
              </label>
              <label className={styles.checkboxLabel}>
                <input
                  type="radio"
                  name="ratingFilter"
                  checked={minRating === 4}
                  onChange={() => setMinRating(4)}
                  className={styles.checkboxInput}
                />
                4 Stars &amp; Above
              </label>
            </div>
          </div>
        </aside>

        {/* Right Catalog Products Section */}
        <section className={styles.catalogSection}>
          <div className={styles.catalogHeader}>
            <span className={styles.productCount}>
              Showing {filteredProducts.length} Product
              {filteredProducts.length !== 1 ? "s" : ""}
            </span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className={styles.grid}>
              {filteredProducts.map((product) => (
                <div key={product.id} className={styles.card}>
                  {/* Wishlist Heart */}
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

                  <Link href={`/product/${product.id}`} className="no-underline text-inherit flex flex-col flex-1 h-full">
                    {/* Image wrapper */}
                    <div className={styles.imageWrapper}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>

                    {/* Info */}
                    <div className={styles.info}>
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

                      <h3 className={styles.name}>{product.name}</h3>
                      <p className={styles.details}>{product.details}</p>

                      {/* Footer price/cart */}
                      <div className={styles.cardFooter}>
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
          ) : (
            <div className={styles.noProducts}>
              No products found matching these filters. Try adjusting your sidebar selections.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default function CategoryPage() {
  return (
    <Suspense fallback={<div className={styles.layout}>Loading Category Drawer...</div>}>
      <CategoryPageContent />
    </Suspense>
  );
}
