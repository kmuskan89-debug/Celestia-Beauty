"use client";

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const shopLinks = [
    { label: "Cleansers", href: "#categories" },
    { label: "Serums", href: "#categories" },
    { label: "Sunscreens", href: "#categories" },
    { label: "Moisturizers", href: "#categories" },
    { label: "Lip Balms", href: "#categories" },
    { label: "Perfumes", href: "#categories" },
  ];

  const infoLinks = [
    { label: "Shipping & Returns", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Store Locator", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  const companyLinks = [
    { label: "Our Story", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Row 1: Columns */}
        <div className={styles.grid}>
          {/* Column 1: Brand details */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              Celestia<span className={styles.logoDot}>.</span>
            </Link>
            <p className={styles.brandDesc}>
              Experience luxury, organic cosmetics handcrafted to reveal your natural radiance. Clean formulas for premium skincare.
            </p>
            {/* Social SVGs */}
            <div className={styles.socials}>
              <a href="#" aria-label="Instagram" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="Pinterest" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 22a9 9 0 0 1-2.36-10.43l.77-3.16a5.5 5.5 0 0 1 10.5 0l.77 3.16A9 9 0 0 1 8 22z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </a>
              <a href="#" aria-label="TikTok" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Shop links */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Shop</h4>
            <ul className={styles.linkList}>
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Help links */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Help</h4>
            <ul className={styles.linkList}>
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company links */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linkList}>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Newsletter form */}
          <div className={styles.newsletterCol}>
            <h4 className={styles.colTitle}>Newsletter</h4>
            <p className={styles.newsletterDesc}>
              Join the Celestia circle to receive beauty updates and 15% off your first luxury order.
            </p>
            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed! Thank you for joining the Celestia circle.");
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className={styles.input}
              />
              <button type="submit" className={styles.btn}>
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Row 2: Copyright & payment logos */}
        <div className={styles.bottomBar}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Celestia Beauty. All rights reserved.
          </p>
          <div className={styles.payments}>
            <span className={styles.paymentIcon}>Visa</span>
            <span className={styles.paymentIcon}>Mastercard</span>
            <span className={styles.paymentIcon}>Amex</span>
            <span className={styles.paymentIcon}>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
