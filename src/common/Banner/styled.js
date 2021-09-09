import styled, { css } from "styled-components";
import banner from "./../../assets/backg.jpg";
import rest2 from "./../../assets/rest2.jpg";
import Menu from "./../../features/Menu/image.jpeg";

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

  ${({ secondBanner }) =>
    secondBanner &&
    css`
      background: url(${rest2});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 70vh;
    `}

  ${({thirdBanner}) => thirdBanner && css `
  background: url(${Menu});
  background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 70vh;
      
  
  `}`;

export const SectionName = styled.h1`
  margin-top: 200px;
  font-size: 8em;
  color: black;
  margin-bottom: 20px;
  margin-left: -200px;

  @media(max-width:767px){
    font-size: 5em;
    margin-top:110px;
    margin-left:0px;
  }
`;

export const SectionParagraph = styled.p`
  color: black;
  font-size: 20px;
  max-width: 500px;
  margin-left: -180px;
  margin-bottom: 50px;

  @media(max-width:767px){
    font-size: 16px;
    margin:20px;
    color:white;
  }
`;
