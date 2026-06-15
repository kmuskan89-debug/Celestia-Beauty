"use client";

import React, { useState } from "react";
import { useAdmin } from "../../../context/AdminContext";
import { Product } from "../../../data/products";
import Link from "next/link";

export default function AdminProducts() {
  const { products, setProducts, triggerToast } = useAdmin();
  const [productSearch, setProductSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Filtered Products
  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
      p.brand.toLowerCase().includes(productSearch.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || p.category.toLowerCase() === categoryFilter.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  // Delete Product Handler
  const handleDeleteProduct = (id: number, name: string) => {
    if (confirm(`Are you sure you want to delete "${name}"?`)) {
      setProducts(products.filter((p) => p.id !== id));
      triggerToast(`Product "${name}" deleted.`, "info");
    }
  };

  // Save Edit Product Handler
  const handleEditProductSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingProduct) return;

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

    const updated: Product = {
      ...editingProduct,
      name,
      brand,
      category,
      price,
      details,
      image,
      longDescription,
    };

    setProducts(products.map((p) => (p.id === editingProduct.id ? updated : p)));
    triggerToast(`"${name}" updated successfully!`);
    setEditingProduct(null);
  };

  return (
    <div className="space-y-6">
      {/* Filters & Actions Panel */}
      <div className="bg-white p-5 rounded-2xl border border-[#f2e7e3] shadow-md shadow-[#ff5f1f]/2 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search & Category filter */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto items-stretch">
          <div className="relative w-full sm:w-auto">
            <span className="absolute inset-y-0 left-3 flex items-center text-[#7a6e6a] pointer-events-none">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search name or brand..."
              value={productSearch}
              onChange={(e) => setProductSearch(e.target.value)}
              className="pl-9 pr-4 py-2.5 rounded-xl border border-[#f2e7e3] text-sm text-[#2d2422] bg-[#FAF6F5] placeholder-[#7a6e6a] focus:outline-none focus:border-[#ff5f1f] w-full sm:w-64 transition-all text-left"
            />
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-[#f2e7e3] text-sm text-[#2d2422] bg-[#FAF6F5] focus:outline-none focus:border-[#ff5f1f] transition-all cursor-pointer text-left"
          >
            <option value="All">All Categories</option>
            <option value="Makeup">Makeup</option>
            <option value="Skin">Skincare</option>
            <option value="Hair">Haircare</option>
            <option value="Bath & Body">Bath & Body</option>
            <option value="Fragrance">Fragrance</option>
          </select>
        </div>

        <div className="flex gap-3 w-full sm:w-auto items-stretch sm:items-center justify-between sm:justify-end">
          <span className="text-xs text-[#7a6e6a] py-2">
            Showing <strong>{filteredProducts.length}</strong> products
          </span>
          <Link
            href="/admin/add-product"
            className="px-5 py-2.5 bg-[#ff5f1f] hover:bg-[#c2410c] text-white text-sm font-semibold rounded-xl transition-all shadow-md shadow-[#ff5f1f]/20 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Create Product
          </Link>
        </div>
      </div>

      {/* Products Table Card */}
      <div className="bg-white rounded-2xl border border-[#f2e7e3] shadow-md shadow-[#ff5f1f]/2 overflow-hidden text-left">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-[#FAF6F5] text-[#7a6e6a] text-xs font-semibold uppercase border-b border-[#f2e7e3]">
                <th className="p-4 pl-6">ID</th>
                <th className="p-4">Image</th>
                <th className="p-4">Product Info</th>
                <th className="p-4">Brand</th>
                <th className="p-4">Category</th>
                <th className="p-4">Base Price</th>
                <th className="p-4">INR Price</th>
                <th className="p-4">Rating</th>
                <th className="p-4 pr-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f2e7e3]">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={9} className="p-12 text-center text-sm text-[#7a6e6a]">
                    No products matched your search settings.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((p) => (
                  <tr key={p.id} className="hover:bg-neutral-50/50 transition-colors align-middle">
                    <td className="p-4 pl-6 font-semibold text-neutral-400">{p.id}</td>
                    <td className="p-4 shrink-0">
                      <div className="relative w-12 h-12 rounded-lg border border-[#f2e7e3] overflow-hidden bg-neutral-100 flex items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.image}
                          alt={p.name}
                          className="object-cover w-full h-full"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=100&auto=format&fit=crop";
                          }}
                        />
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-[#2d2422] max-w-[220px]">
                      <p className="truncate text-sm" title={p.name}>{p.name}</p>
                      <p className="text-[10px] text-[#7a6e6a] font-normal truncate max-w-[190px]">
                        {p.details}
                      </p>
                    </td>
                    <td className="p-4 text-[#7a6e6a] font-medium">{p.brand}</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#ffb085]/10 text-[#c2410c] border border-[#ffb085]/20">
                        {p.category}
                      </span>
                    </td>
                    <td className="p-4 font-semibold text-[#2d2422]">${p.price}</td>
                    <td className="p-4 font-semibold text-[#ff5f1f]">₹{(p.price * 80).toLocaleString()}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-[#2d2422]">{p.rating}</span>
                        <svg className="w-3.5 h-3.5 text-[#ff5f1f] fill-[#ff5f1f]" fill="currentColor" viewBox="0 0 24 24">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <span className="text-[10.5px] text-[#7a6e6a]">({p.reviews})</span>
                      </div>
                    </td>
                    <td className="p-4 pr-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => setEditingProduct(p)}
                          className="p-2 text-neutral-400 hover:text-[#ff5f1f] hover:bg-[#ff5f1f]/5 rounded-lg border border-transparent hover:border-[#ff5f1f]/10 transition-all cursor-pointer"
                          title="Edit Product"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(p.id, p.name)}
                          className="p-2 text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg border border-transparent hover:border-red-200 transition-all cursor-pointer"
                          title="Delete Product"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* EDIT PRODUCT MODAL */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl border border-[#f2e7e3] shadow-2xl max-w-lg w-full overflow-hidden animate-fade-in my-8 text-left">
            <div className="p-6 border-b border-[#f2e7e3] flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-[#2d2422]">Edit Product Details</h3>
                <p className="text-xs text-[#7a6e6a]">Update live SKU parameters for ID #{editingProduct.id}</p>
              </div>
              <button
                onClick={() => setEditingProduct(null)}
                className="p-1.5 text-[#7a6e6a] hover:text-black hover:bg-neutral-100 rounded-lg transition-all cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleEditProductSubmit} className="p-6 space-y-4">
              <div className="space-y-1 flex flex-col align-start">
                <label className="text-[10px] font-bold text-[#7a6e6a] uppercase">Product Name *</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={editingProduct.name}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#f2e7e3] text-sm text-[#2d2422] focus:outline-none focus:border-[#ff5f1f] bg-[#FAF6F5]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1 flex flex-col align-start">
                  <label className="text-[10px] font-bold text-[#7a6e6a] uppercase">Brand *</label>
                  <input
                    type="text"
                    name="brand"
                    defaultValue={editingProduct.brand}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#f2e7e3] text-sm text-[#2d2422] focus:outline-none focus:border-[#ff5f1f] bg-[#FAF6F5]"
                    required
                  />
                </div>
                <div className="space-y-1 flex flex-col align-start">
                  <label className="text-[10px] font-bold text-[#7a6e6a] uppercase">Category *</label>
                  <select
                    name="category"
                    defaultValue={editingProduct.category}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#f2e7e3] text-sm text-[#2d2422] focus:outline-none focus:border-[#ff5f1f] bg-[#FAF6F5] cursor-pointer text-left"
                    required
                  >
                    <option value="Makeup">Makeup</option>
                    <option value="Skin">Skincare</option>
                    <option value="Hair">Haircare</option>
                    <option value="Bath & Body">Bath & Body</option>
                    <option value="Fragrance">Fragrance</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1 flex flex-col align-start">
                <label className="text-[10px] font-bold text-[#7a6e6a] uppercase">Base Price (USD $) *</label>
                <input
                  type="number"
                  name="price"
                  step="0.01"
                  defaultValue={editingProduct.price}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#f2e7e3] text-sm text-[#2d2422] focus:outline-none focus:border-[#ff5f1f] bg-[#FAF6F5]"
                  required
                />
              </div>

              <div className="space-y-1 flex flex-col align-start">
                <label className="text-[10px] font-bold text-[#7a6e6a] uppercase">Image URL *</label>
                <input
                  type="url"
                  name="image"
                  defaultValue={editingProduct.image}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#f2e7e3] text-sm text-[#2d2422] focus:outline-none focus:border-[#ff5f1f] bg-[#FAF6F5]"
                  required
                />
              </div>

              <div className="space-y-1 flex flex-col align-start">
                <label className="text-[10px] font-bold text-[#7a6e6a] uppercase">Summary Details</label>
                <input
                  type="text"
                  name="details"
                  defaultValue={editingProduct.details}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#f2e7e3] text-sm text-[#2d2422] focus:outline-none focus:border-[#ff5f1f] bg-[#FAF6F5]"
                />
              </div>

              <div className="space-y-1 flex flex-col align-start">
                <label className="text-[10px] font-bold text-[#7a6e6a] uppercase">Long Description</label>
                <textarea
                  name="longDescription"
                  rows={3}
                  defaultValue={editingProduct.longDescription}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#f2e7e3] text-sm text-[#2d2422] focus:outline-none focus:border-[#ff5f1f] bg-[#FAF6F5] resize-y w-full"
                ></textarea>
              </div>

              <div className="pt-3 border-t border-[#f2e7e3] flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="px-4 py-2 rounded-xl border border-[#f2e7e3] text-sm font-semibold text-[#7a6e6a] hover:bg-[#FAF6F5] transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#ff5f1f] hover:bg-[#c2410c] text-white text-sm font-semibold rounded-xl transition-all shadow-md shadow-[#ff5f1f]/10 cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
