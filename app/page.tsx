import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ProjectCard from "./components/ProjectCard";
import FooterSection from './components/FooterSection';
import AchievementSection from './components/AchievementSection';
import Contact from './components/contact';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar>

      </Navbar>
      
      <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection/>
      <AchievementSection/>
      <AboutSection/>
      <ProjectsSection/>
      <ProjectCard imgUrl= {undefined} title={undefined} description={undefined} gitUrl={undefined} previewUrl={undefined}/>
      <Contact/>
      </div> 
      <FooterSection/>
    </main>
  );
}
