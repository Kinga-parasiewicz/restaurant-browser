import styled from "styled-components";

export const StyledForm = styled.form`
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1000px;
  align-items: center;
  padding: 55px;
  margin: -90px auto;
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
  margin-top: 7px;
`;

export const Select = styled.select`
  border: none;
  border-bottom: 1px solid #323539;
  margin: 7px auto;
  padding-right: 15px;
`;
