'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink, Calendar, Code, Folder } from "lucide-react";

export const ProjectsPage = () => {
  // Scroll-based animations
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -30]);
  const opacity = useTransform(scrollY, [0, 150, 300], [1, 0.9, 0.8]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.98]);

  const projects = [
    {
      title: "TAFEA – Teaching Assistant for Extra curricular Activities",
      description: "A comprehensive platform built during my IIITH internship to streamline extracurricular teaching assistance. Features efficient user management, real-time coordination, and administrative tools for enhanced educational experiences.",
      image: "/wi-img.png",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "Tailwind CSS"],
      githubLink: "https://github.com/RCTS-K-Hub/WI2024-Team9.git",
      category: "Full Stack Web App",
      year: "2024"
    },
    {
      title: "Data Dialect",
      description: "An intelligent content extraction and language processing platform that converts multimedia formats (images, audio, video) into editable text. Features real-time translation, PDF summarization, and multilingual accessibility tools.",
      image: "/dd-img.png",
      technologies: ["React", "Flask", "NLP", "MongoDB", "Python", "AI/ML"],
      githubLink: "https://github.com/Mohanchowdary1223/NLP-K_HUB-.git",
      category: "AI/ML Platform",
      year: "2024"
    },
    {
      title: "Music Recommendation System",
      description: "An AI-powered music discovery platform that analyzes user preferences and listening patterns to deliver personalized recommendations. Utilizes advanced machine learning algorithms for enhanced music exploration.",
      image: "/mrs-img.png",
      technologies: ["Python", "Machine Learning", "Pandas", "Flask", "React", "Data Science"],
      githubLink: "https://github.com/yourusername/music-recommendation",
      liveLink: "https://github.com/Mohanchowdary1223/MRS.git",
      category: "ML Recommendation",
      year: "2024"
    },
  ];

  // Enhanced Animation variants
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const projectCardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
      rotateX: 10
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-background transition-colors duration-300"
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
            <Folder className="w-6 h-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              My <span className="text-primary">Projects</span>
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
            A showcase of my technical expertise and creative problem-solving
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={projectCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Enhanced Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-105" />
                
                {/* Main Card */}
                <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:border-primary/40">
                  
                  {/* Year Badge - Top Right */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 px-2 py-1 bg-background/80 backdrop-blur-sm rounded-full border border-primary/20">
                      <Calendar className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{project.year}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Project Title */}
                    <motion.h3 
                      className="text-xl lg:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Project Category Badge - After Title */}
                    <div className="mb-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
                        <Code className="w-3 h-3 text-primary" />
                        <span className="text-xs font-semibold text-primary">{project.category}</span>
                      </div>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-6 items-start">
                      
                      {/* Enhanced Project Image */}
                      <motion.div 
                        className="relative overflow-hidden rounded-lg bg-background/50 border border-primary/10 shadow-md group-hover:shadow-lg transition-all duration-500"
                        whileHover={{ scale: 1.02, rotateY: 2 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <div className="aspect-video relative">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                          />
                          {/* Enhanced Overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <motion.div 
                              className="text-white font-semibold px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full"
                              initial={{ scale: 0.8, y: 20 }}
                              whileHover={{ scale: 1, y: 0 }}
                            >
                              View Project
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Project Details */}
                      <div className="space-y-4">
                        {/* Description */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                          transition={{ delay: 0.2 }}
                        >
                          <p className="text-muted-foreground leading-relaxed text-sm text-justify">
                            {project.description}
                          </p>
                        </motion.div>
                        
                        {/* Technologies */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                          transition={{ delay: 0.3 }}
                          className="space-y-2"
                        >
                          <h4 className="text-xs font-semibold text-foreground/80 uppercase tracking-wide">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech, techIndex) => (
                              <motion.span
                                key={techIndex}
                                className="px-2.5 py-1 bg-primary/10 hover:bg-primary/20 text-primary rounded-md text-xs font-medium border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ delay: techIndex * 0.1 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                        
                        {/* Enhanced Action Buttons */}
                        <motion.div 
                          className="flex flex-wrap gap-3 pt-2"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false }}
                          transition={{ delay: 0.4 }}
                        >
                          <Link
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn"
                          >
                            <motion.div
                              className="flex items-center gap-2 px-3 py-2 bg-background hover:bg-primary text-foreground hover:text-primary-foreground border-2 border-primary rounded-lg font-medium transition-all duration-300 hover:shadow-md hover:shadow-primary/25 text-sm"
                              whileHover={{ scale: 1.02, y: -2 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                              <span>View Code</span>
                            </motion.div>
                          </Link>
                          
                          {project.liveLink && (
                            <Link
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/btn"
                            >
                              <motion.div
                                className="flex items-center gap-2 px-3 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:shadow-md hover:shadow-primary/25 text-sm"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                                <span>Live Demo</span>
                              </motion.div>
                            </Link>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default ProjectsPage;
