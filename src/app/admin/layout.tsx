"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AdminProvider, useAdmin } from "../../context/AdminContext";

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { toast } = useAdmin();

  // Determine page title based on current path
  const getPageTitle = () => {
    switch (pathname) {
      case "/admin":
        return "Dashboard Overview";
      case "/admin/products":
        return "Product Inventory";
      case "/admin/add-product":
        return "Add New Product";
      case "/admin/users":
        return "User Accounts";
      case "/admin/coupons":
        return "Coupons & Discounts";
      default:
        return "Admin Management";
    }
  };

  // Skip rendering sidebar and header for the login view
  if (pathname === "/admin/login") {
    return (
      <div className="min-h-screen bg-[#FAF6F5] flex flex-col font-sans relative antialiased">
        {/* Toast Messages */}
        {toast && (
          <div
            className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl border transition-all duration-300 transform scale-100 animate-slide-in ${
              toast.type === "success"
                ? "bg-[#fff6f2] border-[#ffb085] text-[#c2410c]"
                : toast.type === "error"
                ? "bg-red-50 border-red-200 text-red-700"
                : "bg-blue-50 border-blue-200 text-blue-700"
            }`}
          >
            {toast.type === "success" && (
              <svg className="w-5 h-5 text-[#ff5f1f]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            {toast.type === "error" && (
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            )}
            {toast.type === "info" && (
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            <span className="font-medium text-sm">{toast.message}</span>
          </div>
        )}
        {children}
      </div>
    );
  }

  return (
    <div className="flex-1 w-full flex bg-[#FAF6F5] min-h-screen font-sans relative antialiased">
      {/* Toast Messages */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl border transition-all duration-300 transform scale-100 animate-slide-in ${
            toast.type === "success"
              ? "bg-[#fff6f2] border-[#ffb085] text-[#c2410c]"
              : toast.type === "error"
              ? "bg-red-50 border-red-200 text-red-700"
              : "bg-blue-50 border-blue-200 text-blue-700"
          }`}
        >
          {toast.type === "success" && (
            <svg className="w-5 h-5 text-[#ff5f1f]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {toast.type === "error" && (
            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          )}
          {toast.type === "info" && (
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          <span className="font-medium text-sm">{toast.message}</span>
        </div>
      )}

      {/* Left Sidebar Layout */}
      <aside className="w-72 bg-[#1E1716] border-r border-[#2d2422] flex flex-col justify-between shrink-0 h-screen sticky top-0">
        <div>
          {/* Brand Logo Header */}
          <div className="p-6 border-b border-[#2d2422] flex items-center gap-3">
            <Link href="/" className="text-2xl font-serif tracking-wide text-white font-semibold flex items-center">
              Celestia<span className="text-[#ff5f1f] ml-0.5">.</span>
              <span className="text-[10px] uppercase font-sans tracking-widest text-[#ffb085] ml-2 px-2 py-0.5 border border-[#ffb085]/20 rounded-full bg-[#ffb085]/5">
                Admin
              </span>
            </Link>
          </div>

          {/* Nav List */}
          <nav className="p-4 space-y-1.5">
            {/* Dashboard */}
            <Link
              href="/admin"
              className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 border text-left ${
                pathname === "/admin"
                  ? "bg-[#ff5f1f]/10 border-[#ff5f1f]/35 text-[#ff5f1f] shadow-md shadow-[#ff5f1f]/5"
                  : "bg-transparent border-transparent text-[#7a6e6a] hover:text-white hover:bg-white/5"
              }`}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="9" rx="1" />
                <rect x="14" y="3" width="7" height="5" rx="1" />
                <rect x="14" y="12" width="7" height="9" rx="1" />
                <rect x="3" y="16" width="7" height="5" rx="1" />
              </svg>
              Dashboard
            </Link>

            {/* Product List */}
            <Link
              href="/admin/products"
              className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 border text-left ${
                pathname === "/admin/products"
                  ? "bg-[#ff5f1f]/10 border-[#ff5f1f]/35 text-[#ff5f1f] shadow-md shadow-[#ff5f1f]/5"
                  : "bg-transparent border-transparent text-[#7a6e6a] hover:text-white hover:bg-white/5"
              }`}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              Product List
            </Link>

            {/* Add Product */}
            <Link
              href="/admin/add-product"
              className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 border text-left ${
                pathname === "/admin/add-product"
                  ? "bg-[#ff5f1f]/10 border-[#ff5f1f]/35 text-[#ff5f1f] shadow-md shadow-[#ff5f1f]/5"
                  : "bg-transparent border-transparent text-[#7a6e6a] hover:text-white hover:bg-white/5"
              }`}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Add Product
            </Link>

            {/* Users */}
            <Link
              href="/admin/users"
              className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 border text-left ${
                pathname === "/admin/users"
                  ? "bg-[#ff5f1f]/10 border-[#ff5f1f]/35 text-[#ff5f1f] shadow-md shadow-[#ff5f1f]/5"
                  : "bg-transparent border-transparent text-[#7a6e6a] hover:text-white hover:bg-white/5"
              }`}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Users
            </Link>

            {/* Coupons List */}
            <Link
              href="/admin/coupons"
              className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 border text-left ${
                pathname === "/admin/coupons"
                  ? "bg-[#ff5f1f]/10 border-[#ff5f1f]/35 text-[#ff5f1f] shadow-md shadow-[#ff5f1f]/5"
                  : "bg-transparent border-transparent text-[#7a6e6a] hover:text-white hover:bg-white/5"
              }`}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5h14a2 2 0 012 2v3a1 1 0 000 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a1 1 0 000-2V7a2 2 0 012-2z" />
              </svg>
              Coupons List
            </Link>
          </nav>
        </div>

        {/* Sidebar Footer (Profile / Return to Store) */}
        <div className="p-4 border-t border-[#2d2422]">
          <div className="flex items-center gap-3 p-2 bg-white/5 rounded-xl border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#ff5f1f] to-[#ffb085] flex items-center justify-center font-bold text-white shadow-md shadow-[#ff5f1f]/20 text-sm">
              MN
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white truncate text-left">Mira Nair</p>
              <p className="text-[10px] text-[#7a6e6a] truncate text-left">Super Admin</p>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-center">
            <Link
              href="/"
              className="text-[10px] text-neutral-400 hover:text-white py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-all"
            >
              Storefront
            </Link>
            <button
              onClick={() => {
                alert("Sign Out simulation: Returning to storefront.");
                window.location.href = "/";
              }}
              className="text-[10px] text-red-400 hover:text-red-300 py-2 rounded-lg border border-red-500/20 hover:bg-red-500/5 transition-all cursor-pointer"
            >
              Log Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Header navbar */}
        <header className="h-20 bg-white border-b border-[#f2e7e3] px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-[#2d2422] capitalize tracking-tight">
              {getPageTitle()}
            </h1>
          </div>

          {/* Quick status bar */}
          <div className="flex items-center gap-6">
            <div className="text-right">
              <span className="text-xs text-[#7a6e6a]">System Status:</span>
              <div className="flex items-center gap-1.5 justify-end">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-emerald-600">Online & Syncing</span>
              </div>
            </div>
            <div className="h-8 w-[1px] bg-[#f2e7e3]"></div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#7a6e6a] hidden sm:inline">Current Local Time:</span>
              <span className="text-xs font-semibold text-[#2d2422] bg-[#ff5f1f]/5 px-3 py-1.5 rounded-lg border border-[#ff5f1f]/10">
                20:15 PM (IST)
              </span>
            </div>
          </div>
        </header>

        {/* Inner Scrollable Canvas */}
        <div className="p-8 max-w-7xl w-full mx-auto space-y-8 flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AdminProvider>
  );
}
