import { StyledButton } from "./../../common/Button";
import { StyledForm, FormLabel, FormInput, Select } from "./styled";

export const Form = () => {
  return (
    <>
      <StyledForm>
        <FormLabel>
          Name:
          <FormInput type="text" placeholder="Your name" />
        </FormLabel>
        <FormLabel>
          Phone:
          <FormInput
            type="number"
            placeholder="Your phone number"
            maxLength="9"
          />
        </FormLabel>
        <FormLabel>
          Date:
          <FormInput type="date" />
        </FormLabel>
        <FormLabel>
          No. Of People:
          <Select>
            <option> </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </Select>
        </FormLabel>
        <StyledButton background>check availability</StyledButton>
      </StyledForm>
    </>
  );
};
