import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
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
    </main>
  );
}
