"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product, e: React.MouseEvent) => void;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
  onBuy: (product: Product, e: React.MouseEvent) => void;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export default function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onBuy,
  href,
  onClick,
}: ProductCardProps) {
  // Consistently calculate discount based on product id
  const discountPercentage = (product.id % 3 === 0) ? 15 : (product.id % 3 === 1) ? 20 : 25;
  
  // Distinguish USD base price from INR base price
  const isINR = product.price > 200;
  const sellingPrice = isINR ? product.price : product.price * 80;
  const originalPrice = Math.round(sellingPrice / (1 - discountPercentage / 100));

  // Determine "New" / "Best Seller" badge
  const showBadge = product.id % 4 === 0 || product.id % 4 === 1;
  const badgeText = product.id % 4 === 0 ? "Best Seller" : "New";

  const targetHref = href || `/product/${product.id}`;

  const [imgSrc, setImgSrc] = useState(product.image || "/product.png");

  useEffect(() => {
    setImgSrc(product.image || "/product.png");
  }, [product.image]);

  return (
    <Link 
      href={targetHref}
      onClick={onClick}
      className="group relative bg-white rounded-[20px] border border-neutral-100 hover:border-orange-100/50 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(255,95,31,0.06)] transition-all duration-300 ease-in-out flex flex-col justify-between overflow-hidden active:scale-[0.99] h-[380px] xs:h-[400px] md:h-[440px] w-full bg-white select-none no-underline text-inherit cursor-pointer"
    >
      
      {/* Product Image Wrapper - Occupies ~60-65% height */}
      <div className="relative w-full h-[235px] xs:h-[250px] md:h-[280px] bg-[#FAF6F5] overflow-hidden flex items-center justify-center">
        <Image
          src={imgSrc}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={() => {
            console.error(`[ProductCard Error] Failed to load image for product #${product.id} ("${product.name}"). Path attempted: "${product.image}". Falling back to placeholder.`);
            setImgSrc("/product.png");
          }}
        />

        {/* Rating Pill Overlay */}
        <div className="absolute bottom-3 left-3 z-10 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1 text-[10px] font-bold text-neutral-800 shadow-sm border border-neutral-100/30">
          <svg
            className="w-3 h-3 text-amber-400 fill-amber-400"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span>{product.rating}</span>
          <span className="text-neutral-400 font-normal">({product.reviews})</span>
        </div>

        {/* Add to Cart Circular Button Overlay */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onAddToCart(product, e);
          }}
          className="absolute bottom-3 right-3 z-10 w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-800 shadow-md hover:bg-neutral-50 hover:scale-105 active:scale-90 transition-all border border-neutral-100/50 cursor-pointer focus:ring-2 focus:ring-[#ff5f1f] focus:outline-none"
          aria-label={`Add ${product.name} to Cart`}
        >
          <svg
            className="w-4 h-4 text-neutral-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>

        {/* Badges: New / Best Seller */}
        {showBadge && (
          <div className="absolute top-3 left-3 z-10 bg-neutral-900/90 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[4px] shadow-sm">
            {badgeText}
          </div>
        )}
      </div>

      {/* Product Details Info */}
      <div className="px-4 pt-3 pb-1 flex flex-col gap-1 flex-grow justify-start">
        {/* Brand */}
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-400 block text-left">
          {product.brand}
        </span>
        {/* Title */}
        <h3 className="text-xs md:text-sm font-bold text-neutral-800 line-clamp-2 h-8 md:h-10 group-hover:text-[#ff5f1f] transition-colors duration-200 leading-snug text-left">
          {product.name}
        </h3>
      </div>

      {/* Footer Area: Price & Full-width CTA */}
      <div className="px-4 pb-4 pt-1 flex flex-col gap-3">
        {/* Price Block */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-sm md:text-base font-extrabold text-neutral-900">
            ₹{sellingPrice.toLocaleString()}
          </span>
          <span className="text-[10px] md:text-xs text-neutral-400 line-through">
            ₹{originalPrice.toLocaleString()}
          </span>
          <span className="text-[9px] md:text-[10px] font-bold text-green-700 bg-green-50 px-1.5 py-0.5 rounded-full">
            {discountPercentage}% OFF
          </span>
        </div>

        {/* Full-width Gradient Buy Now Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onBuy(product, e);
          }}
          className="w-full py-2 md:py-2.5 rounded-full bg-gradient-to-r from-[#ff5f1f] to-[#ff7f50] hover:from-[#e04f16] hover:to-[#e66c3e] text-white font-bold text-xs md:text-sm flex items-center justify-center gap-2 shadow-md shadow-orange-500/10 active:scale-[0.98] transition-all duration-200 cursor-pointer focus:ring-2 focus:ring-[#ff5f1f] focus:ring-offset-2 outline-none"
        >
          <svg
            className="w-3.5 h-3.5 md:w-4 md:h-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span>Buy Now</span>
        </button>
      </div>

      {/* Wishlist Heart Overlay */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          onToggleWishlist(product, e);
        }}
        className="absolute top-3 right-3 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-500 hover:text-red-500 hover:scale-105 active:scale-90 transition-all border border-neutral-100/50 shadow-sm cursor-pointer focus:ring-2 focus:ring-[#ff5f1f] focus:outline-none"
        aria-label={isWishlisted ? `Remove ${product.name} from Wishlist` : `Add ${product.name} to Wishlist`}
      >
        <svg
          className={`w-[18px] h-[18px] transition-colors ${isWishlisted ? "text-red-500 fill-red-500" : "text-neutral-500"}`}
          viewBox="0 0 24 24"
          fill={isWishlisted ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>
    </Link>
  );
}
