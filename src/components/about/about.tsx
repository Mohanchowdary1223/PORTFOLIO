
import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const AboutPage = () => {
  return (
    <div className="min-h-screen mx-auto bg-background transition-colors duration-300">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 pt-24 md:pt-32">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-6 md:gap-8 items-center max-w-5xl mx-auto">
          <div className="relative h-50 sm:h-70 md:h-100 flex justify-center">
            <div className="aspect-video rounded-2xl w-[65%] sm:w-[85%] md:w-[90%] h-full bg-card border-primary border-2 shadow-2xl hover:shadow-xl transition-all duration-300 p-3 sm:p-4 relative group">
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
            <Tabs defaultValue="aboutme" className="w-full max-w-[500px] mx-auto">
              <TabsList className="w-full flex gap-4">
                <TabsTrigger 
                  value="aboutme" 
                  className="text-sm sm:text-base cursor-pointer hover:text-primary hover:border-primary data-[state=active]:text-primary data-[state=active]:border-primary dark:text-foreground dark:hover:text-primary dark:data-[state=active]:text-primary dark:data-[state=active]:border-primary transition-colors duration-200"
                >
                  About Me
                </TabsTrigger>
                <TabsTrigger 
                  value="education" 
                  className="text-sm sm:text-base cursor-pointer hover:text-primary hover:border-primary data-[state=active]:text-primary data-[state=active]:border-primary dark:text-foreground dark:hover:text-primary dark:data-[state=active]:text-primary dark:data-[state=active]:border-primary transition-colors duration-200"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger 
                  value="experience" 
                  className="text-sm sm:text-base cursor-pointer hover:text-primary hover:border-primary data-[state=active]:text-primary data-[state=active]:border-primary dark:text-foreground dark:hover:text-primary dark:data-[state=active]:text-primary dark:data-[state=active]:border-primary transition-colors duration-200"
                >
                  Experience
                </TabsTrigger>
              </TabsList>

              <TabsContent value="aboutme" className="mt-2" >
                <div className="space-y-4">
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    I&apos;m a passionate developer with a focus on crafting
                    clean, responsive web applications. With hands-on experience
                    in both frontend and backend technologies like React.js,
                    Node.js, and MongoDB, I enjoy building user-friendly solutions
                    that bring real-world ideas to life.
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    When I&apos;m not coding, you&apos;ll find me designing
                    intuitive interfaces in Figma, collaborating on team projects,
                    or exploring new tools and frameworks to sharpen my skills.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="education" className="mt-2">
                <div className="">
                  <div className=" p-3 rounded-lg hover:bg-primary/10 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-primary">Bachelor of Technology (B.Tech)</h3>
                    <p className="text-base font-medium">Computer Science and Data Science Engineering</p>
                    <p className="text-sm text-muted-foreground">Kakinada Institute of Engineering and Technology (KIET), Andhra Pradesh</p>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Expected Graduation: 2026</span>
                      <span>Current CGPA: 7.65 / 10</span>
                    </div>
                  </div>

                  <div className=" p-3 rounded-lg hover:bg-primary/10 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-primary">Intermediate Education (10+2)</h3>
                    <p className="text-sm text-muted-foreground">SIR C.R. Reddy Intermediate College, Eluru</p>
                    <p className="text-sm text-muted-foreground">Board of Intermediate Education, Andhra Pradesh</p>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>2020 – 2022</span>
                      <span>Percentage: 54.7%</span>
                    </div>
                  </div>

                  <div className=" p-3 rounded-lg hover:bg-primary/10 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-primary">Secondary Education (10th Grade)</h3>
                    <p className="text-sm text-muted-foreground">Sai Rakesh School, Gavaravaram</p>
                    <p className="text-sm text-muted-foreground">Board of Secondary Education, Andhra Pradesh</p>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>2019 – 2020</span>
                      <span>GPA: 9.65 / 10</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="experience" className="mt-2">
                <div className="">
                  <div className="p-3 rounded-lg hover:bg-primary/10 transition-colors duration-200">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-primary">Frontend & Backend Developer</h3>
                        <p className="text-base font-medium">KHUB, KIET</p>
                      </div>
                      <span className="text-sm text-muted-foreground">Sept 2024 – Apr 2025</span>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                      <li>Built internal platforms like Admin Dashboard and NLP Documentation App using React JS and Flask</li>
                      <li>Designed responsive UIs with Tailwind CSS and CSS3</li>
                      <li>Created complete Figma UI/UX designs for various modules</li>
                      <li>Handled routing, API integration, and client-server communication</li>
                    </ul>
                  </div>

                  <div className=" p-3 rounded-lg hover:bg-primary/10 transition-colors duration-200">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-primary">Winter Intern</h3>
                        <p className="text-base font-medium">IIIT Hyderabad</p>
                      </div>
                      <span className="text-sm text-muted-foreground">Dec 2024 – Jan 2025</span>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                      <li>Successfully developed the initial version of the TAFEA platform using React JS</li>
                      <li>Contributed to UI/UX design and frontend implementation under R&D mentorship</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
