"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import styles from "./SubNavbar.module.css";

const CATEGORIES = [
  "Makeup",
  "Skin",
  "Hair",
  "Appliances",
  "Bath & Body",
  "Natural",
  "Fragrance",
  "Accessories",
];

function SubNavbarContent() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const activeType = searchParams ? searchParams.get("type") : null;

  return (
    <nav className={styles.subNavbar}>
      <ul className={styles.container}>
        {CATEGORIES.map((category) => {
          // Normalize both for comparison (e.g. "Bath & Body")
          const isActive =
            pathname === "/category" &&
            activeType?.toLowerCase() === category.toLowerCase();
          return (
            <li key={category} className={styles.item}>
              <Link
                href={`/category?type=${encodeURIComponent(category)}`}
                className={`${styles.link} ${isActive ? styles.activeLink : ""}`}
                scroll={false}
              >
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function SubNavbar() {
  return (
    <Suspense fallback={<div className={styles.subNavbar} />}>
      <SubNavbarContent />
    </Suspense>
  );
}
