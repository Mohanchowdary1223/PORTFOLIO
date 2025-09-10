"use client"
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDownload, FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";
import { motion, type Variants } from "framer-motion";
import { ArrowUp, Code, Coffee } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants - Fixed with proper Variants type
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Mohanchowdary1223",
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: FaEnvelope,
      href: "mailto:mohansunkara963@gmail.com",
      label: "Email",
      color: "hover:text-blue-400"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/mohan-sunkara/",
      label: "LinkedIn",
      color: "hover:text-blue-500"
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/m_o_h_a_n__14000605",
      label: "Instagram",
      color: "hover:text-pink-500"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black border-t border-primary/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1)_0%,transparent_50%)] pointer-events-none" />
      
      <motion.div 
        className="container mx-auto px-4 py-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="flex flex-col items-center space-y-8">
          
          {/* Logo/Name */}
          <motion.div variants={itemVariants}>
            <Link
              href="#home"
              className="group"
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-primary">Mohan</span>
                <span className="text-gray-800 dark:text-white group-hover:text-primary/80 transition-colors duration-300">Sunkara</span>
              </motion.h3>
            </Link>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="text-center max-w-2xl">
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-white/90">
                <Code className="w-4 h-4 text-primary" />
                <p className="text-sm md:text-base">
                  Designed & Developed with <motion.span 
                    className="text-red-500 inline-block"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <FaHeart className="inline w-4 h-4" />
                  </motion.span> by <span className="text-primary font-semibold">Mohan Sunkara</span>
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-white/80 text-sm">
                <Coffee className="w-4 h-4 text-primary" />
                <span>Built with</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">Next.js</span>
                <span>•</span>
                <span className="font-semibold text-cyan-600 dark:text-cyan-400">Tailwind CSS</span>
                <span>•</span>
                <span className="font-semibold text-blue-700 dark:text-blue-500">TypeScript</span>
              </div>
              
              <motion.p 
                className="text-gray-600 dark:text-white/70 text-sm md:text-base italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5 }}
              >
                Open to internship and collaborative opportunities – let&apos;s connect! 🚀
              </motion.p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center space-x-2">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              
              return (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className={`text-gray-700 dark:text-white/80 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300 rounded-full ${social.color} backdrop-blur-sm border border-gray-300 dark:border-white/10 hover:border-primary/40`}
                  >
                    <Link
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Resume Link Button */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                variant="outline"
                className="bg-primary/10 hover:bg-primary border-primary/40 hover:border-primary text-gray-800 dark:text-white hover:text-primary-foreground transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-primary/25"
              >
                <Link 
                  href="/resume"
                  className="flex items-center gap-2"
                >
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <FaDownload className="h-4 w-4" />
                  </motion.div>
                  View My Resume
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Back to Top Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              onClick={scrollToTop}
              className="group flex cursor-pointer items-center gap-2 text-gray-500 dark:text-white/60 hover:text-primary text-sm transition-colors duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUp className="w-4 h-4 group-hover:text-primary transition-colors duration-300" />
              </motion.div>
              Back to Top
            </motion.button>
          </motion.div>

          {/* Divider Line */}
          <motion.div 
            variants={itemVariants}
            className="w-full max-w-md"
          >
            <motion.div 
              className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* Copyright */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-gray-500 dark:text-white/60 text-sm">
              © {currentYear} <span className="text-primary font-medium">Mohan Sunkara</span>. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 w-2 h-2 bg-primary/30 rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-1 h-1 bg-primary/40 rounded-full"
        animate={{
          y: [0, -8, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </footer>
  );
};

export default Footer;
