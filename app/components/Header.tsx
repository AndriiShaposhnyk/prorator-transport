"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // блокуємо скрол сторінки, коли меню відкрите
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="absolute top-0 left-0 w-full z-20 flex flex-col items-center pt-20">
      {/* Кнопка бургер (видно лише на мобілках) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white absolute top-6 right-6 z-50"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Навігація */}
      <nav
        className={`mt-8 text-white text-lg font-semibold transition-all duration-300 ease-in-out
          ${isOpen
            ? "fixed inset-0 z-40 flex flex-col items-start gap-4 px-6 pt-24 bg-gray-900/95 backdrop-blur-sm"
            : "hidden"}
          md:static md:flex md:flex-row md:space-x-8 md:bg-transparent md:backdrop-blur-0`}
      >
        <a
          href="#home"
          className="text-3xl hover:text-black transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Home
        </a>
        <a
          href="#services"
          className="text-3xl hover:text-black transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Services
        </a>
        <a
          href="#fleet"
          className="text-3xl hover:text-black transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Fleet
        </a>
        <a
          href="#about"
          className="text-3xl hover:text-black transition-colors"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </a>
        <a
          href="#quote"
          className="text-3xl hover:text-black transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Get a Quote
        </a>
        <a
          href="#apply"
          className="text-3xl hover:text-black transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Apply as owner-operator
        </a>
        <a
          href="#contact-us"
          className="text-3xl hover:text-black transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}



