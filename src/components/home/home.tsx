/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/button";
import { BackgroundLines } from "../ui/background-lines";
import { ContainerTextFlip } from "../ui/container-text-flip";

const HomePage: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Transform scroll values to animation properties
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 150, 300], [1, 0.8, 0.6]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Animation variants with proper TypeScript types
  const containerVariants: Variants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 15 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const textFlipVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const socialButtonVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 flex">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            style={{ y, opacity, scale }}
          >
            {/* ContainerTextFlip with motion wrapper - Fixed positioning */}
            <motion.div
              variants={textFlipVariants}
              className="mb-4 flex justify-center relative z-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              <ContainerTextFlip
                words={["Open to work", "Teamwork", "Communication", "Confidence"]}
                className="inline-flex items-center justify-center px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs sm:text-sm font-medium tracking-wide text-primary/80"
              />
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 px-2 leading-tight relative z-20"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              Hi, I&apos;m Mohan Sunkara
              <span className="block text-sm sm:text-sm lg:text-2xl mt-1 font-light text-foreground/80">
                Where creativity meets functionality
              </span>
            </motion.h1>

            <motion.p 
              className="text-xs sm:text-base lg:text-lg text-foreground/70 text-center max-w-3xl mx-auto mb-3 sm:mb-4 px-2 leading-relaxed relative z-20"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              Proficient in the <span className="text-primary font-semibold">MERN STACK, NEXT JS</span>
              , responsive design, <span className="text-primary font-semibold">UI/UX</span>{" "}
              and modern development tools. I strive to bridge the gap between
              design and technology to create impactful web experiences.
            </motion.p>

            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 font-dancing-script px-2 italic relative z-20"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              I turn ideas into interactive web experiences
            </motion.p>

            <motion.div 
              className="flex justify-center items-center gap-3 sm:gap-4 mb-4 relative z-30"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              {[
                { href: "https://github.com/Mohanchowdary1223", icon: FaGithub, label: "GitHub" },
                { href: "mailto:mohansunkara963@gmail.com", icon: FaEnvelope, label: "Email" },
                { href: "https://www.linkedin.com/in/mohan-chowdhury-a1a913281/", icon: FaLinkedin, label: "LinkedIn" },
                { href: "https://www.instagram.com/m_o_h_a_n__14000605", icon: FaInstagram, label: "Instagram" }
              ].map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.div
                    key={social.label}
                    variants={socialButtonVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="relative z-40 h-10 w-10"
                  >
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="cursor-pointer border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-md hover:shadow-primary/10 h-10 w-10 p-0 relative z-50 bg-background hover:bg-background/90 flex items-center justify-center"
                    >
                      <Link 
                        href={social.href} 
                        aria-label={social.label} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full h-full text-current"
                      >
                        <IconComponent className="w-5 h-5 shrink-0" />
                      </Link>
                    </Button>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </BackgroundLines>
      </section>
    </div>
  );
};

export default HomePage;
