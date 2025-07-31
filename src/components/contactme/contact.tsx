"use client"
import React, { useState } from "react";
import { Button } from "../ui/button";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Copy, Check } from "lucide-react";

export const ContactPage = () => {
  // Scroll-based animations
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -30]);
  const opacity = useTransform(scrollY, [0, 150, 300], [1, 0.9, 0.8]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.98]);

  // Copy functionality state (removed copyMessage)
  const [isPhoneCopied, setIsPhoneCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+919182622919").then(() => {
      setIsPhoneCopied(true);
      setTimeout(() => {
        setIsPhoneCopied(false);
      }, 2000);
    }).catch(() => {
      setIsPhoneCopied(false);
    });
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contactCardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const ctaVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      reactIcon: FaEnvelope,
      label: "Email",
      value: "mohansunkara963@gmail.com",
      href: "mailto:mohansunkara963@gmail.com",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      reactIcon: FaPhone,
      label: "Phone",
      value: "+91 9182622919",
      color: "text-green-500",
      clickable: true
    },
    {
      icon: MapPin,
      reactIcon: FaMapMarkerAlt,
      label: "Location",
      value: "Kakinada, Andhra Pradesh, India",
      href: "https://maps.google.com/?q=Kakinada,Andhra Pradesh,India",
      color: "text-red-500"
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/Mohanchowdary1223",
      color: "hover:bg-gray-700"
    },
    {
      icon: FaEnvelope,
      label: "Email",
      href: "mailto:mohansunkara963@gmail.com",
      color: "hover:bg-blue-600"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohan-chowdhury-a1a913281/",
      color: "hover:bg-blue-700"
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      href: "https://www.instagram.com/m_o_h_a_n__14000605",
      color: "hover:bg-pink-600"
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-background transition-colors duration-300"
      style={{ y, opacity, scale }}
    >
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 pt-24 md:pt-24">
        
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <MessageCircle className="w-6 h-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Get in <span className="text-primary">Touch</span>
            </h2>
          </div>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full mb-3"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Let&apos;s connect and discuss how we can work together
          </p>
        </motion.div>

        {/* Main Content - Equal Height Cards */}
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-stretch min-h-[400px]">
            
            {/* Contact Information Card */}
            <motion.div
              variants={contactCardVariants}
              className="group relative flex-1"
              whileHover={{ y: -3 }}
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:border-primary/40 h-full flex flex-col">
                
                {/* Contact Header with Line */}
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Contact Information
                  </h3>
                  {/* Line after header */}
                  <div className="w-full h-px bg-gradient-to-r from-primary/40 via-primary/20 to-transparent"></div>
                </motion.div>

                <div className="space-y-0 flex-grow">
                  {contactInfo.map((contact, index) => {
                    const ReactIconComponent = contact.reactIcon;
                    
                    return (
                      <motion.div
                        key={contact.label}
                        className="group/item border-b border-primary/10 last:border-b-0"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        whileHover={{ x: 3 }}
                      >
                        {contact.clickable ? (
                          <button 
                            onClick={handleCopyPhone}
                            className="flex items-center space-x-3 p-3 hover:bg-primary/5 transition-all duration-300 w-full text-left"
                          >
                            <motion.div 
                              className={`p-2 rounded-full bg-primary/10 ${contact.color} group-hover/item:bg-primary/20 transition-colors duration-300`}
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                            >
                              <ReactIconComponent className="w-4 h-4" />
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="font-medium text-foreground group-hover/item:text-primary transition-colors duration-300 text-sm">
                                {contact.label}
                              </h3>
                              <p className="text-muted-foreground text-sm group-hover/item:text-primary/80 transition-colors duration-300">
                                {contact.value}
                              </p>
                            </div>
                            <motion.div
                              className="flex items-center justify-center w-6 h-6"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              {isPhoneCopied ? (
                                <Check className="w-3 h-3 text-green-500" />
                              ) : (
                                <Copy className="w-3 h-3 opacity-0 cursor-pointer group-hover/item:opacity-100 transition-opacity duration-300" />
                              )}
                            </motion.div>
                          </button>
                        ) : (
                          <Link 
                            href={contact.href!}
                            target={contact.label === "Location" ? "_blank" : undefined}
                            className="flex items-center space-x-3 p-3 hover:bg-primary/5 transition-all duration-300"
                          >
                            <motion.div 
                              className={`p-2 rounded-full bg-primary/10 ${contact.color} group-hover/item:bg-primary/20 transition-colors duration-300`}
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                            >
                              <ReactIconComponent className="w-4 h-4" />
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="font-medium text-foreground group-hover/item:text-primary transition-colors duration-300 text-sm">
                                {contact.label}
                              </h3>
                              <p className="text-muted-foreground text-sm group-hover/item:text-primary/80 transition-colors duration-300">
                                {contact.value}
                              </p>
                            </div>
                            <motion.div
                              className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                              animate={{ x: [0, 3, 0] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                              →
                            </motion.div>
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Social Links with top line */}
                <motion.div
                  className="mt-4 pt-4 border-t border-primary/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.6 }}
                >
                  <h4 className="text-xs font-semibold text-foreground/80 uppercase tracking-wide mb-3 text-center">
                    Connect
                  </h4>
                  <div className="flex justify-center items-center space-x-2">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      
                      return (
                        <motion.div
                          key={social.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: false }}
                          transition={{ delay: index * 0.1 + 0.7 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className={`cursor-pointer border-primary/40 hover:border-primary text-primary hover:text-primary-foreground transition-all duration-300 ${social.color} backdrop-blur-sm h-8 w-8 p-0`}
                          >
                            <Link 
                              href={social.href}
                              aria-label={social.label}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <IconComponent className="w-3 h-3" />
                            </Link>
                          </Button>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              variants={ctaVariants}
              className="group relative flex-1"
              whileHover={{ y: -3 }}
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:border-primary/40 h-full flex flex-col justify-center">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 }}
                >
                  {/* Contact Icon moved here */}
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-lg font-bold text-foreground mb-2 flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      Let&apos;s Work Together
                    </h3>
                  </motion.div>

                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Send className="w-6 h-6 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    Ready to Start Your Project?
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    Let&apos;s collaborate to bring your ideas to life with cutting-edge web solutions. 
                    I&apos;m always excited to work on new projects and challenges.
                  </p>

                  <motion.div
                    className="pt-4 border-t border-primary/10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-xs text-muted-foreground mb-2">
                      🚀 Currently available for new opportunities
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
