import { keyframes } from 'styled-components';

export const openRight = keyframes`
  from {
    max-width: 0;
  }

  to {
    max-width: 100%;
  }
`;

export const openLeft = keyframes`
  from {
    margin: 5px 0 0 90%;
    max-width: 0;
  }

  to {
    margin: 5px 0 0 5%;
    max-width: 90%;
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
