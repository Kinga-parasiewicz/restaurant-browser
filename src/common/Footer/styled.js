import styled, { css} from "styled-components";

export const StyledFooter = styled.footer`
  background: #323539;
  padding: 70px;
  text-align: center;
`;

export const Image = styled.img`
  height: 47px;
  width: 50px;
  margin-left: 20px;
   ${({first}) => first && css`
   margin-left: 0px;
   `}
`;
