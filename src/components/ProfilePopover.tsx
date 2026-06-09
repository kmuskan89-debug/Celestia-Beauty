"use client";

import React from "react";
import Link from "next/link";

interface ProfilePopoverProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClose?: () => void;
}

export default function ProfilePopover({ onMouseEnter, onMouseLeave, onClose }: ProfilePopoverProps) {
  const profileLinks = [
    {
      label: "My Account",
      href: "#account",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      label: "My Orders",
      href: "#orders",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      label: "My Wishlist",
      href: "#wishlist",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      label: "My Reviews",
      href: "#reviews",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.367 1.223.592 1.808l-3.979 2.897a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.978-2.897a1 1 0 00-1.176 0l-3.978 2.897c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.98 9.72c-.775-.585-.37-1.808.591-1.808h4.907a1 1 0 00.95-.69l1.52-4.674z" />
        </svg>
      ),
    },
    {
      label: "Settings",
      href: "#settings",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className="absolute right-0 top-full w-60 mt-3.5 z-50 bg-white/95 backdrop-blur-xl border border-zinc-200 rounded-xl shadow-[0_10px_35px_rgba(255,95,31,0.08)] overflow-hidden text-zinc-800 p-4 flex flex-col gap-3.5"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Popover Header */}
      <div className="flex flex-col gap-0.5">
        <h4 className="font-serif text-sm font-bold text-zinc-900 tracking-wide">
          Welcome to Celestia
        </h4>
        <p className="text-[10px] text-zinc-400">
          Access your personal beauty drawer
        </p>
      </div>

      {/* Login or Register CTA Button */}
      <div className="flex flex-col gap-2">
        <Link
          href="/login"
          onClick={onClose}
          className="w-full text-center bg-orange-500 hover:bg-orange-600 text-white text-[11px] font-bold py-2 rounded-lg transition-colors shadow-sm"
        >
          Login or Register
        </Link>
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-100" />

      {/* Navigation List links */}
      <nav className="flex flex-col gap-0.5">
        {profileLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="flex items-center gap-3 px-2 py-1.5 rounded-lg text-[11px] font-semibold text-zinc-600 hover:bg-zinc-50 hover:text-orange-500 transition-all"
          >
            <span className="text-zinc-400 transition-colors">
              {link.icon}
            </span>
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
