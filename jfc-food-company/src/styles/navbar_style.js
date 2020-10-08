import Styled from "styled-components";
import { LogoFocusIn } from "./keyframes";
import { Navbar, Nav, DropdownToggle } from "reactstrap";
import { NavLink } from "react-router-dom";

export const JFCLogo = Styled.img`
width: 50%;
cursor: pointer;
`;

export const MenusText = Styled.p`
display:flex;
color:black;
align-items: center;
`;

export const Navigation = Styled(Navbar)`
background-color: hsla(0, 0%, 100%, 0.85);
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-evenly;
font-family: 'Rubik', sans-serif;
border: 2px lightgray solid;
transition: box-shadow 0.2s ease;
        &:hover {
          box-shadow: 0 6px 4px rgba(0, 0, 0, 0.18);
        }
`;

export const NavLinkBar = Styled(Nav)`
color:black;
width: 100%;
padding-top: 2%;
display: flex;
justify-content: space-between;
font-size: 100%;
font-weight:600;
`;

export const MenusToggle = Styled(DropdownToggle)`
color:black;
padding: 0;
`;

export const NaviLink = Styled(NavLink)`
display: flex;
color: black;
cursor: pointer;
width: 100%;

`;

//animations

export const LogoFade = Styled.div`
display:flex;
animation: ${LogoFocusIn} 1s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
`;
