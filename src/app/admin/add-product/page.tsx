"use client";

import React from "react";
import { useAdmin } from "../../../context/AdminContext";
import { Product } from "../../../data/products";
import { useRouter } from "next/navigation";

export default function AdminAddProduct() {
  const { products, setProducts, triggerToast } = useAdmin();
  const router = useRouter();

  // Add Product Form Handlers
  const handleAddProductSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const brand = formData.get("brand") as string;
    const category = formData.get("category") as string;
    const priceStr = formData.get("price") as string;
    const details = formData.get("details") as string;
    const image = formData.get("image") as string;
    const longDescription = formData.get("longDescription") as string;

    if (!name || !brand || !category || !priceStr) {
      triggerToast("Please fill in all required fields.", "error");
      return;
    }

    const price = parseFloat(priceStr);
    if (isNaN(price) || price <= 0) {
      triggerToast("Price must be a valid positive number.", "error");
      return;
    }

    const newProduct: Product = {
      id: products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1,
      name,
      brand,
      category,
      price,
      rating: 5,
      reviews: 0,
      details,
      image: image || "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=300&auto=format&fit=crop",
      longDescription,
    };

    setProducts([newProduct, ...products]);
    triggerToast(`"${name}" has been successfully added to products!`);
    e.currentTarget.reset();
    router.push("/admin/products");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#f2e7e3] shadow-md shadow-[#ff5f1f]/2 p-8 space-y-6 text-left">
      <div>
        <h3 className="text-base font-bold text-[#2d2422]">Product Inventory Fields</h3>
        <p className="text-xs text-[#7a6e6a]">Fill in this form to create a new cosmetics product listing.</p>
      </div>

      <form onSubmit={handleAddProductSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5 flex flex-col align-start">
            <label className="text-xs font-bold text-[#7a6e6a] uppercase">Product Name *</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Amber Infused Facial Serum"
              className="w-full px-4 py-2.5 rounded-xl border border-[#f2e7e3] text-sm text-[#2d2422] focus:outline-none focus:border-[#ff5f1f] bg-[#FAF6F5] transition-all"
              required
            />
          </div>

          <div className="space-y-1.5 flex flex-col align-start">
            <label className="text-xs font-bold text-[#7a6e6a] uppercase">Brand Name *</label>
            <input
              type="text"
              name="brand"
              placeholder="e.g. Celestia Lab"
              className="w-full px-4 py-2.5 rounded-xl border border-[#f2e7e3] text-sm text-[#2d2422] focus:outline-none focus:border-[#ff5f1f] bg-[#FAF6F5] transition-all"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5 flex flex-col align-start">
            <label className="text-xs font-bold text-[#7a6e6a] uppercase">Category *</label>
            <select
              name="category"
              className="w-full px-4 py-2.5 rounded-xl border border-[#f2e7e3] text-sm text-[#2d2422] focus:outline-none focus:border-[#ff5f1f] bg-[#FAF6F5] transition-all cursor-pointer text-left"
              required
            >
              <option value="">Select Category</option>
              <option value="Makeup">Makeup</option>
              <option value="Skin">Skincare</option>
              <option value="Hair">Haircare</option>
              <option value="Bath & Body">Bath & Body</option>
              <option value="Fragrance">Fragrance</option>
            </select>
          </div>

          <div className="space-y-1.5 flex flex-col align-start">
            <label className="text-xs font-bold text-[#7a6e6a] uppercase">Base Price (USD $) *</label>
            <input
              type="number"
              name="price"
              step="0.01"
              placeholder="e.g. 29.99"
              className="w-full px-4 py-2.5 rounded-xl border border-[#f2e7e3] text-sm text-[#2d2422] focus:outline-none focus:border-[#ff5f1f] bg-[#FAF6F5] transition-all"
              required
            />
          </div>
        </div>

        <div className="space-y-1.5 flex flex-col align-start">
          <label className="text-xs font-bold text-[#7a6e6a] uppercase">Product Image URL</label>
          <input
            type="url"
            name="image"
            placeholder="https://example.com/product-image.jpg"
            className="w-full px-4 py-2.5 rounded-xl border border-[#f2e7e3] text-sm text-[#2d2422] focus:outline-none focus:border-[#ff5f1f] bg-[#FAF6F5] transition-all"
          />
          <p className="text-[10px] text-[#7a6e6a]">Leave blank to auto-assign a professional generic placeholder image.</p>
        </div>

        <div className="space-y-1.5 flex flex-col align-start">
          <label className="text-xs font-bold text-[#7a6e6a] uppercase">Short Details Summary</label>
          <input
            type="text"
            name="details"
            placeholder="e.g. Restoring moisturizing gel for radiant skin glows."
            className="w-full px-4 py-2.5 rounded-xl border border-[#f2e7e3] text-sm text-[#2d2422] focus:outline-none focus:border-[#ff5f1f] bg-[#FAF6F5] transition-all"
          />
        </div>

        <div className="space-y-1.5 flex flex-col align-start">
          <label className="text-xs font-bold text-[#7a6e6a] uppercase">Long Description</label>
          <textarea
            name="longDescription"
            rows={4}
            placeholder="Provide a detailed writeup of ingredients, directions, and product benefits..."
            className="w-full px-4 py-2.5 rounded-xl border border-[#f2e7e3] text-sm text-[#2d2422] focus:outline-none focus:border-[#ff5f1f] bg-[#FAF6F5] transition-all resize-y w-full"
          ></textarea>
        </div>

        <div className="pt-2 border-t border-[#f2e7e3] flex gap-4 justify-end">
          <button
            type="button"
            onClick={() => router.push("/admin/products")}
            className="px-5 py-2.5 rounded-xl border border-[#f2e7e3] text-sm font-semibold text-[#7a6e6a] hover:bg-[#FAF6F5] transition-all cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 bg-[#ff5f1f] hover:bg-[#c2410c] text-white text-sm font-semibold rounded-xl transition-all shadow-md shadow-[#ff5f1f]/20 cursor-pointer"
          >
            Create Product & Publish
          </button>
        </div>
      </form>
    </div>
  );
}
