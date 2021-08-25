import styled, { css } from "styled-components";

export const Image = styled.img`
max-width:400px;

${({aboutImage}) => aboutImage && css`
max-width:700px;`}
`;

export const LastImage= styled.img`
width:355px;
`;
export const ImagesBox = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin-bottom:50px;
`;

export const Wrapper = styled.section`
margin:0 auto;
max-width:1200px;
text-align:center;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  text-align:center;
  color:#71726E;
  margin:30px;

  ${({sentence}) => sentence && css`
  font-size:25px;
  margin:0px;
  max-width:500px;
  `}
  `;
export const NameImages = styled.p`
color:#0914CE;
font-size:22px;
`;

export const SingleImageBox = styled.div`
`;