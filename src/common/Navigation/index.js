import {
  NameRestaurant,
  TypeName,
  ListItem,
  StyledNavigation,
  NavigationList,
  Header,
  NavigationInner,
} from "./styled";
import { StyledButton } from "../Button";

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
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Menu</ListItem>
            <ListItem>Gallery</ListItem>
            <ListItem>Contact</ListItem>
          </NavigationList>
          <StyledButton>Book now</StyledButton>
        </NavigationInner>
      </StyledNavigation>
    </>
  );
};
