import React, { Component, Fragment } from 'react';

import Layout from './Layout';

class ContentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  };

  render() {
    return(
      <Fragment>
        <Layout />
      </Fragment>
    );
  };
}

export default ContentContainer;
