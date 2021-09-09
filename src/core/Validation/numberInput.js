import { Description } from "../Section/styled";
import {
  FormLabel,
  FormInput,
  FormWrapper,
} from "./../../features/Form/styled";

export const NumberInput = ({
  label,
  placeholder,
  register,
  validation,
  value,
  errors,
  styledError,
}) => {
  return (
    <FormWrapper>
      <FormLabel htmlFor="">{label}:</FormLabel>
      <FormInput
        placeholder={placeholder}
        type="number"
        min="9"
        style={errors.number ? styledError.input : null}
        {...register(value, { ...validation })}
      ></FormInput>
      {errors.number && (
        <Description forForm style={styledError.message}>
          {errors.number.message}
        </Description>
      )}
    </FormWrapper>
  );
};
