"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../../context/CartContext";
import styles from "./page.module.css";

export default function CartPage() {
  const { cart: items, updateQuantity, removeFromCart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState<{
    code: string;
    type: "percent" | "fixed";
    value: number;
  } | null>(null);
  const [promoError, setPromoError] = useState("");
  const [promoSuccess, setPromoSuccess] = useState("");

  // Handler for Coupon application
  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError("");
    setPromoSuccess("");

    const code = promoCode.trim().toUpperCase();
    if (!code) {
      setPromoError("Please enter a promo code.");
      return;
    }

    if (code === "GLOW50") {
      setAppliedDiscount({ code: "GLOW50", type: "percent", value: 0.5 });
      setPromoSuccess("Promo code GLOW50 (50% Off) applied successfully!");
      setPromoCode("");
    } else if (code === "WELCOME15") {
      setAppliedDiscount({ code: "WELCOME15", type: "fixed", value: 150 });
      setPromoSuccess("Promo code WELCOME15 (₹150 Off) applied successfully!");
      setPromoCode("");
    } else if (code === "FREESHIP") {
      setAppliedDiscount({ code: "FREESHIP", type: "fixed", value: 0 }); // handled in shipping calc
      setPromoSuccess("Promo code FREESHIP (Free Shipping) applied successfully!");
      setPromoCode("");
    } else {
      setPromoError("Invalid promo code. Try GLOW50 or WELCOME15.");
    }
  };

  // Cart math calculations
  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  const discountAmount = useMemo(() => {
    if (!appliedDiscount) return 0;
    if (appliedDiscount.type === "percent") {
      return subtotal * appliedDiscount.value;
    }
    if (appliedDiscount.type === "fixed") {
      return Math.min(subtotal, appliedDiscount.value);
    }
    return 0;
  }, [appliedDiscount, subtotal]);

  const shippingCost = useMemo(() => {
    if (items.length === 0) return 0;
    if (appliedDiscount?.code === "FREESHIP") return 0;
    // Free shipping above ₹499 after discount
    const discountedTotal = subtotal - discountAmount;
    return discountedTotal >= 499 ? 0 : 99;
  }, [items, subtotal, discountAmount, appliedDiscount]);

  const estimatedTax = useMemo(() => {
    const taxableTotal = subtotal - discountAmount;
    return Math.max(0, taxableTotal * 0.18); // 18% GST (Indian tax)
  }, [subtotal, discountAmount]);

  const grandTotal = useMemo(() => {
    return subtotal - discountAmount + shippingCost + estimatedTax;
  }, [subtotal, discountAmount, shippingCost, estimatedTax]);

  const handleCheckout = () => {
    alert("Thank you for your order! Redirecting to Celestia secure payment gateway...");
  };

  return (
    <div className={styles.container}>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <Link href="/" className={styles.breadcrumbsLink}>
          Home
        </Link>
        <span>&gt;</span>
        <span>Shopping Bag</span>
      </nav>

      {/* Header section */}
      <header className={styles.headerSection}>
        <h1 className={styles.pageTitle}>Shopping Bag</h1>
        <p className={styles.pageSubtitle}>
          Review your selection of premium cosmetics and skincare before finishing checkout.
        </p>
      </header>

      {/* Main Content Split */}
      {items.length > 0 ? (
        <div className={styles.mainContent}>
          {/* Left Column: Cart items list */}
          <main className={styles.cartList}>
            {items.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                {/* Image wrapper */}
                <div className={styles.itemImageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className={styles.itemImage}
                    sizes="100px"
                  />
                </div>

                {/* Details info */}
                <div className={styles.itemInfo}>
                  <span className={styles.brand}>{item.brand}</span>
                  <h2 className={styles.name}>{item.name}</h2>
                  <span className={styles.price}>₹{item.price}.00</span>

                  {/* Quantity and Remove actions row */}
                  <div className={styles.actionsRow}>
                    <div className={styles.qtyContainer}>
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={item.quantity <= 1}
                        className={styles.qtyBtn}
                        aria-label="Decrease quantity"
                      >
                        &minus;
                      </button>
                      <span className={styles.qtyCount}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className={styles.qtyBtn}
                        aria-label="Increase quantity"
                      >
                        &#43;
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className={styles.deleteBtn}
                      aria-label={`Remove ${item.name} from Shopping Bag`}
                    >
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </main>

          {/* Right Column: Sticky Billing Summary */}
          <aside className={styles.summaryCol}>
            <div className={styles.summaryCard}>
              <h2 className={styles.summaryTitle}>Order Summary</h2>
              
              <div className={styles.summaryDetails}>
                <div className={styles.summaryRow}>
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className={`${styles.summaryRow} ${styles.discountRow}`}>
                    <span>Discount ({appliedDiscount?.code})</span>
                    <span>&minus;₹{discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className={styles.summaryRow}>
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? "FREE" : `₹${shippingCost.toFixed(2)}`}</span>
                </div>

                <div className={styles.summaryRow}>
                  <span>Estimated Tax (GST 18%)</span>
                  <span>₹{estimatedTax.toFixed(2)}</span>
                </div>

                <div className={styles.summaryTotalRow}>
                  <span>Order Total</span>
                  <span className={styles.totalPrice}>₹{grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Promo Coupon form */}
              <form onSubmit={handleApplyPromo} className={styles.promoContainer}>
                <label htmlFor="promoCode" className={styles.qtyCount} style={{ textAlign: "left", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Promo Coupon
                </label>
                <div className={styles.promoInputGroup}>
                  <input
                    type="text"
                    id="promoCode"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="e.g. GLOW50"
                    className={styles.promoInput}
                  />
                  <button type="submit" className={styles.promoBtn}>
                    Apply
                  </button>
                </div>
                {promoSuccess && (
                  <span className={`${styles.promoFeedback} ${styles.promoSuccess}`}>
                    {promoSuccess}
                  </span>
                )}
                {promoError && (
                  <span className={`${styles.promoFeedback} ${styles.promoError}`}>
                    {promoError}
                  </span>
                )}
              </form>

              <button onClick={handleCheckout} className={styles.checkoutBtn}>
                Proceed to Checkout
              </button>
            </div>
          </aside>
        </div>
      ) : (
        /* Empty State Fallback */
        <main className={styles.emptyState}>
          <div className={styles.emptyIconWrapper}>
            <svg
              width="36"
              height="36"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <h2 className={styles.emptyTitle}>Your Shopping Bag is Empty</h2>
          <p className={styles.emptySubtitle}>
            Review your lists or continue shopping to fill your cart with premium cosmetics and skincare.
          </p>
          <Link href="/category" className={styles.shopBtn}>
            Explore Products
          </Link>
        </main>
      )}
    </div>
  );
}
