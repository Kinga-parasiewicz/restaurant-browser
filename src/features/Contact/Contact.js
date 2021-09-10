import { useState } from "react";
import { Section } from "../../common/Banner/styled";
import { Name, Wrapper } from "../About/About-partOfPage/styled";
import { Footer } from "../../common/Footer/index";
import { StyledForm, FormInput } from "../Form/styled";
import { StyledButton } from "../../common/Button";
import { NumberInput } from "../../core/Validation/numberInput";
import { useForm } from "react-hook-form";
import { styledError } from "../../core/Validation/styledError";
import { TextInput } from "../../core/Validation/textInput";
import { EmailInput } from "../../core/Validation/emailInput";
import { Result } from "./Result";
import {
  itemValidation,
  numberValidation,
  emailValidation,
} from "../../core/Validation/validation";

export const Contact = () => {
  const [afterSubmit, setAfterSubmit] = useState("inactive");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleToggle = () => {
    setAfterSubmit(afterSubmit === "inactive" ? "active" : "inactive");
  };

  const onSubmit = () => {
    handleToggle();
    reset();
  };

  return (
    <>
      <Section secondBanner />
      <Wrapper aboutWrapper>
        {afterSubmit === "active" ? (
          <Result />
        ) : (
          <>
            <Name> Get in Touch</Name>
            <StyledForm
              otherForm
              className={`${afterSubmit}`}
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextInput
                label="Name*"
                placeholder="your name"
                register={register}
                value="item"
                validation={itemValidation}
                errors={errors}
                styledError={styledError}
              />
              <EmailInput
                label="E-mail*"
                placeholder="your email"
                value="email"
                register={register}
                validation={emailValidation}
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
              <FormInput
                contactInput
                as="textarea"
                type="text"
                placeholder="Your Message"
              />
              <StyledButton background>Send</StyledButton>
            </StyledForm>
          </>
        )}
      </Wrapper>
      <Footer />
    </>
  );
};
