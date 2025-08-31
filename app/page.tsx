import AboutSkills from "@/components/AboutSkills";
import Hero from "@/components/Hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Profile from "@/public/profile.webp";
import { Code, Github, Linkedin, Palette } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <Hero />
      <AboutSkills />
    </section>
  );
}
