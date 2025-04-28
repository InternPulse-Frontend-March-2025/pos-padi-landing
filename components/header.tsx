"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import clsx from "clsx"; // optional, just to clean up classNames

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/coming-soon", label: "Solution" },
    { href: "/coming-soon", label: "Product" },
    { href: "/coming-soon", label: "Blog" },
    { href: "/coming-soon", label: "About Us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={200}
            height={30}
            className="h-[30px] w-[200px]"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={clsx(
                "text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-green-500 font-bold"
                  : "text-green hover:text-green-500"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <Button
            className="hidden md:flex bg-green-500 hover:bg-green-600 rounded-2xl"
            onClick={() =>
              (window.location.href =
                "https://pos-padi.netlify.app/")
            }
          >
            Log In
          </Button>
          <Button
            variant="outline"
            className="hidden md:flex rounded-2xl border-green-500 text-green-500 hover:bg-green-50 hover:text-green-600"
            onClick={() =>
              (window.location.href =
                "https://pos-padi.netlify.app/admin-signup")
            }
          >
            Sign Up
          </Button>

          {/* Hamburger button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M3 6H21M3 12H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col p-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={clsx(
                  "text-base font-medium transition-colors",
                  pathname === link.href
                    ? "text-green-500 font-bold"
                    : "text-black hover:text-green-500"
                )}
                onClick={() => setIsOpen(false)} // Close sidebar after clicking
              >
                {link.label}
              </Link>
            ))}
            <Button variant="outline" className="w-full">
              Log In
            </Button>
            <Button className="w-full bg-green-500 hover:bg-green-600">
              Sign Up
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
