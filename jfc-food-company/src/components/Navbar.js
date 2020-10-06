import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Navigation,
  LogoFade,
  LinkBlack,
  LinkGray,
} from "../styles/navbar_style";

import Logo from "../media/images/logo/logo.png";
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
  Button,
} from "reactstrap";

const Navibar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const history = useHistory();
  const route1 = () => {
    history.push("/about_our_mission");
  };
  const route2 = () => {
    history.push("/main");
  };
  const route3 = () => {
    history.push("/about_us");
  };

  return (
    <Navigation light expand="md">
      <NavbarBrand style={{ width: "20%" }}>
        <LogoFade>
          <img
            src={Logo}
            alt="logo"
            style={{ width: "100%", cursor: "pointer" }}
            onClick={route2}
          />
        </LogoFade>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav
          className="mr-auto"
          navbar
          style={{
            width: "100%",
            textAlign: "center",
            display: "flex",
            alignContent: "center",
          }}
        >
          <UncontrolledDropdown nav inNavbar style={{ width: "90%" }}>
            <DropdownToggle nav style={{ color: "black" }}>
              <LinkBlack>My Community</LinkBlack>
            </DropdownToggle>
            <DropdownMenu left>
              <DropdownItem>Community Coaching</DropdownItem>
              <DropdownItem>Community Outreach</DropdownItem>
              <DropdownItem>Let's Talk about It!</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <LinkGray
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.mappingpoliceviolence.org"
                >
                  Mapping Police Violence
                </LinkGray>
              </DropdownItem>
              <DropdownItem>
                <LinkGray
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://sundown.tougaloo.edu/content.php?file=sundowntowns-whitemap.html "
                >
                  Sundown Towns
                </LinkGray>
              </DropdownItem>
              <DropdownItem>
                <LinkGray
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dsl.richmond.edu/panorama/redlining/#loc=10/47.535/-122.329&city=seattle-wa&text=about&adviewer=sidebar"
                >
                  Mapping Inequality (Redlining)
                </LinkGray>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar style={{ width: "100%" }}>
            <DropdownToggle nav style={{ color: "black" }}>
              <LinkBlack>Knowing Our History</LinkBlack>
            </DropdownToggle>
            <DropdownMenu left>
              <DropdownItem>Uncovered Truths</DropdownItem>
              <DropdownItem>In the Spotlight</DropdownItem>
              <DropdownItem>The Psychological Effects of Racism</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <LinkGray
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.blackpast.org/"
                >
                  Blackpast.org
                </LinkGray>
              </DropdownItem>
              <DropdownItem>
                <LinkGray
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.zinnedproject.org/about/"
                >
                  Zinn Education Project
                </LinkGray>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar style={{ width: "100%" }}>
            <DropdownToggle nav style={{ color: "black" }}>
              <LinkBlack>Take Action</LinkBlack>
            </DropdownToggle>
            <DropdownMenu left>
              <DropdownItem>Targeting Teens</DropdownItem>
              <DropdownItem>
                Cultural Sensitivity &amp; Communication
              </DropdownItem>
              <DropdownItem>Know Your Rights</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <LinkGray
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.aclu.org/issues/criminal-law-reform/reforming-police/aclu-apps-record-police-conduct"
                >
                  Mobile Justice
                </LinkGray>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <NavItem style={{ display: "flex", alignContent: "center" }}>
            <LinkBlack
              style={{ color: "gray", justifyContent: "center" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.yourblackfriend.org/"
            >
              Your Black Friend
            </LinkBlack>
          </NavItem>

          <UncontrolledDropdown nav inNavbar style={{ width: "100%" }}>
            <DropdownToggle nav style={{ color: "black" }}>
              <LinkBlack> Let's Discuss</LinkBlack>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Video Conversations</DropdownItem>
              <DropdownItem>Ask Advice</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar style={{ width: "100%" }}>
            <DropdownToggle nav style={{ color: "black" }}>
              <LinkBlack> Who We Are</LinkBlack>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={route1}>
                Vision &amp; Mission Statement
              </DropdownItem>
              <DropdownItem onClick={route3}>
                The Humans Behind HUEmanistic
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar style={{ width: "100%" }}>
            <DropdownToggle nav style={{ color: "black" }}>
              <LinkBlack>Get Involved</LinkBlack>
            </DropdownToggle>
            <DropdownMenu left>
              <DropdownItem>Volunteer</DropdownItem>
              <DropdownItem>Donate</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <Button color="secondary">Donate</Button>
      </Collapse>
    </Navigation>
  );
};

export default Navibar;
