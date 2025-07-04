import HomePage from "@/components/home/home";
import AboutPage from "@/components/about/about";
import SkillsPage from "@/components/skills/skills";
import ContactPage from "@/components/contactme/contact";
import Footer from "@/components/footer/footer";
import ProjectsPage from "@/components/projects/projects";
import ServicesPage from "@/components/servicespage/services";
import ExperiencePage from "@/components/Experience/Experience";
export default function Home() {
  return (
    <main className="relative">
      <div id="home" className="h-screen">
        <HomePage />
      </div>
      <div id="about" className="relative ">
        <AboutPage />
      </div>
      <div id="skills" className="relative">
        <SkillsPage />
      </div>
      <div id="projects" className="relative">
        <ProjectsPage />
      </div>
      <div id="experience" className="relative">
        <ExperiencePage />
      </div>
      <div id="services" className="relative">
        <ServicesPage />
      </div>
      <div id="contact" className="relative">
        <ContactPage />
      </div>


      <div id="footer" className="relative">
        <Footer />
      </div>
    </main>
  );
}
