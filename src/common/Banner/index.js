import { Section, SectionName, SectionParagraph } from "./styled";
import { StyledButton } from "./../../common/Button";

export const Banner = () => {
  return (
    <>
      <Section>
        <SectionName>Welcome</SectionName>
        <SectionParagraph>
          Our restaurant offers full-service dining with breathtaking views seen
          from our indoor covered patio and our outdoor sundeck.
        </SectionParagraph>
        <StyledButton sectionButton>Meet us</StyledButton>
      </Section>
    </>
  );
};
