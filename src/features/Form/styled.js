import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1000px;
  align-items: center;
  padding: 25px 10px;
  padding-bottom: 20px;
  margin: -110px auto;
  z-index: 2;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  ${({ otherForm }) =>
    otherForm &&
    css`
      margin: 20px auto;
      flex-direction: column;
    `}
`;

export const FormLabel = styled.label`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
  margin: 20px;
`;

export const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid #323539;
  margin-top: 15px;
  height: 30px;

  ${({ contactInput }) =>
    contactInput &&
    css`
      max-width: 800px;
      width: 100%;
      height: 40px;
      margin-bottom: 25px;
      resize: vertical;
    `}
`;

export const Select = styled.select`
  border: none;
  border-bottom: 1px solid #323539;
  margin: 7px auto;
  padding-right: 15px;
`;
