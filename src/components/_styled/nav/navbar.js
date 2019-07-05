import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import {
  openRight,
  openLeft,
  socialFadeInRight,
  navFadeInLeft,
  activeLinkOverlay,
  hrRight,
} from '../../_styled/shared/keyframes';

import { colors } from '../shared/shared';

const { brandColor, twitterBlue, githubBlack, twitchPurple } = colors;

export const Navbar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 50px max-content 50px 1fr;
  /* grid-template-columns: 1fr max-content 1fr; */
  grid-template-areas: 'social vr-left brand vr-right nav';
  /* grid-template-areas: 'social brand nav'; */
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
  color: ${brandColor};

  &:active {
    color: ${brandColor};
  }

  &:visited {
    color: ${brandColor};
  }

  &::before {
    content: '';
    margin: 0 0 5px 5%;
    width: 90%;
    display: block;
    max-width: 0;
    height: 1px;
    background: #000000;
    padding: -5px 0;
    animation: 0.6s linear forwards ${openRight};
  }

  &::after {
    content: '';
    margin: 5px 0 0 17.5%;
    display: block;
    max-width: 0;
    width: 65%;
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
  position: relative;
  margin: 0 1rem;
  text-align: center;
  min-width: 3rem;
  transition: all 0.5s;
`;

export const ActiveLinkOverlay = styled.div`
  display: block;
  position: absolute;
  max-width: 0;
  width: 100%;
  height: 100%;
  background: ${brandColor};
  z-index: -1;
  opacity: 0.8;
`;

export const NavLink = styled(Link)`
  display: block;
  height: 100%;
  text-decoration: none;
  color: #000000;
  font-size: 13px;
  font-weight: 600;

  &:visited {
    color: #000000;
  }

  &:hover {
    ${ActiveLinkOverlay}:hover {
      animation: 0.3s linear forwards ${activeLinkOverlay};
    }
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

export const SocialLink = styled(NavLink)`
  font-size: 1.5rem;
  margin: 0 0 0 2rem;

  .hover {
    &-twitter {
      width: 30px;
      padding: 5px;
      font-size: 1.8rem;
      color: ${twitterBlue};
      transition: all 0.3s;
      border-radius: 30%;

      &:hover {
        box-shadow: 0px 0 px 10px ${twitterBlue};
        background: ${twitterBlue};
        border-radius: 50%;
        color: #ffffff;
      }
    }

    &-github {
      color: ${githubBlack};
      background: #ffffff;
      transition: all 0.3s;
      border-radius: 30%;

      &:hover {
        color: #ffffff;
        background: ${githubBlack};
        border: thin solid ${githubBlack};
        box-shadow: 0px 0 px 10px ${githubBlack};
        border-radius: 50%;
      }
    }

    &-twitch {
      width: 30px;
      padding: 5px;
      font-size: 1.8rem;
      color: ${twitchPurple};
      transition: all 0.3s;
      border-radius: 30%;

      &:hover {
        box-shadow: 0px 0 px 10px ${twitchPurple};
        background: ${twitchPurple};
        border-radius: 50%;
        color: #ffffff;
      }
    }
  }
`;
