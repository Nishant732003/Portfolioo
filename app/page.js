
import AboutSection from "@components/homepage/about";
import ContactSection from "@components/homepage/contact";
import Education from "@components/homepage/education";
import HeroSection from "@components/homepage/hero-section";
import Skills from "@components/homepage/skills";
import ProjectCards from "@components/homepage/projects";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />

      <Skills />

      <Education />
      <ProjectCards />
      <ContactSection />
    </>
  );
}
