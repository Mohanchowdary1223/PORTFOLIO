import React from "react";
import { BackgroundLines } from "../ui/background-lines";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export const ContactPage = () => {
  return (
    
      <div className="min-h-screen bg-background  dark:bg-white transition-colors duration-300">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 pt-24 md:pt-32">
          <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 md:mb-12 text-center dark:text-gray-800 text-white relative after:content-[''] after:absolute after:w-16 sm:after:w-24 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">
          Get in Touch
            </h2>
            
            <div className="flex items-center md:flex-row flex-col justify-center gap-10">
              {/* Contact Information */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4 dark:text-gray-800">Contact Information</h2>
                
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium dark:text-gray-800">Email</h3>
                    <p className="text-primary">mohansunkara963@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium dark:text-gray-800">Phone</h3>
                    <p className="text-primary ">+91 9182622919</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium dark:text-gray-800">Location</h3>
                    <p className="text-primary ">Kakinada, Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-50 p-4 w-[90%] lg:w-[50%] md:w-[50%] sm:w-[90%] border-2 border-primary rounded-lg shadow-lg">
                <form className="space-y-3">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-800 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-800 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-800 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Message"
                      className="w-full min-h-[100px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default ContactPage;
