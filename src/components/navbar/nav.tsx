"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "../ThemeToggle";
import { FaDownload } from "react-icons/fa";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mounted, setMounted] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle hydration issue
  useEffect(() => {
    setMounted(true);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = (): void => {
      const sections = ["home", "about", "skills", "projects", "experience", "services", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Animation variants - Properly typed
  const navbarVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const mobileNavContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const desktopNavVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const desktopItemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  interface NavItemsProps {
    isMobile?: boolean;
  }

  const NavItems: React.FC<NavItemsProps> = ({ isMobile = false }) => {
    const items = [
      { href: "#about", label: "About", id: "about" },
      { href: "#skills", label: "Skills", id: "skills" },
      { href: "#projects", label: "Projects", id: "projects" },
      { href: "#experience", label: "Experience", id: "experience" },
      { href: "#services", label: "Services", id: "services" },
      { href: "#contact", label: "Contact me", id: "contact" },
    ];

    return (
      <motion.div
        className={cn(
          "flex",
          isMobile ? "flex-col gap-y-2 p-4" : "gap-x-2"
        )}
        variants={isMobile ? mobileNavContainerVariants : desktopNavVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((item) => (
          <motion.div
            key={item.href}
            variants={isMobile ? menuItemVariants : desktopItemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={item.href}
              className={cn(
                "group inline-flex h-8 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                "bg-background",
                "hover:bg-accent hover:text-primary",
                "border",
                activeSection === item.id
                  ? "border-primary text-primary"
                  : "border-transparent text-foreground",
                "focus:bg-accent focus:text-accent-foreground focus:outline-none",
                "disabled:pointer-events-none disabled:opacity-50",
                isMobile && "w-full justify-start text-base"
              )}
              onClick={() => {
                if (isMobile) {
                  setIsOpen(false);
                }
              }}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
        
        <motion.div
          variants={isMobile ? menuItemVariants : desktopItemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/Mohan_Resume.pdf"
            download="Mohan_Resume.pdf"
            className={cn(
              "group inline-flex h-8 w-max gap-x-1 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
              "bg-background",
              "hover:bg-accent text-primary",
              "border border-primary",
              "focus:bg-accent focus:text-accent-foreground focus:outline-none",
              "disabled:pointer-events-none disabled:opacity-50",
              isMobile && "w-full justify-start text-base"
            )}
            onClick={() => {
              if (isMobile) {
                setIsOpen(false);
              }
            }}
          >
            <FaDownload className="h-4 w-4" />
            Resume
          </Link>
        </motion.div>
      </motion.div>
    );
  };

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <div className="fixed w-full top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#home" className="text-lg md:text-xl font-bold transition-colors">
            <span className="hidden md:inline">
              <span className="text-primary">Mohan</span>Sunkara
            </span>
            <span className="inline md:hidden">
              <span className="text-primary">M</span>S
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex space-x-2">
              <div className="flex gap-x-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-8 px-4 py-2 border border-transparent rounded-md bg-background/20" />
                ))}
              </div>
            </nav>
            <div className="p-2 rounded-md bg-background/20" />
          </div>
          <div className="flex items-center space-x-2 md:hidden">
            <div className="p-2 rounded-md bg-background/20" />
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="fixed w-full top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left side - Name */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="#home"
            className="text-lg md:text-xl font-bold transition-colors hover:text-primary"
          >
            <span className="hidden md:inline">
              <span className="text-primary">Mohan</span>Sunkara
            </span>
            <span className="inline md:hidden">
              <span className="text-primary">M</span>S
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex items-center space-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <nav>
            <NavItems />
          </nav>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <ThemeToggle />
          </motion.div>
        </motion.div>

        {/* Mobile Navigation */}
        <motion.div
          className="flex items-center space-x-2 md:hidden relative"
          ref={dropdownRef}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <ThemeToggle />
          </motion.div>
          
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10"
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </motion.div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute top-14 right-0 w-48 bg-background border border-primary/50 rounded-md shadow-lg z-50 overflow-hidden"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <nav className="flex flex-col">
                  <NavItems isMobile />
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
