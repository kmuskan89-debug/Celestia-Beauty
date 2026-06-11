// "use client";

// import React, { useRef } from "react";
// import styles from "./BrandSlider.module.css";

// interface BrandCampaign {
//   brandLogo: string;
//   campaignTitle: string;
//   campaignDesc: string;
//   cardTitle: string;
//   cardSubtitle: string;
//   bgGradient: string;
//   image: string;
// }

// const CAMPAIGNS: BrandCampaign[] = [
//   {
//     brandLogo: "Lancôme",
//     campaignTitle: "EXCLUSIVE OFFERS",
//     campaignDesc: "SONAM'S BIRTHDAY",
//     cardTitle: "Gifts On Orders",
//     cardSubtitle: "Only Valid For Today",
//     bgGradient: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)",
//     image: "https://etimg.etb2bimg.com/photo/127880718.cms",
//   },
//   {
//     brandLogo: "Olaplex",
//     campaignTitle: "BOND REPAIR ESSENTIALS",
//     campaignDesc: "Stronger, Softer & Healthier Hair",
//     cardTitle: "Bond Builder",
//     cardSubtitle: "Prep + Shine",
//     bgGradient: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)",
//     image: "https://olaplex.com/cdn/shop/files/MB_ShopMy_2UP_top_0bc51ac1-e852-4352-9208-28f91897422d.jpg?format=webp&v=1762876464&width=750",
//   },
//   {
//     brandLogo: "Wanderlust",
//     campaignTitle: "OUR NO. 1 FRAGRANCE",
//     campaignDesc: "Champagne & Berries",
//     cardTitle: "Better Together",
//     cardSubtitle: "Layer. Love. Repeat.",
//     bgGradient: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)",
//     image: "https://cdn.tatlerasia.com/tatlerasia/i/2023/03/31131100-photo-28-02-2023-7-18-26-pm_cover_1600x1200.jpg",
//   },
//   {
//     brandLogo: "Estée Lauder",
//     campaignTitle: "NIGHT REPAIR GLOW",
//     campaignDesc: "Rejuvenate & Hydrate",
//     cardTitle: "Radiance Drops",
//     cardSubtitle: "Limitless Glow",
//     bgGradient: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
//     image: "https://etimg.etb2bimg.com/photo/93343233.cms",
//   },
//   {
//     brandLogo: "CeraVe",
//     campaignTitle: "DERMATOLOGIST RECOMMENDED",
//     campaignDesc: "Essential Ceramides",
//     cardTitle: "Moisturizing Cream",
//     cardSubtitle: "Restores Skin Barrier",
//     bgGradient: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
//     image: "https://pbs.twimg.com/media/GBS2zOtaMAAKwry.jpg",
//   },
//   {
//     brandLogo: "M.A.C Cosmetics",
//     campaignTitle: "ICONIC MATTE LIPSTICKS",
//     campaignDesc: "High Pigment & Longwear",
//     cardTitle: "Matte Velvet",
//     cardSubtitle: "Bold Colors For Everyone",
//     bgGradient: "linear-gradient(135deg, #fafafa 0%, #f4f4f5 100%)",
//     image: "https://media.fashionnetwork.com/cdn-cgi/image/fit=cover,width=600,height=600,format=auto/m/4428/3574/367d/56ea/490d/66eb/c9cf/8e99/f53c/7c5f/7c5f.jpg",
//   },
//   {
//     brandLogo: "Biotique",
//     campaignTitle: "NATURAL AYURVEDIC CARE",
//     campaignDesc: "100% Botanical Extracts",
//     cardTitle: "Bio Dandelion",
//     cardSubtitle: "Pure & Organic Glow",
//     bgGradient: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
//     image: "https://img-cdn.publive.online/fit-in/640x430/filters:format(webp)/afaqs/media/post_attachments/e5dad945468bb867b76c59e558a72fb996228e68c4283420219351e2a936ba17.jpg",
//   },
//   {
//     brandLogo: "Clinique",
//     campaignTitle: "CLINICALLY PROVEN RESULTS",
//     campaignDesc: "Allergy Tested & Fragrance Free",
//     cardTitle: "Moisture Surge",
//     cardSubtitle: "100H Hydration",
//     bgGradient: "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)",
//     image: "https://www.medianews4u.com/wp-content/uploads/2019/03/Radhika-2.jpg",
//   },
// ];

// export default function BrandSlider() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const handleNextSlide = () => {
//     if (containerRef.current) {
//       const container = containerRef.current;
//       const card = container.querySelector(`.${styles.brandCard}`);
//       if (card) {
//         const cardWidth = card.clientWidth;
//         const gap = 20; // 1.25rem gap matching css
//         const scrollAmount = cardWidth + gap;

//         // If we scrolled to the end, wrap around to 0
//         const maxScroll = container.scrollWidth - container.clientWidth;
//         if (container.scrollLeft >= maxScroll - 5) {
//           container.scrollTo({ left: 0, behavior: "smooth" });
//         } else {
//           container.scrollBy({ left: scrollAmount, behavior: "smooth" });
//         }
//       }
//     }
//   };

//   const handleShopNowClick = (brandName: string, e: React.MouseEvent) => {
//     e.stopPropagation();
//     alert(`Shopping campaign collection for ${brandName}!`);
//   };

//   const handleCardClick = (brandName: string) => {
//     alert(`Opening campaign drawer for ${brandName}!`);
//   };

//   return (
//     <div className={styles.section}>
//       {/* Brand cards container viewport */}
//       <div ref={containerRef} className={styles.sliderContainer}>
//         <div className={styles.sliderTrack}>
//           {CAMPAIGNS.map((campaign, index) => (
//             <div
//               key={index}
//               className={styles.brandCard}
//               style={{ background: campaign.bgGradient }}
//               onClick={() => handleCardClick(campaign.brandLogo)}
//             >
//               {/* Logo label (Top Left) */}
//               <div className={styles.logoTag}>{campaign.brandLogo}</div>

//               {/* Campaign headings (Top Right) */}
//               <div className={styles.campaignText}>
//                 <h4 className={styles.campaignTitle}>{campaign.campaignTitle}</h4>
//                 <span className={styles.campaignDesc}>{campaign.campaignDesc}</span>
//               </div>

//               {/* Bottom text & Shop Now CTA */}
//               <div className={styles.bottomContent}>
//                 <div className={styles.textGroup}>
//                   <h3 className={styles.cardTitle}>{campaign.cardTitle}</h3>
//                   <p className={styles.cardSubtitle}>{campaign.cardSubtitle}</p>
//                 </div>
//                 <button
//                   onClick={(e) => handleShopNowClick(campaign.brandLogo, e)}
//                   className={styles.shopNowBtn}
//                 >
//                   Shop Now &rarr;
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Sliding Arrow Overlay (Very Right) */}
//       <button
//         onClick={handleNextSlide}
//         className={styles.arrowBtn}
//         aria-label="Next campaigns"
//       >
//         <svg
//           className={styles.arrowIcon}
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="3"
//           viewBox="0 0 24 24"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//         </svg>
//       </button>
//     </div>
//   );
// }

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
  image: string;
}

const CAMPAIGNS: BrandCampaign[] = [
  {
    brandLogo: "Lancôme",
    campaignTitle: "EXCLUSIVE OFFERS",
    campaignDesc: "SONAM'S BIRTHDAY",
    cardTitle: "Gifts On Orders",
    cardSubtitle: "Only Valid For Today",
    bgGradient: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)",
    image: "https://etimg.etb2bimg.com/photo/127880718.cms",
  },
  {
    brandLogo: "Olaplex",
    campaignTitle: "BOND REPAIR ESSENTIALS",
    campaignDesc: "Stronger, Softer & Healthier Hair",
    cardTitle: "Bond Builder",
    cardSubtitle: "Prep + Shine",
    bgGradient: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)",
    image: "https://olaplex.com/cdn/shop/files/MB_ShopMy_2UP_top_0bc51ac1-e852-4352-9208-28f91897422d.jpg?format=webp&v=1762876464&width=750",
  },
  {
    brandLogo: "Wanderlust",
    campaignTitle: "OUR NO. 1 FRAGRANCE",
    campaignDesc: "Champagne & Berries",
    cardTitle: "Better Together",
    cardSubtitle: "Layer. Love. Repeat.",
    bgGradient: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)",
    image: "https://cdn.tatlerasia.com/tatlerasia/i/2023/03/31131100-photo-28-02-2023-7-18-26-pm_cover_1600x1200.jpg",
  },
  {
    brandLogo: "Estée Lauder",
    campaignTitle: "NIGHT REPAIR GLOW",
    campaignDesc: "Rejuvenate & Hydrate",
    cardTitle: "Radiance Drops",
    cardSubtitle: "Limitless Glow",
    bgGradient: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
    image: "https://etimg.etb2bimg.com/photo/93343233.cms",
  },
  {
    brandLogo: "CeraVe",
    campaignTitle: "DERMATOLOGIST RECOMMENDED",
    campaignDesc: "Essential Ceramides",
    cardTitle: "Moisturizing Cream",
    cardSubtitle: "Restores Skin Barrier",
    bgGradient: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
    image: "https://pbs.twimg.com/media/GBS2zOtaMAAKwry.jpg",
  },
  {
    brandLogo: "M.A.C Cosmetics",
    campaignTitle: "ICONIC MATTE LIPSTICKS",
    campaignDesc: "High Pigment & Longwear",
    cardTitle: "Matte Velvet",
    cardSubtitle: "Bold Colors For Everyone",
    bgGradient: "linear-gradient(135deg, #fafafa 0%, #f4f4f5 100%)",
    image: "https://media.fashionnetwork.com/cdn-cgi/image/fit=cover,width=600,height=600,format=auto/m/4428/3574/367d/56ea/490d/66eb/c9cf/8e99/f53c/7c5f/7c5f.jpg",
  },
  {
    brandLogo: "Biotique",
    campaignTitle: "NATURAL AYURVEDIC CARE",
    campaignDesc: "100% Botanical Extracts",
    cardTitle: "Bio Dandelion",
    cardSubtitle: "Pure & Organic Glow",
    bgGradient: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
    image: "https://img-cdn.publive.online/fit-in/640x430/filters:format(webp)/afaqs/media/post_attachments/e5dad945468bb867b76c59e558a72fb996228e68c4283420219351e2a936ba17.jpg",
  },
  {
    brandLogo: "Clinique",
    campaignTitle: "CLINICALLY PROVEN RESULTS",
    campaignDesc: "Allergy Tested & Fragrance Free",
    cardTitle: "Moisture Surge",
    cardSubtitle: "100H Hydration",
    bgGradient: "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)",
    image: "https://www.medianews4u.com/wp-content/uploads/2019/03/Radhika-2.jpg",
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
              style={{
                backgroundColor: "#000",
                position: "relative",
                overflow: "hidden",
              }}
              onClick={() => handleCardClick(campaign.brandLogo)}
            >
              {/* Crisp, Full-Color Image */}
              <img
                src={campaign.image}
                alt={`${campaign.brandLogo} campaign`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              />

              {/* Subtle Dark Overlay (Ensures white text is readable) */}
              <div 
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)",
                  zIndex: 5,
                  pointerEvents: "none"
                }}
              />

              {/* Z-Index Wrapper for Content */}
              <div
                style={{
                  position: "relative",
                  zIndex: 10,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  color: "#fff", // Forces text to be white against the dark overlay
                }}
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