"use client";

import React, { useState, useEffect } from "react";
import CountdownTimer from "./CountdownTimer";

interface StickyHeaderProps {
  onBuyClick: () => void;
}

export default function StickyHeader({ onBuyClick }: StickyHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the sticky header after scrolling down 300px
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-black border-b border-zinc-800 transition-transform duration-300 transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-yellow-500 text-black font-bold p-1 rounded-md">
            <CountdownTimer />
          </div>
          <span className="text-white text-xs sm:text-sm hidden sm:inline-block">
            ¡PROMO 2X1 por tiempo limitado!
          </span>
        </div>
        <div>
          <button
            onClick={onBuyClick}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-1.5 px-3 sm:px-4 rounded text-xs sm:text-sm transition-colors active:scale-95"
          >
            Comprar Ahora
          </button>
        </div>
      </div>
    </div>
  );
}
