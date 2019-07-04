import React from 'react';
import Container from '../components/layout/Container';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '../../public/static/main.css';

library.add(fab);

export default () => {
  return (
    <Container>
      <div>&nbsp;</div>
    </Container>
  );
};
