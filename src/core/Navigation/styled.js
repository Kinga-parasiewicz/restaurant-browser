import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavigation = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
  z-index: 1;
`;

export const NavigationInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    justify-content: space-between;
    align-items: center;
    margin: 0px auto;
  }
`;
export const NameRestaurant = styled.h2`
  font-family: "Style Script", cursive;
  font-size: 46px;
  margin: 0px;
  color: black;

  ${({ colorName }) =>
    colorName &&
    css`
      color: white;
    `}
`;

export const TypeName = styled.p`
  font-family: "IBM Plex Serif", serif;
  font-size: 16px;
  margin-top: -10px;

  ${({ colorRest }) =>
    colorRest &&
    css`
      color: white;
    `}
`;

export const ListItem = styled.li`
  list-style-type: none;
  text-transform: uppercase;
  font-size: 20px;
  margin-right: 50px;

  @media (max-width: 1024px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    &.inactive {
      position: fixed;
      opacity: 0;
      pointer-events: none;
    }

    &.active {
      padding-top: 40px;
      margin-top: 0px;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      flex-direction: column;
      align-items: center;
      text-align: center;
      background: white;
      opacity: 1;
      pointer-events: unset;
      transform: none;
    }
  }
`;

export const Header = styled.header`
  margin: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  font-size: 23px;
  text-transform: uppercase;
  font-weight: 500;
  transition: color 2s;

  &:hover {
    color: green;
    border-bottom: 2px solid green;

    @media (max-width: 1024px) {
      border-bottom: unset;
      font-weight: 600;
    }
  }

  ${({ secondOption }) =>
    secondOption &&
    css`
      font-weight: 800;
      color: white;
      transition: color 2s;

      &:hover {
        color: green;
        border-bottom: none;
      }
    `}
`;

export const HamburgerButton = styled.button`
  display: none;

  @media (max-width: 1024px) {
    display: unset;
    background: none;
    border: none;
    padding: 0;
  }
`;

export const Hamburger = styled.img`
  display: none;
  @media (max-width: 1024px) {
    display: block;
    margin: 10px;
    width: 40px;
    height: 50px;
  }
`;
