import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  background: #EFEEEB;
  margin-top: 20px;

${({aboutWrapper}) => aboutWrapper && css `
margin-top:0px;
`}
`;

export const WrapperInner = styled.div`
  padding-top: 180px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const Name = styled.h2`
  font-size: 40px;
  text-align:center;
`;

export const DescriptionParagraph = styled.p`
  max-width: 500px;
  font-size: 19px;
  line-height: 1.5;
`;
export const DescriptionBox = styled.div`
  margin-left: 70px;
  text-align: center;
`;

export const ImagesSvg = styled.img`
height:60px;`;

export const GridBox = styled.section`
display: grid;
grid-template-columns:repeat(3, 1fr);`

