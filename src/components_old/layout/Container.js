import React from 'react';
import { StyledContainer } from '../styled/layout/StyledContainer';
import Navbar from '../nav/Navbar';

export default ({ children }) => (
  <StyledContainer>
    <Navbar />
    {children}
  </StyledContainer>
);
