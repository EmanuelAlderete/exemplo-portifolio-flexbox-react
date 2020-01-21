import styled from "styled-components";

const ContactSectionStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  background: #000;
  color: #fff;
  padding: 40px 30px;

  h1 {
    display: block;
  }

  form {
    margin-top: 15px;
    width: 100%;
  }

  div {
    margin-bottom: 10px;
  }

  div label {
    display: block;
  }

  div input,
  textarea {
    color: #fff;
    width: 100%;
    display: block;
    background: none;
    outline: none;
    border: none;
    border-bottom: 2px solid #fff;
    padding: 2px 5px;
  }

  button {
    float: right;
    border: 2px solid #fff;
    background: none;
    color: #fff;
    padding: 10px;
  }
`;

export default ContactSectionStyled;
