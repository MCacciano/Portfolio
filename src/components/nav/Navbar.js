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
  ActiveLinkOverlay,
} from '../_styled/nav/StyledNavbar';
import { VR, HR } from '../_styled/shared/shared';
import { hrRight, hrLeft } from '../_styled/shared/keyframes';

export default () => {
  return (
    <Navbar>
      <SocialNav>
        <NavItem>
          <SocialLink>
            <FA className="hover-twitch" icon={['fab', 'twitch']} />
          </SocialLink>
        </NavItem>
        <NavItem>
          <SocialLink>
            <FA className="hover-twitter" icon={['fab', 'twitter']} />
          </SocialLink>
        </NavItem>
        <NavItem>
          <SocialLink>
            <FA className="hover-github" icon={['fab', 'github']} />
          </SocialLink>
        </NavItem>
      </SocialNav>
      <HR hr={hrLeft} gridArea="vr-left" width="120%" margin="0 120% 0 0" />
      <VR gridArea="vr-left" />
      <Brand to="/">Michael Cacciano</Brand>
      <VR gridArea="vr-right" />
      <HR hr={hrRight} gridArea="vr-right" width="120%" margin="0 0 0 120%" />
      <Nav>
        <NavItem>
          <ActiveLinkOverlay />
          <NavLink>About</NavLink>
        </NavItem>
        <NavItem>
          <ActiveLinkOverlay />
          <NavLink>Work</NavLink>
        </NavItem>
        <NavItem>
          <ActiveLinkOverlay />
          <NavLink>Contact</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
