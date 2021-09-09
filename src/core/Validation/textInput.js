import { Description } from "../Section/styled";
import {
  FormLabel,
  FormInput,
  FormWrapper,
} from "./../../features/Form/styled";

export const TextInput = ({
  label,
  placeholder,
  register,
  value,
  validation,
  errors,
  styledError,
}) => {
  return (
    <FormWrapper>
      <FormLabel htmlFor="">{label}:</FormLabel>
      <FormInput
        placeholder={placeholder}
        style={errors.item ? styledError.input : null}
        {...register(value, { ...validation })}
      ></FormInput>
      {errors.item && (
        <Description forForm style={styledError.message}>
          {errors.item.message}
        </Description>
      )}
    </FormWrapper>
  );
};
