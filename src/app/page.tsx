
import HomePage from "@/components/home/home";
import { AboutPage } from "@/components/about/about";
import SkillPage from "@/components/skills/skills";
import ContactPage from "@/components/contactme/contact";
import Footer from "@/components/footer/footer";

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
        <SkillPage />
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
