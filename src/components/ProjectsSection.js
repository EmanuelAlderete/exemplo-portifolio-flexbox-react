import React from "react";
import ProjectsSectionStyled from "../styles/ProjectsSectionStyles";

import illustrationImg from "../assets/illustrations/undraw_portfolio_essv.svg";
import iconGitImg from "../assets/icons/git.svg";

const ProjectsSection = () => {
  return (
    <ProjectsSectionStyled>
      <div>
        <h1>Projetos</h1>
        <img src={illustrationImg} alt="serviços" />
      </div>
      <article>
        <img src={iconGitImg} alt="serviços" />
        <a
          href={"https://github.com/EmanuelAlderete"}
          rel="noopener noreferrer"
          target="_blank"
          a
        >
          github.com/EmanuelAlderete
        </a>
      </article>
    </ProjectsSectionStyled>
  );
};

export default ProjectsSection;
