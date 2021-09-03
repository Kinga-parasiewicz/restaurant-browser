import { Section, SectionName, SectionParagraph } from "./styled";
import { StyledButton } from "./../../common/Button";
import { StyledLink } from "../../core/Navigation/styled";
import { toAbout } from "../../core/routes";

export const Banner = () => {
  return (
    <>
      <Section>
        <SectionName>Welcome</SectionName>
        <SectionParagraph>
          Our restaurant offers full-service dining with breathtaking views seen
          from our indoor covered patio and our outdoor sundeck.
        </SectionParagraph>
        <StyledButton sectionButton>
        <StyledLink secondary to={toAbout()}>Meet us</StyledLink>
        </StyledButton>
      </Section>
    </>
  );
};
