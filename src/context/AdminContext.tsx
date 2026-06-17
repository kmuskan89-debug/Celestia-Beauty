"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ALL_PRODUCTS, Product } from "../data/products";

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  joinedDate: string;
}

export interface Coupon {
  code: string;
  discount: number;
  description: string;
  active: boolean;
  usageCount: number;
}

export interface Order {
  id: string;
  customer: string;
  date: string;
  status: "Delivered" | "Processing" | "Shipped" | "Cancelled";
  items: string;
  amount: number;
}

interface AdminContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  users: AdminUser[];
  setUsers: React.Dispatch<React.SetStateAction<AdminUser[]>>;
  coupons: Coupon[];
  setCoupons: React.Dispatch<React.SetStateAction<Coupon[]>>;
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
  toast: { message: string; type: "success" | "error" | "info" } | null;
  triggerToast: (message: string, type?: "success" | "error" | "info") => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);

  // Initialize state
  useEffect(() => {
    // Check if we already have it in localStorage
    const savedProducts = localStorage.getItem("celestia_admin_products");
    const savedCoupons = localStorage.getItem("celestia_admin_coupons");
    const savedOrders = localStorage.getItem("celestia_admin_orders");

    // Load users from MongoDB
    fetch("/api/admin/users")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setUsers(data);
        }
      })
      .catch((err) => console.error("Error loading users from DB:", err));

    const initialProducts = savedProducts ? JSON.parse(savedProducts) : ALL_PRODUCTS;
    const initialCoupons = savedCoupons
      ? JSON.parse(savedCoupons)
      : [
          { code: "CELESTIA20", discount: 20, description: "20% off on all luxury collections", active: true, usageCount: 142 },
          { code: "FREESHIP", discount: 10, description: "Free shipping + 10% off items", active: true, usageCount: 289 },
          { code: "BEAUTY15", discount: 15, description: "15% off on Makeup and Cosmetics", active: true, usageCount: 84 },
          { code: "WELCOME10", discount: 10, description: "10% off for first-time orders", active: false, usageCount: 450 },
        ];
    const initialOrders = savedOrders
      ? JSON.parse(savedOrders)
      : [
          { id: "ORD-8942", customer: "Kabir Verma", date: "2026-06-13", status: "Delivered", items: "Vinyl Ink Lipstick x2", amount: 2240 },
          { id: "ORD-8941", customer: "Aarav Mehta", date: "2026-06-13", status: "Processing", items: "Sunset Radiance Serum x1", amount: 3840 },
          { id: "ORD-8940", customer: "Riya Sen", date: "2026-06-12", status: "Shipped", items: "Amber Glow Moisturizer x1", amount: 2880 },
          { id: "ORD-8939", customer: "Ananya Roy", date: "2026-06-12", status: "Delivered", items: "Watermelon SPF 50 Gel x2", amount: 3200 },
          { id: "ORD-8938", customer: "Siddharth Rao", date: "2026-06-11", status: "Delivered", items: "Vitamin C+E Glow Cream x1", amount: 1440 },
        ];

    const timer = setTimeout(() => {
      setProducts(initialProducts);
      setCoupons(initialCoupons);
      setOrders(initialOrders);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Sync back to localStorage when states change
  useEffect(() => {
    if (products.length > 0) localStorage.setItem("celestia_admin_products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    if (coupons.length > 0) localStorage.setItem("celestia_admin_coupons", JSON.stringify(coupons));
  }, [coupons]);

  useEffect(() => {
    if (orders.length > 0) localStorage.setItem("celestia_admin_orders", JSON.stringify(orders));
  }, [orders]);

  const triggerToast = (message: string, type: "success" | "error" | "info" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  return (
    <AdminContext.Provider
      value={{
        products,
        setProducts,
        users,
        setUsers,
        coupons,
        setCoupons,
        orders,
        setOrders,
        toast,
        triggerToast,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
}
