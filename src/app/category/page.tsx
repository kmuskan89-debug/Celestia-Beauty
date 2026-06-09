"use client";

import React, { useState, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import BrandSlider from "../../components/BrandSlider";
import SubNavbar from "../../components/SubNavbar";
import styles from "./page.module.css";

interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  details: string;
  image: string;
}

const ALL_PRODUCTS: Product[] = [
  // Makeup
  {
    id: 1,
    name: "Vinyl Ink Liquid Lipstick",
    brand: "Maybelline",
    category: "Makeup",
    price: 14,
    rating: 5,
    reviews: 340,
    details: "Super stay vinyl ink liquid lipstick for 16hr wear.",
    image: "/product.png",
  },
  {
    id: 2,
    name: "Sky High Waterproof Mascara",
    brand: "Maybelline",
    category: "Makeup",
    price: 13,
    rating: 5,
    reviews: 450,
    details: "Infinite length and volume lashes sky high mascara.",
    image: "/product.png",
  },
  {
    id: 3,
    name: "Ultime Pro HD Matte Lip",
    brand: "Faces Canada",
    category: "Makeup",
    price: 15,
    rating: 5,
    reviews: 110,
    details: "High-definition matte lipstick for ultimate comfort.",
    image: "/product.png",
  },
  {
    id: 4,
    name: "Matte Drama Lipstick",
    brand: "K-Beauty",
    category: "Makeup",
    price: 24,
    rating: 5,
    reviews: 120,
    details: "Velvet feel luxury matte lipstick in signature shades.",
    image: "/product.png",
  },
  {
    id: 5,
    name: "Fit Me Matte Liquid Foundation",
    brand: "Maybelline",
    category: "Makeup",
    price: 11,
    rating: 4,
    reviews: 520,
    details: "Natural matte finish liquid foundation.",
    image: "/product.png",
  },
  {
    id: 22,
    name: "Color Sensational Creamy Matte",
    brand: "Maybelline",
    category: "Makeup",
    price: 9,
    rating: 4,
    reviews: 180,
    details: "Creamy matte lipstick with honey nectar.",
    image: "/product.png",
  },
  {
    id: 23,
    name: "Lash Sensational Mascara",
    brand: "Maybelline",
    category: "Makeup",
    price: 12,
    rating: 5,
    reviews: 290,
    details: "Sensational full fan effect mascara.",
    image: "/product.png",
  },
  {
    id: 24,
    name: "Liquid Velvet Matte Lip",
    brand: "Faces Canada",
    category: "Makeup",
    price: 16,
    rating: 4,
    reviews: 75,
    details: "Long-lasting non-drying liquid matte lipstick.",
    image: "/product.png",
  },

  // Skin
  {
    id: 6,
    name: "Sunset Radiance Serum",
    brand: "Celestia Lab",
    category: "Skin",
    price: 48,
    rating: 5,
    reviews: 124,
    details: "Facial serum for an ultimate golden hour glow.",
    image: "/product.png",
  },
  {
    id: 7,
    name: "Amber Glow Moisturizer",
    brand: "Celestia Lab",
    category: "Skin",
    price: 36,
    rating: 4,
    reviews: 98,
    details: "Nourishing hydration cream packed with botanical blossoms.",
    image: "/product.png",
  },
  {
    id: 8,
    name: "Vitamin C+E Glow Cream",
    brand: "Dot & Key",
    category: "Skin",
    price: 18,
    rating: 5,
    reviews: 145,
    details: "Lightweight cream loaded with triple vitamin C.",
    image: "/product.png",
  },
  {
    id: 9,
    name: "Watermelon SPF 50 Matte Gel",
    brand: "Dot & Key",
    category: "Skin",
    price: 20,
    rating: 5,
    reviews: 94,
    details: "Sunscreen gel with cooling watermelon extract.",
    image: "/product.png",
  },
  {
    id: 25,
    name: "CeraVe Hydrating Cleanser",
    brand: "CeraVe",
    category: "Skin",
    price: 15,
    rating: 5,
    reviews: 340,
    details: "Non-foaming face wash for dry skin with hyaluronic acid.",
    image: "/product.png",
  },
  {
    id: 26,
    name: "Ultra Light Daily UV Defense SPF 50",
    brand: "Kiehl's",
    category: "Skin",
    price: 42,
    rating: 4,
    reviews: 110,
    details: "Daily sun protection with pollution defense.",
    image: "/product.png",
  },
  {
    id: 27,
    name: "Retinol Skin Renewing Serum",
    brand: "CeraVe",
    category: "Skin",
    price: 25,
    rating: 5,
    reviews: 195,
    details: "Gentle retinol serum for fine lines and skin barrier.",
    image: "/product.png",
  },

  // Hair
  {
    id: 10,
    name: "Keratin Smooth Shampoo",
    brand: "L'Oreal Paris",
    category: "Hair",
    price: 19,
    rating: 5,
    reviews: 85,
    details: "Nourishing shampoo to restore keratin levels.",
    image: "/product.png",
  },
  {
    id: 11,
    name: "Argan Oil Hair Mask",
    brand: "Plum",
    category: "Hair",
    price: 25,
    rating: 4,
    reviews: 62,
    details: "Deep conditioning argan oil hair mask.",
    image: "/product.png",
  },
  {
    id: 28,
    name: "Bond Maintenance Shampoo No.4",
    brand: "Olaplex",
    category: "Hair",
    price: 30,
    rating: 5,
    reviews: 410,
    details: "Highly moisturizing, reparative shampoo.",
    image: "/product.png",
  },
  {
    id: 29,
    name: "Bond Maintenance Conditioner No.5",
    brand: "Olaplex",
    category: "Hair",
    price: 30,
    rating: 5,
    reviews: 380,
    details: "Reparative conditioner that eliminates damage and frizz.",
    image: "/product.png",
  },
  {
    id: 30,
    name: "Avocado Hair Mask",
    brand: "Plum",
    category: "Hair",
    price: 22,
    rating: 4,
    reviews: 85,
    details: "Deep conditioning mask for dry, damaged hair.",
    image: "/product.png",
  },

  // Appliances
  {
    id: 12,
    name: "Salon Hair Dryer Pro",
    brand: "Philips",
    category: "Appliances",
    price: 55,
    rating: 5,
    reviews: 120,
    details: "Quick drying ionic hairdryer with diffuser.",
    image: "/product.png",
  },
  {
    id: 13,
    name: "Ceramic Hair Straightener",
    brand: "Philips",
    category: "Appliances",
    price: 45,
    rating: 4,
    reviews: 94,
    details: "Ceramic plate straightener with digital temp screen.",
    image: "/product.png",
  },
  {
    id: 31,
    name: "Pro Hair Waver & Curler",
    brand: "Philips",
    category: "Appliances",
    price: 68,
    rating: 5,
    reviews: 92,
    details: "Three-barrel curling iron for beachy waves.",
    image: "/product.png",
  },
  {
    id: 32,
    name: "Cordless Hair Straightener",
    brand: "Philips",
    category: "Appliances",
    price: 95,
    rating: 4,
    reviews: 45,
    details: "On-the-go rechargeable styling plates.",
    image: "/product.png",
  },
  {
    id: 33,
    name: "Sonic Facial Cleansing Brush",
    brand: "Bloom Co",
    category: "Appliances",
    price: 35,
    rating: 5,
    reviews: 76,
    details: "Waterproof silicone facial massager.",
    image: "/product.png",
  },

  // Bath & Body
  {
    id: 14,
    name: "Citrus Infused Body Wash",
    brand: "Celestia Lab",
    category: "Bath & Body",
    price: 28,
    rating: 5,
    reviews: 82,
    details: "Invigorating shower gel with sweet mandarin.",
    image: "/product.png",
  },
  {
    id: 15,
    name: "Cocoa Butter Body Lotion",
    brand: "Dove",
    category: "Bath & Body",
    price: 12,
    rating: 4,
    reviews: 154,
    details: "Rich cocoa butter lotion for dry skin repair.",
    image: "/product.png",
  },
  {
    id: 34,
    name: "Vanilla Cream Body Butter",
    brand: "Dove",
    category: "Bath & Body",
    price: 14,
    rating: 5,
    reviews: 210,
    details: "Deeply moisturizing whipped body butter.",
    image: "/product.png",
  },
  {
    id: 35,
    name: "Eucalyptus Bath Salts",
    brand: "Celestia Lab",
    category: "Bath & Body",
    price: 18,
    rating: 4,
    reviews: 64,
    details: "Relaxing muscle soak with pure eucalyptus oils.",
    image: "/product.png",
  },
  {
    id: 36,
    name: "Deep Nourishing Body Wash",
    brand: "Dove",
    category: "Bath & Body",
    price: 11,
    rating: 5,
    reviews: 430,
    details: "Classic moisturizing shower gel for soft skin.",
    image: "/product.png",
  },

  // Natural
  {
    id: 16,
    name: "Tea Tree Face Wash",
    brand: "Biotique",
    category: "Natural",
    price: 10,
    rating: 5,
    reviews: 310,
    details: "Anti-acne clearing tea tree organic wash.",
    image: "/product.png",
  },
  {
    id: 17,
    name: "Organic Coconut Hair Oil",
    brand: "Biotique",
    category: "Natural",
    price: 12,
    rating: 4,
    reviews: 142,
    details: "Cold-pressed pure organic coconut hair oil.",
    image: "/product.png",
  },
  {
    id: 37,
    name: "Neem Purifying Face Wash",
    brand: "Biotique",
    category: "Natural",
    price: 9,
    rating: 4,
    reviews: 250,
    details: "Fresh neem extract cooling antibacterial gel.",
    image: "/product.png",
  },
  {
    id: 38,
    name: "Almond & Honey Body Soap",
    brand: "Biotique",
    category: "Natural",
    price: 8,
    rating: 5,
    reviews: 120,
    details: "Nourishing oil-rich natural organic soap.",
    image: "/product.png",
  },
  {
    id: 39,
    name: "Aloe Vera Gel Mist",
    brand: "Biotique",
    category: "Natural",
    price: 11,
    rating: 4,
    reviews: 85,
    details: "Soothes skin irritations, hydrates instantly.",
    image: "/product.png",
  },

  // Fragrance
  {
    id: 18,
    name: "Sandalwood & Mandarin Mist",
    brand: "Celestia Lab",
    category: "Fragrance",
    price: 65,
    rating: 5,
    reviews: 112,
    details: "Warm fragrance spray with bright citrus accents.",
    image: "/product.png",
  },
  {
    id: 19,
    name: "Vanilla Amber Perfume",
    brand: "Victoria's Secret",
    category: "Fragrance",
    price: 75,
    rating: 5,
    reviews: 204,
    details: "Luxury vanilla amber perfume drops.",
    image: "/product.png",
  },
  {
    id: 40,
    name: "Rose de Grasse Eau de Parfum",
    brand: "Wanderlust",
    category: "Fragrance",
    price: 85,
    rating: 5,
    reviews: 150,
    details: "Classic velvet rose petals luxury perfume.",
    image: "/product.png",
  },
  {
    id: 41,
    name: "Bergamot & Sea Salt Cologne",
    brand: "Celestia Lab",
    category: "Fragrance",
    price: 60,
    rating: 4,
    reviews: 88,
    details: "Fresh ocean air combined with citrus undertones.",
    image: "/product.png",
  },
  {
    id: 42,
    name: "Midnight Jasmine Mist",
    brand: "Victoria's Secret",
    category: "Fragrance",
    price: 22,
    rating: 5,
    reviews: 320,
    details: "Alluring jasmine and dark amber body spray.",
    image: "/product.png",
  },

  // Accessories
  {
    id: 20,
    name: "Rose Quartz Facial Roller",
    brand: "Bloom Co",
    category: "Accessories",
    price: 22,
    rating: 4,
    reviews: 88,
    details: "Authentic rose quartz massaging skin roller.",
    image: "/product.png",
  },
  {
    id: 21,
    name: "Precision Blender Sponge",
    brand: "M.A.C",
    category: "Accessories",
    price: 8,
    rating: 5,
    reviews: 172,
    details: "Seamless blending cosmetics makeup sponge.",
    image: "/product.png",
  },
  {
    id: 43,
    name: "Makeup Brush Set (12 pcs)",
    brand: "M.A.C",
    category: "Accessories",
    price: 45,
    rating: 5,
    reviews: 190,
    details: "Professional face and eye makeup brush kit.",
    image: "/product.png",
  },
  {
    id: 44,
    name: "Satin Sleep Eye Mask",
    brand: "Bloom Co",
    category: "Accessories",
    price: 12,
    rating: 4,
    reviews: 65,
    details: "Soft sleep mask to prevent friction and wrinkles.",
    image: "/product.png",
  },
  {
    id: 45,
    name: "Jade Gua Sha Scraping Tool",
    brand: "Bloom Co",
    category: "Accessories",
    price: 15,
    rating: 5,
    reviews: 215,
    details: "Facial contouring and lymphatic drainage tool.",
    image: "/product.png",
  },
];

function CategoryPageContent() {
  const searchParams = useSearchParams();
  const rawType = searchParams ? searchParams.get("type") : null;
  const currentCategory = rawType || "Makeup";

  // Filter States
  const [maxPrice, setMaxPrice] = useState<number>(80);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number | null>(null);
  const [wishlist, setWishlist] = useState<Record<number, boolean>>({});

  // Get brands unique to the active category
  const categoryBrands = useMemo(() => {
    const brands = ALL_PRODUCTS.filter(
      (p) => p.category.toLowerCase() === currentCategory.toLowerCase()
    ).map((p) => p.brand);
    return Array.from(new Set(brands));
  }, [currentCategory]);

  // Handle wishlist click
  const toggleWishlist = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
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
      if (product.price > maxPrice) {
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

  const handleAddToCart = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`Added "${name}" to your shopping bag!`);
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
                max="80"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className={styles.rangeInput}
              />
              <span className={styles.priceLabel}>Up to ${maxPrice}.00</span>
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
                      <span className={styles.price}>${product.price}.00</span>
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
