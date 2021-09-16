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

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    justify-content: space-between;
    align-items: center;
    margin: 0px auto;
  }
`;
export const NameRestaurant = styled.h2`
  font-family: "Style Script", cursive;
  font-size: 46px;
  margin: 0px;
  color: ${({ theme }) => theme.colors.black};

  ${({ colorName }) =>
    colorName &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`;

export const TypeName = styled.p`
  font-family: "IBM Plex Serif", serif;
  font-size: 16px;
  margin-top: -10px;

  ${({ colorRest }) =>
    colorRest &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`;

export const ListItem = styled.li`
  list-style-type: none;
  text-transform: uppercase;
  font-size: 20px;
  margin-right: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
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
      background: ${({ theme }) => theme.colors.white};
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
  color: ${({ theme }) => theme.colors.black};
  font-size: 23px;
  text-transform: uppercase;
  font-weight: 500;
  transition: color 2s;

  &:hover {
    color: ${({ theme }) => theme.colors.green};
    border-bottom: 2px solid ${({ theme }) => theme.colors.green};

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
      border-bottom: unset;
      font-weight: 600;
    }
  }

  ${({ secondOption }) =>
    secondOption &&
    css`
      font-weight: 800;
      color: ${({ theme }) => theme.colors.white};
      transition: color 2s;

      &:hover {
        color: ${({ theme }) => theme.colors.green};
        border-bottom: none;
      }
    `}
`;

export const HamburgerButton = styled.button`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: unset;
    background: none;
    border: none;
    padding: 0;
  }
`;

export const Hamburger = styled.img`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: block;
    margin: 10px;
    width: 40px;
    height: 50px;
  }
`;
