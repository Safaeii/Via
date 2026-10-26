


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { title: "مقاصد", href: "/#destinations" },
    { title: "اقامتگاه‌ها", href: "/#Hotels" },
    { title: "تجربه‌ها", href: "/#experiences" },
    { title: "درباره ما", href: "/about" },
  ];

  return (

<header
  className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
    scrolled
      ? "border-white/10 bg-gradient-to-l from-background/95 via-background/90 to-accent/15 shadow-md shadow-black/5 backdrop-blur-xl"
      : "border-transparent bg-transparent"
  }`}
>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 ">
        {/* لوگو */}
        <Link
          href="/"
          aria-label="صفحه اصلی ویا"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/images/via-logo.png"
            alt="Via"
            width={150}
            height={80}
            priority
            className="h-20 w-28 object-contain sm:w-32"
          />
        </Link>

        {/* لینک‌های منو */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-teal-600"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* دکمه ورود */}
        <Link
          href="/login"
          className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-md shadow-black/5 transition-all duration-200 hover:scale-105 hover:bg-teal-50"
        >
          ورود
        </Link>
      </nav>
    </header>
  );
}
