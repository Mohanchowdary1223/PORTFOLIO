'use client';

import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Button } from "../ui/button";
import { ContainerTextFlip } from "../ui/container-text-flip";

const HomePage: React.FC = () => {
  // Properly typed animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 flex">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <motion.div 
          className="text-center max-w-4xl mx-auto relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ContainerTextFlip - smaller size and matching theme */}
          <motion.div 
            className=" flex justify-center relative z-20"
            variants={itemVariants}
          >
            <ContainerTextFlip
              words={["Open to work", "MERN", "Figma(UI/UX)", "Communication", "Next JS"]}
              className="inline-flex items-center justify-center px-2 py-1 border border-primary/30 bg-primary/10 font-medium tracking-wide text-primary"
            />
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 px-2 leading-tight relative z-20"
            variants={itemVariants}
          >
            Hi, I&apos;m Mohan Sunkara
          </motion.h1>

          <motion.p 
            className="text-xs sm:text-base lg:text-lg text-foreground/70 text-center max-w-3xl mx-auto mb-3 sm:mb-4 px-2 leading-relaxed relative z-20"
            variants={itemVariants}
          >
            Proficient in the <span className="text-primary font-semibold">MERN STACK, NEXT JS</span>
            , responsive design, <span className="text-primary font-semibold">UI/UX</span>{" "}
            and modern development tools. I strive to bridge the gap between
            design and technology to create impactful web experiences.
          </motion.p>

          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 font-dancing-script px-2 italic relative z-20"
            variants={itemVariants}
          >
            I turn ideas into interactive web experiences
          </motion.p>

          <motion.div 
            className="flex justify-center items-center gap-3 sm:gap-4 mb-4 relative z-30"
            variants={containerVariants}
          >
            {[
              { href: "https://github.com/Mohanchowdary1223", icon: FaGithub, label: "GitHub" },
              { href: "mailto:mohansunkara963@gmail.com", icon: FaEnvelope, label: "Email" },
              { href: "https://www.linkedin.com/in/mohan-sunkara/", icon: FaLinkedin, label: "LinkedIn" },
              { href: "https://www.instagram.com/m_o_h_a_n__14000605", icon: FaInstagram, label: "Instagram" }
            ].map((social) => {
              const IconComponent = social.icon;
              return (
                <motion.div
                  key={social.label}
                  className="relative z-40 h-10 w-10"
                  variants={socialVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
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
      </section>
    </div>
  );
};

export default HomePage;
