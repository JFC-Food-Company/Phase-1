import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navigation,
  LogoFade,
  NaviLink,
  NavLinkBar,
  JFCLogo,
  MenusToggle,
  MenusText,
} from "../styles/navbar_style";

import Logo from "../images/Logo-Placeholder.png";
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Navibar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navigation dark expand="lg">
      <NavbarBrand>
        <LogoFade>
          <Link to="/">
            <JFCLogo src={Logo} />
          </Link>
        </LogoFade>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <NavLinkBar className="mr-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <MenusToggle nav>
              <MenusText>Menus</MenusText>
            </MenusToggle>
            <DropdownMenu left>
              <DropdownItem>Chef's Choice</DropdownItem>
              <DropdownItem>Keto</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Build A Meal</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NaviLink to="/catering">Meal Plans</NaviLink>
          </NavItem>
          <NavItem>
            <NaviLink to="/catering">Catering</NaviLink>
          </NavItem>
          <NavItem>
            <NaviLink to="/about">About Us</NaviLink>
          </NavItem>
        </NavLinkBar>
      </Collapse>
    </Navigation>
  );
};

export default Navibar;
