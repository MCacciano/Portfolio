import React from 'react';
import { StyledContainer } from '../_styled/layout/container';
import Navbar from '../nav/Navbar';

export default ({ children }) => (
  <StyledContainer>
    <Navbar />
    {children}
  </StyledContainer>
);
