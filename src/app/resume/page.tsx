"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumePage: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  // Handle hydration issue
  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Function to handle PDF download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Mohan_Resume.pdf";
    link.download = "Mohan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!mounted) {
    return (
      <div className="h-screen bg-background overflow-hidden">
        <div className="animate-pulse p-4 h-full">
          <div className="h-8 bg-background/20 rounded w-1/4 mb-4" />
          <div className="h-full bg-background/20 rounded" />
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-background overflow-hidden flex flex-col">
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full p-4">
          <div
            className={cn(
              "h-full transform transition-all duration-800 ease-out",
              hasAnimated ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
            style={{ transitionDelay: hasAnimated ? '0ms' : '200ms' }}
          >
            {/* Resume Container */}
            <div className="flex flex-col items-center h-full">
              {/* PDF Viewer Container - 90% height, 60% width */}
              <div className="rounded-lg shadow-lg border border-border h-[90%] w-[60%] overflow-hidden">
                <iframe
                  src="/Mohan_Resume.pdf"
                  className="w-full h-full"
                  title="Resume PDF"
                />
              </div>

              {/* Action Buttons (Bottom) */}
              <div className="mt-4 flex items-center space-x-3">
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hover:bg-accent hover:text-primary hover:scale-105 active:scale-95 transform transition-all duration-150"
                >
                  <Link href="/" className="flex items-center space-x-2">
                    <ArrowLeft className="h-4 w-4" />
                    <span className="font-medium">Back</span>
                  </Link>
                </Button>
                
                <Button
                  onClick={handleDownload}
                  size="sm"
                  className="bg-primary text-primary-foreground cursor-pointer hover:bg-primary/90 hover:scale-105 active:scale-95 transform transition-all duration-150"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
