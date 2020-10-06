import Styled from "styled-components";
import { LogoFocusIn } from "./keyframes";
import { Navbar } from "reactstrap";
import { NavLink } from "react-router-dom";

export const LinkGray = Styled.a`
text-align: center;
text-decoration: none;
justify-content: center;
color: gray;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
width: 100%;
font-family: 'Rubik', sans-serif;
font-weight: 100;
padding-top: 15%;
`;

export const LinkBlack = Styled.a`
text-align: center;
text-decoration: none;
justify-content: center;
color: black;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
width: 100%;
font-family: 'Rubik', sans-serif;
font-weight: 100;
padding-top: 7%;

    &::after {
    content: " ";
    display: block;
    width: 0;
    height: 2px;
    background: black;
    transition: width .2s;
    margin: 0 auto;
    }

    &:hover::after {
    width: 100%;
    transition: width .2s;
    margin: 0 auto;
    }
`;

export const Navigation = Styled(Navbar)`
background-color: hsla(0, 0%, 100%, 0.85);
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-evenly;
z-Index: 10;
border: 1px red solid;
transition: box-shadow 0.2s ease;
        &:hover {
          box-shadow: 0 6px 4px rgba(0, 0, 0, 0.18);
        }
`;

export const NaviLink = Styled(NavLink)`
display: flex;
text-align: center;
text-decoration: none;
justify-content: center;
color: black;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
width: 100%;
font-family: 'Rubik', sans-serif;
font-weight: 100;
padding-top: 7%;

    &::after {
    content: " ";
    display: block;
    width: 0;
    height: 2px;
    background: black;
    transition: width .2s;
    margin: 0 auto;
    }

    &:hover::after {
    width: 100%;
    transition: width .2s;
    margin: 0 auto;
    }
`;

//animations

export const LogoFade = Styled.div`
display:flex;
animation: ${LogoFocusIn} 1s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
`;
