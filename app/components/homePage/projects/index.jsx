"use client";
// @flow strict
import { ThemeProvider } from "styled-components";
import { useState } from "react";
// import "../../../../app/";
 // Adjusted import path using alias
import { darkTheme } from "@utils/Theme"; // Adjusted import path using alias
import Projects from "@components/homepage/projects/project/index"; // Adjusted import path using alias
import ProjectDetails from "@components/homepage/projects/projectDeatils/index"; // Adjusted import path using alias
import styled from "styled-components";

const Body = styled.div`
  overflow-x: hidden;
`;

function ProjectCard() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  // console.log(openModal);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Body>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />

          {openModal?.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </ThemeProvider>
    </>
  );
}

export default ProjectCard;
