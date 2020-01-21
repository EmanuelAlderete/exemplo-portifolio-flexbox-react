import React from "react";
import ResetCss from "./styles/ResetCss";

// Styled Components
import HomeSection from "./components/HomeSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="App">
      <HomeSection></HomeSection>
      <ServicesSection name={"services"}></ServicesSection>
      <ProjectsSection name={"projects"}></ProjectsSection>
      <ContactSection name={"contact"}></ContactSection>
      <ResetCss />
    </div>
  );
}

export default App;
