import styled from "styled-components";
import banner from "./../../assets/backg.jpg";

export const Section = styled.section`
  background: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 80vh;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const SectionName = styled.h1`
  margin-top: 200px;
  font-size: 8em;
  color: black;
  margin-bottom: 20px;
  margin-left: -200px;
`;

export const SectionParagraph = styled.p`
  color: black;
  font-size: 20px;
  max-width: 500px;
  margin-left: -180px;
  margin-bottom: 50px;
`;
