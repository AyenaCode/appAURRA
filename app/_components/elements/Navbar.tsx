"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Span } from "../elements/Span";
import { SocialMedia } from "../pgaeSections/Footer";

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsOpen(false); // Ferme le menu quand la route change
  }, [pathname]);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && !(e.target as Element).closest("nav")) closeMenu();
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const navLinkClass =
    "hover:text-violetColor text-blueColor transition-colors duration-300";
  const activeNavLinkClass = "text-white font-bold";

  const getLinkClass = (path: string) => {
    return pathname === path ? activeNavLinkClass : navLinkClass;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 py-2 ${
        scrolled ? "bg-gray-800 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-10 py-1 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold" onClick={closeMenu}>
          <Span>AURRA</Span>
        </Link>
        <SocialMedia className="space-x-6 md:space-x-4 text-violetColor" />
        <button
          className="md:hidden bg-transparent text-blueColor"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <ul
          className={`md:flex space-x-6 font-semibold items-center transition-all duration-300 ${
            isOpen
              ? "absolute top-full right-0 bg-gray-800 shadow-lg p-4 pl-10 space-y-4 md:space-y-0"
              : "hidden"
          } md:relative md:bg-transparent md:p-0 md:flex`}
        >
          <li>
            <Link href="/" className={getLinkClass("/")} onClick={closeMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={getLinkClass("/services")}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/#projects"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Nos Projets
            </Link>
          </li>
          <li>
            <Link
              href="/a-propos"
              className={getLinkClass("/a-propos")}
              onClick={closeMenu}
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={getLinkClass("/contact")}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
