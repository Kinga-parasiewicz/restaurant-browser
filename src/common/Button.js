import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.shark};
  font-size: 20px;
  padding: 9px 60px;
  max-width: 300px;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  z-index: 2;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: none;
  }

  ${({ sectionButton }) =>
    sectionButton &&
    css`
      margin-left: -170px;
      z-index: 0;
    `}

  ${({ background }) =>
    background &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.shark};
      background: ${({ theme }) => theme.colors.shark};
      text-transform: uppercase;
      font-size: 17px;
      padding: 12px 40px;

      @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
        display: block;
        text-align: center;
        margin: 20px auto;
      }
    `}
`;
