"use client";

import React, { useState } from "react";
import Link from "next/link";
import BrandSlider from "../../../components/BrandSlider";
import styles from "./page.module.css";

interface PromoCode {
  id: number;
  badge: string;
  discount: string;
  title: string;
  description: string;
  code: string;
  expiry: string;
}

const PROMO_CODES: PromoCode[] = [
  {
    id: 1,
    badge: "Skin Care",
    discount: "50% OFF",
    title: "Sunset Glow Radiance",
    description: "Get 50% off on our premium serums, moisturizers, and facial oils. Add any 2 items to apply.",
    code: "GLOW50",
    expiry: "Expires Jun 30, 2026",
  },
  {
    id: 2,
    badge: "Makeup",
    discount: "B2G1 FREE",
    title: "Color Velvet Lipsticks",
    description: "Buy any 2 liquid matte lipsticks from Maybelline or Faces Canada and get the 3rd one free.",
    code: "LIPGLAM",
    expiry: "Expires Jul 15, 2026",
  },
  {
    id: 3,
    badge: "Hair Care",
    discount: "30% OFF",
    title: "Olaplex Restoration Kit",
    description: "Save 30% on Olaplex Bond Repair Shampoo and Conditioners. Complete routine for healthy hair.",
    code: "HAIR30",
    expiry: "Expires Jun 25, 2026",
  },
  {
    id: 4,
    badge: "Site-wide",
    discount: "FREE SHIP",
    title: "Zero Shipping Costs",
    description: "Get free standard shipping across our entire store with no minimum order size required.",
    code: "FREESHIP",
    expiry: "Expires Dec 31, 2026",
  },
  {
    id: 5,
    badge: "Fragrance",
    discount: "20% OFF",
    title: "Luxury Perfume Drops",
    description: "Enjoy 20% off all designer fragrances, including vanilla amber perfumes and sea salt colognes.",
    code: "SCENT20",
    expiry: "Expires Aug 01, 2026",
  },
  {
    id: 6,
    badge: "New Customer",
    discount: "₹150 OFF",
    title: "Celestia Welcome Gift",
    description: "New to Celestia? Take ₹150 off your first purchase of ₹1,000 or more across any category.",
    code: "WELCOME15",
    expiry: "Expires Oct 10, 2026",
  },
];

export default function OffersPage() {
  // Clipboard copy state tracker
  const [copiedCodeId, setCopiedCodeId] = useState<number | null>(null);

  const handleCopyCode = (code: string, id: number) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCodeId(id);
      setTimeout(() => {
        setCopiedCodeId(null);
      }, 1500);
    });
  };

  return (
    <div className={styles.container}>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <Link href="/" className={styles.breadcrumbsLink}>
          Home
        </Link>
        <span>&gt;</span>
        <span>Offers</span>
      </nav>

      {/* Header section */}
      <header className={styles.headerSection}>
        <h1 className={styles.pageTitle}>Top offers for you</h1>
        <p className={styles.pageSubtitle}>
          Discover premium discount campaigns, buy-one-get-one deals, and exclusive coupons for your favorite beauty brands.
        </p>
      </header>

      {/* Reused Brand Slider Carousel */}
      <div className={styles.sliderWrapper}>
        <BrandSlider />
      </div>

      {/* Promo coupons grid section */}
      <section className={styles.gridSection} aria-label="Active Promo Coupons">
        <div className={styles.gridSectionHeader}>
          <span className={styles.gridSectionSubtitle}>Exclusive Rewards</span>
          <h2 className={styles.gridSectionTitle}>Active Promotional Coupons</h2>
        </div>

        <div className={styles.grid}>
          {PROMO_CODES.map((promo) => {
            const isCopied = copiedCodeId === promo.id;
            return (
              <div key={promo.id} className={styles.couponCard}>
                {/* Coupon Header details */}
                <div className={styles.couponHeader}>
                  <span className={styles.couponBadge}>{promo.badge}</span>
                  <span className={styles.discountText}>{promo.discount}</span>
                </div>

                {/* Coupon Title and description */}
                <div className="flex flex-col gap-1">
                  <h3 className={styles.couponTitle}>{promo.title}</h3>
                  <p className={styles.couponDesc}>{promo.description}</p>
                </div>

                {/* Coupon Footer code actions */}
                <div className={styles.couponFooter}>
                  <div className={styles.codeWrapper}>
                    <span className={styles.codeText}>{promo.code}</span>
                    <button
                      onClick={() => handleCopyCode(promo.code, promo.id)}
                      className={`${styles.copyBtn} ${isCopied ? styles.copyBtnCopied : ""}`}
                      aria-label={`Copy promo code ${promo.code}`}
                    >
                      {isCopied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <span className={styles.expiryText}>{promo.expiry}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
