import AboutSkills from "@/components/AboutSkills";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import LifeExperiences from "@/components/LifeExperiences";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <AboutSkills />
      <Projects />
      <Research />
      <LifeExperiences />
      <Footer />
    </main>
  );
}
