import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background: #323539;
  font-size: 20px;
  padding: 9px 60px;
  max-width: 300px;
  color: white;
  border: 1px solid white;
  z-index: 2;

  @media (max-width: 1024px) {
    display: none;
  }

  ${({ sectionButton }) =>
    sectionButton &&
    css`
      margin-left: -170px;
    `}

  ${({ background }) =>
    background &&
    css`
      border: 2px solid #323539;
      background: #323539;
      text-transform: uppercase;
      font-size: 17px;
      padding: 12px 40px;


  @media (max-width: 1024px) {
    display: block;
    text-align: center;
    margin:20px auto;
  }
    `}
`;
