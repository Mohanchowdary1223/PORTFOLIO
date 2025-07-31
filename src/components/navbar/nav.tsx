"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "../ThemeToggle";
import { FaDownload } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mounted, setMounted] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle hydration issue
  useEffect(() => {
    setMounted(true);
    // Trigger animation only once
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
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
      <div
        className={cn(
          "flex",
          isMobile ? "flex-col gap-y-2 p-4" : "gap-x-2"
        )}
      >
        {items.map((item, index) => (
          <div
            key={item.href}
            className={cn(
              "transform transition-all duration-300 ease-out",
              hasAnimated 
                ? "translate-y-0 opacity-100" 
                : isMobile 
                  ? "-translate-x-5 opacity-0" 
                  : "-translate-y-2 opacity-0"
            )}
            style={{
              transitionDelay: hasAnimated ? '0ms' : `${(index + 1) * 100}ms`
            }}
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
                isMobile && "w-full justify-start text-base",
                "hover:scale-105 active:scale-95 transform transition-all duration-150"
              )}
              onClick={() => {
                if (isMobile) {
                  setIsOpen(false);
                }
              }}
            >
              {item.label}
            </Link>
          </div>
        ))}
        
        <div
          className={cn(
            "transform transition-all duration-300 ease-out",
            hasAnimated 
              ? "translate-y-0 opacity-100" 
              : isMobile 
                ? "-translate-x-5 opacity-0" 
                : "-translate-y-2 opacity-0"
          )}
          style={{
            transitionDelay: hasAnimated ? '0ms' : `${(items.length + 1) * 100}ms`
          }}
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
              isMobile && "w-full justify-start text-base",
              "hover:scale-105 active:scale-95 transform transition-all duration-150"
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
        </div>
      </div>
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
    <div 
      className={cn(
        "fixed w-full top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        "transform transition-all duration-600 ease-out",
        hasAnimated ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left side - Name */}
        <div
          className={cn(
            "transform transition-all duration-600 ease-out",
            hasAnimated ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
          )}
          style={{ transitionDelay: hasAnimated ? '0ms' : '200ms' }}
        >
          <Link
            href="#home"
            className="text-lg md:text-xl font-bold transition-colors hover:text-primary hover:scale-105 active:scale-95 transform duration-150"
          >
            <span className="hidden md:inline">
              <span className="text-primary">Mohan</span>Sunkara
            </span>
            <span className="inline md:hidden">
              <span className="text-primary">M</span>S
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div
          className={cn(
            "hidden md:flex items-center space-x-4",
            "transform transition-all duration-600 ease-out",
            hasAnimated ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
          )}
          style={{ transitionDelay: hasAnimated ? '0ms' : '300ms' }}
        >
          <nav>
            <NavItems />
          </nav>
          <div
            className={cn(
              "transform transition-all duration-400 ease-out",
              hasAnimated ? "scale-100 opacity-100" : "scale-80 opacity-0"
            )}
            style={{ transitionDelay: hasAnimated ? '0ms' : '500ms' }}
          >
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "flex items-center space-x-2 md:hidden relative",
            "transform transition-all duration-600 ease-out",
            hasAnimated ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
          )}
          style={{ transitionDelay: hasAnimated ? '0ms' : '300ms' }}
          ref={dropdownRef}
        >
          <div
            className={cn(
              "transform transition-all duration-400 ease-out",
              hasAnimated ? "scale-100 opacity-100" : "scale-80 opacity-0"
            )}
            style={{ transitionDelay: hasAnimated ? '0ms' : '400ms' }}
          >
            <ThemeToggle />
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 active:scale-95 transform transition-all duration-150"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 transition-transform duration-200" />
            ) : (
              <Menu className="h-6 w-6 transition-transform duration-200" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>

          {/* Mobile Dropdown */}
          <div
            className={cn(
              "absolute top-14 right-0 w-48 bg-background border border-primary/50 rounded-md shadow-lg z-50 overflow-hidden",
              "transform transition-all duration-300 ease-out origin-top-right",
              isOpen 
                ? "scale-100 opacity-100 translate-y-0" 
                : "scale-95 opacity-0 -translate-y-2 pointer-events-none"
            )}
          >
            <nav className="flex flex-col">
              <NavItems isMobile />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
  