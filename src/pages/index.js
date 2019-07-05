import React from 'react';
import Container from '../components/layout/Container';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

export default () => {
  return (
    <Container>
      <div>&nbsp;</div>
    </Container>
  );
};
