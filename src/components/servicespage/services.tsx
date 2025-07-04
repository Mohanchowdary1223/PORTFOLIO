"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Crafting clean, intuitive, and user-friendly interfaces using Figma. Focus on wireframing, prototyping, responsive design, and accessibility.",
      icon: "https://img.icons8.com/ios-filled/100/000000/design.png"
    },
    {
      title: "Frontend Development",
      description:
        "Building responsive and interactive web applications using React JS, JavaScript, HTML, and CSS with component-based architecture.",
      icon: "https://img.icons8.com/ios-filled/100/000000/code.png"
    },
    {
      title: "Backend Development",
      description:
        "Creating secure, scalable backend systems with Flask, RESTful API development, and robust authentication systems.",
      icon: "https://img.icons8.com/ios-filled/100/000000/server.png"
    },
    {
      title: "Database Integration",
      description:
        "Efficient data storage and retrieval solutions using MongoDB, GridFS for large files, and seamless backend integration.",
      icon: "https://img.icons8.com/ios-filled/100/000000/database.png"
    },
    {
      title: "Fullstack Development",
      description:
        "End-to-end web solutions from UI/UX Design to Database, implementing features like authentication and profile management.",
      icon: "https://img.icons8.com/ios-filled/100/000000/stack.png"
    },
    {
      title: "Testing & Debugging",
      description:
        "Cross-browser compatibility testing, frontend and backend debugging, error handling and performance optimization.",
      icon: "https://img.icons8.com/ios-filled/100/000000/test.png"
    },
  ];

  // Duplicate services for seamless marquee
  const marqueeServices = [...services, ...services];

  // Responsive animation duration
  const [marqueeDuration, setMarqueeDuration] = useState(30);

  useEffect(() => {
    setMarqueeDuration(30); // same speed for all screens
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-2 sm:px-4 py-10 sm:py-16 via-primary/10 to-background">
      <h2 className="text-3xl sm:text-4xl pt-24 md:pt-10 font-bold mb-12 md:mb-16 text-center text-foreground relative after:content-[''] after:absolute after:w-16 sm:after:w-24 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">
        My Services
      </h2>
      <div className="w-full max-w-6xl overflow-hidden relative flex-1 flex items-center">
        <div
          className="flex gap-8 min-w-full"
          style={{
            animation: `marquee ${marqueeDuration}s linear infinite`,
            willChange: 'transform',
          }}
        >
          {marqueeServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col min-w-[240px] sm:min-w-[280px] md:min-w-[320px] items-center justify-center gap-8 bg-card text-card-foreground shadow-2xl rounded-lg border-2 border-primary p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg dark:shadow-none"
            >
              <div className="w-16 min-w-16 mr-6 flex items-center justify-center">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain dark:invert"
                />
              </div>
              <div className="flex-1 justify-center items-center">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-200%); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Services;
