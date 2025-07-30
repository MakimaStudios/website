"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <motion.nav
      className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48 mx-auto">
        <motion.div
          className={`flex items-center justify-between ${
            scrolled 
              ? "bg-black/80 border-1 border-zinc-900 backdrop-blur-lg shadow-lg" 
              : "bg-transparent border-1 border-transparent"
          } rounded-2xl px-4 sm:px-6 ${
            scrolled ? "py-3 sm:py-5" : "py-2 sm:py-4"
          } transition-all duration-300`}
          layout
        >
          <Link href="/" className="flex items-center gap-3">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/makimastud.png"
                alt="Makima Studios Logo"
                width={190}
                height={190}
                priority
                className="w-32 sm:w-40 md:w-48"
              />
            </motion.div>
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            {[
              { name: "Home", path: "/" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link href={item.path} key={item.name}>
                <motion.div
                  className={`relative font-medium text-sm ${
                    pathname === item.path ? "text-white" : "text-[#888]"
                  } hover:text-white transition-colors`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.name}
                  {pathname === item.path && (
                    <motion.div 
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white"
                      layoutId="navbar-indicator"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>
          
          <motion.div 
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact">
              <button className="px-5 py-2 bg-white cursor-pointer text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                Get in Touch
              </button>
            </Link>
          </motion.div>
          
          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </motion.button>
        </motion.div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 bg-black/80 backdrop-blur-lg rounded-2xl p-6 border border-zinc-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-6">
              {[
                { name: "Home", path: "/" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <Link href={item.path} key={item.name} onClick={() => setMobileMenuOpen(false)}>
                  <motion.div
                    className={`relative font-medium text-lg ${
                      pathname === item.path ? "text-white" : "text-[#888]"
                    } hover:text-white transition-colors`}
                    whileHover={{ x: 5 }}
                    whileTap={{ x: 0 }}
                  >
                    {item.name}
                    {pathname === item.path && (
                      <motion.div 
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white"
                        layoutId="mobile-navbar-indicator"
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full mt-4 px-5 py-3 bg-white cursor-pointer text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                  Get in Touch
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}