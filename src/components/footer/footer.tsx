import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDownload } from "react-icons/fa";
import { Button } from "../ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900  border-t border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col justify-center gap-4 items-center space-y-4 md:space-y-0">
        <Link
          href="#home"
          className="text-lg md:text-xl font-bold text-primary transition-colors"
        >
          Codion<span className="text-white">MS</span>
        </Link>
          <div className="text-sm text-white text-center space-y-1">
            <p className="text-sm text-white text-center">
              Designed & Developed by <strong>Mohan Sunkara</strong> • Built
              with <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and{" "}
              <strong>TypeScript</strong> 
            </p>
            <p className="italic text-white text-center">
              Open to internship and collaborative opportunities – let&apos;s
              connect!
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-white hover:text-primary transition-colors"
            >
              <Link
                href="https://github.com/Mohanchowdary1223"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-white hover:text-primary transition-colors"
            >
              <Link href="mailto:mohansunkara963@gmail.com" aria-label="Email">
                <FaEnvelope />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-white hover:text-primary transition-colors"
            >
              <Link
                href="https://www.linkedin.com/in/mohan-chowdhury-a1a913281/"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-white hover:text-primary transition-colors"
            >
              <Link
                href="https://www.instagram.com/m_o_h_a_n__14000605"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          <Button
            asChild
            variant="outline"
            
            className="bg-transparent hover:bg-transparent dark:hover:border-primary dark:border-white text-white hover:text-primary hover:border-primary transition-colors"
          >
            <Link 
        href="/Mohan_Resume.pdf"
        download="Mohan_Resume.pdf"target="_blank" rel="noopener noreferrer">
            <FaDownload className="h-4 w-4" />

              Get My Resume
            </Link>
          </Button>
          <div className="text-sm text-white text-center space-y-1">
            <p>© {currentYear} Mohan Sunkara. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
