'use client'
import React, { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useEmblaCarousel from 'embla-carousel-react';
import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Calendar, Award, MapPin, User } from "lucide-react";

const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("aboutme");
  const [mounted, setMounted] = useState<boolean>(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: 'keepSnaps',
    align: 'start',
    loop: true
  });
  const autoScrollPaused = useRef<boolean>(false);

  // Scroll-based animations
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -30]);
  const opacity = useTransform(scrollY, [0, 150, 300], [1, 0.9, 0.8]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.98]);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll events
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    const tabs = ["aboutme", "education"];
    setActiveTab(tabs[index]);

    autoScrollPaused.current = true;
    setTimeout(() => {
      autoScrollPaused.current = false;
    }, 1000);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!autoScrollPaused.current && emblaApi) {
        emblaApi.scrollNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  // Sync carousel with active tab - Fixed with mounted check
  useEffect(() => {
    if (emblaApi && mounted) {
      const index = activeTab === "aboutme" ? 0 : 1;
      emblaApi.scrollTo(index);
    }
  }, [activeTab, emblaApi, mounted]);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, x: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const tabContentVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
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
      style={{ y, opacity, scale }}
    >
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 pt-24 md:pt-24">

        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
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
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="text-muted-foreground mt-3 text-base max-w-lg mx-auto">
            Passionate developer crafting digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-4xl mx-auto w-full">

          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="relative flex justify-center"
          >
            <motion.div
              className="relative w-64 h-80 sm:w-72 sm:h-96 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background decoration */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/15 to-primary/5 rounded-2xl rotate-3 group-hover:rotate-1 transition-transform duration-500"
                initial={{ rotate: 3, opacity: 0 }}
                whileInView={{ rotate: 3, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />

              {/* Main image container */}
              <div className="relative w-full h-full bg-card border border-primary/20 rounded-2xl shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-500 p-1.5">
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
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Content Section - Fixed with Embla carousel for auto-scroll */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="space-y-4"
          >
            <motion.div
              className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-500"
              variants={cardVariants}
              whileHover={{ y: -3 }}
            >
              <Tabs
                value={activeTab}
                onValueChange={(value) => {
                  setActiveTab(value);
                  // Pause auto-scroll when user manually changes tab
                  autoScrollPaused.current = true;
                  setTimeout(() => {
                    autoScrollPaused.current = false;
                  }, 3000); // 3 second pause
                }}
                className="w-full"
              >
                <TabsList className="w-full bg-background/80 backdrop-blur-sm border border-primary/20 rounded-xl p-1 mb-4">
                  <TabsTrigger
                    value="aboutme"
                    className="flex-1 text-sm font-medium rounded-lg transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md hover:bg-primary/10"
                  >
                    About Me
                  </TabsTrigger>
                  <TabsTrigger
                    value="education"
                    className="flex-1 text-sm font-medium rounded-lg transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md hover:bg-primary/10"
                  >
                    Education
                  </TabsTrigger>
                </TabsList>

                {/* Embla carousel wrapper for auto-scroll functionality */}
                <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex">

                    {/* About Me Tab */}
                    <div className="flex-[0_0_100%] min-w-0">
                      <TabsContent value="aboutme" className="mt-0" forceMount>
                        <motion.div
                          className="space-y-4"
                          variants={tabContentVariants}
                          initial="hidden"
                          whileInView={activeTab === "aboutme" ? "visible" : "hidden"}
                          viewport={{ once: false, amount: 0.3 }}
                        >
                          <motion.p
                            className="text-muted-foreground leading-relaxed text-sm"
                            variants={cardVariants}
                          >
                            I&apos;m a passionate web developer focused on building clean, responsive applications.
                            With experience in <span className="text-primary font-semibold">React.js, Node.js, and MongoDB</span>,
                            I blend creativity with logic for real-world solutions.
                          </motion.p>

                          <motion.p
                            className="text-muted-foreground leading-relaxed text-sm"
                            variants={cardVariants}
                          >
                            My skills span full-stack development and <span className="text-primary font-semibold">UI/UX design</span>.
                            I write clean, maintainable code and continuously learn through practical projects and internships.
                          </motion.p>

                          <motion.p
                            className="text-muted-foreground leading-relaxed text-sm"
                            variants={cardVariants}
                          >
                            I enjoy collaborating on team projects and have gained practical exposure through multiple virtual internships in areas like <span className="text-primary font-semibold">cybersecurity, cloud, and automation</span>. Outside of coding, I&apos;m often exploring new tools and tech trends.
                          </motion.p>

                          {/* Skills highlight */}
                          <motion.div
                            className="grid grid-cols-3 gap-2 mt-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView={activeTab === "aboutme" ? "visible" : "hidden"}
                            viewport={{ once: false, amount: 0.3 }}
                          >
                            {['React.js', 'Node.js', 'MongoDB', 'UI/UX', 'TypeScript', 'Next.js'].map((skill, index) => (
                              <motion.div
                                key={skill}
                                className="bg-primary/10 text-primary px-2 py-1 rounded-md text-center text-xs font-medium hover:bg-primary/20 transition-colors duration-300"
                                variants={cardVariants}
                                custom={index}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {skill}
                              </motion.div>
                            ))}
                          </motion.div>
                        </motion.div>
                      </TabsContent>
                    </div>

                    {/* Education Tab */}
                    <div className="flex-[0_0_100%] min-w-0">
                      <TabsContent value="education" className="mt-0" forceMount>
                        <motion.div
                          className="space-y-3"
                          variants={tabContentVariants}
                          initial="hidden"
                          whileInView={activeTab === "education" ? "visible" : "hidden"}
                          viewport={{ once: false, amount: 0.3 }}
                        >
                          {educationData.map((edu, index) => {
                            const IconComponent = edu.icon;
                            return (
                              <motion.div
                                key={edu.degree}
                                className="group bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-3 hover:bg-primary/5 hover:border-primary/20 transition-all duration-300"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{
                                  opacity: activeTab === "education" ? 1 : 0,
                                  x: activeTab === "education" ? 0 : -20
                                }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ delay: activeTab === "education" ? index * 0.1 : 0 }}
                                whileHover={{ x: 3 }}
                              >
                                <div className="flex items-start gap-3">
                                  <motion.div
                                    className={`p-1.5 rounded-lg bg-primary/10 ${edu.color} group-hover:scale-110 transition-transform duration-300`}
                                    whileHover={{ rotate: 5 }}
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
                    </div>
                  </div>
                </div>
              </Tabs>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
