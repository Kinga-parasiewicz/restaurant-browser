import { Section } from "../common/Banner/styled";
import { Name, Wrapper } from "./About/About-partOfPage/styled";
import { Footer } from "../common/Footer/index";
import { StyledForm, FormInput } from "./Form/styled";
import { StyledButton } from "../common/Button";

export const Contact = () => {
  return (
    <>
      <Section secondBanner />
      <Wrapper aboutWrapper>
      <Name> Get in Touch</Name>
        <StyledForm otherForm>
          <FormInput contactInput type="text" placeholder="Your Name" />
          <FormInput contactInput type="email" placeholder="Your e-mail" />
          <FormInput contactInput type="numbers" maxLength="9" placeholder="Your Phone" />
          <FormInput contactInput as="textarea" type="text" placeholder="Your Message" />
          <StyledButton>Send</StyledButton>
        </StyledForm>
      </Wrapper>
      <Footer />
    </>
  );
};
