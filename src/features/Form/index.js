import { useState } from "react";
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
import { Information } from "./Information";

export const Form = () => {
  const [isActive, setActive] = useState("inactivefirst");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleToggleClass = () => {
    setActive(isActive === "inactivefirst" ? "active" : "inactivefirst");
  };

  const onSubmit = () => {
    handleToggleClass();
    reset();
  };

  return (
    <>
      {isActive === "active" ? (
        <Information />
      ) : (
        <StyledForm className={`${isActive}`} onSubmit={handleSubmit(onSubmit)}>
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
          <StyledButton background>book now</StyledButton>
        </StyledForm>
      )}
    </>
  );
};
