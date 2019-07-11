import React from 'react';

import {
  NavbarLinkOverlay,
  ActiveNavbarLinkOverlay,
  NavbarLink,
} from './navbar.styles';

const WithActive = WrappedComponent => ({ isActive, state, ...otherProps }) => {
  // console.log(otherProps);
  return isActive ? (
    <WrappedComponent style={{ color: '#FFFFFF' }} {...otherProps}>
      {state.title}
      <ActiveNavbarLinkOverlay />
    </WrappedComponent>
  ) : (
    <WrappedComponent {...otherProps}>
      {state.title}
      <NavbarLinkOverlay />
    </WrappedComponent>
  );
};

export default WithActive;
