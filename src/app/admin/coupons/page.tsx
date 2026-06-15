"use client";

import React from "react";
import { useAdmin, Coupon } from "../../../context/AdminContext";

export default function AdminCoupons() {
  const { coupons, setCoupons, triggerToast } = useAdmin();

  // Toggle Coupon Active Status
  const handleToggleCoupon = (code: string) => {
    setCoupons(
      coupons.map((c) => (c.code === code ? { ...c, active: !c.active } : c))
    );
    const coupon = coupons.find((c) => c.code === code);
    triggerToast(`Coupon ${code} is now ${coupon?.active ? "Inactive" : "Active"}.`, "info");
  };

  // Delete Coupon
  const handleDeleteCoupon = (code: string) => {
    if (confirm(`Delete coupon code "${code}"?`)) {
      setCoupons(coupons.filter((c) => c.code !== code));
      triggerToast(`Coupon "${code}" deleted.`, "info");
    }
  };

  // Add Coupon Form Submit
  const handleAddCouponSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const code = (formData.get("code") as string).toUpperCase().replace(/\s+/g, "");
    const discountStr = formData.get("discount") as string;
    const description = formData.get("description") as string;

    if (!code || !discountStr || !description) {
      triggerToast("Please fill in all coupon fields.", "error");
      return;
    }

    const discount = parseInt(discountStr);
    if (isNaN(discount) || discount < 1 || discount > 100) {
      triggerToast("Discount must be between 1% and 100%.", "error");
      return;
    }

    if (coupons.some((c) => c.code === code)) {
      triggerToast(`Coupon code "${code}" already exists.`, "error");
      return;
    }

    const newCoupon: Coupon = {
      code,
      discount,
      description,
      active: true,
      usageCount: 0,
    };

    setCoupons([...coupons, newCoupon]);
    triggerToast(`Coupon code "${code}" created successfully!`);
    e.currentTarget.reset();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column: Create Coupon Form */}
      <div className="bg-white rounded-2xl border border-[#f2e7e3] shadow-md shadow-[#ff5f1f]/2 p-6 h-fit space-y-5 text-left">
        <div>
          <h3 className="text-base font-bold text-[#2d2422]">Generate Promo Code</h3>
          <p className="text-xs text-[#7a6e6a]">Create a new active store coupon code discount.</p>
        </div>

        <form onSubmit={handleAddCouponSubmit} className="space-y-4">
          <div className="space-y-1 flex flex-col align-start">
            <label className="text-[10px] font-bold text-[#7a6e6a] uppercase">Coupon Code *</label>
            <input
              type="text"
              name="code"
              placeholder="e.g. BEAUTYGLOW25"
              className="w-full px-4 py-2.5 rounded-xl border border-[#f2e7e3] text-sm font-semibold text-[#2d2422] uppercase focus:outline-none focus:border-[#ff5f1f] bg-[#FAF6F5] transition-all"
              required
            />
          </div>

          <div className="space-y-1 flex flex-col align-start">
            <label className="text-[10px] font-bold text-[#7a6e6a] uppercase">Discount Percentage *</label>
            <input
              type="number"
              name="discount"
              min="1"
              max="100"
              placeholder="e.g. 25"
              className="w-full px-4 py-2.5 rounded-xl border border-[#f2e7e3] text-sm text-[#2d2422] focus:outline-none focus:border-[#ff5f1f] bg-[#FAF6F5] transition-all"
              required
            />
          </div>

          <div className="space-y-1 flex flex-col align-start">
            <label className="text-[10px] font-bold text-[#7a6e6a] uppercase">Description *</label>
            <input
              type="text"
              name="description"
              placeholder="e.g. 25% off during monsoon sales"
              className="w-full px-4 py-2.5 rounded-xl border border-[#f2e7e3] text-sm text-[#2d2422] focus:outline-none focus:border-[#ff5f1f] bg-[#FAF6F5] transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3 bg-[#ff5f1f] hover:bg-[#c2410c] text-white text-sm font-semibold rounded-xl transition-all shadow-md shadow-[#ff5f1f]/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            Create Coupon
          </button>
        </form>
      </div>

      {/* Right Columns: Coupons Table */}
      <div className="lg:col-span-2 bg-white rounded-2xl border border-[#f2e7e3] shadow-md shadow-[#ff5f1f]/2 overflow-hidden text-left">
        <div className="p-6 border-b border-[#f2e7e3]">
          <h3 className="text-base font-bold text-[#2d2422]">Active Promotional Codes</h3>
          <p className="text-xs text-[#7a6e6a]">List of discount coupons active on checkout validation</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-[#FAF6F5] text-[#7a6e6a] text-xs font-semibold uppercase border-b border-[#f2e7e3]">
                <th className="p-4 pl-6">Code</th>
                <th className="p-4">Discount</th>
                <th className="p-4">Campaign Description</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-center">Redeems</th>
                <th className="p-4 pr-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f2e7e3]">
              {coupons.map((coupon) => (
                <tr key={coupon.code} className="hover:bg-neutral-50/50 transition-colors align-middle">
                  <td className="p-4 pl-6 font-mono font-bold text-[#c2410c]">{coupon.code}</td>
                  <td className="p-4 font-bold text-emerald-600">{coupon.discount}% Off</td>
                  <td className="p-4 text-xs text-[#7a6e6a] font-medium max-w-[170px] truncate" title={coupon.description}>
                    {coupon.description}
                  </td>
                  <td className="p-4 text-center">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                        coupon.active
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-red-50 text-red-700 border border-red-200"
                      }`}
                    >
                      {coupon.active ? "Active" : "Disabled"}
                    </span>
                  </td>
                  <td className="p-4 text-center font-semibold text-neutral-600 text-xs">{coupon.usageCount}</td>
                  <td className="p-4 pr-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleToggleCoupon(coupon.code)}
                        className={`px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                          coupon.active
                            ? "border-red-200 text-red-600 hover:bg-red-50"
                            : "border-[#f2e7e3] text-emerald-600 hover:bg-[#ffb085]/5"
                        }`}
                      >
                        {coupon.active ? "Deactivate" : "Activate"}
                      </button>
                      <button
                        onClick={() => handleDeleteCoupon(coupon.code)}
                        className="p-2 text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg border border-transparent hover:border-red-200 transition-all cursor-pointer"
                        title="Delete Coupon"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
