"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import { useWishlist } from "../../../context/WishlistContext";
import styles from "./page.module.css";

interface Order {
  id: string;
  date: string;
  items: string;
  total: number;
  status: "Delivered" | "In Transit" | "Processing";
}

interface Address {
  id: string;
  type: string;
  isDefault: boolean;
  addressLine: string;
}

function AccountPageContent() {
  const { user, logout, isLoading } = useAuth();
  const { wishlistCount } = useWishlist();
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams ? searchParams.get("tab") : "profile";

  // Tab State
  const [activeTab, setActiveTab] = useState<string>("profile");

  // Profile Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Mock Orders Data
  const orders: Order[] = [
    {
      id: "CLS-908124",
      date: "May 24, 2026",
      items: "1 x Sunset Radiance Serum, 1 x Matte Drama Lipstick",
      total: 5760,
      status: "Delivered",
    },
    {
      id: "CLS-897120",
      date: "April 18, 2026",
      items: "1 x Amber Glow Moisturizer",
      total: 2880,
      status: "Delivered",
    },
    {
      id: "CLS-912403",
      date: "June 02, 2026",
      items: "1 x Vanilla Amber Perfume",
      total: 6000,
      status: "In Transit",
    },
  ];

  // Mock Addresses
  const addresses: Address[] = [
    {
      id: "1",
      type: "Home",
      isDefault: true,
      addressLine: "Flat 402, Block C, Sunset Heights, Outer Ring Road, Bangalore, Karnataka, 560001",
    },
    {
      id: "2",
      type: "Work",
      isDefault: false,
      addressLine: "Desk 45, Floor 3, Building B, Global TechPark, Main Road, Bangalore, Karnataka, 560103",
    },
  ];

  // Sync activeTab with tabParam
  useEffect(() => {
    if (tabParam && ["profile", "orders", "addresses", "settings"].includes(tabParam)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  // Sync profile details when user is loaded
  useEffect(() => {
    if (user) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Profile updated successfully (Mock)! New details saved.");
  };

  const handleSignOut = () => {
    logout();
    router.push("/");
  };

  const handleDownloadInvoice = (orderId: string, e: React.MouseEvent) => {
    e.preventDefault();
    alert(`Downloading invoice for order ${orderId} (Mock)...`);
  };

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh" }}>
          <span>Loading Celestia drawer...</span>
        </div>
      </div>
    );
  }

  // Not Logged In State
  if (!user) {
    return (
      <div className={styles.notLoggedInContainer}>
        <div className={styles.notLoggedInCard}>
          <div className={styles.lockIconWrapper}>
            <svg
              className={styles.lockIcon}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <h2 className={styles.notLoggedInTitle}>My Beauty Drawer</h2>
          <p className={styles.notLoggedInText}>
            Please sign in to view your orders, saved addresses, profile settings, and personalized beauty selections.
          </p>
          <Link href="/login" className={styles.loginBtn}>
            Login or Register
          </Link>
        </div>
      </div>
    );
  }

  // Logged In Dashboard View
  return (
    <div className={styles.container}>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <Link href="/" className={styles.breadcrumbsLink}>
          Home
        </Link>
        <span>&gt;</span>
        <span className={styles.breadcrumbsCurrent}>My Account</span>
      </nav>

      {/* Header Section */}
      <header className={styles.headerSection}>
        <h1 className={styles.pageTitle}>My Account</h1>
        <p className={styles.pageSubtitle}>
          Manage your personal details, track recent order deliveries, and update shipping addresses.
        </p>
      </header>

      {/* Profile Banner */}
      <section className={styles.profileBanner}>
        <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
          <div className={styles.avatar}>
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className={styles.profileMeta}>
            <h3 className={styles.profileName}>{user.name}</h3>
            <p className={styles.profileEmail}>{user.email}</p>
            <span className={styles.badge}>Celestia Elite Member</span>
          </div>
        </div>

        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{orders.length}</span>
            <span className={styles.statLabel}>Orders</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{wishlistCount}</span>
            <span className={styles.statLabel}>Wishlist</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{addresses.length}</span>
            <span className={styles.statLabel}>Addresses</span>
          </div>
        </div>
      </section>

      {/* Grid Split Layout */}
      <main className={styles.layoutGrid}>
        {/* Sidebar Tabs */}
        <aside className={styles.sidebar}>
          <button
            onClick={() => setActiveTab("profile")}
            className={`${styles.tabBtn} ${activeTab === "profile" ? styles.activeTabBtn : ""}`}
          >
            <svg
              className={styles.tabIcon}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            Personal Details
          </button>

          <button
            onClick={() => setActiveTab("orders")}
            className={`${styles.tabBtn} ${activeTab === "orders" ? styles.activeTabBtn : ""}`}
          >
            <svg
              className={styles.tabIcon}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
            My Orders
          </button>

          <button
            onClick={() => setActiveTab("addresses")}
            className={`${styles.tabBtn} ${activeTab === "addresses" ? styles.activeTabBtn : ""}`}
          >
            <svg
              className={styles.tabIcon}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            My Addresses
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            className={`${styles.tabBtn} ${activeTab === "settings" ? styles.activeTabBtn : ""}`}
          >
            <svg
              className={styles.tabIcon}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.992a7.722 7.722 0 010 .255c-.008.378.137.75.43.992l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.43l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Account Settings
          </button>
        </aside>

        {/* Tab Content Panels */}
        <section className={styles.contentArea}>
          {/* PROFILE TAB */}
          {activeTab === "profile" && (
            <div>
              <h2 className={styles.sectionTitle}>Profile Details</h2>
              <form onSubmit={handleProfileUpdate}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="account-name" className={styles.label}>Full Name</label>
                    <input
                      type="text"
                      id="account-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="account-email" className={styles.label}>Email Address</label>
                    <input
                      type="email"
                      id="account-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={styles.input}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className={styles.btnPrimary}>
                  Save Changes
                </button>
              </form>

              <button
                type="button"
                onClick={handleSignOut}
                className={styles.signOutBtn}
              >
                Sign Out from Account
              </button>
            </div>
          )}

          {/* ORDERS TAB */}
          {activeTab === "orders" && (
            <div>
              <h2 className={styles.sectionTitle}>Order History</h2>
              <div className={styles.ordersList}>
                {orders.map((order) => (
                  <div key={order.id} className={styles.orderCard}>
                    <div className={styles.orderHeader}>
                      <div className={styles.orderMetaGroup}>
                        <span className={styles.orderId}>{order.id}</span>
                        <span className={styles.orderDate}>{order.date}</span>
                      </div>
                      <span
                        className={`${styles.orderStatus} ${
                          order.status === "Delivered"
                            ? styles.statusDelivered
                            : order.status === "In Transit"
                            ? styles.statusTransit
                            : styles.statusProcessing
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div className={styles.orderDetails}>
                      <span className={styles.orderItems}>{order.items}</span>
                      <div className={styles.orderRightBlock}>
                        <span className={styles.orderTotal}>₹{order.total.toLocaleString("en-IN")}.00</span>
                        <button
                          onClick={(e) => handleDownloadInvoice(order.id, e)}
                          className={styles.invoiceBtn}
                        >
                          Invoice
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ADDRESSES TAB */}
          {activeTab === "addresses" && (
            <div>
              <h2 className={styles.sectionTitle}>Saved Addresses</h2>
              <div className={styles.addressGrid}>
                {addresses.map((address) => (
                  <div key={address.id} className={styles.addressCard}>
                    <div className={styles.addressHeader}>
                      <span className={styles.addressType}>{address.type}</span>
                      {address.isDefault && (
                        <span className={styles.addressTag}>Default</span>
                      )}
                    </div>
                    <p className={styles.addressText}>{address.addressLine}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SETTINGS TAB */}
          {activeTab === "settings" && (
            <div>
              <h2 className={styles.sectionTitle}>Account Settings</h2>
              
              {/* Change Password Panel */}
              <div style={{ marginBottom: "35px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: "700", marginBottom: "16px", color: "#18181b" }}>Change Password</h3>
                <form onSubmit={(e) => { e.preventDefault(); alert("Password updated successfully (Mock)!"); }}>
                  <div className={styles.formGroup} style={{ marginBottom: "16px" }}>
                    <label htmlFor="current-password" className={styles.label}>Current Password</label>
                    <input type="password" id="current-password" className={styles.input} required />
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="new-password" className={styles.label}>New Password</label>
                      <input type="password" id="new-password" className={styles.input} required />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="confirm-password" className={styles.label}>Confirm New Password</label>
                      <input type="password" id="confirm-password" className={styles.input} required />
                    </div>
                  </div>
                  <button type="submit" className={styles.btnPrimary} style={{ marginTop: "12px" }}>
                    Update Password
                  </button>
                </form>
              </div>

              {/* Preferences Panel */}
              <div style={{ borderTop: "1px solid #f4f4f5", paddingTop: "25px", marginBottom: "35px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: "700", marginBottom: "16px", color: "#18181b" }}>Preferences</h3>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#27272a", cursor: "pointer" }}>
                    <input type="checkbox" defaultChecked style={{ accentColor: "#ff5f1f" }} />
                    Receive order status updates via Email
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#27272a", cursor: "pointer" }}>
                    <input type="checkbox" defaultChecked style={{ accentColor: "#ff5f1f" }} />
                    Subscribe to newsletter for exclusive drops and beauty guides
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#27272a", cursor: "pointer" }}>
                    <input type="checkbox" style={{ accentColor: "#ff5f1f" }} />
                    Enable SMS notifications for transit tracking
                  </label>
                </div>
              </div>

              {/* Danger Zone Panel */}
              <div style={{ borderTop: "1px solid #f4f4f5", paddingTop: "25px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#ef4444", marginBottom: "8px" }}>Danger Zone</h3>
                <p style={{ fontSize: "12px", color: "#71717a", margin: "0 0 16px 0", lineHeight: "1.5" }}>
                  Deleting your account is permanent and cannot be undone. All order histories, wishlists, and membership points will be deleted.
                </p>
                <button
                  type="button"
                  onClick={() => { if(confirm("Are you sure you want to permanently delete your account? This action is irreversible.")) { alert("Account deleted (Mock)."); logout(); router.push("/"); } }}
                  style={{ background: "transparent", color: "#ef4444", border: "1px solid #fecaca", padding: "10px 18px", borderRadius: "8px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}
                >
                  Delete Account
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default function AccountPage() {
  return (
    <Suspense fallback={
      <div className={styles.container}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh" }}>
          <span>Loading Account...</span>
        </div>
      </div>
    }>
      <AccountPageContent />
    </Suspense>
  );
}
