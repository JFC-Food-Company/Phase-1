import React, { useState } from "react";
import { Navigation, LogoFade, NaviLink } from "../styles/navbar_style";

import Logo from "../images/Logo-Placeholder.png";
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Navibar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navigation dark expand="sm">
      <NavbarBrand>
        <LogoFade>
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px red solid",
            }}
          />
        </LogoFade>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle
              style={{
                color: "black",
              }}
              nav
              caret
            >
              Menus
            </DropdownToggle>
            <DropdownMenu right>
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
        </Nav>
      </Collapse>
    </Navigation>
  );
};

export default Navibar;
