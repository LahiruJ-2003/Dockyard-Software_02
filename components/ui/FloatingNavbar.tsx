"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true); // Show nav on load
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Hamburger menu state

  const rawPathname = usePathname();
  const pathname = rawPathname.replace(/\/$/, "") || "/";

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true); // Show when near the top
      } else {
        if (direction < 0) {
          setVisible(true); // Show when scrolling up
        } else {
          setVisible(false); // Hide when scrolling down
        }
      }
    }
  });

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-md z-[5000] px-8 py-2 items-center justify-center space-x-4",
            className
          )}
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((navItem, idx) => {
              const linkPath = navItem.link.replace(/\/$/, "") || "/";
              const isActive = pathname === linkPath;

              return (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative items-center flex space-x-1 mr-2 md:my-1",
                    isActive
                      ? "text-p-500 font-bold dark:text-p-500"
                      : "text-neutral-600 dark:text-neutral-50",
                    "hover:text-p-500 dark:hover:text-p-500"
                  )}
                >
                  <span className="text-l !cursor-pointer">{navItem.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="p-2 text-neutral-600 dark:text-neutral-50 rounded focus:outline-none focus:ring-2 focus:ring-p-500"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full bg-white dark:bg-black shadow-lg rounded-md mt-2 z-50"
            >
              {navItems.map((navItem, idx) => (
                <Link
                  key={`dropdown-link=${idx}`}
                  href={navItem.link}
                  className="block px-4 py-2 text-neutral-600 dark:text-neutral-50 hover:bg-gray-100 dark:hover:bg-neutral-800"
                  onClick={() => setIsMenuOpen(false)} // Close menu on selection
                >
                  {navItem.name}
                </Link>
              ))}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

