"use client"
import React from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { Briefcase, MapPin, Calendar, Code, Award, ChevronDown } from "lucide-react";


const Experience = () => {
  // Scroll-based animations
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -30]);
  const opacity = useTransform(scrollY, [0, 150, 300], [1, 0.9, 0.8]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.98]);


  const experiences = [
    {
      title: "KHUB-KIET",
      role: "UI/UX Designer, Frontend & Backend Developer",
      location: "KIET, Kakinada (On-campus)",
      duration: "August 2024 – April 2025",
      image: "/khub-i-crt.jpg",
      type: "Full-time Position",
      contributions: [
        {
          title: "UI/UX Design",
          description: "Designed intuitive and clean user interfaces using Figma, ensuring smooth user experiences across devices"
        },
        {
          title: "Fullstack Development",
          description: [
            "Developed the frontend using React JS, HTML, and CSS",
            "Integrated backend using Flask, connecting APIs with the frontend",
            "Used MongoDB (with GridFS) to store files and user data"
          ]
        },
        {
          title: "Authentication Features",
          description: [
            "Implemented Forgot Password and Change Password functionalities",
            "Enabled users to update profile details and delete history"
          ]
        }
      ],
      technologies: ["React JS", "HTML", "CSS", "Figma", "Flask", "MongoDB", "GridFS"]
    },
    {
      title: "Winter Intern - IIITH",
      role: "Web Developer",
      location: "Remote",
      duration: "December 5, 2024 – January 5, 2025",
      image: "/wi-crt-img.jpg",
      type: "Internship",
      contributions: [
        {
          title: "Project: TAFEA",
          description: [
            "Developed and tested the initial version of the platform designed to manage and assign co-curricular tasks to teaching assistants",
            "Built responsive components using React JS and JavaScript",
            "Worked on backend connectivity and data storage using Flask and MongoDB",
            "Participated in feedback sessions with mentors, contributing to iterative development and improvements"
          ]
        }
      ],
      technologies: ["React JS", "JavaScript", "Flask", "MongoDB"]
    }
  ];


  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
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


  const experienceCardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
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
            <Briefcase className="w-6 h-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              My <span className="text-primary">Experience</span>
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
            My journey in web development and software engineering
          </p>
        </motion.div>
        
        {/* Experience Cards */}
        <motion.div 
          className="max-w-4xl mx-auto "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="space-y-6 ">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="group relative "
                variants={experienceCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Main Card - Removed hover animations */}
                <div className="relative  bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl overflow-hidden shadow-lg">
                  
                  {/* Experience Type Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 px-2 py-1 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
                      <Award className="w-3 h-3 text-primary" />
                      <span className="text-xs font-semibold text-primary">{exp.type}</span>
                    </div>
                  </div>


                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={exp.title.toLowerCase().replace(/\s+/g, '-')} className="border-none">
                      <AccordionTrigger className="text-lg font-semibold text-foreground px-6 py-4 cursor-pointer">
                        <div className="flex items-center gap-3 w-full">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Briefcase className="w-5 h-5 text-primary" />
                          </div>
                          <div className="text-left flex-1">
                            <div className="font-bold">{exp.title}</div>
                            <div className="text-sm text-muted-foreground font-normal">{exp.role}</div>
                            <div className="text-xs text-primary/70 font-normal mt-1 flex items-center gap-1">
                              <span>Click to view more</span>
                              <ChevronDown className="w-3 h-3" />
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      
                      <AccordionContent>
                        <div className="px-6 pb-6">
                          <div className="bg-primary/5 backdrop-blur-sm rounded-lg p-4 border border-primary/10">
                            
                            {/* Header Info */}
                            <div className="flex flex-col lg:flex-row gap-6 mb-6">
                              
                              {/* Image Container - Full Height Match */}
                              <div className="relative overflow-hidden rounded-lg bg-background/50 border  border-primary/10 shadow-md flex-shrink-0">
                                {/* Image fills full height of container */}
                                <div className="w-full h-80 sm:h-96 lg:w-80 lg:h-full xl:w-96 relative flex items-center justify-center bg-background/10">
                                  <Image
                                    src={exp.image}
                                    alt={exp.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 320px, 384px"
                                    className="object-contain"
                                    style={{ objectFit: 'contain' }}
                                    priority={index === 0}
                                    unoptimized
                                  />
                                </div>
                              </div>
                              
                              {/* Experience Details */}
                              <div className="flex-1 space-y-4 min-w-0">
                                
                                {/* Basic Info */}
                                <div className="space-y-3">
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                                    <span>{exp.location}</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                                    <span>{exp.duration}</span>
                                  </div>
                                </div>


                                {/* Contributions */}
                                <div className="space-y-4">
                                  <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wide flex items-center gap-2">
                                    <Code className="w-4 h-4 text-primary" />
                                    Key Contributions
                                  </h4>
                                  
                                  {exp.contributions.map((contribution, idx) => (
                                    <div 
                                      key={idx} 
                                      className="space-y-2 p-3 bg-background/50 rounded-lg border border-primary/10"
                                    >
                                      <h5 className="text-sm font-semibold text-primary">{contribution.title}</h5>
                                      {Array.isArray(contribution.description) ? (
                                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-2">
                                          {contribution.description.map((item, i) => (
                                            <li key={i} className="leading-relaxed">{item}</li>
                                          ))}
                                        </ul>
                                      ) : (
                                        <p className="text-sm text-muted-foreground leading-relaxed">{contribution.description}</p>
                                      )}
                                    </div>
                                  ))}
                                </div>


                                {/* Technologies */}
                                <div className="space-y-2">
                                  <h4 className="text-xs font-semibold text-foreground/80 uppercase tracking-wide">
                                    Technologies Used
                                  </h4>
                                  <div className="flex flex-wrap gap-1.5">
                                    {exp.technologies.map((tech, idx) => (
                                      <span
                                        key={idx}
                                        className="px-2.5 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium border border-primary/20"
                                      >
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};


export default Experience;
