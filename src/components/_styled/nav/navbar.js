import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import {
  openRight,
  openLeft,
  socialFadeInRight,
  navFadeInLeft,
} from '../../_styled/shared/keyframes';

export const Navbar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 50px max-content 50px 1fr;
  grid-template-areas: 'social hr-left brand hr-right nav';
  justify-items: center;
  align-items: center;
  height: 15vh;
`;

export const Brand = styled(Link)`
  grid-area: 'brand';
  font-size: 2rem;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  color: #674585;

  &:active {
    color: #674585;
  }

  &:visited {
    color: #674585;
  }

  &::before {
    content: '';
    margin: 0 0 5px 20%;
    display: block;
    width: 60%;
    height: 1px;
    background: #000000;
    padding: -5px 0;
    animation: 1s linear forwards ${openRight};
  }

  &::after {
    content: '';
    margin: 5px 0 0 90%;
    display: block;
    width: 90%;
    height: 1px;
    background: #000000;
    animation: 0.6s linear forwards ${openLeft};
  }
`;

// NAV
export const Nav = styled.ul`
  grid-area: 'nav';
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  list-style: none;
  justify-self: start;
  margin-left: 4rem;
  opacity: 0;
  animation: 0.3s linear 1s forwards ${navFadeInLeft};
`;

export const NavItem = styled.li`
  cursor: pointer;
`;

// TODO: This is going to need to be a gatsby <Link>
export const NavLink = styled(Link)`
  display: block;
  height: 100%;
  text-decoration: none;
  color: #000000;
  font-size: 11px;
  font-weight: 600;
  margin: 0 1rem;

  &:visited {
    color: #000000;
  }
`;

// SOCIAL NAV
export const SocialNav = styled(Nav)`
  grid-area: 'social';
  justify-self: end;
  margin-left: 0;
  margin-right: 4rem;
  opacity: 0;
  animation: 0.3s linear 1s forwards ${socialFadeInRight};
`;

// TODO: This is going to need to be a gatsby <Link>
export const SocialLink = styled(NavLink)`
  font-size: 1.5rem;
  margin: 0 0 0 2rem;

  .hover {
    &-twitter {
      padding: 3px;

      &:hover {
        color: #1da1f2;
        border: 1px #1da1f2 solid;
        border-radius: 50%;
      }
    }

    &-github {
      &:hover {
        color: #ffffff;
        background: #000000;
        border: 1px #000000 solid;
        border-radius: 50%;
      }
    }
  }
`;
