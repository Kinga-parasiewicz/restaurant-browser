import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background: #323539;
  font-size: 20px;
  padding: 9px 60px;
  max-width: 300px;
  color: white;
  border: 1px solid white;
  z-index: 2;

  ${({ sectionButton }) =>
    sectionButton &&
    css`
      margin-left: -170px;
    `}
`;
