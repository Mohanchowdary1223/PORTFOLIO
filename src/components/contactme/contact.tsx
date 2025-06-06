import React from "react";
import { Button } from "../ui/button";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 pt-24 md:pt-25">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 md:mb-12 text-center text-foreground relative after:content-[''] after:absolute after:w-16 sm:after:w-24 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">
            Get in Touch
          </h2>
          <div className="flex items-center md:flex-row flex-col justify-center gap-10">
            <div className="bg-card p-10 w-[90%] lg:w-[40%] md:w-[50%] sm:w-[90%] border-2 border-primary rounded-lg shadow-lg ">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <p className="text-primary">mohansunkara963@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Phone</h3>
                    <p className="text-primary">+91 9182622919</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Location</h3>
                    <p className="text-primary">Kakinada, Andhra Pradesh, India</p>
                  </div>
                </div>
                <div className="flex justify-center items-center space-x-4 pt-2">
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="cursor-pointer hover:border-black hover:text-black dark:text-primary border-primary dark:border-primary dark:hover:text-white dark:hover:border-white text-primary z-50 transition-all duration-300 transform hover:scale-110"
                  >
                    <Link href="https://github.com/Mohanchowdary1223">
                      <FaGithub />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="cursor-pointer hover:border-black hover:text-black dark:text-primary border-primary dark:border-primary dark:hover:text-white dark:hover:border-white text-primary z-50 transition-all duration-300 transform hover:scale-110"
                  >
<Link href="mailto:mohansunkara963@gmail.com" aria-label="Email">
<FaEnvelope />
              </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="cursor-pointer hover:border-black hover:text-black dark:text-primary border-primary dark:border-primary dark:hover:text-white dark:hover:border-white text-primary z-50 transition-all duration-300 transform hover:scale-110"
                  >
                    <Link href="https://www.linkedin.com/in/mohan-chowdhury-a1a913281/">
                      <FaLinkedin />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="cursor-pointer hover:border-black hover:text-black dark:text-primary border-primary dark:border-primary dark:hover:text-white dark:hover:border-white text-primary z-50 transition-all duration-300 transform hover:scale-110"
                  >
                    <Link href="https://www.instagram.com/m_o_h_a_n__14000605">
                      <FaInstagram />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
