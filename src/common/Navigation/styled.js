import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavigation = styled.nav`
position:fixed;
top:0;
right:0;
left:0;
background: rgba(255, 255 , 255 , 0.3);
z-index:1;
`;

export const NavigationInner = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;

`;
export const NameRestaurant = styled.h2`
font-family: 'Style Script', cursive;
font-size:46px;
margin:0px;
color: black;

${({colorName}) => colorName && css`
color:white
`}
`;

export const TypeName = styled.p`
font-family: 'IBM Plex Serif', serif;
font-size:16px;
margin-top:-10px;


${({colorRest}) => colorRest && css`
color:white
`}
`;


export const ListItem = styled.li`
list-style-type: none;
text-transform: uppercase;
font-size:20px;
margin-right:50px;

`;

export const NavigationList = styled.ul`
display:flex;
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
  
  &:hover {
    color:blue;
    border-bottom: 2px solid blue;
  }

  ${({secondary }) => secondary && css`
  font-weight:800;
  color: white;
  transition: color 1s;

  &:hover {
    color:grey;
    border-bottom:none;
  }
  `}
`;
