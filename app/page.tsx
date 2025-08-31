import AboutSkills from "@/components/AboutSkills";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <Hero />
      <AboutSkills />
      <Projects />
    </section>
  );
}
