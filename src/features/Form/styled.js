import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  &.inactivefirst {
    background: white;
    display: flex;
    justify-content: space-between;
    max-width: 1100px;
    align-items: center;
    padding: 10px 10px;
    padding-bottom: 20px;
    margin: -110px auto;
    z-index: 0;
    position: relative;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  &.inactive {
    ${({ otherForm }) =>
      otherForm &&
      css`
        display: flex;
        margin: 20px auto;
        flex-direction: column;
        align-items: center;
        position: relative;
        padding: 10px 10px;
        padding-bottom: 20px;
      `}
  }

  &.active {
    display: none;
  }
`;

export const FormLabel = styled.label`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 20px;
  margin-right: 20px;
`;

export const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid #323539;
  margin-top: 5px;
  height: 30px;

  ${({ contactInput }) =>
    contactInput &&
    css`
      max-width: 800px;
      width: 100%;
      height: 40px;
      margin: 20px 0px;
      resize: vertical;
    `}
`;

export const Select = styled.select`
  border: none;
  border-bottom: 1px solid #323539;
  margin: 7px auto;
  padding-right: 15px;
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 15px;
  padding: 0px;

  ${({ contactItems }) =>
    contactItems &&
    css`
      max-width: 800px;
      width: 100%;
    `}
`;
