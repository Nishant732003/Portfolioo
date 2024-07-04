// import { personalData } from "@/utils/data/personal-data";
"use strict"
import AboutSection from "../../../Portfolio/portfolio/app/components/homepage/about";

import ContactSection from "../../../Portfolio/portfolio/app/components/homepage/contact";
import Education from "../../../Portfolio/portfolio/app/components/homepage/education";
// import Experience from "./components/homepage/experience";
import HeroSection from "../../../Portfolio/portfolio/app/components/homepage/hero-section";
// import Projects from "./components/homepage/projects";
import Skills from "../../../Portfolio/portfolio/app/components/homepage/skills";
import ProjectCards from "./components/homePage/projects/index";

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
