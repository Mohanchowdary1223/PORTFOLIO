import React from "react";
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

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 md:mb-12 text-center text-foreground relative after:content-[''] after:absolute after:w-16 sm:after:w-24 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">
        My Services
      </h2>{" "}
      <div className="grid grid-cols-1 max-w-4xl mx-auto md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex bg-card text-card-foreground shadow-2xl rounded-lg border-2 border-primary p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg dark:shadow-none"
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
            <div className="flex-1">
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
    </div>
  );
};

export default Services;
