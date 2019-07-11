import React from 'react';

import Navbar from '../../navbar/navbar.component';

import { BaseLayoutStyled } from './base-layout.styles';

const BaseLayout = ({ children }) => (
  <BaseLayoutStyled>
    <Navbar />
    {children}
  </BaseLayoutStyled>
);

export default BaseLayout;
