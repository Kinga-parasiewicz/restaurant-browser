import { useState } from "react";
import {
  NameRestaurant,
  TypeName,
  ListItem,
  StyledNavigation,
  NavigationList,
  Header,
  NavigationInner,
  StyledLink,
  Hamburger,
  HamburgerButton,
} from "./styled";
import { StyledButton } from "./../../common/Button";
import { toHome, toAbout, toContact, toGallery, toMenu } from "./../routes";
import hamburger from "./../../assets/hamburger.svg";

export const Navigation = () => {
  const [isActive, setActive] = useState("inactive");

  const handleToggle = () => {
    setActive(isActive === "inactive" ? "active " : "inactive");
  };

  return (
    <>
      <StyledNavigation>
        <NavigationInner>
          <Header>
            <NameRestaurant>Anolini</NameRestaurant>
            <TypeName>Italian Restaurant</TypeName>
          </Header>
          <NavigationList className={`${isActive}`} onClick={handleToggle}>
            <ListItem>
              <StyledLink to={toHome()}>Home</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to={toAbout()}>About</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to={toMenu()}>Menu</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to={toGallery()}>Gallery</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to={toContact()}>
                Contact
              </StyledLink>
            </ListItem>
            <StyledButton>
              <StyledLink secondary to={toContact()}>Book now</StyledLink>
              </StyledButton>
          </NavigationList>
          <HamburgerButton onClick={handleToggle}>
            <Hamburger src={hamburger} alt="hamburger" />
          </HamburgerButton>
        </NavigationInner>
      </StyledNavigation>
    </>
  );
};
