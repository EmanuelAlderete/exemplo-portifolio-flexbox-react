import React from "react";
import ContactSectionStyled from "../styles/ContactSectionStyles";

const ProjectsSection = () => {
  return (
    <ContactSectionStyled>
      <h1>Contato</h1>
      <form>
        <div>
          <label>Nome</label>
          <input type="text" placeholder="João Pé de Feijão" />
        </div>
        <div>
          <label>E-mail</label>
          <input type="email" placeholder="joao@pe.feijao" />
        </div>
        <div>
          <label>Mensagem</label>
          <textarea type="text" placeholder="João Pé de Feijão">
            {" "}
          </textarea>
        </div>
        <button type="submit">ENVIAR</button>
      </form>
    </ContactSectionStyled>
  );
};

export default ProjectsSection;
