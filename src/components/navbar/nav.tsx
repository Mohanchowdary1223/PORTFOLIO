"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "../ThemeToggle";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const NavItems = ({ isMobile = false }) => (
    <div
      className={cn(
        "flex",
        isMobile ? "flex-col gap-y-2 p-4" : "w-full gap-x-8"
      )}
    >
      {[
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "/projects", label: "Projects" },
        { href: "#contact", label: "Contact me" },
      ].map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "group inline-flex h-8 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
            "bg-background text-foreground",
            "hover:bg-accent hover:text-primary",
            "border border-transparent hover:border-primary",
            "focus:bg-accent focus:text-accent-foreground focus:outline-none",
            "disabled:pointer-events-none disabled:opacity-50",
            isMobile && "w-full justify-start text-base"
          )}
          onClick={() => isMobile && setIsOpen(false)}
        >
          {item.label}
        </Link>
      ))}
      <Link
        href="/myresume.pdf"
        download="myresume.pdf"
        className={cn(
          "group inline-flex h-8 w-max gap-x-1 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
          "bg-background text-foreground",
          "hover:bg-accent hover:text-primary",
          "border border-primary",
          "focus:bg-accent focus:text-accent-foreground focus:outline-none",
          "disabled:pointer-events-none disabled:opacity-50",
          isMobile && "w-full justify-start text-base"
        )}
        onClick={() => isMobile && setIsOpen(false)}
      >
        <FaDownload className="h-4 w-4" />
        Resume
      </Link>
    </div>
  );

  return (
    <div className="fixed w-full top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left side - Name */}
        <Link
          href="#home"
          className="text-lg md:text-xl font-bold text-primary transition-colors"
        >
          Codion<span className="text-foreground">MS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <nav className="flex space-x-2">
            <NavItems />
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-2 md:hidden relative" ref={dropdownRef}>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
          {isOpen && (
            <div className="absolute top-14 right-0 w-48 bg-background border border-primary/50 rounded-md shadow-lg z-50">
              <nav className="flex flex-col">
                <NavItems isMobile />
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;