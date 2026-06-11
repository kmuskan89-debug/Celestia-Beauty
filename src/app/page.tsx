import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import BrandDeals from "../components/BrandDeals";
import styles from "./page.module.css";

export default function Home() {
  const categories = [
    { name: "cleansers", image: "/product.png", type: "Skin" },
    { name: "serums", image: "/hero.png", type: "Skin" },
    { name: "sunscreens", image: "/product.png", type: "Skin" },
    { name: "moisturizers", image: "/hero.png", type: "Skin" },
    { name: "lip balms", image: "/product.png", type: "Makeup" },
    { name: "perfumes", image: "/hero.png", type: "Fragrance" },
    { name: "face masks", image: "/product.png", type: "Skin" },
    { name: "scrubs", image: "/hero.png", type: "Bath & Body" },
    { name: "shampoos", image: "/product.png", type: "Hair" },
    { name: "toners", image: "/hero.png", type: "Skin" },
  ];

  return (
    <main className={styles.main}>
      {/* Tailwind Hero Section */}
      <Hero />

      {/* Trending Products Grid Section */}
      <ProductSection />

      {/* Featured Categories Grid Section */}
      <section id="categories" className={styles.categoriesSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionSubtitle}>Curated Collections</span>
          <h2 className={styles.sectionTitleOrange}>Shop by Category</h2>
        </div>

        <div className={styles.grid}>
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category?type=${encodeURIComponent(category.type)}`}
              className={styles.categoryCard}
            >
              <div className={styles.categoryImageWrapper}>
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className={styles.categoryImage}
                  sizes="(max-width: 600px) 50vw, (max-width: 768px) 33vw, 20vw"
                />
              </div>
              <div className={styles.categoryContent}>
                <h3 className={styles.categoryName}>{category.name}</h3>
                <span className={styles.categoryLink}>
                  Discover
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Amazing Brand Deals Section */}
      <BrandDeals />

      {/* CTA Banner Section */}
      <section className={styles.ctaBannerContainer}>
        <div className={styles.ctaBanner}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Discover All Products</h2>
            <p className={styles.ctaSubtitle}>
              Explore our complete collection of luxury beauty, organic skincare, and curated essentials.
            </p>
            <Link href="/category" className={styles.ctaButton}>
              Shop Now &rarr;
            </Link>
          </div>
          <div className={styles.ctaImageWrapper}>
            <Image
              src="/product.png"
              alt="Featured Celestia Product"
              fill
              className={styles.ctaImage}
              sizes="(max-width: 768px) 150px, 200px"
            />
          </div>
        </div>
      </section>

      {/* Features / Trust Badges Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresGrid}>
          {/* Feature 1 */}
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <svg
                viewBox="0 0 24 24"
                width="40"
                height="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Free Shipping</h3>
            <p className={styles.featureText}>Free Shipping on orders above Rs 499.</p>
          </div>

          {/* Feature 2 */}
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <svg
                viewBox="0 0 24 24"
                width="40"
                height="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <polyline points="3 3 3 8 8 8" />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Easy Returns</h3>
            <p className={styles.featureText}>100% returns in 2 days.</p>
          </div>

          {/* Feature 3 */}
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <svg
                viewBox="0 0 24 24"
                width="40"
                height="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 11 2 2 4-4" />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Authentic Products</h3>
            <p className={styles.featureText}>sourced directly from brands and authorized distributors.</p>
          </div>

          {/* Feature 4 */}
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <svg
                viewBox="0 0 24 24"
                width="40"
                height="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>1000+ Brands</h3>
            <p className={styles.featureText}>over 50,000+ Genuine Products.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
