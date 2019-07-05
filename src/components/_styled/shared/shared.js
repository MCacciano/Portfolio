import styled from 'styled-components';
import { grow } from './keyframes';

export const colors = {
  brandColor: '#674585',
  twitterBlue: '#1da1f2',
  githubBlack: '#242A2E',
  twitchPurple: '#4b367b',
};

export const VR = styled.div`
  grid-area: ${props => props.gridArea};
  width: 2px;
  max-height: 0;
  height: 15%;
  background: #000000;
  animation: 1.2s linear 0.5s forwards ${grow};
`;

export const HR = styled.div`
  grid-area: ${props => props.gridArea};
  margin: ${props => props.margin};
  height: 1px;
  max-width: 0;
  width: ${props => props.width};
  background: #000000;
  animation: 0.5s linear 0.7s forwards ${props => props.hr};
`;
