
// @flow strict

import AboutSection from "@components/homepage/about/index";
import ContactSection from "@components/homepage/contact/index";
import Education from "@components/homepage/education/index";
import HeroSection from "@components/homepage/hero-section/index";
import Skills from "@components/homepage/skills/index";
import ProjectCards from "@components/homepage/projects/index";

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
