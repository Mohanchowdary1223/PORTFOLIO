'use client'
import React, { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useEmblaCarousel from 'embla-carousel-react';

export const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("aboutme");
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    dragFree: true, 
    containScroll: 'keepSnaps',
    align: 'start',
    loop: true
  });
  const autoScrollPaused = useRef(false);

  // Handle scroll events
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    const tabs = ["aboutme", "education"];
    setActiveTab(tabs[index]);
    
    // Pause auto-scroll when user interacts
    autoScrollPaused.current = true;
    setTimeout(() => {
      autoScrollPaused.current = false;
    }, 1000); // 30 seconds pause
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!autoScrollPaused.current && emblaApi) {
        emblaApi.scrollNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  // Sync carousel with active tab
  useEffect(() => {
    if (emblaApi) {
      const index = activeTab === "aboutme" ? 0 : 1;
      emblaApi.scrollTo(index);
    }
  }, [activeTab, emblaApi]);

  return (
    <div className="min-h-screen mx-auto bg-background transition-colors duration-300">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 pt-20 md:pt-18 flex flex-col items-center justify-center sm:pt-30">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 md:mb-12 text-center text-foreground relative after:content-[''] after:absolute after:w-16 sm:after:w-24 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">
          About
        </h2>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-6 md:gap-8 items-center max-w-5xl mx-auto">
          <div className="relative h-50 sm:h-70 md:h-90 flex justify-center">
            <div className="aspect-video rounded-2xl w-[55%] sm:w-[85%] md:w-[70%] h-full bg-card border-primary border-2 shadow-2xl hover:shadow-xl transition-all duration-300 p-3 sm:p-4 relative group">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <Image
                  fill
                  src={"/my-img1.jpg"}
                  alt="My Image"
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 p-4 sm:p-6 rounded-2xl bg-card border-primary border-2 shadow-lg hover:shadow-xl transition-all duration-300">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full max-w-[500px] mx-auto"
            >
              <TabsList className="w-full flex gap-4">
                <TabsTrigger
                  value="aboutme"
                  className="text-sm sm:text-base cursor-pointer hover:text-primary  data-[state=active]:text-primary data-[state=active]:border-primary dark:text-foreground dark:hover:text-primary dark:data-[state=active]:text-primary dark:data-[state=active]:border-primary transition-colors duration-200"
                >
                  About Me
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="text-sm sm:text-base cursor-pointer hover:text-primary  data-[state=active]:text-primary data-[state=active]:border-primary dark:text-foreground dark:hover:text-primary dark:data-[state=active]:text-primary dark:data-[state=active]:border-primary transition-colors duration-200"
                >
                  Education
                </TabsTrigger>
              </TabsList>

              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  <div className="flex-[0_0_100%] min-w-0">
                    <TabsContent value="aboutme" className="mt-2">
                      <div className="space-y-4">
                        <p className="text-sm sm:text-base lg:text-sm text-muted-foreground leading-relaxed text-justify">
                          I&apos;m a passionate and detail-oriented web developer
                          focused on building clean, responsive, and scalable web
                          applications. With hands-on experience in technologies like
                          React.js, Node.js, and MongoDB, I enjoy blending creativity
                          with logic to deliver real-world digital solutions.{" "}
                        </p>
                        <p className="text-sm sm:text-base lg:text-sm text-muted-foreground leading-relaxed text-justify">
                          My skill set spans both frontend and backend development,
                          along with UI/UX design using Figma. I take pride in writing
                          clean, maintainable code and continuously seek opportunities
                          to improve through learning and experimentation.
                        </p>
                        <p className="text-sm sm:text-base lg:text-sm text-muted-foreground leading-relaxed text-justify">
                          I enjoy collaborating on team projects and have gained
                          practical exposure through multiple virtual internships in
                          areas like cybersecurity, cloud, and automation. Outside of
                          coding, I&apos;m often exploring new tools, enhancing my
                          design skills, or diving into new tech trends to stay
                          current.{" "}
                        </p>
                      </div>
                    </TabsContent>
                  </div>

                  <div className="flex-[0_0_100%] min-w-0">
                    <TabsContent value="education" className="mt-2">
                      <div className="">
                        <div className="p-3 rounded-lg hover:bg-primary/10 transition-colors duration-200">
                          <h3 className="text-lg font-semibold text-primary">
                            Bachelor of Technology (B.Tech)
                          </h3>
                          <p className="text-base font-medium">
                            Computer Science and Data Science Engineering
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Kakinada Institute of Engineering and Technology (KIET),
                            Andhra Pradesh
                          </p>
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Expected Graduation: 2026</span>
                            <span>Current CGPA: 7.65 / 10</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg hover:bg-primary/10 transition-colors duration-200">
                          <h3 className="text-lg font-semibold text-primary">
                            Intermediate Education (10+2)
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            SIR C.R. Reddy Intermediate College, Eluru
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Board of Intermediate Education, Andhra Pradesh
                          </p>
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>2020 – 2022</span>
                            <span>Percentage: 54.7%</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg hover:bg-primary/10 transition-colors duration-200">
                          <h3 className="text-lg font-semibold text-primary">
                            Secondary Education (10th Grade)
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Sai Rakesh School, Gavaravaram
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Board of Secondary Education, Andhra Pradesh
                          </p>
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>2019 – 2020</span>
                            <span>GPA: 9.65 / 10</span>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </div>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
