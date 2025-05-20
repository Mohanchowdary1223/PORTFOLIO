import React from "react";
import Image from "next/image";

export const AboutPage = () => {
  return (
    <div className="min-h-screen mx-auto bg-background transition-colors duration-300">

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 pt-24 md:pt-32">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 md:mb-16 text-center text-foreground relative after:content-[''] after:absolute after:w-16 sm:after:w-24 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-4xl mx-auto">
          <div className="relative h-48 sm:h-64 md:h-80 flex justify-center">
            <div className="aspect-video rounded-2xl w-[65%] sm:w-[85%] md:w-[90%] h-full bg-card border-primary border-2 shadow-2xl hover:shadow-xl transition-all duration-300 p-3 sm:p-4 relative">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <Image
                  fill
                  src={"/my-img1.jpg"}
                  alt="My Image"
                  className="object-cover transform transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="space-y-4 px-4 sm:px-0">
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
              I&apos;m a passionate developer with a focus on crafting clean,
              responsive web applications. With hands-on experience in both
              frontend and backend technologies like React.js, Node.js, and
              MongoDB, I enjoy building user-friendly solutions that bring
              real-world ideas to life.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
              When I&apos;m not coding, you&apos;ll find me designing intuitive
              interfaces in Figma, collaborating on team projects, or exploring
              new tools and frameworks to sharpen my skills.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
