import { Description } from "../Section/styled";
import {
  FormLabel,
  FormInput,
  FormWrapper,
} from "./../../features/Form/styled";

export const EmailInput = ({
  label,
  placeholder,
  register,
  validation,
  value,
  errors,
  styledError,
}) => {
  return (
    <FormWrapper contactItems>
      <FormLabel>{label}:</FormLabel>
      <FormInput
        placeholder={placeholder}
        type="email"
        style={errors.email ? styledError.input : null}
        {...register(value, { ...validation })}
      ></FormInput>
      {errors.email && (
        <Description forForm style={styledError.message}>
          {errors.email.message}
        </Description>
      )}
    </FormWrapper>
  );
};
