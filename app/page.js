// import { personalData } from "@/utils/data/personal-data";
"use strict"
import AboutSection from "../../../Portfolio/portfolio/app/components/homepage/about/index";

import ContactSection from "../../../Portfolio/portfolio/app/components/homepage/contact/index";
import Education from "../../../Portfolio/portfolio/app/components/homepage/education/index";
// import Experience from "./components/homepage/experience";
import HeroSection from "../../../Portfolio/portfolio/app/components/homepage/hero-section/index";
// import Projects from "./components/homepage/projects";
import Skills from "../../../Portfolio/portfolio/app/components/homepage/skills/index";
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
