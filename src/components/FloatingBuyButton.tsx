"use client";

import React, { useState, useEffect } from "react";

interface FloatingBuyButtonProps {
  onBuyClick: () => void;
  price: string;
}

export default function FloatingBuyButton({ onBuyClick, price }: FloatingBuyButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get form position to determine when to show the button
      // Show when past the initial part of the page, around 800px
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Get payment form position
      const formElement = document.getElementById('payment-form');
      const footerElement = document.querySelector('footer');

      if (formElement && footerElement) {
        const formPosition = formElement.getBoundingClientRect().top + window.scrollY;
        const footerPosition = footerElement.getBoundingClientRect().top + window.scrollY;

        // Show when scrolled past initial view but not at form or footer
        setIsVisible(
          scrollY > 800 &&
          scrollY < formPosition - window.innerHeight * 0.5 &&
          scrollY < footerPosition - window.innerHeight * 0.8
        );
      } else {
        // Fallback in case elements aren't found
        setIsVisible(scrollY > 800 && scrollY < 4000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-0 right-0 z-50 transition-all duration-300 transform ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="bg-zinc-900 shadow-lg rounded-lg p-3 max-w-sm mx-auto border border-zinc-800 flex items-center justify-between animate-slideUp">
          <div className="text-white">
            <div className="text-xs opacity-70">Precio especial:</div>
            <div className="font-bold text-yellow-500">{price}</div>
          </div>
          <button
            onClick={onBuyClick}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded transition-all active:scale-95 tap-highlight"
          >
            Comprar Ahora
          </button>
        </div>
      </div>
    </div>
  );
}
