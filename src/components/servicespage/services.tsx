"use client"
import Image from "next/image";
import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { Settings, Palette, Code, Globe, Bug } from "lucide-react";

const Services = () => {
  // Scroll-based animations
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -30]);
  const opacity = useTransform(scrollY, [0, 150, 300], [1, 0.9, 0.8]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.98]);

  const services = [
    {
      title: "UI/UX Design",
      description:
        "Crafting clean, intuitive, and user-friendly interfaces using Figma. Focus on wireframing, prototyping, responsive design, and accessibility.",
      icon: "https://img.icons8.com/ios-filled/100/000000/design.png",
      category: "Design",
      features: ["Wireframing", "Prototyping", "Responsive Design", "User Research"]
    },
    {
      title: "Frontend Development",
      description:
        "Building responsive and interactive web applications using React JS, JavaScript, HTML, and CSS with component-based architecture.",
      icon: "https://img.icons8.com/ios-filled/100/000000/code.png",
      category: "Development",
      features: ["React JS", "JavaScript", "HTML/CSS", "Component Architecture"]
    },
    {
      title: "Backend Development",
      description:
        "Creating secure, scalable backend systems with Flask, RESTful API development, and robust authentication systems.",
      icon: "https://img.icons8.com/ios-filled/100/000000/server.png",
      category: "Development",
      features: ["Flask APIs", "Authentication", "Security", "Scalability"]
    },
    {
      title: "Fullstack Development",
      description:
        "End-to-end web solutions from UI/UX Design to Database, implementing features like authentication and profile management.",
      icon: "https://img.icons8.com/ios-filled/100/000000/stack.png",
      category: "Full Stack",
      features: ["MERN Stack", "End-to-end", "Authentication", "Database"]
    },
    {
      title: "Testing & Debugging",
      description:
        "Cross-browser compatibility testing, frontend and backend debugging, error handling and performance optimization.",
      icon: "https://img.icons8.com/ios-filled/100/000000/test.png",
      category: "Quality Assurance",
      features: ["Cross-browser", "Debugging", "Performance", "Error Handling"]
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const serviceCardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      "Design": Palette,
      "Development": Code,
      "Full Stack": Globe,
      "Quality Assurance": Bug
    };
    return icons[category as keyof typeof icons] || Settings;
  };


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
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Settings className="w-6 h-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              My <span className="text-primary">Services</span>
            </h2>
          </div>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full mb-3"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to bring your digital vision to life
          </p>
        </motion.div>

        {/* Services Grid - With Fixed Centering */}
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Container for last 2 items centering */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* First 3 items (normal row) */}
            {services.slice(0, 3).map((service, index) => {
              const CategoryIcon = getCategoryIcon(service.category);
              
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={serviceCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, rotateY: 3 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Main Card */}
                  <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-500 hover:border-primary/40 h-full">
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center gap-1 px-2 py-1 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
                        <CategoryIcon className="w-3 h-3 text-primary" />
                        <span className="text-xs font-semibold text-primary">{service.category}</span>
                      </div>
                    </div>

                    {/* Service Icon */}
                    <motion.div 
                      className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3 group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain dark:invert group-hover:scale-110 transition-transform duration-300"
                      />
                    </motion.div>

                    {/* Service Content */}
                    <div className="space-y-3">
                      <motion.h3 
                        className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {service.title}
                      </motion.h3>

                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {service.description}
                      </p>

                      {/* Feature Tags */}
                      <motion.div 
                        className="space-y-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3 }}
                      >
                        <h4 className="text-xs font-semibold text-foreground/80 uppercase tracking-wide">
                          Key Features
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {service.features.map((feature, featureIndex) => (
                            <motion.span
                              key={featureIndex}
                              className="px-2 py-0.5 bg-primary/10 hover:bg-primary/20 text-primary rounded text-xs font-medium border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default"
                              whileHover={{ scale: 1.05, y: -1 }}
                              whileTap={{ scale: 0.95 }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: false }}
                              transition={{ delay: featureIndex * 0.1 }}
                            >
                              {feature}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Last 2 items centered row */}
          {services.length > 3 && (
            <div className="flex justify-center mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                {services.slice(3).map((service, index) => {
                  const CategoryIcon = getCategoryIcon(service.category);
                  const actualIndex = index + 3;
                  
                  return (
                    <motion.div
                      key={actualIndex}
                      className="group relative"
                      variants={serviceCardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ delay: actualIndex * 0.1 }}
                      whileHover={{ y: -5, rotateY: 3 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Background Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Main Card */}
                      <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-500 hover:border-primary/40 h-full">
                        
                        {/* Category Badge */}
                        <div className="absolute top-3 right-3">
                          <div className="flex items-center gap-1 px-2 py-1 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
                            <CategoryIcon className="w-3 h-3 text-primary" />
                            <span className="text-xs font-semibold text-primary">{service.category}</span>
                          </div>
                        </div>

                        {/* Service Icon */}
                        <motion.div 
                          className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3 group-hover:bg-primary/20 transition-colors duration-300"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Image
                            src={service.icon}
                            alt={service.title}
                            width={24}
                            height={24}
                            className="w-6 h-6 object-contain dark:invert group-hover:scale-110 transition-transform duration-300"
                          />
                        </motion.div>

                        {/* Service Content */}
                        <div className="space-y-3">
                          <motion.h3 
                            className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300"
                            whileHover={{ scale: 1.02 }}
                          >
                            {service.title}
                          </motion.h3>

                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {service.description}
                          </p>

                          {/* Feature Tags */}
                          <motion.div 
                            className="space-y-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.3 }}
                          >
                            <h4 className="text-xs font-semibold text-foreground/80 uppercase tracking-wide">
                              Key Features
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {service.features.map((feature, featureIndex) => (
                                <motion.span
                                  key={featureIndex}
                                  className="px-2 py-0.5 bg-primary/10 hover:bg-primary/20 text-primary rounded text-xs font-medium border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default"
                                  whileHover={{ scale: 1.05, y: -1 }}
                                  whileTap={{ scale: 0.95 }}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: false }}
                                  transition={{ delay: featureIndex * 0.1 }}
                                >
                                  {feature}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Services;
