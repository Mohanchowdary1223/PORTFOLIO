'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink, Calendar, Code, Folder } from "lucide-react";

export const ProjectsPage = () => {
  // Simple scroll-based animations
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -20]);
  const opacity = useTransform(scrollY, [0, 150, 300], [1, 0.9, 0.8]);

  const projects = [
    {
      title: "BloodBridge",
      description: "A comprehensive blood donation platform that connects donors with recipients in need. Features an AI health assistant that provides specialized healthcare responses, donor search functionality, and blood donation management. The platform ensures safe and efficient blood donation processes with intelligent health guidance.",
      image: "/bloodbridge.png", // You'll need to add this image
      technologies: ["Next.js", "Tailwind CSS", "MongoDB", "AI Assistant", "Healthcare"],
      githubLink: "https://github.com/Mohanchowdary1223/BloodBridge.git", // Update with actual GitHub link
      liveLink: "https://bloodbridgemohan.vercel.app/",
      category: "Healthcare Platform",
      year: "2025"
    },
    {
      title: "Data Dialect",
      description: "An intelligent content extraction and language processing platform that converts multimedia formats (images, audio, video) into editable text. Features real-time translation, PDF summarization, and multilingual accessibility tools.",
      image: "/dd-img.png",
      technologies: ["React", "Flask", "NLP", "MongoDB", "Python", "AI/ML"],
      githubLink: "https://github.com/Mohanchowdary1223/NLP-K_HUB-.git",
      category: "NLP Platform",
      year: "2024"
    },
    {
      title: "TAFEA – Teaching Assistant for Extra curricular Activities",
      description: "A comprehensive platform built during my IIITH internship to streamline extracurricular teaching assistance. Features efficient user management, real-time coordination, and administrative tools for enhanced educational experiences.",
      image: "/wi-img.png",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "Tailwind CSS"],
      githubLink: "https://github.com/RCTS-K-Hub/WI2024-Team9.git",
      category: "NGO Platform",
      year: "2024"
    },
  ];

  return (
    <motion.div 
      className="min-h-screen bg-background transition-colors duration-300"
      style={{ y, opacity }}
    >
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 pt-24 md:pt-24">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            A showcase of my technical expertise and creative problem-solving
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ 
                  once: false, 
                  amount: 0.3,
                  margin: "0px 0px -100px 0px"
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut"
                }}
              >
                {/* Main Card */}
                <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl overflow-hidden shadow-lg">
                  
                  {/* Year Badge - Top Right */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 px-2 py-1 bg-background/80 backdrop-blur-sm rounded-full border border-primary/20">
                      <Calendar className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{project.year}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Project Title */}
                    <h3 className="text-xl lg:text-2xl font-bold mb-3 text-foreground">
                      {project.title}
                    </h3>

                    {/* Project Category Badge */}
                    <div className="mb-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
                        <Code className="w-3 h-3 text-primary" />
                        <span className="text-xs font-semibold text-primary">{project.category}</span>
                      </div>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-6 items-start">
                      
                      {/* Project Image */}
                      <div className="relative overflow-hidden rounded-lg bg-background/50 border border-primary/10 shadow-md">
                        <div className="aspect-video relative">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Project Details */}
                      <div className="space-y-4">
                        {/* Description */}
                        <div>
                          <p className="text-muted-foreground leading-relaxed text-sm text-justify">
                            {project.description}
                          </p>
                        </div>
                        
                        {/* Technologies */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-semibold text-foreground/80 uppercase tracking-wide">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2.5 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium border border-primary/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3 pt-2">
                          <Link
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="flex items-center gap-2 px-3 py-2 bg-background border-2 border-primary rounded-lg font-medium text-sm">
                              <Github className="w-4 h-4" />
                              <span>View Code</span>
                            </div>
                          </Link>
                          
                          {project.liveLink && (
                            <Link
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm">
                                <ExternalLink className="w-4 h-4" />
                                <span>Live Demo</span>
                              </div>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectsPage;
