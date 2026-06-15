"use client";

import React, { useState } from "react";
import { useAdmin } from "../../context/AdminContext";

export default function AdminDashboard() {
  const { products, users, coupons, orders } = useAdmin();
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // KPI calculations
  const totalRevenue = orders.reduce((acc, order) => acc + order.amount, 0);
  const activeCoupons = coupons.filter((c) => c.active).length;

  // Chart Mock Data details
  const chartDataPoints = [
    { month: "Jan", sales: 32000, orders: 184 },
    { month: "Feb", sales: 45000, orders: 242 },
    { month: "Mar", sales: 38000, orders: 198 },
    { month: "Apr", sales: 64000, orders: 380 },
    { month: "May", sales: 78000, orders: 490 },
    { month: "Jun", sales: 95000, orders: 612 },
    { month: "Jul", sales: 112000, orders: 745 },
  ];

  // SVG dimensions & drawing constants
  const chartWidth = 600;
  const chartHeight = 220;
  const paddingX = 50;
  const paddingY = 30;

  // Compute SVG line points
  const points = chartDataPoints.map((dp, index) => {
    const x = paddingX + (index / (chartDataPoints.length - 1)) * (chartWidth - paddingX * 2);
    // Max sales is 120,000 for scaling
    const maxVal = 120000;
    const y = chartHeight - paddingY - (dp.sales / maxVal) * (chartHeight - paddingY * 2);
    return { x, y, val: dp.sales, ...dp };
  });

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${chartHeight - paddingY} L ${points[0].x} ${chartHeight - paddingY} Z`;

  return (
    <div className="space-y-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Revenue Card */}
        <div className="bg-white p-6 rounded-2xl border border-[#f2e7e3] shadow-md shadow-[#ff5f1f]/2 flex items-center justify-between hover:translate-y-[-2px] transition-all duration-300">
          <div className="space-y-1 flex flex-col align-start">
            <span className="text-xs font-medium text-[#7a6e6a] uppercase tracking-wider">Gross Sales</span>
            <h3 className="text-2xl font-bold text-[#2d2422] text-left">₹{totalRevenue.toLocaleString()}</h3>
            <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold w-fit">
              +14.2% MoM
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#ff5f1f]/10 flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-[#ff5f1f]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        {/* Products Count Card */}
        <div className="bg-white p-6 rounded-2xl border border-[#f2e7e3] shadow-md shadow-[#ff5f1f]/2 flex items-center justify-between hover:translate-y-[-2px] transition-all duration-300">
          <div className="space-y-1 flex flex-col align-start">
            <span className="text-xs font-medium text-[#7a6e6a] uppercase tracking-wider">Total Products</span>
            <h3 className="text-2xl font-bold text-[#2d2422] text-left">{products.length}</h3>
            <span className="text-[10px] text-[#ff5f1f] bg-[#ff5f1f]/5 px-2 py-0.5 rounded-full font-semibold w-fit">
              Live Catalog
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#ff5f1f]/10 flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-[#ff5f1f]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
        </div>

        {/* Users Count Card */}
        <div className="bg-white p-6 rounded-2xl border border-[#f2e7e3] shadow-md shadow-[#ff5f1f]/2 flex items-center justify-between hover:translate-y-[-2px] transition-all duration-300">
          <div className="space-y-1 flex flex-col align-start">
            <span className="text-xs font-medium text-[#7a6e6a] uppercase tracking-wider">Total Users</span>
            <h3 className="text-2xl font-bold text-[#2d2422] text-left">{users.length}</h3>
            <span className="text-[10px] text-[#ff5f1f] bg-[#ff5f1f]/5 px-2 py-0.5 rounded-full font-semibold w-fit">
              5 Active Staff
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#ff5f1f]/10 flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-[#ff5f1f]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>

        {/* Coupons Count Card */}
        <div className="bg-white p-6 rounded-2xl border border-[#f2e7e3] shadow-md shadow-[#ff5f1f]/2 flex items-center justify-between hover:translate-y-[-2px] transition-all duration-300">
          <div className="space-y-1 flex flex-col align-start">
            <span className="text-xs font-medium text-[#7a6e6a] uppercase tracking-wider">Active Coupons</span>
            <h3 className="text-2xl font-bold text-[#2d2422] text-left">{activeCoupons} / {coupons.length}</h3>
            <span className="text-[10px] text-[#7a6e6a] bg-neutral-100 px-2 py-0.5 rounded-full font-semibold w-fit">
              Promo Codes
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#ff5f1f]/10 flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-[#ff5f1f]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M6 20l6.5-6.5A2.5 2.5 0 0012 10a2.5 2.5 0 00-3.5 0L2 16.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Chart & Recent Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart Section */}
        <div className="bg-white p-6 rounded-2xl border border-[#f2e7e3] shadow-md shadow-[#ff5f1f]/2 lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-left">
              <h3 className="text-base font-bold text-[#2d2422]">Sales Analytics</h3>
              <p className="text-xs text-[#7a6e6a]">Simulated monthly revenue growth trend</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium text-[#7a6e6a]">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f1f]"></span>
                <span>Revenue (INR)</span>
              </div>
            </div>
          </div>

          {/* SVG Chart Drawing */}
          <div className="relative">
            <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-auto overflow-visible">
              <defs>
                {/* Area gradient */}
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ff5f1f" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#ff5f1f" stopOpacity="0.00" />
                </linearGradient>
              </defs>

              {/* Dotted Grid lines */}
              <line x1={paddingX} y1={paddingY} x2={chartWidth - paddingX} y2={paddingY} stroke="#f5ece8" strokeDasharray="4 4" />
              <line x1={paddingX} y1={(chartHeight - paddingY * 2) / 2 + paddingY} x2={chartWidth - paddingX} y2={(chartHeight - paddingY * 2) / 2 + paddingY} stroke="#f5ece8" strokeDasharray="4 4" />
              <line x1={paddingX} y1={chartHeight - paddingY} x2={chartWidth - paddingX} y2={chartHeight - paddingY} stroke="#f5ece8" />

              {/* Axis Labels */}
              <text x={paddingX - 10} y={paddingY + 4} textAnchor="end" fill="#7a6e6a" fontSize="10">120K</text>
              <text x={paddingX - 10} y={(chartHeight - paddingY * 2) / 2 + paddingY + 4} textAnchor="end" fill="#7a6e6a" fontSize="10">60K</text>
              <text x={paddingX - 10} y={chartHeight - paddingY + 4} textAnchor="end" fill="#7a6e6a" fontSize="10">0K</text>

              {/* Fill Area */}
              <path d={areaPath} fill="url(#chartGradient)" />

              {/* Line Path */}
              <path d={linePath} fill="none" stroke="#ff5f1f" strokeWidth="3.5" strokeLinecap="round" />

              {/* Circles on Points */}
              {points.map((p, index) => (
                <circle
                  key={index}
                  cx={p.x}
                  cy={p.y}
                  r={hoveredPoint === index ? 7 : 4.5}
                  className="transition-all duration-150 cursor-pointer"
                  fill={hoveredPoint === index ? "#fff" : "#ff5f1f"}
                  stroke="#ff5f1f"
                  strokeWidth={hoveredPoint === index ? 3.5 : 2}
                  onMouseEnter={() => setHoveredPoint(index)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
              ))}

              {/* X-Axis Labels */}
              {points.map((p, index) => (
                <text
                  key={index}
                  x={p.x}
                  y={chartHeight - paddingY + 18}
                  textAnchor="middle"
                  fill="#7a6e6a"
                  fontSize="10.5"
                  fontWeight="500"
                >
                  {p.month}
                </text>
              ))}
            </svg>

            {/* Chart Interactive Tooltip */}
            {hoveredPoint !== null && (
              <div
                className="absolute bg-[#1e1716] border border-[#ff5f1f]/20 text-white rounded-lg p-3 shadow-xl pointer-events-none text-xs space-y-1 transition-all duration-150 text-left"
                style={{
                  left: `${(points[hoveredPoint].x / chartWidth) * 100}%`,
                  top: `${(points[hoveredPoint].y / chartHeight) * 100 - 30}%`,
                  transform: "translate(-50%, -100%)",
                }}
              >
                <p className="font-bold text-[#ffb085]">{chartDataPoints[hoveredPoint].month} 2026</p>
                <p className="font-medium">Revenue: ₹{chartDataPoints[hoveredPoint].sales.toLocaleString()}</p>
                <p className="text-[10px] text-neutral-400">Orders: {chartDataPoints[hoveredPoint].orders} orders</p>
              </div>
            )}
          </div>
        </div>

        {/* System Activity Logs */}
        <div className="bg-white p-6 rounded-2xl border border-[#f2e7e3] shadow-md shadow-[#ff5f1f]/2 space-y-5 text-left">
          <h3 className="text-base font-bold text-[#2d2422]">System Activity</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-xs">
              <span className="w-2.5 h-2.5 mt-1.5 rounded-full bg-[#ff5f1f] shrink-0"></span>
              <div className="space-y-0.5">
                <p className="text-[#2d2422] font-semibold">Product inventory updated</p>
                <p className="text-[#7a6e6a]">Superstay Vinyl Ink stock levels refilled (+50 items)</p>
                <span className="text-[10px] text-neutral-400">12 mins ago</span>
              </div>
            </div>
            <div className="flex items-start gap-3 text-xs">
              <span className="w-2.5 h-2.5 mt-1.5 rounded-full bg-amber-500 shrink-0"></span>
              <div className="space-y-0.5">
                <p className="text-[#2d2422] font-semibold">New promo coupon generated</p>
                <p className="text-[#7a6e6a]">Created code CELESTIA20 (20% off campaign)</p>
                <span className="text-[10px] text-neutral-400">2 hours ago</span>
              </div>
            </div>
            <div className="flex items-start gap-3 text-xs">
              <span className="w-2.5 h-2.5 mt-1.5 rounded-full bg-emerald-500 shrink-0"></span>
              <div className="space-y-0.5">
                <p className="text-[#2d2422] font-semibold">User Access Granted</p>
                <p className="text-[#7a6e6a]">Staff member Mira Nair promoted to Administrator role</p>
                <span className="text-[10px] text-neutral-400">Yesterday</span>
              </div>
            </div>
            <div className="flex items-start gap-3 text-xs">
              <span className="w-2.5 h-2.5 mt-1.5 rounded-full bg-blue-500 shrink-0"></span>
              <div className="space-y-0.5">
                <p className="text-[#2d2422] font-semibold">System Database Synced</p>
                <p className="text-[#7a6e6a]">Local storage data backup succeeded</p>
                <span className="text-[10px] text-neutral-400">Yesterday</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders Log Table */}
      <div className="bg-white rounded-2xl border border-[#f2e7e3] shadow-md shadow-[#ff5f1f]/2 overflow-hidden text-left">
        <div className="p-6 border-b border-[#f2e7e3]">
          <h3 className="text-base font-bold text-[#2d2422]">Recent E-Commerce Orders</h3>
          <p className="text-xs text-[#7a6e6a]">List of live transactions generated today</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-[#FAF6F5] text-[#7a6e6a] text-xs font-semibold uppercase border-b border-[#f2e7e3]">
                <th className="p-4 pl-6">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Purchased Items</th>
                <th className="p-4">Total Price</th>
                <th className="p-4">Order Date</th>
                <th className="p-4 pr-6 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f2e7e3]">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-neutral-50/50 transition-colors">
                  <td className="p-4 pl-6 font-semibold text-[#c2410c]">{order.id}</td>
                  <td className="p-4 font-medium text-[#2d2422]">{order.customer}</td>
                  <td className="p-4 text-[#7a6e6a] truncate max-w-[200px]">{order.items}</td>
                  <td className="p-4 font-semibold text-[#2d2422]">₹{order.amount.toLocaleString()}</td>
                  <td className="p-4 text-xs text-[#7a6e6a]">{order.date}</td>
                  <td className="p-4 pr-6 text-center">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                        order.status === "Delivered"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : order.status === "Processing"
                          ? "bg-amber-50 text-amber-700 border border-amber-200"
                          : "bg-blue-50 text-blue-700 border border-blue-200"
                      }`}
                    >
                      {order.status}
                    </span>
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
