import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[450px] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen Background Image */}
      <Image
        src="/hero.png"
        alt="Celestia Premium Cosmetics background"
        className="object-cover"
        fill
        priority
        sizes="100vw"
      />
      
      {/* Absolute Light Overlay (bg-white/45) */}
      <div className="absolute inset-0 bg-white/45 z-10" />

      {/* Centered Content */}
      <div className="relative z-20 max-w-3xl px-6 text-center text-zinc-900 flex flex-col gap-4 md:gap-5">
        <span className="text-orange-600 font-bold uppercase tracking-widest text-xs md:text-sm">
          Clean & Conscious Beauty
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight font-serif">
          Reveal Your Natural Radiance
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-zinc-700 max-w-xl mx-auto leading-relaxed">
          Discover Celestia&apos;s curated collections of premium organic cosmetics, luxury skincare essentials, and captivating fragrances. Handcrafted for your ultimate glow.
        </p>
      </div>
    </section>
  );
}
