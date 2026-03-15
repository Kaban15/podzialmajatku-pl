"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Wróć na górę strony"
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-center justify-center p-2 w-16 h-16 bg-gray-500 hover:bg-gray-600 text-white rounded transition-all duration-300 shadow-lg ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <ChevronUp className="w-6 h-6 mb-1" />
      <span className="text-[10px] font-bold uppercase tracking-wider">Do góry</span>
    </button>
  );
}
