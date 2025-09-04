import AboutSkills from "@/components/AboutSkills";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Personal from "@/components/Personal";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <section className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <Hero />
      <AboutSkills />
      <Projects />
      <Personal />
      <Footer />
    </section>
  );
}
