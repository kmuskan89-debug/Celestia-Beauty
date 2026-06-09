"use client";

import React, { useState } from "react";
import Link from "next/link";
import BrandsPopover from "./BrandsPopover";
import ProfilePopover from "./ProfilePopover";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showBrands, setShowBrands] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Categories", href: "/category" },
    { label: "Brands", href: "#brands" },
    { label: "New", href: "/new" },
    { label: "Offers", href: "/offers" },
    { label: "Contact", href: "/contact" },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching Celestia for: "${searchQuery}"`);
    }
  };

  return (
    <>
      {/* Top Banner Ribbon */}
      <div className={styles.promoBanner}>
        FREE SHIPPING ON ORDERS OVER $50 • USE CODE: CELESTIA
      </div>

      {/* Main Header */}
      <header className={styles.header}>
        <div className={styles.navbar}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            Celestia<span className={styles.logoDot}>.</span>
          </Link>

          {/* Navigation Links (Desktop) */}
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className={styles.navItem}
                  onMouseEnter={() => link.label === "Brands" && setShowBrands(true)}
                  onMouseLeave={() => link.label === "Brands" && setShowBrands(false)}
                >
                  {link.label === "Brands" ? (
                    <>
                      <button
                        className={`${styles.navLink} flex items-center gap-1 bg-transparent border-0 cursor-pointer font-sans`}
                        onClick={() => setShowBrands(!showBrands)}
                        aria-expanded={showBrands}
                      >
                        {link.label}
                        <svg
                          className={`w-3 h-3 transition-transform duration-300 ${
                            showBrands ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {showBrands && (
                        <BrandsPopover
                          onMouseEnter={() => setShowBrands(true)}
                          onMouseLeave={() => setShowBrands(false)}
                        />
                      )}
                    </>
                  ) : (
                    <Link href={link.href} className={styles.navLink}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Icons Group */}
          <div className={styles.actions}>
            {/* Search Input Bar (Desktop) */}
            <form onSubmit={handleSearchSubmit} className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search products..."
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className={styles.searchIcon}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </form>

            {/* Account Account Icon */}
            <div
              className="relative"
              onMouseEnter={() => setShowProfile(true)}
              onMouseLeave={() => setShowProfile(false)}
            >
              <button
                className={styles.iconBtn}
                aria-label="Account"
                onClick={() => setShowProfile(!showProfile)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>
              {showProfile && (
                <ProfilePopover
                  onMouseEnter={() => setShowProfile(true)}
                  onMouseLeave={() => setShowProfile(false)}
                  onClose={() => setShowProfile(false)}
                />
              )}
            </div>

            {/* Wishlist Icon (Hearts) with Badge */}
            <button className={styles.iconBtn} aria-label="Wishlist">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span className={styles.badge}>2</span>
            </button>

            {/* Cart Icon (Shopping Bag) with Badge */}
            <button className={styles.iconBtn} aria-label="Cart">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span className={styles.badge}>1</span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation overlay drawer */}
        <div className={`${styles.mobileDrawer} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Search input */}
          <form onSubmit={handleSearchSubmit} className={styles.mobileSearchContainer}>
            <input
              type="text"
              placeholder="Search products..."
              className={styles.mobileSearchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              className={styles.mobileSearchIcon}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </form>
        </div>
      </header>
    </>
  );
}
