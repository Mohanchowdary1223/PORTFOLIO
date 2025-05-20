import Image from "next/image";
import React from "react";

export const SkillsPage = () => {
  const skills = [
    {
      name: "React",
      icon: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
    },
    {
      name: "Next.js",
      icon: "https://img.icons8.com/?size=100&id=12276&format=png&color=000000",
    },
    {
      name: "TailwindCSS",
      icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
    },
    {
      name: "MongoDB",
      icon: "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000",
    },
    {
      name: "Python",
      icon: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
    },
    {
      name: "C",
      icon: "https://img.icons8.com/?size=100&id=40670&format=png&color=000000",
    },
    {
      name: "PostgreSQL",
      icon: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
    },

    {
      name: "JavaScript",
      icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
    },
    {
      name: "Machine Learning",
      icon: "https://img.icons8.com/?size=100&id=NL90I8YT1YnN&format=png&color=000000",
    },

    {
      name: "Express.js",
      icon: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
    },

    {
      name: "CSS",
      icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
    },
    {
      name: "HTML",
      icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    },
    {
      name: "Node.js",
      icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
    },

    {
      name: "Git",
      icon: "https://img.icons8.com/?size=100&id=106567&format=png&color=000000",
    },
    {
      name: "Figma(UI/UX)",
      icon: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
    },
  ];
  return (
    <div className="min-h-screen bg-background dark:bg-white transition-colors duration-300">
      {/* Skills Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 pt-24 md:pt-32">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 md:mb-16 text-center dark:text-gray-800 text-white relative after:content-[''] after:absolute after:w-16 sm:after:w-24 after:h-1 after:bg-blue-500 after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">
          My Skills
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="hidden md:flex md:flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="dark:bg-white flex-1 bg-gray-800 rounded-xl sm:p-6 text-center transform hover:scale-105 hover:shadow-xl transition-all duration-300 border shadow-2xl border-primary flex items-center gap-1 justify-center group"
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  height={40}
                  width={40}
                  className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300"
                />
                <p className="whitespace-nowrap text-base sm:text-sm md:text-lg font-semibold dark:text-gray-700 text-gray-300">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
          
          {/* Mobile view */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="dark:bg-white bg-gray-800 rounded-xl p-3 text-center transform hover:scale-105 hover:shadow-xl transition-all duration-300 border shadow-2xl border-primary flex items-center gap-2 justify-center group"
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  height={40}
                  width={40}
                  className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                />
                <p className="text-sm font-semibold dark:text-gray-700 text-gray-300">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
