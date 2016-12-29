import '../node_modules/gsg-common-style/less/badge/index.less';

import React, { PropTypes } from 'react';

export default class GSGBadge extends React.Component {
  render() {
    return(
      <span className="badge">{this.props.children}</span>
    );
  }
};
