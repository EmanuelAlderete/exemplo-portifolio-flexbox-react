import styled from "styled-components";

const ProjectsSectionStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 30px 40px;

  div {
    margin: 15px 0;
  }

  div img {
    width: 100%;
  }

  div h1 {
    margin-bottom: 30px;
    font-weight: lighter;
    font-size: 1.5em;
  }

  article {
    display: flex;
    align-items: center;
  }

  article img {
    width: 24px;
  }

  article a {
    padding: 10px;
    color: #000;
    cursor: pointer;
  }
`;

export default ProjectsSectionStyled;
