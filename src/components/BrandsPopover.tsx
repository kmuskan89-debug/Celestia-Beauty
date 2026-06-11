"use client";

import React, { useState, useMemo } from "react";

interface BrandsPopoverProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const TABS = [
  { id: "popular", label: "Popular" },
  { id: "luxe", label: "Luxe" },
  { id: "exclusive", label: "Only at Celestia" },
  { id: "new", label: "New Launches" },
] as const;

const ALL_BRANDS = [
  "Amber Silk",
  "Apricot Tint",
  "Aura Glow",
  "Bath & Body Works",
  "Beauty of Joseon",
  "Biotique",
  "Bloom Co",
  "CeraVe",
  "Cetaphil",
  "Celestia Lab",
  "Desert Sand",
  "Dot & Key",
  "Dove",
  "Elf",
  "Estee Lauder",
  "GlowLab",
  "Gold Dropper",
  "Huda Beauty",
  "Innisfree",
  "Kay Beauty",
  "Kerastase",
  "Lakme",
  "Laneige",
  "L'Oreal Paris",
  "Lumina",
  "M.A.C",
  "Mandarin Dew",
  "Maybelline New York",
  "Mist & Co",
  "Neon Glow",
  "Neutrogena",
  "Oasis",
  "Plum",
  "Sleek Silk",
  "Sun Guard",
  "Sunkissed",
  "The Body Shop",
  "The Face Shop",
  "The Ordinary",
  "Velvet Plum",
  "Victoria's Secret",
  "Yves Saint Laurent",
];

const TAB_BRANDS: Record<"popular" | "luxe" | "exclusive" | "new", string[]> = {
  popular: [
    "Nykaa Cosmetics",
    "Dot & Key",
    "Kay Beauty",
    "Maybelline New York",
    "Lakme",
    "L'Oreal Professional",
    "M.A.C",
    "Plum",
    "Cetaphil",
    "L'Oreal Paris",
    "Elf",
    "The Ordinary",
    "Charlotte Tilbury",
    "Laneige",
    "Beauty of Joseon",
    "Innisfree",
    "Yves Saint Laurent",
    "Kerastase",
    "Dove",
    "Beauty & Planet",
    "Bath & Body Works",
    "Victoria's Secret",
    "Neutrogena",
    "CeraVe",
    "Estee Lauder",
  ],
  luxe: [
    "Yves Saint Laurent",
    "Estee Lauder",
    "Charlotte Tilbury",
    "Kerastase",
    "Laneige",
    "Victoria's Secret",
    "Amber Silk",
    "Lumina",
  ],
  exclusive: [
    "Celestia Lab",
    "Mandarin Dew",
    "Velvet Plum",
    "Amber Silk",
    "Desert Sand",
  ],
  new: [
    "Neon Glow",
    "Apricot Tint",
    "Mist & Co",
    "Sleek Silk",
    "Sun Guard",
    "Gold Dropper",
  ],
};

const ALPHABET = [
  "*", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#"
];

export default function BrandsPopover({ onMouseEnter, onMouseLeave }: BrandsPopoverProps) {
  const [activeTab, setActiveTab] = useState<"popular" | "luxe" | "exclusive" | "new">("popular");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("*");

  // Filter left sidebar brands list
  const filteredLeftBrands = useMemo(() => {
    return ALL_BRANDS.filter((brand) => {
      // Apply search query first
      const matchesSearch = brand.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchesSearch) return false;

      // Apply letter index filter
      if (selectedLetter === "*") return true;
      if (selectedLetter === "#") {
        return /^[0-9]/.test(brand);
      }
      return brand.toUpperCase().startsWith(selectedLetter);
    });
  }, [searchQuery, selectedLetter]);

  const handleBrandClick = (name: string) => {
    alert(`Redirecting to ${name} brand shop!`);
  };

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-full w-[95vw] max-w-6xl mt-3 z-50 bg-white/95 backdrop-blur-xl border border-zinc-200 rounded-2xl shadow-[0_15px_50px_rgba(255,95,31,0.12)] overflow-hidden text-zinc-800 p-6 flex flex-col md:flex-row gap-6"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Hover bridge to prevent popover from closing due to spacing gap */}
      <div className="absolute top-0 left-0 right-0 h-3 -translate-y-full bg-transparent" />
      {/* Background grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

      {/* LEFT COLUMN: Search & Brand list */}
      <div className="relative z-10 w-full md:w-[280px] md:border-r border-zinc-200/80 md:pr-6 flex flex-col gap-4">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search Brands"
            className="w-full bg-zinc-50 border border-zinc-200 focus:border-orange-500/80 rounded-lg px-3 py-2 pl-9 text-xs outline-none text-zinc-800 placeholder-zinc-400 focus:ring-2 focus:ring-orange-500/10 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            className="absolute left-3 top-2.5 w-3.5 h-3.5 text-zinc-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
          </svg>
        </div>

        {/* Index and Brand List */}
        <div className="flex gap-3 flex-1 min-h-[300px]">
          {/* Scrollable Brands List */}
          <div className="flex-1 flex flex-col gap-2 max-h-[320px] overflow-y-auto pr-1 custom-scrollbar">
            <h4 className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-100 pb-1">
              {selectedLetter === "*" ? "All Brands" : `Brands starting with ${selectedLetter}`}
            </h4>
            {filteredLeftBrands.length > 0 ? (
              <ul className="flex flex-col gap-2 list-none p-0 m-0">
                {filteredLeftBrands.map((brand) => (
                  <li key={brand}>
                    <button
                      onClick={() => handleBrandClick(brand)}
                      className="text-left bg-transparent border-0 text-[11px] text-zinc-600 hover:text-orange-500 cursor-pointer transition-colors w-full font-medium"
                    >
                      {brand}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <span className="text-[11px] text-zinc-400 italic">No brands found</span>
            )}
          </div>

          {/* Vertical Index Alphabet List */}
          <div className="flex flex-col items-center justify-between text-[9px] font-bold text-zinc-500 max-h-[320px] select-none pl-1 border-l border-zinc-100 h-full">
            {ALPHABET.map((letter) => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                className={`bg-transparent border-0 cursor-pointer py-[1px] px-1 hover:text-orange-500 transition-colors text-[9px] font-extrabold ${
                  selectedLetter === letter ? "text-orange-500" : "text-zinc-400"
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Horizontal Tabs & Brand Cards Grid */}
      <div className="relative z-10 flex-1 flex flex-col gap-5">
        {/* Horizontal Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-zinc-200/80 pb-3">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                activeTab === tab.id
                  ? "bg-orange-500 border-orange-500 text-white shadow-[0_4px_12px_rgba(255,95,31,0.2)]"
                  : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Brands Logo Grid */}
        <div className="max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {TAB_BRANDS[activeTab].map((brand) => (
              <div
                key={brand}
                onClick={() => handleBrandClick(brand)}
                className="group relative bg-zinc-50 border border-zinc-200 hover:border-orange-500/40 hover:bg-zinc-100/50 rounded-xl p-4 transition-all duration-300 flex items-center justify-center min-h-[64px] text-center shadow-sm cursor-pointer"
              >
                {/* Glow outlines */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-orange-500/10 shadow-[inset_0_0_12px_rgba(255,95,31,0.03)]" />
                
                <span className="text-xs font-bold text-zinc-700 group-hover:text-zinc-900 transition-colors tracking-wide">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
