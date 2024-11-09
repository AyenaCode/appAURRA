"use client";

import { navItems } from "@/app/modules/Setting";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Span } from "../elements/Span";
import { SocialMedia } from "../pgaeSections/Footer";
import { ServiceNav } from "./ServiceNav";

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => setIsOpen(false);

  const MobileMenu = () => {
    return (
      <button
        className="md:hidden bg-transparent text-blueColor"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <FaTimes className="w-6 h-6" />
        ) : (
          <FaBars className="w-6 h-6" />
        )}
      </button>
    );
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && !(e.target as Element).closest("nav")) closeMenu();
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 py-2 ${
        scrolled ? "bg-gray-800 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-10 py-1 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          <Span>AURRA</Span>
        </Link>
        <SocialMedia className="space-x-2 lg:space-x-6 text-violetColor" />
        <MobileMenu />
        <ul
          className={`md:flex space-x-6 font-semibold items-center transition-all duration-300 ${
            isOpen
              ? "absolute top-full right-0 bg-gray-800 shadow-lg p-4 pl-10 space-y-4 md:space-y-0"
              : "hidden"
          } md:relative md:bg-transparent md:p-0 md:flex`}
        >
          <li>
            <ServiceNav />
          </li>
          {navItems.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={cn(
                  "hover:text-violetColor text-blueColor transition-colors duration-300",
                  { "text-white font-bold": pathname === link.href }
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
