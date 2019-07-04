import React from 'react';

import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import {
  Navbar,
  Brand,
  Nav,
  NavItem,
  NavLink,
  SocialNav,
  SocialLink,
} from '../_styled/nav/navbar';
import { HR } from '../_styled/shared/shared';

export default () => {
  return (
    <Navbar>
      <SocialNav>
        <NavItem>
          <SocialLink>
            <FA className="hover-github" icon={['fab', 'github']} />
          </SocialLink>
        </NavItem>
        <NavItem>
          <SocialLink>
            <FA className="hover-twitter" icon={['fab', 'twitter']} />
          </SocialLink>
        </NavItem>
        {/* <NavItem>
          <SocialLink>
            <SocialIcon>
              <FA icon={['fab', 'github']} />
            </SocialIcon>
          </SocialLink>
        </NavItem> */}
      </SocialNav>
      <HR gridArea="hr-left" />
      <Brand to="/">Mozzey Magick</Brand>
      <HR gridArea="hr-right" />
      <Nav>
        <NavItem>
          <NavLink>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Work</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Contact</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
