/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { Code2, Wrench, Cpu, Database, Palette, Zap } from "lucide-react";

const SkillsPage: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  // Scroll-based animations
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -30]);
  const opacity = useTransform(scrollY, [0, 150, 300], [1, 0.9, 0.8]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.98]);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = [
    {
      name: "Python",
      icon: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
      category: "Programming Language"
    },
    {
      name: "C",
      icon: "https://img.icons8.com/?size=100&id=40670&format=png&color=000000",
      category: "Programming Language"
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
      category: "Programming Language"
    },
    {
      name: "MERN Stack",
      icon: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
      category: "Full Stack"
    },
    {
      name: "Next.js",
      icon: "https://img.icons8.com/?size=100&id=12276&format=png&color=000000",
      category: "Framework"
    },
    {
      name: "TypeScript",
      icon: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
      category: "Programming Language"
    },
    {
      name: "PostgreSQL",
      icon: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
      category: "Database"
    },
    {
      name: "TailwindCSS",
      icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
      category: "CSS Framework"
    },
    {
      name: "Figma(UI/UX)",
      icon: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
      category: "Design Tool"
    },
    {
      name: "GitHub",
      icon: "https://img.icons8.com/?size=100&id=63777&format=png&color=000000",
      category: "Version Control"
    },
    {
      name: "Machine Learning",
      icon: "https://img.icons8.com/?size=100&id=NL90I8YT1YnN&format=png&color=000000",
      category: "AI/ML"
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const skillCardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.8,
      rotate: -5
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Don't render until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-background transition-colors duration-300">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
          <div className="flex justify-center mb-12">
            <div className="h-6 w-24 bg-background/20 rounded animate-pulse" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {Array.from({ length: 11 }).map((_, i) => (
              <div key={i} className="h-20 bg-background/20 rounded-xl animate-pulse" />
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen bg-background transition-colors duration-300"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      style={{ y, opacity, scale }}
    >
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 pt-24 md:pt-24">

        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Code2 className="w-6 h-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              My <span className="text-primary">Skills</span>
            </h2>
          </div>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full mb-3"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto min-h-[60vh] flex flex-col justify-center">
          
          {/* Desktop Layout */}
          <motion.div
            className="hidden md:flex md:flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group relative bg-card/80 backdrop-blur-sm flex-1 min-w-[180px] max-w-[220px] rounded-xl p-4 text-center border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:border-primary/40"
                variants={skillCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: index * 0.08 }}
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10 space-y-3">
                  <motion.div
                    className="flex justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      width={32}
                      height={32}
                      className="w-8 h-8 group-hover:drop-shadow-lg transition-all duration-300"
                      loading="lazy"
                    />
                  </motion.div>
                  
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-sm">
                      {skill.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {skill.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Mobile Layout */}
          <motion.div
            className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {skills.map((skill, index) => {
              // Check if this is the last item and if it should be centered
              const isLastItem = index === skills.length - 1;
              const isOddInTwoColumn = skills.length % 2 === 1 && isLastItem; // For 2-column layout
              const isLastInThreeColumn = skills.length % 3 === 1 && isLastItem; // For 3-column layout (sm:grid-cols-3)
              
              return (
                <motion.div
                  key={skill.name}
                  className={`group relative bg-card/80 backdrop-blur-sm rounded-xl p-3 text-center border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:border-primary/40 ${
                    isOddInTwoColumn ? 'col-span-2 max-w-[200px] mx-auto sm:col-span-1 sm:max-w-none sm:mx-0' : 
                    isLastInThreeColumn ? 'sm:col-span-3 sm:max-w-[200px] sm:mx-auto' : ''
                  }`}
                  variants={skillCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: index * 0.08 }}
                >
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-2">
                    <motion.div
                      className="flex justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        width={24}
                        height={24}
                        className="w-6 h-6 group-hover:drop-shadow-lg transition-all duration-300"
                        loading="lazy"
                      />
                    </motion.div>
                    
                    <div>
                      <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </p>
                      <p className="text-xs text-muted-foreground opacity-80">
                        {skill.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default SkillsPage;
