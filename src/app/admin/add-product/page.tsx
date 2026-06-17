"use client";

import React, { useState } from "react";
import { useAdmin } from "../../../context/AdminContext";
import { Product } from "../../../data/products";
import { useRouter } from "next/navigation";

export default function AdminAddProduct() {
  const { products, setProducts, triggerToast } = useAdmin();
  const router = useRouter();

  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to upload image");
      }
      setImageUrl(data.secure_url);
      triggerToast("Image uploaded successfully to Cloudinary!");
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Failed to upload image.";
      console.error(err);
      triggerToast(errorMsg, "error");
    } finally {
      setUploading(false);
    }
  };

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
    setImageUrl("");
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

        <div className="space-y-2 flex flex-col align-start">
          <label className="text-xs font-bold text-[#7a6e6a] uppercase">Product Image *</label>
          <input type="hidden" name="image" value={imageUrl} />
          
          <div className="w-full">
            {imageUrl ? (
              <div className="relative border border-[#f2e7e3] rounded-2xl overflow-hidden w-full max-w-sm h-48 bg-neutral-50 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imageUrl} alt="Uploaded product" className="object-cover w-full h-full" />
                <button
                  type="button"
                  onClick={() => setImageUrl("")}
                  className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 transition-all cursor-pointer shadow-md"
                  title="Remove Image"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              <div className="relative w-full max-w-sm">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="cloudinary-image-upload"
                  disabled={uploading}
                />
                <label
                  htmlFor="cloudinary-image-upload"
                  className={`border-2 border-dashed border-[#f2e7e3] hover:border-[#ff5f1f] rounded-2xl p-8 flex flex-col items-center justify-center gap-3 bg-[#FAF6F5] hover:bg-[#ff5f1f]/2 cursor-pointer transition-all w-full text-center ${
                    uploading ? "opacity-50 pointer-events-none" : ""
                  }`}
                >
                  {uploading ? (
                    <>
                      <svg className="animate-spin h-8 w-8 text-[#ff5f1f]" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span className="text-sm font-semibold text-[#ff5f1f]">Uploading to Cloudinary...</span>
                    </>
                  ) : (
                    <>
                      <div className="w-12 h-12 rounded-xl bg-[#ff5f1f]/10 flex items-center justify-center text-[#ff5f1f]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-[#2d2422]">Upload Product Image</p>
                        <p className="text-[10px] text-[#7a6e6a]">Select a file from your computer</p>
                      </div>
                    </>
                  )}
                </label>
              </div>
            )}
          </div>
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
