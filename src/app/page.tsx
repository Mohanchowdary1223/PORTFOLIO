import { ModeToggle } from "@/components/modetoggle";
import Image from "next/image";
import HomePage from "@/components/home/home";
import { AboutPage } from "@/components/about/about";
import SkillPage from "@/components/skills/skills";

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
    </main>
  );
}
