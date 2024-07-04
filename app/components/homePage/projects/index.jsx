"use client";
// @flow strict
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import "../../../globals.css";
import { darkTheme } from "../../../../utils/Theme";
import Projects from "./project/index";
import ProjectDetails from "./projectDeatils/index";
import styled from "styled-components";

const Body = styled.div`
  overflow-x: hidden;
`;

function ProjectCard() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Body>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />

          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </ThemeProvider>
    </>
  );
}

export default ProjectCard;
