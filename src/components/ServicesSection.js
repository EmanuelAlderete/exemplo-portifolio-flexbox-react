import React from "react";
import ServicesSectionStyled from "../styles/ServicesSectionStyles";

import illustrationImg from "../assets/illustrations/work_together.svg";
import iconCheckImg from "../assets/icons/feather_check-circle.svg";

const ServicesSection = () => {
  return (
    <ServicesSectionStyled>
      <div>
        <h1>Serviços</h1>
        <img src={illustrationImg} alt="serviços" />
      </div>
      <article>
        <img src={iconCheckImg} alt="serviços" />
        <p>Sites Institucionais</p>
      </article>
      <article>
        <img src={iconCheckImg} alt="serviços" />
        <p>Sistemas</p>
      </article>
      <article>
        <img src={iconCheckImg} alt="serviços" />
        <p>APPs</p>
      </article>
      <article>
        <img src={iconCheckImg} alt="serviços" />
        <p>Marketing Digital</p>
      </article>
    </ServicesSectionStyled>
  );
};

export default ServicesSection;
