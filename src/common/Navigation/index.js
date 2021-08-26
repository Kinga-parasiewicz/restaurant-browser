import {
  NameRestaurant,
  TypeName,
  ListItem,
  StyledNavigation,
  NavigationList,
  Header,
  NavigationInner,
  StyledLink,
} from "./styled";
import { StyledButton } from "../Button";
import { toHome, toAbout, toContact, toGallery, toMenu } from "./../../routes";

export const Navigation = () => {
  return (
    <>
      <StyledNavigation>
        <NavigationInner>
          <Header>
            <NameRestaurant>Anolini</NameRestaurant>
            <TypeName>Italian Restaurant</TypeName>
          </Header>
          <NavigationList>
            <ListItem>
              <StyledLink to={toHome()}>Home</StyledLink>
            </ListItem>
            <ListItem>
              {" "}
              <StyledLink to={toAbout()}>About</StyledLink>
            </ListItem>
            <ListItem>
              {" "}
              <StyledLink to={toMenu()}>Menu</StyledLink>
            </ListItem>
            <ListItem>
              {" "}
              <StyledLink to={toGallery()}>Gallery</StyledLink>
            </ListItem>
            <ListItem>
              {" "}
              <StyledLink to={toContact()}>Contact</StyledLink>
            </ListItem>
          </NavigationList>
          <StyledButton>Book now</StyledButton>
        </NavigationInner>
      </StyledNavigation>
    </>
  );
};
