import { NameRestaurant, TypeName } from "./../Navigation/styled";
import facebook from "./../../assets/social icons/facebook.svg";
import instagram from "./../../assets/social icons/instagram.svg";
import { StyledFooter, Image } from "./styled";

export const Footer = () => (
  <StyledFooter>
    <NameRestaurant colorName>Anolini</NameRestaurant>
    <TypeName colorRest>Italian Restaurant</TypeName>
    <img src={facebook} alt="social-icon" />
    <Image src={instagram} alt="social-icon" />
  </StyledFooter>
);
