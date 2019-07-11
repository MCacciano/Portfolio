import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { WithActiveNavbarLink } from './navbar.component';

// $githubBlack #242a2e;

/************** css **************/
const brandLinkStyles = css`
  color: #242a2e;
`;

const navLinkStyles = css`
  color: #242a2e;

  &:hover {
    color: ${props => (props.brand ? '#242a2e' : '#ffffff')};
  }
`;

/************** style functions **************/
const getLinkStyles = props => {
  // if (props.state.brand) {
  //   return brandLinkStyles;
  // } else {
  return navLinkStyles;
  // }
};

/************** styled **************/
export const NavbarNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'brand nav';
  align-items: center;
  height: 10vh;
  margin: 0 10vw;
`;

export const NavbarBrand = styled.h2`
  grid-area: 'brand';
  justify-self: start;
  margin-left: 2rem;
`;

export const NavbarLinks = styled.ul`
  grid-area: 'nav';
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavbarItem = styled.li`
  list-style: none;
  height: 50px;
  width: 120px;
  line-height: 50px;
  position: relative;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  display: block;
  width: 100%;
  text-align: center;
  ${getLinkStyles};
`;

export const NavbarLinkOverlay = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background: #242a2e;
  top: 0;
  z-index: -1;
  max-width: ${({ isActive }) => (isActive ? 100 : 0)};
  transition: all 0.3s;
  transform: skewX(-30deg);

  ${NavbarLink}:hover & {
    max-width: 100%;
  }
`;

export const ActiveNavbarLinkOverlay = styled(NavbarLinkOverlay)`
  max-width: 100%;
`;
