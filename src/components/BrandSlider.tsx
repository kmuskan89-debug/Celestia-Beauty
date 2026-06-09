"use client";

import React, { useRef } from "react";
import styles from "./BrandSlider.module.css";

interface BrandCampaign {
  brandLogo: string;
  campaignTitle: string;
  campaignDesc: string;
  cardTitle: string;
  cardSubtitle: string;
  bgGradient: string;
}

const CAMPAIGNS: BrandCampaign[] = [
  {
    brandLogo: "Lancôme",
    campaignTitle: "EXCLUSIVE OFFERS",
    campaignDesc: "SONAM'S BIRTHDAY",
    cardTitle: "Gifts On Orders",
    cardSubtitle: "Only Valid For Today",
    bgGradient: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)",
  },
  {
    brandLogo: "Olaplex",
    campaignTitle: "BOND REPAIR ESSENTIALS",
    campaignDesc: "Stronger, Softer & Healthier Hair",
    cardTitle: "Bond Builder",
    cardSubtitle: "Prep + Shine",
    bgGradient: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)",
  },
  {
    brandLogo: "Wanderlust",
    campaignTitle: "OUR NO. 1 FRAGRANCE",
    campaignDesc: "Champagne & Berries",
    cardTitle: "Better Together",
    cardSubtitle: "Layer. Love. Repeat.",
    bgGradient: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)",
  },
  {
    brandLogo: "Estée Lauder",
    campaignTitle: "NIGHT REPAIR GLOW",
    campaignDesc: "Rejuvenate & Hydrate",
    cardTitle: "Radiance Drops",
    cardSubtitle: "Limitless Glow",
    bgGradient: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
  },
  {
    brandLogo: "CeraVe",
    campaignTitle: "DERMATOLOGIST RECOMMENDED",
    campaignDesc: "Essential Ceramides",
    cardTitle: "Moisturizing Cream",
    cardSubtitle: "Restores Skin Barrier",
    bgGradient: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
  },
  {
    brandLogo: "M.A.C Cosmetics",
    campaignTitle: "ICONIC MATTE LIPSTICKS",
    campaignDesc: "High Pigment & Longwear",
    cardTitle: "Matte Velvet",
    cardSubtitle: "Bold Colors For Everyone",
    bgGradient: "linear-gradient(135deg, #fafafa 0%, #f4f4f5 100%)",
  },
  {
    brandLogo: "Biotique",
    campaignTitle: "NATURAL AYURVEDIC CARE",
    campaignDesc: "100% Botanical Extracts",
    cardTitle: "Bio Dandelion",
    cardSubtitle: "Pure & Organic Glow",
    bgGradient: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
  },
  {
    brandLogo: "Clinique",
    campaignTitle: "CLINICALLY PROVEN RESULTS",
    campaignDesc: "Allergy Tested & Fragrance Free",
    cardTitle: "Moisture Surge",
    cardSubtitle: "100H Hydration",
    bgGradient: "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)",
  },
];

export default function BrandSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNextSlide = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const card = container.querySelector(`.${styles.brandCard}`);
      if (card) {
        const cardWidth = card.clientWidth;
        const gap = 20; // 1.25rem gap matching css
        const scrollAmount = cardWidth + gap;

        // If we scrolled to the end, wrap around to 0
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 5) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }
  };

  const handleShopNowClick = (brandName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`Shopping campaign collection for ${brandName}!`);
  };

  const handleCardClick = (brandName: string) => {
    alert(`Opening campaign drawer for ${brandName}!`);
  };

  return (
    <div className={styles.section}>
      {/* Brand cards container viewport */}
      <div ref={containerRef} className={styles.sliderContainer}>
        <div className={styles.sliderTrack}>
          {CAMPAIGNS.map((campaign, index) => (
            <div
              key={index}
              className={styles.brandCard}
              style={{ background: campaign.bgGradient }}
              onClick={() => handleCardClick(campaign.brandLogo)}
            >
              {/* Logo label (Top Left) */}
              <div className={styles.logoTag}>{campaign.brandLogo}</div>

              {/* Campaign headings (Top Right) */}
              <div className={styles.campaignText}>
                <h4 className={styles.campaignTitle}>{campaign.campaignTitle}</h4>
                <span className={styles.campaignDesc}>{campaign.campaignDesc}</span>
              </div>

              {/* Bottom text & Shop Now CTA */}
              <div className={styles.bottomContent}>
                <div className={styles.textGroup}>
                  <h3 className={styles.cardTitle}>{campaign.cardTitle}</h3>
                  <p className={styles.cardSubtitle}>{campaign.cardSubtitle}</p>
                </div>
                <button
                  onClick={(e) => handleShopNowClick(campaign.brandLogo, e)}
                  className={styles.shopNowBtn}
                >
                  Shop Now &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sliding Arrow Overlay (Very Right) */}
      <button
        onClick={handleNextSlide}
        className={styles.arrowBtn}
        aria-label="Next campaigns"
      >
        <svg
          className={styles.arrowIcon}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
