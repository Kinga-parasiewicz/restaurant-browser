import { StyledButton } from "./../../common/Button";
import { StyledForm, FormLabel, FormInput, Select } from "./styled";
import { useForm } from "react-hook-form";
import { TextInput } from "../../core/Validation/textInput";
import {
  itemValidation,
  numberValidation,
} from "./../../core/Validation/validation";
import { styledError } from "./../../core/Validation/styledError";
import { NumberInput } from "../../core/Validation/numberInput";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="Name*"
          placeholder="your name"
          register={register}
          value="item"
          validation={itemValidation}
          errors={errors}
          styledError={styledError}
        />
        <NumberInput
          label="Phone*"
          placeholder="your number"
          value="number"
          register={register}
          validation={numberValidation}
          errors={errors}
          styledError={styledError}
        />
        <FormLabel>
          Date*:
          <FormInput type="date" />
        </FormLabel>
        <FormLabel>
          No. Of People*:
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
