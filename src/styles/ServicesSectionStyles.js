import styled from "styled-components";

const ServicesSectionStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 40px 30px;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 40px;
  }

  div h1 {
    flex-basis: 100%;
    text-align: left;
    margin-bottom: 10px;
    font-weight: lighter;
    font-size: 1.2em;
  }

  div img {
    width: 100%;
  }

  article {
    display: flex;
    align-items: center;
    flex-basis: 100%;
    padding: 5px 0;
  }

  article img {
    width: 25px;
  }

  article p {
    padding-left: 10px;
  }
`;

export default ServicesSectionStyled;
