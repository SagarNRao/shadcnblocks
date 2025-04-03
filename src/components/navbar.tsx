"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Press", href: "/press" },
];

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-black/95 backdrop-blur-sm rounded-full mx-4 mt-4">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          Resend
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {/* Features dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("features")}
            onMouseLeave={handleMouseLeave}
          >
            <NavItem label="Features" active={activeDropdown === "features"} />

            <AnimatePresence>
              {activeDropdown === "features" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 w-48 rounded-xl bg-[#232323]/90 backdrop-blur-md py-2 shadow-lg ring-1 ring-white/10 overflow-hidden"
                >
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-black/20"
                  >
                    Feature 1
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-black/20"
                  >
                    Feature 2
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-black/20"
                  >
                    Feature 3
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Company dropdown with animation */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("company")}
            onMouseLeave={handleMouseLeave}
          >
            <NavItem label="Company" active={activeDropdown === "company"} />

            <AnimatePresence>
              {activeDropdown === "company" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 w-48 rounded-xl bg-[#232323]/90 backdrop-blur-md py-2 shadow-lg ring-1 ring-white/10 overflow-hidden border"
                >
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-black/20"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Resources dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={handleMouseLeave}
          >
            <NavItem
              label="Resources"
              active={activeDropdown === "resources"}
            />

            <AnimatePresence>
              {activeDropdown === "resources" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 w-48 rounded-xl bg-[#232323]/90 backdrop-blur-md py-2 shadow-lg ring-1 ring-white/10 overflow-hidden border"
                >
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-black/20"
                  >
                    Resource 1
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-black/20"
                  >
                    Resource 2
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-black/20"
                  >
                    Resource 3
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Docs dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("docs")}
            onMouseLeave={handleMouseLeave}
          >
            <NavItem label="Docs" active={activeDropdown === "docs"} />

            <AnimatePresence>
              {activeDropdown === "docs" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 w-48 rounded-xl bg-[#232323]/90 backdrop-blur-md py-2 shadow-lg ring-1 ring-white/10 overflow-hidden"
                >
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-black/20"
                  >
                    Documentation
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-black/20"
                  >
                    API Reference
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-black/20"
                  >
                    Tutorials
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Pricing (no dropdown) */}
          <Link
            href="/pricing"
            className="px-3 py-2 text-sm text-gray-300 hover:text-white rounded-full m-1 hover:bg-[#232323] hover:border hover:border-white/20 transition-all duration-200"
          >
            Pricing
          </Link>
        </nav>

        {/* Auth buttons */}
        <div className="flex items-center space-x-2">
          <Link
            href="/signin"
            className="hidden sm:inline-block text-sm text-gray-300 hover:text-white"
          >
            Sign in
          </Link>
          <Button
            asChild
            size="sm"
            className="bg-white text-black hover:bg-gray-200 rounded-full"
          >
            <Link href="/get-started">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

interface NavItemProps {
  label: string;
  active: boolean;
}

function NavItem({ label, active }: NavItemProps) {
  return (
    <div
      className={cn(
        "flex items-center px-3 py-2 text-sm rounded-full m-1 transition-all duration-200",
        active
          ? "text-white bg-[#232323] ring-1 ring-white/10 overflow-hidden border"
          : "text-gray-300 hover:text-white hover:bg-[#232323] hover:border hover:border-white/20"
      )}
    >
      {label}
      <ChevronDown
        className={cn(
          "ml-1 h-4 w-4 transition-transform duration-200",
          active ? "rotate-180" : ""
        )}
      />
    </div>
  );
}
