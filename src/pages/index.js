import React from 'react';

// components
import BaseLayout from '../components/layout/base-layout/base-layout.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import '../../static/main.css';

library.add(fab);

export default () => {
  return <BaseLayout>placeholder</BaseLayout>;
};
