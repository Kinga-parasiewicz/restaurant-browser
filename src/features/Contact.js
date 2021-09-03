import { Section } from "../common/Banner/styled";
import { Name, Container } from "./About/About-partOfPage/styled";
import { Footer } from "../common/Footer/index";
import { StyledForm, FormInput } from "./Form/styled";
import { StyledButton } from "../common/Button";

export const Contact = () => {
  return (
    <>
      <Section secondBanner />
      <Name> Get in Touch</Name>
      <Container>
        <StyledForm otherForm>
          <FormInput type="text" placeholder="Your Name" />
          <FormInput type="email" placeholder="Your e-mail" />
          <FormInput type="numbers" maxLength="9" placeholder="Your Phone" />
          <FormInput as="textarea" type="text" placeholder="Your Message" />
          <StyledButton>Send</StyledButton>
        </StyledForm>
      </Container>
      <Footer />
    </>
  );
};
