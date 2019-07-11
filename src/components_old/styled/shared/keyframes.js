import { keyframes } from 'styled-components';

export const activeLinkOverlay = keyframes`
  from {
    max-width: 0;
  }
  
  to {
    max-width: 90%;
  }
`;

export const openRight = keyframes`
  from {
    max-width: 0;
  }

  to {
    max-width: 90%;
  }
`;

export const openLeft = keyframes`
  from {
    margin: 5px 0 0 82.5%;
    max-width: 0;
  }

  to {
    margin: 5px 0 0 17.5%;
    max-width: 65%;
  }
`;

export const grow = keyframes`
  from {
    max-height: 0;
  }

  to {
    max-height: 100%;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const socialFadeInRight = keyframes`
  from {
    opacity: 0;
    margin-right: 6rem;
  }
  
  to {
    opacity: 1;
    margin-right: 4rem;
  }
`;

export const navFadeInLeft = keyframes`
  from {
    opacity: 0;
    margin-left: 6rem;
  }
  
  to {
    opacity: 1;
    margin-left: 4rem;
  }
`;

export const hrRight = keyframes`
  from {
    margin: 0 0 0 0;
    max-width: 0;
  }

  to {
    margin: 0 0 0 120%;
    max-width: 120%;
  }
`;

export const hrLeft = keyframes`
  from {
    margin: 0 0 0 0;
    max-width: 0;
  }

  to {
    margin: 0 120% 0 0;
    max-width: 120%;
  }
`;
