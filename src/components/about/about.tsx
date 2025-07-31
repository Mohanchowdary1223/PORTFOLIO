'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Calendar, Award, MapPin, User } from "lucide-react";

const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("aboutme");
  const [mounted, setMounted] = useState<boolean>(false);
  const [isUserInteracting, setIsUserInteracting] = useState<boolean>(false);

  // Scroll-based animations
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -20]);
  const opacity = useTransform(scrollY, [0, 150, 300], [1, 0.9, 0.8]);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-switching tabs every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isUserInteracting) {
        setActiveTab(prev => prev === "aboutme" ? "education" : "aboutme");
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isUserInteracting]);

  // Handle user interaction
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setIsUserInteracting(true);
    
    // Resume auto-switching after 10 seconds of no interaction
    setTimeout(() => {
      setIsUserInteracting(false);
    }, 10000);
  };

  // Simple animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
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

  // Education data
  const educationData = [
    {
      degree: "B.Tech - Computer Science & Data Science",
      institution: "KIET, Andhra Pradesh",
      period: "2026",
      grade: "CGPA: 7.65",
      icon: GraduationCap,
      color: "text-blue-500"
    },
    {
      degree: "Intermediate (10+2)",
      institution: "SIR C.R. Reddy College, Eluru",
      period: "2020-2022",
      grade: "54.7%",
      icon: Award,
      color: "text-green-500"
    },
    {
      degree: "Secondary (10th)",
      institution: "Sai Rakesh School",
      period: "2019-2020",
      grade: "GPA: 9.65",
      icon: Award,
      color: "text-purple-500"
    }
  ];

  // Don't render until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen mx-auto bg-background transition-colors duration-300">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-16">
          <div className="flex justify-center mb-8">
            <div className="h-6 w-24 bg-background/20 rounded animate-pulse" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="h-60 bg-background/20 rounded-xl animate-pulse" />
            <div className="h-60 bg-background/20 rounded-xl animate-pulse" />
          </div>
        </section>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen mx-auto bg-background transition-colors duration-300"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      style={{ y, opacity }}
    >
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 pt-24 md:pt-24">

        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <User className="w-10 h-10 text-primary" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              About
              <span className="text-primary"> Me</span>
            </h2>
          </div>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-muted-foreground mt-3 text-base max-w-lg mx-auto">
            Passionate developer crafting digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-4xl mx-auto w-full">

          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center"
          >
            <motion.div 
              className="relative w-64 h-80 sm:w-72 sm:h-96 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-primary/5 rounded-2xl rotate-3 transition-transform duration-500 group-hover:rotate-1" />

              {/* Main image container */}
              <div className="relative w-full h-full bg-card border border-primary/20 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl p-1.5">
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <Image
                    fill
                    src="/my-img1.jpg"
                    alt="Mohan Sunkara - Web Developer"
                    className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    priority
                  />
                </div>
              </div>

              {/* Floating elements */}
              <motion.div 
                className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full opacity-60"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            <motion.div 
              className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-4 shadow-lg transition-all duration-500 hover:shadow-xl"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Tabs
                value={activeTab}
                onValueChange={handleTabChange}
                className="w-full"
              >
                <TabsList className="w-full bg-background/80 backdrop-blur-sm border border-primary/20 rounded-xl p-1 mb-4">
                  <TabsTrigger
                    value="aboutme"
                    className="flex-1 text-sm font-medium rounded-lg transition-all duration-500 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md hover:bg-primary/10"
                  >
                    About Me
                  </TabsTrigger>
                  <TabsTrigger
                    value="education"
                    className="flex-1 text-sm font-medium rounded-lg transition-all duration-500 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md hover:bg-primary/10"
                  >
                    Education
                  </TabsTrigger>
                </TabsList>

                {/* About Me Tab - Simplified Content */}
                <TabsContent value="aboutme" className="mt-0">
                  <motion.div
                    className="space-y-4"
                    key="aboutme-content"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      I&apos;m a passionate web developer focused on building clean, responsive applications with experience in <span className="text-primary font-semibold">React.js, Node.js, and MongoDB</span>. I blend creativity with logic to create meaningful digital solutions.
                    </p>

                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Currently pursuing B.Tech in Computer Science & Data Science, I enjoy collaborating on team projects and exploring new technologies to stay updated with the latest development trends.
                    </p>
                  </motion.div>
                </TabsContent>

                {/* Education Tab */}
                <TabsContent value="education" className="mt-0">
                  <motion.div
                    className="space-y-3"
                    key="education-content"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {educationData.map((edu, index) => {
                      const IconComponent = edu.icon;
                      return (
                        <motion.div
                          key={edu.degree}
                          className="group bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-3 hover:bg-primary/5 hover:border-primary/20 transition-all duration-300"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.4 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          <div className="flex items-start gap-3">
                            <motion.div 
                              className={`p-1.5 rounded-lg bg-primary/10 ${edu.color} transition-transform duration-300`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              <IconComponent className="w-4 h-4" />
                            </motion.div>

                            <div className="flex-1 space-y-1">
                              <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                {edu.degree}
                              </h3>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <MapPin className="w-3 h-3" />
                                <span>{edu.institution}</span>
                              </div>
                              <div className="flex items-center justify-between text-xs">
                                <div className="flex items-center gap-1 text-muted-foreground">
                                  <Calendar className="w-3 h-3" />
                                  <span>{edu.period}</span>
                                </div>
                                <span className="text-primary font-semibold">
                                  {edu.grade}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </TabsContent>
              </Tabs>

              {/* Auto-switch indicator */}
              {!isUserInteracting && (
                <motion.div 
                  className="flex justify-center mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex gap-1">
                    <motion.div 
                      className="w-2 h-1 bg-primary/30 rounded-full"
                      animate={{
                        backgroundColor: activeTab === "aboutme" ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.3)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div 
                      className="w-2 h-1 bg-primary/30 rounded-full"
                      animate={{
                        backgroundColor: activeTab === "education" ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.3)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
