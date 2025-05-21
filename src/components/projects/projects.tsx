import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ProjectsPage = () => {
  const projects = [
    {
     button: "TAFEA",
      title: "TAFEA – Teaching Assistant for Extra curricular Activities",
      description: "A platform built during my IIITH internship to streamline extracurricular teaching assistance. Developed using the MERN stack and focused on efficient user management and real-time coordination.",
      image: "/tafea.jpg", 
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "Tailwind CSS"],
      githubLink: "https://github.com/RCTS-K-Hub/WI2024-Team9.git", 
    },
    {
    button: "DATA DIAL",
      title: "Data Dialect",
      description: "Data Dialect is a smart content extraction and language intelligence platform that converts various data formats including images, audio, and video into editable and readable text. It also supports real-time language translation and PDF summarization, delivering concise keynotes from large documents. This tool streamlines content processing and enhances accessibility for multilingual users.",
      image: "/khub.jpg",
      technologies: ["React", "Flask", "NLP", "MongoDB"],
      githubLink: "https://github.com/Mohanchowdary1223/NLP-K_HUB-.git", 
    },
    {
    button: "MRS",
      title: "Music Recommendation System",
      description: "An AI-driven system that suggests music based on user preferences using data analysis techniques and recommendation algorithms. It enhances music discovery and personalization.",
      image: "/music.jpg",
      technologies: ["Python", "Machine Learning", "Pandas", "Flask", "React"],
      githubLink: "https://github.com/yourusername/music-recommendation", 
      liveLink: "https://github.com/Mohanchowdary1223/MRS.git",
    },
    
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 pt-24 md:pt-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 md:mb-12 text-center text-foreground relative after:content-[''] after:absolute after:w-16 sm:after:w-24 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">
          My Projects
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue={projects[0].button} className="w-full">
            <TabsList className="w-full flex flex-wrap gap-4 justify-center mb-3">
              {projects.map((project, index) => (
                <TabsTrigger
                  key={index}
                  value={project.button}
                  className="text-sm sm:text-base cursor-pointer hover:text-primary hover:border-primary data-[state=active]:text-primary data-[state=active]:border-primary dark:text-foreground dark:hover:text-primary dark:data-[state=active]:text-primary dark:data-[state=active]:border-primary transition-colors duration-200"
                >
                  {project.button}
                </TabsTrigger>
              ))}
            </TabsList>

            {projects.map((project, index) => (
              <TabsContent key={index} value={project.button}>
                <div className="bg-card rounded-xl overflow-hidden shadow-2xl border border-primary p-6 max-h-[70vh] sm:max-h-[70vh] lg:max-h-[60vh]">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative h-48 md:h-[400px]  md:w-1/2">
                      <Image
                        src={project.image}
                        alt={project.button}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="space-y-4 md:w-1/2">
                      <h3 className="text-xl font-bold mb-2 text-primary text-center">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-justify ">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 justify-center items-center">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-4 pt-4">
                        <Link
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          GitHub
                        </Link>
                        {project.liveLink && (
                          <Link
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                            Live Demo
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
