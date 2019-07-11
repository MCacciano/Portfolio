import React, { useState } from 'react';

import WithActive from './with-active.component';

import {
  NavbarNav,
  NavbarLinks,
  NavbarBrand,
  NavbarItem,
  NavbarLink,
} from './navbar.styles';

export const WithActiveNavbarLink = WithActive(NavbarLink);

const Navbar = () => {
  // state = {
  //   isActive: true,
  // };

  const [isActive, setIsActive] = useState(false);

  return (
    <NavbarNav>
      <NavbarBrand>
        <NavbarLink to="/" state={{ brand: true }}>
          Michael Cacciano
        </NavbarLink>
      </NavbarBrand>
      <NavbarLinks>
        <NavbarItem>
          <WithActiveNavbarLink
            to="/about"
            state={{ title: 'ABOUT', setActive: setIsActive }}
            isActive={isActive}
          />
        </NavbarItem>
        <NavbarItem>
          <WithActiveNavbarLink
            to="/work"
            state={{ title: 'WORK', setActive: setIsActive }}
            isActive={isActive}
          />
        </NavbarItem>
        <NavbarItem>
          <WithActiveNavbarLink
            to="/contact"
            state={{ title: 'CONTACT', setActive: setIsActive }}
            isActive={isActive}
          />
        </NavbarItem>
      </NavbarLinks>
    </NavbarNav>
  );
};

export default Navbar;
