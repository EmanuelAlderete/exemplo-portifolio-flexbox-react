import styled from "styled-components";

// HomeSection
import backgroundImg from "../assets/images/laptop.jpg";

const HomeSectionStyled = styled.section`
  display: flex;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${backgroundImg});
  height: 100vh;
  background-position: bottom;
  background-size: cover;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  line-height: 21px;

  div {
    flex-basis: 100%;
    align-self: flex-end;
  }

  h1 {
    font-weight: bold;
  }

  p {
    font-weight: lighter;
  }

  a {
    color: #fff;
    text-decoration: none;
    border: 2px solid #fff;
    padding: 10px;
    transition: all 0.3s;
  }

  a:hover {
    background: #fff;
    color: #000;
    opacity: 0.8;
  }
`;

export default HomeSectionStyled;
