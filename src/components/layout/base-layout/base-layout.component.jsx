import React, { useState } from 'react';

import Navbar from '../../navbar/navbar.component';

import { BaseLayoutStyled } from './base-layout.styles';

const BaseLayout = ({ children }) => {
  return (
    <BaseLayoutStyled>
      <Navbar />
    </BaseLayoutStyled>
  );
};

export default BaseLayout;
