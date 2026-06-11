import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full px-[50px] pt-6 pb-2">
      <div 
        className="relative w-full overflow-hidden rounded-2xl shadow-sm"
        style={{ aspectRatio: "3694 / 1152" }}
      >
        <Image
          src="/hero.png"
          alt="Celestia Premium Cosmetics"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
