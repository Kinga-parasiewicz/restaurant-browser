import { NameRestaurant, TypeName } from "./../../core/Navigation/styled";
import facebook from "./social icons/facebook.svg";
import instagram from "./social icons/instagram.svg";
import { StyledFooter, Image } from "./styled";

export const Footer = () => (
  <StyledFooter>
    <NameRestaurant colorName>Anolini</NameRestaurant>
    <TypeName colorRest>Italian Restaurant</TypeName>
    <img src={facebook} alt="social-icon" />
    <Image src={instagram} alt="social-icon" />
  </StyledFooter>
);
