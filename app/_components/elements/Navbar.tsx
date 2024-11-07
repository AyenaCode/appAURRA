"use client";
import { servicesPage } from "@/app/modules/Setting";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaTurnDown } from "react-icons/fa6";
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
        <SocialMedia className="space-x-2 lg:space-x-6 text-violetColor" />
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
            <NavigationMenu>
              <NavigationMenuItem className="flex items-center gap-1">
                <Link
                  href="/services"
                  className={getLinkClass("/services")}
                  onClick={closeMenu}
                >
                  Services
                </Link>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent px-1">
                  <FaTurnDown className="h-6 text-blueColor" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="fixed left-1/2 transform -translate-x-1/2 z-50 bg-white dark:bg-gray-900 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
                    <ul className="grid w-[90vw] max-w-[800px] gap-3 p-4 md:grid-cols-2 lg:grid-cols-3">
                      {servicesPage.map((service) => (
                        <ListItem
                          key={service.href}
                          href={service.href}
                          title={service.title}
                          className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blueColor to-violetColor flex items-center justify-center">
                              <span className="text-xl text-white">
                                {service.icon}
                              </span>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </div>
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenu>
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

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
  [key: string]: unknown;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none rounded-lg p-4 no-underline outline-none transition-colors",
            "hover:bg-accent hover:text-accent-foreground",
            "focus:bg-accent focus:text-accent-foreground",
            "dark:hover:bg-gray-800",
            className
          )}
          {...props}
        >
          <div className="text-lg font-semibold mb-2">{title}</div>
          {children}
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
