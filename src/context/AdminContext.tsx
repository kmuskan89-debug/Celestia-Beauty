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
    const savedUsers = localStorage.getItem("celestia_admin_users");
    const savedCoupons = localStorage.getItem("celestia_admin_coupons");
    const savedOrders = localStorage.getItem("celestia_admin_orders");

    if (savedProducts) setProducts(JSON.parse(savedProducts));
    else setProducts(ALL_PRODUCTS);

    if (savedUsers) setUsers(JSON.parse(savedUsers));
    else {
      setUsers([
        { id: "1", name: "Mira Nair", email: "mira.nair@celestia.com", role: "Administrator", joinedDate: "2026-02-18" },
        { id: "2", name: "Kabir Verma", email: "kabir.v@gmail.com", role: "Customer", joinedDate: "2026-03-15" },
        { id: "3", name: "Riya Sen", email: "riya.sen@yahoo.com", role: "Vendor", joinedDate: "2026-04-02" },
        { id: "4", name: "Aarav Mehta", email: "aarav.mehta@outlook.com", role: "Customer", joinedDate: "2026-05-20" },
        { id: "5", name: "Alisha Sharma", email: "alisha@celestia.com", role: "Administrator", joinedDate: "2026-01-10" },
      ]);
    }

    if (savedCoupons) setCoupons(JSON.parse(savedCoupons));
    else {
      setCoupons([
        { code: "CELESTIA20", discount: 20, description: "20% off on all luxury collections", active: true, usageCount: 142 },
        { code: "FREESHIP", discount: 10, description: "Free shipping + 10% off items", active: true, usageCount: 289 },
        { code: "BEAUTY15", discount: 15, description: "15% off on Makeup and Cosmetics", active: true, usageCount: 84 },
        { code: "WELCOME10", discount: 10, description: "10% off for first-time orders", active: false, usageCount: 450 },
      ]);
    }

    if (savedOrders) setOrders(JSON.parse(savedOrders));
    else {
      setOrders([
        { id: "ORD-8942", customer: "Kabir Verma", date: "2026-06-13", status: "Delivered", items: "Vinyl Ink Lipstick x2", amount: 2240 },
        { id: "ORD-8941", customer: "Aarav Mehta", date: "2026-06-13", status: "Processing", items: "Sunset Radiance Serum x1", amount: 3840 },
        { id: "ORD-8940", customer: "Riya Sen", date: "2026-06-12", status: "Shipped", items: "Amber Glow Moisturizer x1", amount: 2880 },
        { id: "ORD-8939", customer: "Ananya Roy", date: "2026-06-12", status: "Delivered", items: "Watermelon SPF 50 Gel x2", amount: 3200 },
        { id: "ORD-8938", customer: "Siddharth Rao", date: "2026-06-11", status: "Delivered", items: "Vitamin C+E Glow Cream x1", amount: 1440 },
      ]);
    }
  }, []);

  // Sync back to localStorage when states change
  useEffect(() => {
    if (products.length > 0) localStorage.setItem("celestia_admin_products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    if (users.length > 0) localStorage.setItem("celestia_admin_users", JSON.stringify(users));
  }, [users]);

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
