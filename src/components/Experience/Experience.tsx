"use client"
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useEmblaCarousel from 'embla-carousel-react';


const Experience = () => {
  const [activeTab, setActiveTab] = useState("KHUB-KIET");
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    dragFree: true, 
    containScroll: 'trimSnaps',
    align: 'start'
  });
  const autoScrollPaused = useRef(false);

  // Handle scroll events
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    const tabs = ["KHUB-KIET", "Winter Intern"];
    setActiveTab(tabs[index]);
    
    // Pause auto-scroll when user interacts
    autoScrollPaused.current = true;
    setTimeout(() => {
      autoScrollPaused.current = false;
    }, 30000); // 30 seconds pause
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
      if (!autoScrollPaused.current) {
        setActiveTab((current) => {
          if (current === "KHUB-KIET") return "Winter Intern";
          return "KHUB-KIET";
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Sync carousel with active tab
  useEffect(() => {
    if (emblaApi) {
      const index = activeTab === "KHUB-KIET" ? 0 : 1;
      emblaApi.scrollTo(index);
    }
  }, [activeTab, emblaApi]);

  const experiences = [
    {
      button: "KHUB-KIET",
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
      button: "Winter Intern",
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
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full flex flex-wrap gap-4 justify-center mb-3">
              {experiences.map((exp, index) => (
                <TabsTrigger
                  key={index}
                  value={exp.button}
                  className="text-sm sm:text-base cursor-pointer hover:text-primary data-[state=active]:text-primary data-[state=active]:border-primary dark:text-foreground dark:hover:text-primary dark:data-[state=active]:text-primary dark:data-[state=active]:border-primary transition-colors duration-200"
                >
                  {exp.button}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="bg-card rounded-xl overflow-hidden shadow-2xl border border-primary p-6">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {experiences.map((exp, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0">
                      <div>
                        <h3 className="text-2xl font-bold mb-4 text-primary text-center border-b border-primary/30 pb-4">
                          {exp.title}
                        </h3>
                        <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
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
                              <p className="text-lg font-semibold text-primary">{exp.role}</p>
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Experience;