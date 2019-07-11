import React from 'react';

import {
  NavbarNav,
  NavbarLinks,
  NavbarBrand,
  NavbarItem,
  NavbarLink,
  NavbarLinkOverlay,
} from './navbar.styles';

const Navbar = () => (
  <NavbarNav>
    <NavbarBrand>
      <NavbarLink to="/" isBrand>
        Michael Cacciano
      </NavbarLink>
    </NavbarBrand>
    <NavbarLinks>
      <NavbarItem>
        <NavbarLink to="/about">
          ABOUT
          <NavbarLinkOverlay />
        </NavbarLink>
      </NavbarItem>
      <NavbarItem>
        <NavbarLink to="/work">
          WORK
          <NavbarLinkOverlay />
        </NavbarLink>
      </NavbarItem>
      <NavbarItem>
        <NavbarLink to="/contact">
          CONTACT
          <NavbarLinkOverlay />
        </NavbarLink>
      </NavbarItem>
    </NavbarLinks>
  </NavbarNav>
);

export default Navbar;
