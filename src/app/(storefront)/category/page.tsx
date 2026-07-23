"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import BrandSlider from "../../../components/BrandSlider";
import SubNavbar from "../../../components/SubNavbar";
import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/WishlistContext";
import styles from "./page.module.css";
import { Product, ALL_PRODUCTS } from "../../../data/products";
import ProductCard from "../../../components/ProductCard";

function CategoryPageContent() {
  const searchParams = useSearchParams();
  const rawType = searchParams ? searchParams.get("type") : null;
  const currentCategory = rawType || "Makeup";
  const { addToCart } = useCart();
  const router = useRouter();

  // Load products from localStorage or fallback to ALL_PRODUCTS
  const [products, setProducts] = useState<Product[]>(ALL_PRODUCTS);

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
    const timer = setTimeout(() => {
      setProducts(allProds);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Filter States
  const [maxPrice, setMaxPrice] = useState<number>(8000);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number | null>(null);
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Get brands unique to the active category
  const categoryBrands = useMemo(() => {
    const brands = products.filter(
      (p) => p.category.toLowerCase() === currentCategory.toLowerCase()
    ).map((p) => p.brand);
    return Array.from(new Set(brands));
  }, [currentCategory, products]);

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
    return products.filter((product) => {
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
  }, [currentCategory, maxPrice, selectedBrands, minRating, products]);

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
