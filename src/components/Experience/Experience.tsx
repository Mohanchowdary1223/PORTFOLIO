"use client"
import React from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Experience = () => {
  const experiences = [
    {
      title: "KHUB-KIET",
      role: "UI/UX Designer, Frontend & Backend Developer",
      location: "KIET, Kakinada (On-campus)",
      duration: "August 2024 – April 2025",
      image: "/khub-i-crt.jpg",
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

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 pt-24 md:pt-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 md:mb-12 text-center text-foreground relative after:content-[''] after:absolute after:w-16 sm:after:w-24 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">
          My Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl overflow-hidden shadow-2xl border-2 border-primary p-6">
            <Accordion type="single" collapsible className="w-full">
              {experiences.map((exp, index) => (
                <AccordionItem key={index} value={exp.title.toLowerCase().replace(/\s+/g, '-')}>
                  <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
                    {exp.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-4 rounded-lg hover:bg-primary/10 transition-colors duration-200 space-y-4">
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="relative h-48 w-full md:h-[400px] md:w-[400px]">
                          <Image
                            src={exp.image}
                            alt={exp.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-contain rounded-lg w-full h-full"
                          />
                        </div>
                        
                        <div className="flex-1 space-y-4">
                          <div className="space-y-2">
                            <p className="text-base font-medium">{exp.role}</p>
                            <p className="text-sm text-muted-foreground">{exp.location}</p>
                            <p className="text-sm text-muted-foreground">{exp.duration}</p>
                          </div>

                          <div className="space-y-4">
                            {exp.contributions.map((contribution, idx) => (
                              <div key={idx} className="space-y-2">
                                <h4 className="text-sm font-semibold text-primary">{contribution.title}</h4>
                                {Array.isArray(contribution.description) ? (
                                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                    {contribution.description.map((item, i) => (
                                      <li key={i}>{item}</li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p className="text-sm text-muted-foreground">{contribution.description}</p>
                                )}
                              </div>
                            ))}
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-2">Tools & Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, idx) => (
                                <span key={idx} className="px-2 py-1 text-xs bg-primary/10 rounded-full text-primary">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;