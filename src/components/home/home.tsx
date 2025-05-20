import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { Button } from "../ui/button";
import { BackgroundLines } from "../ui/background-lines";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300 flex">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-16 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <BackgroundLines className="flex items-center justify-center w-full  flex-col px-4">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 animate-gradient px-4">
              Hi, I&apos;m Mohan Sunkara - Where creativity meets functionality.
            </h1>

            <p className="text-base sm:text-lg lg:text-sm text-foreground/70 text-center max-w-3xl mx-auto mb-4 sm:mb-6 px-4">
              Proficient in the <span className="text-primary">MERN STACK</span>
              , responsive design, <span className="text-primary">UI/UX</span>{" "}
              and modern development tools. I strive to bridge the gap between
              design and technology to create impactful web experiences.
            </p>
            <p className="text-lg  sm:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 font-dancing-script px-4">
              I turn ideas into interactive web experiences.
            </p>

            <div className="flex justify-center items-center space-x-6 mb-8 md:mb-4">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="cursor-pointer border-black text-black dark:hover:text-primary hover:border-primary dark:hover:border-primary dark:text-white dark:border-white hover:text-primary z-50 transition-all duration-300 transform hover:scale-110"
              >
                <Link href="https://github.com/Mohanchowdary1223">
                  <FaGithub />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="cursor-pointer border-black text-black dark:hover:text-primary hover:border-primary dark:hover:border-primary dark:text-white dark:border-white hover:text-primary z-50 transition-all duration-300 transform hover:scale-110"
              >
                <Link
                  href="mailto:mohansunkara963@gmail.com"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="cursor-pointer border-black text-black dark:hover:text-primary hover:border-primary dark:hover:border-primary dark:text-white dark:border-white hover:text-primary z-50 transition-all duration-300 transform hover:scale-110"
              >
                <Link href="https://www.linkedin.com/in/mohan-chowdhury-a1a913281/">
                  <FaLinkedin />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="cursor-pointer border-black text-black dark:hover:text-primary hover:border-primary dark:hover:border-primary dark:text-white dark:border-white hover:text-primary z-50 transition-all duration-300 transform hover:scale-110"
              >
                <Link href="https://www.instagram.com/m_o_h_a_n__14000605">
                  <FaInstagram />
                </Link>
              </Button>
            </div>
          </div>
        </BackgroundLines>
      </section>
    </div>
  );
};

export default HomePage;
