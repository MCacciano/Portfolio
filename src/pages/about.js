import React from 'react';

import BaseLayout from '../components/layout/base-layout/base-layout.component';

export default props => {
  console.log(props.location.state);
  return <BaseLayout>ABOUT</BaseLayout>;
};
