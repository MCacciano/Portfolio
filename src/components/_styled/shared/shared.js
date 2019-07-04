import styled from 'styled-components';
import { grow } from './keyframes';

export const HR = styled.div`
  grid-area: ${props => props.gridArea};
  width: 5px;
  max-height: 0;
  height: 20%;
  background: #000000;
  animation: 1.2s linear 0.6s forwards ${grow};
`;
