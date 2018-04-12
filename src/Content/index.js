import React, { Fragment } from 'react';

import ContentContainer from './ContentContainer';

const Content = ({ children }) => (
  <Fragment>
    <ContentContainer />
    {children}
  </Fragment>
);

export default Content;
